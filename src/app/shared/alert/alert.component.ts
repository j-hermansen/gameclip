import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() color = 'blue';

  // getter. Do not have to invoke function like bgColor() in template
  get bgColor() {
    return `bg-${this.color}-400`;
  }

}
