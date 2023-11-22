import { Component } from '@angular/core';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-world-clock',
  templateUrl: './world-clock.component.html',
  styleUrls: ['./world-clock.component.scss']
})
export class WorldClockComponent {
  public newyork: {
    time: string;
    date: string;
    day: string;
  } | undefined;

  public london: {
    time: string;
    date: string;
    day: string;
  } | undefined;

  public srilanka: {
    time: string;
    date: string;
    day: string;
  } | undefined;

  public singapore: {
    time: string;
    date: string;
    day: string;
  } | undefined;

  constructor() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Refresh every second
  }

  private updateTime(): void {
    const now = DateTime.local();

    // New York (Eastern Time)
    const newYorkTime = now.setZone('America/New_York');
    this.newyork = {
      time: newYorkTime.toFormat('hh:mm a'),
      date: newYorkTime.toFormat('MMMM, d yyyy'),
      day: newYorkTime.toFormat('EEEE')
    };

    // London (UTC +0)
    const londonTime = now.setZone('Europe/London');
    this.london = {
      time: londonTime.toFormat('hh:mm a'),
      date: londonTime.toFormat('MMMM, d yyyy'),
      day: londonTime.toFormat('EEEE')
    };

    // Sri Lanka (UTC +5:30)
    const sriLankaTime = now.setZone('Asia/Colombo');
    this.srilanka = {
      time: sriLankaTime.toFormat('hh:mm a'),
      date: sriLankaTime.toFormat('MMMM, d yyyy'),
      day: sriLankaTime.toFormat('EEEE')
    };

    // Singapore (UTC +8)
    const singaporeTime = now.setZone('Asia/Singapore');
    this.singapore = {
      time: singaporeTime.toFormat('hh:mm a'),
      date: singaporeTime.toFormat('MMMM, d yyyy'),
      day: singaporeTime.toFormat('EEEE')
    };
  }
}
