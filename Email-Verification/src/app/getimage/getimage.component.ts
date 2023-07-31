import { Component, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription, finalize } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  onFileSelected(event:any) {
      const file:File = event.target.files[0];
    
      if (file) {
          this.fileName = file.name;
          const formData = new FormData();
          formData.append("thumbnail", file);

          const upload$ = this.http.post("/api/thumbnail-upload", formData, {
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
