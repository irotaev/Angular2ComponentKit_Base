import {Component, ComponentRef, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'sck-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends AbstractComponent implements OnInit {

  public selfComponent: ComponentRef<ModalComponent>;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  public closeComponent() {
    this.selfComponent.destroy();
  }
}
