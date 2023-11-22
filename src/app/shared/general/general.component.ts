import {Component, HostListener, NgZone} from '@angular/core';
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
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  card: any;
  groupedCards: CardData[][] = [];

  constructor(private router: Router, private ngZone: NgZone) {


  }


  cardsData: CardData[] = [
    {
      imageUrl: '/assets/images/dore-icon/dore-img-03.svg',
      text: 'Bamboo HR',
      width: '100px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://dorepartnership.bamboohr.com/login.php?r=%2Fhome%2F',
      backgroundColor: '#FFFFFF',
    },
    {
      imageUrl: '/assets/images/dore-icon/dore-img-04.svg',
      text: 'US 401K',
      width: '100px',  // Width for the 133px cards
      imgWidth: '35px', // Width for the image in 133px cards
      imgHeight: '35px', // Height for the image in 133px cards
      backgroundColor: '#FFFFFF',
      url:'https://online.adp.com/signin/v1/?APPID=401K&productId=80e309c3-7091-bae1-e053-3505430b5495-1&returnURL=https://mykplan.adp.com/SecureRetirementRouting/login.aspx&callingAppId=401K',
    },
    {
      imageUrl: '/assets/images/dore-icon/dore-img-05.svg',
      text: 'US Payroll',
      width: '100px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://identity.trinet.com/',
      backgroundColor: '#FFFFFF',
    },
    {
      imageUrl: '/assets/images/dore-icon/dore-img-06.svg',
      text: 'UK Payroll',
      width: '100px',  // Width for the 133px cards
      imgWidth: '30px', // Width for the image in 133px cards
      imgHeight: '30px', // Height for the image in 133px cards
      url:'https://employeeportal.paycheck.co.uk/#!/login',
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
