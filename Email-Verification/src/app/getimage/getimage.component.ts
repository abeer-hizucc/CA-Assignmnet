import { Component, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription, finalize } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getimage',
  templateUrl: './getimage.component.html',
  styleUrls: ['./getimage.component.css']
})
export class GetimageComponent {
  @Input()
  requiredFileType!:string;

  fileName = '';
  uploadProgress!:number;
  uploadSub!: Subscription | null;

  constructor(private http: HttpClient, private router:Router) {}

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
}
