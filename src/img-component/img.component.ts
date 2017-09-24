import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'sck-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges {

    @Input() src: string;
    @Input() isScale = true;

    constructor(private elRef: ElementRef) {
    }

    public width: number;
    public height: number;

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
    }

    private loadImg() {
        const img = new Image();
        img.onload = () => {

            let width = img.width;
            let height = img.height;

            if (width > this._parentEl.offsetWidth) {
                const scale = this._parentEl.offsetWidth / img.width;
                width = img.width * scale;
                height = img.height * scale;
            }

            if (height > this._parentEl.offsetHeight) {
                const scale = this._parentEl.offsetHeight / img.height;
                width = img.width * scale;
                height = img.height * scale;
            }

            this.setScale(width, height);
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
