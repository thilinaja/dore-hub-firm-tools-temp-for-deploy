import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

  navigateFyxo() {
    window.open('https://fyxo.global/',  "_blank");
  }
}
