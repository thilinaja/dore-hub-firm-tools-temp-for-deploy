import {Component, NgZone} from '@angular/core';
import {Router} from "@angular/router";
interface CardData {
  imageUrl: string;
  text: string;
  width: string;
  imgWidth: string;
  imgHeight: string;
  url: string;
  isSpecial?: boolean;
  backgroundColor: string;
}

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  card: any;
  groupedCards: CardData[][] = [];

  constructor(private router: Router, private ngZone: NgZone) {


  }

  cardsData: CardData[] = [


    {
      imageUrl: '/assets/images/dore-icon/dore-img-09.svg',
      text: 'Expensify',
      width: '225px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://www.expensify.com/',
      backgroundColor: '#FFFFFF',

    },
    {
      imageUrl: '/assets/images/dore-icon/dore-img-07.svg',
      text: 'Mimecast',
      width: '225px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://login.mimecast.com/u/login/?gta=apps#/login',
      backgroundColor: '#FFFFFF',
    },


    {
      imageUrl: '/assets/images/dore-icon/dore-img-08.svg',
      text: 'DORE Partnership Wiki',
      width: '225px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://dorepartnership.sharepoint.com/_forms/default.aspx',
      backgroundColor: '#FFFFFF',

    },
  ];


  //enroll-page
  navigate(url: string) {
    //console.log("Navigating to:", url);
    this.ngZone.run(() => {
      window.open(url, "_blank");
    });
  }

  ngOnInit() {
    // Shuffle the cardsData array while avoiding consecutive repeats
    // Divide the shuffled cards into groups of two
    for (let i = 0; i < this.cardsData.length; i += 2) {
      const group = this.cardsData.slice(i, i + 2);
      this.groupedCards.push(group);
    }

  }
}
