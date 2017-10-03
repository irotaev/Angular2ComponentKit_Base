import {AfterViewInit, Component, ElementRef, Input, OnInit, Output} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
    selector: 'sck-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends AbstractComponent implements OnInit, AfterViewInit {

    @Input() set paddingTopScale(scale: number) {
        this.setpaddingTop(scale);
    }

    @Input() set paddingBottomScale(scale: number) {
        this.setpaddingBottom(scale);
    }

    @Input() set paddingLeftScale(scale: number) {
        this.setpaddingLeft(scale);
    }

    @Input() set paddingRightScale(scale: number) {
        this.setpaddingRight(scale);
    }

    constructor(private elRef: ElementRef) {
        super();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    private setpaddingTop(scale: number) {
        const padding = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('padding-top'), 10);
        this.elRef.nativeElement.style.paddingTop = padding * scale + 'px';
    }

    private setpaddingBottom(scale: number) {
        const padding = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('padding-bottom'), 10);
        this.elRef.nativeElement.style.paddingBottom = padding * scale + 'px';
    }

    private setpaddingLeft(scale: number) {
        const padding = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('padding-left'), 10);
        this.elRef.nativeElement.style.paddingLeft = padding * scale + 'px';
    }

    private setpaddingRight(scale: number) {
        const padding = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('padding-right'), 10);
        this.elRef.nativeElement.style.paddingRight = padding * scale + 'px';
    }
}
