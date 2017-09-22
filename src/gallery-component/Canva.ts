import {Photo} from './Photo';

import _ from 'lodash';

export class Canvas {
    public baseColumnWidth = 300;
    public minImgGap = 20;

    public readonly photos: Array<Photo> = [];

    private _baseColumnCount = 0;
    private _columnGap = 0;
    private _lastRowHeights: Array<number> = [];

    constructor(public width: number, public height: number = 0) {
        this.refresh();
    }

    public addPhoto(photo: Photo): void {
        this.photos.push(photo);

        this.insertPhoto(photo);
    }

    private refresh() {
        this._baseColumnCount = this.getColumnCount();
        this._columnGap = this.getColumnGap();

        for (let i = 0; i < this._baseColumnCount; i++) {
            this._lastRowHeights.push(0);
        }
    }

    private getColumnCount(): number {
        return Math.floor(this.width / this.baseColumnWidth);
    }

    private getColumnGap(): number {
        return (this.width - this._baseColumnCount * this.baseColumnWidth) / (this._baseColumnCount - 1 + 2);
    }

    private insertPhoto(photo: Photo): Photo {
        const minIndex = this.getMinHeightColumnIndex();
        const prevColumnCount = minIndex + 1 - 1;

        photo.x = (prevColumnCount) * this.baseColumnWidth + prevColumnCount * this._columnGap + this._columnGap;
        photo.y = this._lastRowHeights[minIndex] + this._columnGap;

        this._lastRowHeights[minIndex] = photo.y + photo.height;

        const maxIndex = this.getMaxHeightColumnIndex();
        const maxHeight = this._lastRowHeights[maxIndex] + 100;
        if (maxHeight > this.height) this.height = maxHeight;

        return photo;
    }

    private getMinHeightColumnIndex(): number {
        const maxHeight = Math.min.apply(Math, this._lastRowHeights);

        return this._lastRowHeights.indexOf(maxHeight);
    }

    private getMaxHeightColumnIndex(): number {
        const maxHeight = Math.max.apply(Math, this._lastRowHeights);

        return this._lastRowHeights.indexOf(maxHeight);
    }
}
