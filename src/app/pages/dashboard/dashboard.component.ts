import { Component, ViewChild } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  loading = false;



  @ViewChild('scrollRef') scrollRef: any;

  constructor(    private spinner: NgxSpinnerService,) {
  }
  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);


  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 300;
    this.onListScroll();
    this.spinner.show();
  }


  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop = this.scrollRef.SimpleBar.getScrollElement().scrollHeight;
      }, 500);
    }
  }





}
