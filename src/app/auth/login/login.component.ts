import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {




  constructor(private router: Router,
    private msalService: MsalService,
    private route: ActivatedRoute,) {


     }

  ngOnInit(): void {

  }

  /**
   * Form submit
   */
  onSignIn() {
    // Navigate to the dashboard
    this.login();
  }

  async login(){
    var rest = await this.msalService.instance.handleRedirectPromise();
    var authRes = await this.msalService.loginPopup().subscribe((val) =>{ 
      console.log(val.account);
      this.msalService.instance.setActiveAccount(val.account)
      if(val.account != null) this.router.navigate(['/dashboard']);
    });
    
  }



}
