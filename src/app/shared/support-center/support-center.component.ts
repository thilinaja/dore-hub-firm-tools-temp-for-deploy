import { Component } from '@angular/core';

@Component({
  selector: 'app-support-center',
  templateUrl: './support-center.component.html',
  styleUrls: ['./support-center.component.scss']
})
export class SupportCenterComponent {
  contacts = [
    { name: 'Paul', status: 'Online', location: 'UK', avatar: 'assets/images/user/user-img-01.svg' },
    { name: 'Bhavin', status: 'Online', location: 'UK', avatar: 'assets/images/user/user-img-02.svg' },
    { name: 'Muditha', status: 'Online', location: 'APAC', avatar: 'assets/images/user/user-img-03.svg' },
    { name: 'Marco', status: 'Online', location: 'USA', avatar: 'assets/images/user/user-img-04.svg' }
  ];
}
