import {Component, NgZone} from '@angular/core';
import {Router} from "@angular/router";
interface CardData {
  imageUrl: string;
  text: string;
  width: string;
  imgWidth: string;
  imgHeight: string;
  url:string;
}
@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.scss']
})
export class BussinessComponent {
  card:any;
  constructor(  private router: Router,private ngZone: NgZone) { }
  cardsData: CardData[] = [

    {
      imageUrl: '/assets/images/dore-icon/dore-img-07.svg',
      text: 'Mimecast',
      width: '225px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://login.mimecast.com/u/login/?gta=apps#/login',

    },
  ];

  getTwoColumnCards(): CardData[][] {
    const columnSize = 3;
    const cardsInColumns: CardData[][] = [];
    for (let i = 0; i < this.cardsData.length; i += columnSize) {
      const chunk = this.cardsData.slice(i, i + columnSize);
      cardsInColumns.push(chunk);
    }
    return cardsInColumns;
  }

  //enroll-page
  navigate(url: string) {
    //console.log("Navigating to:", url);
    this.ngZone.run(() => {
      window.open(url, "_blank");
    });
  }
}
