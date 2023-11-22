import {Moment} from "moment";

export interface AnnouncementModel {
  id:string;
  syndicateUserId:string;
  title:string;
  graphicPath:string;
  redirectUrl:string;
  startDate:Moment;
  endDate:Moment;
  status:number;
  description:string;
  startDateString:string;
  endDateString:string;
  utcOffset:string;
}

