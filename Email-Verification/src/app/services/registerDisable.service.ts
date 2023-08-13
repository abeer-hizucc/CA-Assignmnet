import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedButtonService {
  private buttonDisabled = false;

  getButtonDisabled(): boolean {
    return this.buttonDisabled;
  }

  setButtonDisabled(disabled: boolean): void {
    this.buttonDisabled = disabled;
  }
}