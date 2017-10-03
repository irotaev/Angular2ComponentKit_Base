import {Component, Input, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'sck-text-header-th36',
  templateUrl: './text-header-th36.component.html',
  styleUrls: ['./text-header-th36.component.scss']
})
export class HeaderTextComponent extends AbstractComponent implements OnInit {

  @Input() textH2: string;
  @Input() textP: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
