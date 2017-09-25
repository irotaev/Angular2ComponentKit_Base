import {AfterViewInit, Component, ElementRef, Input, OnInit, Output} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

@Component({
    selector: 'sck-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends AbstractComponent implements OnInit, AfterViewInit {

    @Input() set marginTopScale(scale: number) {
        this.setmarginTop(scale);
    }

    @Input() set marginBottomScale(scale: number) {
        this.setmarginBottom(scale);
    }

    @Input() set marginLeftScale(scale: number) {
        this.setmarginLeft(scale);
    }

    @Input() set marginRightScale(scale: number) {
        this.setmarginRight(scale);
    }

    constructor(private elRef: ElementRef) {
        super();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    private setmarginTop(scale: number) {
        const margin = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('margin-top'), 10);
        this.elRef.nativeElement.style.marginTop = margin * scale + 'px';
    }

    private setmarginBottom(scale: number) {
        const margin = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('margin-bottom'), 10);
        this.elRef.nativeElement.style.marginBottom = margin * scale + 'px';
    }

    private setmarginLeft(scale: number) {
        const margin = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('margin-left'), 10);
        this.elRef.nativeElement.style.marginLeft = margin * scale + 'px';
    }

    private setmarginRight(scale: number) {
        const margin = parseInt(window.getComputedStyle(this.elRef.nativeElement, null).getPropertyValue('margin-right'), 10);
        this.elRef.nativeElement.style.marginRight = margin * scale + 'px';
    }
}
