// You are given a page with a clock. Your task is to implement the logic for buttons to increment and decrement the hours and minutes.
// The time should be displayed in HH:MM 24-hour format. For example, 23:59, 08:00, 07:32.
// The initial state of the clock should be 00:00.
// Actions should be cycled; if you have 23:58 on the clock and press up for hours, the resulting time should be 00:58.
// Minutes and hours should be changed separately.

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  hours = "00";
  minutes = "00";

  handleHoursUpButtonClick() {
    this.hours = (parseInt(this.hours) + 1).toString();
    if (this.hours === "24") {
      this.hours = "00";
    }
    if (this.hours.length < 2) this.hours = "0" + this.hours;
  }

  handleHoursDownButtonClick() {
    this.hours = (parseInt(this.hours) - 1).toString();
    if (this.hours === "-1") {
      this.hours = "23";
    }
    if (this.hours.length < 2) this.hours = "0" + this.hours;
  }

  handleMinutesUpButtonClick() {
    this.minutes = (parseInt(this.minutes) + 1).toString();
    if (this.minutes === "60") {
      this.minutes = "00";
      // this.handleHoursUpButtonClick()
    }
    if (this.minutes.length < 2) this.minutes = "0" + this.minutes;
  }

  handleMinutesDownButtonClick() {
    this.minutes = (parseInt(this.minutes) - 1).toString();
    if (this.minutes === "-1") {
      this.minutes = "59";
      // this.handleHoursDownButtonClick()
    }
    if (this.minutes.length < 2) this.minutes = "0" + this.minutes;
  }
}
