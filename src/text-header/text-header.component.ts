import {Component, Input, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'app-text-header',
  templateUrl: './text-header.component.html',
  styleUrls: ['./text-header.component.scss']
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
