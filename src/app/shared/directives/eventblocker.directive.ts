import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventblocker]'
})
export class EventblockerDirective {

  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  public handleEvent(event: Event) {
    event.preventDefault();
  }

}
