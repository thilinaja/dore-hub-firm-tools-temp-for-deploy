import { DOCUMENT } from '@angular/common';
import {Component, EventEmitter, Inject, NgZone, Output} from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  url: string | undefined
  element: any;
  valueset: any;
  cookieValue: any;
  mode: string | undefined;

  currentTime: string | undefined;
  currentDate: string | undefined;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  loggedufullname = '';
  loggedudesignation = '';

  constructor(@Inject(DOCUMENT) private document: any, private authService: AuthenticationService, private router: Router,private ngZone: NgZone,  private msalService: MsalService) {
    this.loggedufullname = localStorage.getItem('loggedufullname')??'';
    this.loggedudesignation = localStorage.getItem('loggedudesignation')??'';
    if(this.loggedudesignation == 'null'){
      this.loggedudesignation = 'N/A';
    }
  }

  ngOnInit(): void {
    this.element = document.documentElement;
    this.updateDateTime();
    // Update the time and date every second
    setInterval(() => {
      this.updateDateTime();
    }, 1000);

    // Check if a mode is saved in LocalStorage
   // const savedMode = localStorage.getItem('preferredMode');

    //if (savedMode) {
     // this.mode = savedMode;
   // } else {
    //  this.mode = 'light'; // Set your default mode here
    //}

    //this.changeMode(this.mode);
  }
  updateDateTime(): void {
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    this.currentTime = now.toLocaleTimeString('en-US', options as Intl.DateTimeFormatOptions);
    this.currentDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  windowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById('back-to-top') as HTMLElement).style.display = "block";
      document.getElementById('page-topbar')?.classList.add('topbar-shadow')
    } else {
      (document.getElementById('back-to-top') as HTMLElement).style.display = "none";
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow')
    }
  }

  /**
* Toggle the menu bar when having mobile screen
*/
  toggleMobileMenu(event: any) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
 * Topbar Light-Dark Mode Change
 */
  changeMode(mode: string) {
    this.mode = mode;
    document.documentElement.setAttribute('data-bs-theme', mode);
    document.documentElement.setAttribute('data-sidebar', mode);
    document.documentElement.setAttribute('data-topbar', mode);

    // Save the chosen mode to LocalStorage
  //  localStorage.setItem('preferredMode', mode);
  }

  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }



  /**
 * Logout the user
 */
  logout() {
    this.msalService.logoutPopup();
     this.navigateLogin();
  }

  navigateLogin() {
    this.router.navigate(['']);
  }


}
