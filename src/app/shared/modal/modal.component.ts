import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() modalID = '';

  constructor(public modal: ModalService, public el: ElementRef) {

  }

  ngOnInit(): void {
    // This is adding modal to root (body) element so that
    // CSS styles would not be inherited from parent components.
    // Could do this on the modal because it's not part of the page layout
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }
}
