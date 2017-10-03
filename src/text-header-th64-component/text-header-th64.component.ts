import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sck-text-header-th64',
  templateUrl: './text-header-th64.component.html',
  styleUrls: ['./text-header-th64.component.scss']
})
export class TextHeaderTh64Component implements OnInit {

  @Input() textH2: string;
  @Input() textH4: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
