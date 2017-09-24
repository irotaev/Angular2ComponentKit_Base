import {AfterViewInit, Component, ComponentRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'sck-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends AbstractComponent implements OnInit, AfterViewInit, OnDestroy {
  public selfComponent: ComponentRef<ModalComponent>;

  @Input() onComponentDestroy: () => void;
  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
  }

  public closeComponent() {
    this.selfComponent.destroy();

    // if (!isNullOrUndefined(document)) {
    //   document.querySelector('body').style.overflow = 'auto';
    // }
  }

  ngOnDestroy(): void {
    this.onComponentDestroy();
  }
}
