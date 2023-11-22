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
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent {
  card: any;
  groupedCards: CardData[][] = [];
  constructor(private router: Router, private ngZone: NgZone) {
  }
  cardsData: CardData[] = [
    {
      imageUrl: '/assets/images/dore-icon/dore-img-01.svg',
      text: 'Thrive TRM',
      width: '100px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://dorepartnership.thrivetrm.com/users/sign_in',
      backgroundColor: '#FFFFFF'
    },
    {
      imageUrl: '/assets/images/dore-icon/dore-img-02.svg',
      text: 'Box',
      width: '100px',  // Width for the 133px cards
      imgWidth: '35px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://dorepartnership.account.box.com/login',
      backgroundColor: '#FFFFFF'

    },




    {
      imageUrl: '/assets/images/dore-icon/microsoft-365-logo-6D6E233C94-seeklogo.com.svg',
      text: 'Office 365',
      width: '220px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://www.office.com/?auth=2',
      backgroundColor: '#FFFFFF'
    },
  ];

  getTwoColumnCards(): CardData[][] {
    const columnSize = 2;
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

  ngOnInit() {
    // Shuffle the cardsData array while avoiding consecutive repeats
    // Divide the shuffled cards into groups of two
    for (let i = 0; i < this.cardsData.length; i += 2) {
      const group = this.cardsData.slice(i, i + 2);
      this.groupedCards.push(group);
    }
  }

}
