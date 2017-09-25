import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {AbstractComponent} from '../abstract.component';

@Component({
    selector: 'sck-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent extends AbstractComponent implements OnInit, OnChanges {

    @Input() src: string;
    @Input() isScale = true;

    constructor(private elRef: ElementRef) {
        super();
    }

    public width: number;
    public height: number;
    public imgSrc: string;

    private _parentEl: HTMLElement;

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.isScale) {
            this._parentEl = this.elRef.nativeElement.parentNode;
            if (isNullOrUndefined(parent)) {
                return;
            }

            this.loadImg();
        }
        else {
            this.imgSrc = this.src;
        }
    }

    private loadImg() {
        const img = new Image();
        img.onload = () => {

            let width = img.width;
            let height = img.height;

            if (width > this._parentEl.clientWidth) {
                const scale = this._parentEl.clientWidth / img.width;
                width = img.width * scale;
                height = img.height * scale;
            }

            if (height > this._parentEl.clientHeight) {
                const scale = this._parentEl.clientHeight / img.height;
                width = img.width * scale;
                height = img.height * scale;
            }

            this.setScale(width, height);
            this.imgSrc = this.src;
        };
        img.src = window.location.origin + this.src;
    }

    private setScale(width: number, height: number) {
        this.width = width;
        this.height = height;

        this.elRef.nativeElement.style.width = width + 'px';
        this.elRef.nativeElement.style.height = height + 'px';
    }
}
