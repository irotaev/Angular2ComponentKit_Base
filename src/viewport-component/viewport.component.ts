import {AfterViewInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {GalleryComponent} from "../gallery-component/gallery.component";

@Component({
  selector: 'sck-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit, AfterViewInit {

  @ContentChild(GalleryComponent) galleryComponent: GalleryComponent;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.galleryComponent.isModalNeed.subscribe((event) => this.disableScroll(event));
  }

  disableScroll(event) {
    if (event)
      this.elRef.nativeElement.style.overflow = 'hidden';
    else
      this.elRef.nativeElement.style.overflow = 'auto';
  }
}
