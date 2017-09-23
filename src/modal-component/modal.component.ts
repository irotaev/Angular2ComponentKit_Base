import {AfterViewInit, Component, ComponentRef, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'sck-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends AbstractComponent implements OnInit, AfterViewInit{

  public selfComponent: ComponentRef<ModalComponent>;

  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if (!isNullOrUndefined(document)) {
      document.querySelector('body').style.overflow = 'hidden';
    }
  }

  public closeComponent() {
    this.selfComponent.destroy();

    if (!isNullOrUndefined(document)) {
      document.querySelector('body').style.overflow = 'auto';
    }
  }
}
