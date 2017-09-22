import {Component, Input, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'app-cover-component',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent extends AbstractComponent implements OnInit {

  @Input() bgImgUrl: string;
  @Input() textH4: string;
  @Input() textH1: string;
  @Input() textH2: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
