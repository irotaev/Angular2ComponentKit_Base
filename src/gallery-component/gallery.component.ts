import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Canvas} from './Canva';
import {Photo} from './Photo';

@Component({
  selector: 'sck-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public canvas: Canvas;

  private _lastInsertedPhotoIndex = 0;

  @Input() imgLocation: string;
  @Input() imgNames: Array<string>;
  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit() {
    this.canvas = new Canvas(this._elementRef.nativeElement.querySelector('.wrapper').clientWidth);

    this.imgNames.slice(0, 10).forEach((name) => {
      const photo = new Photo(0, 0, name);
      this.loadImg(photo, (_photo: Photo) => {
        this.canvas.addPhoto(_photo);
      });
    });
    this._lastInsertedPhotoIndex = 9;
  }

  private loadImg(photo: Photo, callback: (photo: Photo) => void) {
    const img = new Image();
    img.onload = () => {

      photo.width = 300;
      photo.height = img.height * 300 / img.width;

      callback(photo);
    };
    img.src = window.location.origin + '/assets/' + this.imgLocation + '/' + photo.src;
  }

  public moreBtnClick() {
    this.imgNames.slice(this._lastInsertedPhotoIndex, this._lastInsertedPhotoIndex + 5).forEach((name) => {
      const photo = new Photo(0, 0, name);
      this.loadImg(photo, (_photo: Photo) => {
        this.canvas.addPhoto(_photo);
      });
    });
    this._lastInsertedPhotoIndex += 5;

    return false;
  }
}
