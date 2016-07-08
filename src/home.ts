//import {computedFrom} from 'aurelia-framework';

export class Countdown {
  title: string;
  deadline: Date;
  total: number;
  Seconds: number;
  Minutes: number;
  Hours: number;
  Days: number;

  constructor() {
    this.deadline = new Date(Date.parse(new Date().toString()) + 15 * 24 * 60 * 60 * 1000);
    console.log(this.deadline.toString());
    var timeinterval: number = setInterval(this.getTimeRemaining, 1000);
  }

  public getTimeRemaining = () => {
    this.total = Date.parse(this.deadline.toString()) - Date.parse(new Date().toString());
    this.Seconds = Math.floor((this.total / 1000) % 60);
    this.Minutes = Math.floor((this.total / 1000 / 60) % 60);
    this.Hours = Math.floor((this.total / (1000 * 60 * 60)) % 24);
    this.Days = Math.floor(this.total / (1000 * 60 * 60 * 24));
  }
}



export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
