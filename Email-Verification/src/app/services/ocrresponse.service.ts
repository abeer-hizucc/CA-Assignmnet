import { Injectable } from '@angular/core';
import { OCRResponse } from '../models/OCRRsponse.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private responseData: OCRResponse | null = null;

  setResponseData(response: OCRResponse) {
    this.responseData = response;
  }

  getResponseData(): OCRResponse | null {
    return this.responseData;
  }
}