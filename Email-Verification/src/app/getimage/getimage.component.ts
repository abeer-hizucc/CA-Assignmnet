import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, Subject, Subscription, finalize } from 'rxjs';
import { Router } from '@angular/router';
import { OCRResponse } from '../models/OCRRsponse.model';
import { ResponseService } from '../services/ocrresponse.service';
import { WebcamImage } from 'ngx-webcam';
@Component({
  selector: 'app-getimage',
  templateUrl: './getimage.component.html',
  styleUrls: ['./getimage.component.css']
})
export class GetimageComponent implements OnInit {
  @Input()
  requiredFileType!:string;

  fileName = '';
  uploadProgress!:number;
  uploadSub!: Subscription | null;
  isWebcamAvailable:boolean=false;
  streamInfo:any;
  permissionAvailable:boolean=false;
  public webcamImage: WebcamImage|null = null; 
  private trigger: Subject<void> = new Subject<void>();
  constructor(private http: HttpClient, private router:Router,private ocrResponse:ResponseService) {}
  ngOnInit(): void {
    if(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices){
      navigator.mediaDevices.enumerateDevices().then(devices=>{
        devices.forEach(device=>{
          if(device.kind === 'videoinput'){
            this.isWebcamAvailable=true;
          }
          else{
            console.error(device.kind);
          }
        })
      })
    }
    // navigator.mediaDevices.getUserMedia().catch((err)=>{
    //   if(!err.name.includes("NotFoundError")){
    //     this.isWebcamAvailable=true;
    //     console.log("Webcam is available");
    //   }
    // })
  }

  onFileSelected(event:any) {
      const file:File = event.target.files[0];
    
      if (file) {
          this.fileName = file.name;
          const formData = new FormData();
          formData.append("image", file);

          const upload$ = this.http.post("http://localhost:9090/perform-ocr", formData, {
              reportProgress: true,
              observe: 'events'
          })
          .pipe(
              finalize(() => this.reset())
          );
        
          this.uploadSub = upload$.subscribe(event => {
            if (event.type == HttpEventType.UploadProgress) {
              if(event.total){
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
      
            }if (event.type == HttpEventType.Response) {
              const response:OCRResponse = event.body as OCRResponse;
              this.ocrResponse.setResponseData(response);
              console.log('Response Data:', response);
              
              this.router.navigate(['/eKYCForm']);
            }
          })
      }
  }

cancelUpload() {
  this.uploadSub?.unsubscribe();
  this.reset();
}

reset() {
  this.uploadProgress = 0;
  this.uploadSub = null;
}
checkPermission(){
  navigator.mediaDevices.getUserMedia({
    video:{
      width:500,
      height:500
    }}
  ).then((stream)=>{
    this.streamInfo = stream;
    this.permissionAvailable=true;
  }
  ).catch((err)=>{
    if(err.name.includes("NotFoundError")){
      alert("No device found");
    }
    else if(err.name.includes("NotAllowedError")){
      alert("Permission not granted");
    }
    else if(err.name.includes("NotReadableError")){
      alert("Cannot access your device");
    }
    else if(err.name.includes("OverconstrainedError")){
      alert("Video resolution is not supported");
    }
    else if(err.name.includes("TypeError")){
      alert("Something went wrong");
    }
    else{
      alert("Something went wrong");
    }
  });
}

triggerSnapshot(): void { 
  this.trigger.next(); 
 } 
 handleImage(webcamImage: WebcamImage): void { 
  console.info('Saved webcam image', webcamImage); 
  this.webcamImage = webcamImage; 
 } 
 public get triggerObservable(): Observable<void> { 
  return this.trigger.asObservable(); 
 }
}
