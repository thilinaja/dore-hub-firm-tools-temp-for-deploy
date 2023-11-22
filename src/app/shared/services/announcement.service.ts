import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResponseModel } from '../basemodels/base-response-model';
import { Observable, map, take } from 'rxjs';
import { AnnouncementModel } from './models/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }

  public GetAllAnnouncement(): Observable<AnnouncementModel[]> {
    debugger;
    return this.http
      .get<AnnouncementModel[]>(
        environment.api + '/Announcements',
        {
          params:{
            code: environment.apiCode,
            sid: environment.siu
          }
        }
        )
      .pipe(
        take(1),
        map((value) => {
          return value;
        })
      );
  }
}
