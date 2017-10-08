import {Component, ElementRef, OnInit} from '@angular/core';

import * as jQuery from 'jquery';

@Component({
    selector: 'sck-mdcard-title',
    templateUrl: './mdcard-title.component.html',
    styleUrls: ['./mdcard-title.component.scss']
})
export class MdcardTitleComponent implements OnInit {

    constructor(private _elRef: ElementRef) {
    }

    ngOnInit() {
        // let $parent = $(this._elRef.nativeElement).closest('md-card').css;

        const $el = jQuery(this._elRef.nativeElement);
        const $mdCard = $el.closest('md-card');

        $mdCard.css('padding-top', $el.outerHeight() + parseInt($mdCard.css('padding-top'), 10));
    }
}
