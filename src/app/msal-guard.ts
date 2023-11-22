import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MsalService } from "@azure/msal-angular";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MsalGuard implements CanActivate{
    constructor(private msalService: MsalService, private router: Router){ }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
          var login = this.msalService.instance.getActiveAccount();
          if(login == null){
            localStorage.removeItem('loggedufullname');
            this.router.navigate(['']);
            return false;
          }else{
            this.getProfile(login?.localAccountId??'');
            this.msalService.instance.setActiveAccount(login);
            localStorage.setItem('loggedufullname', login.idTokenClaims?.name??'');
          }
    
        return true;
      }
    
      async getProfile(userid:string){

        try{
     
         if(userid != ''){
         //get access token
         const loginRequest = {
           scopes: ["openid", "profile", "User.Read"]
         };
     
         var access = await this.msalService.instance.acquireTokenSilent(loginRequest);
       
     
         const headers = new Headers({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${(await access).accessToken}`
         })
     
         const response = await fetch('https://graph.microsoft.com/v1.0/users/' + userid, {
                   headers: headers,
         }).then(function(response) {
           return response.json();
         }).then(function(data) {
           console.log(data); 
     
           if(data == null){
             localStorage.removeItem('loggedudesignation');
           }else{
             localStorage.setItem('loggedudesignation', data.jobTitle);
           }
         });
       }
         }catch(error){
           console.log("[AuthService.init] Failed to handleRedirectPromise()", error)
         }
       }
}
