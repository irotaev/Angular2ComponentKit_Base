import { Component, OnInit } from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends AbstractComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
