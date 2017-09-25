import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
    selector: 'sck-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends AbstractComponent implements OnInit, AfterViewInit {

    @Input() set paddingTopScale(scale: number) {
        this.setPaddingTop(scale);
    }

    @Input() set paddingBottomScale(scale: number) {
        this.setPaddingBottom(scale);
    }

    constructor(private elRef: ElementRef) {
        super();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    private setPaddingTop(scale: number) {
        const paddingTop = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('padding-top'), 10);
        this.elRef.nativeElement.style.paddingTop = paddingTop * scale + 'px';
    }

    private setPaddingBottom(scale: number) {
        const paddingBottom = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('padding-bottom'), 10);
        this.elRef.nativeElement.style.paddingBottom = paddingBottom * scale + 'px';
    }
}
