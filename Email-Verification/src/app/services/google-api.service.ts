import { Injectable } from "@angular/core";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";
const oAuthConfig:AuthConfig ={
    issuer:'https://accounts.google.com',
    redirectUri:'http://localhost:4200/dashboard',
    strictDiscoveryDocumentValidation:false,
    clientId:'888629184333-dnfnq6i4ikf443lrlgbur0sa7c26o3i0.apps.googleusercontent.com',
    scope:'openid profile email'
}
@Injectable({
    providedIn:'root'
})
export class GoogleApiService {
   
    constructor(private oAuthSrevice:OAuthService) { 
      
    }
    login(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
          this.oAuthSrevice.configure(oAuthConfig);
          this.oAuthSrevice.logoutUrl = 'https://accounts.google.com/logout';
          this.oAuthSrevice.loadDiscoveryDocument().then(() => {
            this.oAuthSrevice.tryLoginImplicitFlow().then(() => {
              if (!this.oAuthSrevice.hasValidAccessToken()) {
                this.oAuthSrevice.initLoginFlow();
              } else {
                this.oAuthSrevice.loadUserProfile().then((user) => {
                  console.log(JSON.stringify(user));
                  resolve(user); // Resolve the promise with the user data
                }).catch((error) => {
                  reject('Error loading user profile');
                });
              }
            }).catch((error) => {
              reject('Error trying implicit flow');
            });
          }).catch((error) => {
            reject('Error loading discovery document');
          });
        });
      }
     logout(){
        this.oAuthSrevice.logOut();
     }
}