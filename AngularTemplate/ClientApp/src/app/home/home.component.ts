import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['homeStyle.css'],
})
export class HomeComponent {

autoTicks = false;
disabled = false;
invert = false;
max = 100;
min = 0;
showTicks = false;
step = 1;
thumbLabel = false;
value = 0;
vertical = false;
tickInterval = 1;

getSliderTickInterval(): number | 'auto' {
  if (this.showTicks) {
    return this.autoTicks ? 'auto' : this.tickInterval;
  }

  return 0;
}
}
