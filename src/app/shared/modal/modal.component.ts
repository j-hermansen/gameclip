import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {

  @Input() modalID = '';

  constructor(public modal: ModalService, public el: ElementRef) {

  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
