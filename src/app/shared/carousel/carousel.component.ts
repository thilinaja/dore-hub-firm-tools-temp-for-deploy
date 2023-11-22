import { Component, OnInit, NgZone } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { AnnouncementModel } from '../services/models/announcement.model';
import * as moment from 'moment';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  activeIndex: number = 0;
  announcements: AnnouncementModel[] = [];

  //autoMoveEnabled: boolean = true;

  //carousel Item

  // carouselItems = [
  //   {  number: 0,
  //     imageUrl: 'assets/images/slider/not-1.png',
  //     date: 'November 23, 2022',
  //     title: 'OUR GLOBAL TEAM FINDS EXCEPTIONAL EXECUTIVES FOR YOUR BUSINESS',
  //     item: 'Armed with years of experience and success in executive search and team build outs, we understand your challenges and work with you to get you where you want to be, fast.'
  //   },
  //   {number: 1,
  //     imageUrl: 'assets/images/slider/not-1.png',
  //     date: 'November 24, 2022',
  //     title: 'OUR GLOBAL TEAM FINDS EXCEPTIONAL EXECUTIVES FOR YOUR BUSINESS',
  //     item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nulla lacus. Suspendisse feugiat dolor massa, id efficitur arcu facilisis ut.'
  //   },

  //   {number: 3,
  //     imageUrl: 'assets/images/slider/not-1.png',
  //     date: 'November 25, 2022',
  //     title: 'OUR GLOBAL TEAM FINDS EXCEPTIONAL EXECUTIVES FOR YOUR BUSINESS',
  //     item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nulla lacus. Suspendisse feugiat dolor massa, id efficitur arcu facilisis ut.'
  //   },





  // ];

  constructor(private ngZone: NgZone, private announcementService: AnnouncementService) {}

  ngOnInit(){
    this.getAllAnnouncement();
  }

  ngAfterViewInit() {
    // Auto-advance the carousel
    this.autoAdvance();
  }
  autoAdvance() {
    setInterval(() => {
      this.ngZone.run(() => {
        this.activeIndex = (this.activeIndex + 1) % this.announcements.length;
      });
    }, 5000); // Change slide every 5 seconds
  }
  // Function to go to a specific slide
  goToSlide(index: number) {
    this.activeIndex = index;
  }

  // Call this function when you want to start auto-move again, e.g., after manual slide change
  //startAutoMove() {
  //  this.autoMoveEnabled = true;
  //}

  getAllAnnouncement(){
    this.announcementService.GetAllAnnouncement().subscribe((val) => {

      //check start and expiry dates
      val = val.filter((obj) => {

        // debugger
        // var operation = obj.utcOffset == null? '' : obj.utcOffset[0];
        // var offHours = obj.utcOffset == null? 0 : obj.utcOffset.split(':')[0].substring(1, 3);
        // var offMinutes = obj.utcOffset == null? 0 : obj.utcOffset.split(':')[1];

        // var startDateLocal = obj.startDate;
        // var endDateLocal = obj.endDate;
        // if(operation == '-'){
        //  startDateLocal = moment(obj.startDate).add(Number(offHours), 'hours').add(Number(offMinutes), 'minutes');
        //  endDateLocal = moment(obj.endDate).add(Number(offHours), 'hours').add(Number(offMinutes), 'minutes');
        // }else if(operation == '+'){
        //  startDateLocal = moment(obj.startDate).add(-1*Number(offHours), 'hours').add(-1*Number(offMinutes), 'minutes');
        //  endDateLocal = moment(obj.endDate).add(-1*Number(offHours), 'hours').add(-1*Number(offMinutes), 'minutes');
        // }

        return moment(obj.startDate).local().isBefore() && (obj.endDate == null || moment(obj.endDate).local().isAfter())
      });

      //check status
      val = val.filter((obj) => {
        return obj.status == 1
      });

      //recap
      val.forEach(element => {
        element.startDateString = moment(element.startDate).format('MMMM d, yyyy');
        element.endDateString = moment(element.endDate).format('MMMM d, yyyy');
      });


      this.announcements = val;

    });
  }

  openAnnouncment(url: string){
    if(url != null) window.open(url, '_blank');
  }


}

