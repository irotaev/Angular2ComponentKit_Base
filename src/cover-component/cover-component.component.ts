import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cover-component',
  templateUrl: './cover-component.component.html',
  styleUrls: ['./cover-component.component.scss']
})
export class CoverComponentN1Component implements OnInit {

  @Input() bgImgUrl: string;
  @Input() textH4: string;
  @Input() textH1: string;
  @Input() textH2: string;
  constructor() { }

  ngOnInit() {
  }
}
