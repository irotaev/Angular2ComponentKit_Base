import {AfterViewInit, Component, ComponentRef, OnDestroy, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'sck-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends AbstractComponent implements OnInit, AfterViewInit, OnDestroy {
  public selfComponent: ComponentRef<ModalComponent>;

  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // if (!isNullOrUndefined(document)) {
    //   document.querySelector('body').style.overflow = 'hidden';
    // }
  }

  public closeComponent() {
    this.selfComponent.destroy();

    // if (!isNullOrUndefined(document)) {
    //   document.querySelector('body').style.overflow = 'auto';
    // }
  }

  ngOnDestroy(): void {

  }
}
