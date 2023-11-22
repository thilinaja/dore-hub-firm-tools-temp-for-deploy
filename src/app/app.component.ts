import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dore Hub Firm-Tools';
  constructor(private msalService: MsalService, private router: Router){ }

  ngOnInit(): void {
    this.signinfunc()
  }

  async signinfunc(){
    try {
      var rest = await this.msalService.instance.handleRedirectPromise();
      if(rest != null && rest.account != null){
        await this.msalService.instance.setActiveAccount(rest.account)
        if(this.isLoggedIn()){
          this.navigateHome();
        }
      }
    }catch(error){
      console.log("[AuthService.init] Failed to handleRedirectPromise()", error)
    }
  }

  isLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() != null
  }

  navigateHome() {
    this.router.navigate(['/dashboard']);
  }
}
