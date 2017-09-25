import {
    Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {Canvas} from './Canva';
import {Photo} from './Photo';
import {AbstractComponent} from '../abstract.component';
import {ModalComponent} from '../modal-component/modal.component';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'sck-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent extends AbstractComponent implements OnInit {

    public canvas: Canvas;

    private _lastInsertedPhotoIndex = 0;
    private selectedPhoto: Photo;
    private isPhotoEnded = false;

    @ViewChild('photoPreviewWrapper') photoPreviewWrapper: ElementRef;
    public isShowPhotoPreview = false;

    @Input() imgLocationMin: string;
    @Input() imgLocationBig: string;
    @Input() assetsLocation = '/assets/';
    @Input() imgNames: Array<string>;
    @Input() buttonText = 'Еще фотографии';
    @Input() buttonText_imgsEnd: string;
    @Input() buttonText_imgsEnd_Src: string;
    @Output() public isModalNeed: EventEmitter<any> = new EventEmitter();

    constructor(private _elementRef: ElementRef, private vcRef: ViewContainerRef, private cfResolver: ComponentFactoryResolver) {
        super();
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
        img.src = window.location.origin + this.assetsLocation + this.imgLocationMin + '/' + photo.src;
    }

    public moreBtnClick() {
        if (this.isPhotoEnded) {
            if (!isNullOrUndefined(this.buttonText_imgsEnd_Src)) {
                window.open(this.buttonText_imgsEnd_Src);
            }

            return false;
        }

        if (this._lastInsertedPhotoIndex >= this.imgNames.length) {
            this.buttonText = this.buttonText_imgsEnd;
            this.isPhotoEnded = true;

            return false;
        }

        this.imgNames.slice(this._lastInsertedPhotoIndex, this._lastInsertedPhotoIndex + 5).forEach((name) => {
            const photo = new Photo(0, 0, name);
            this.loadImg(photo, (_photo: Photo) => {
                this.canvas.addPhoto(_photo);
            });
        });
        this._lastInsertedPhotoIndex += 5;

        return false;
    }

    public imgClick(photo: Photo) {
        this.isModalNeed.emit(true);
        this.isShowPhotoPreview = true;
        this.selectedPhoto = photo;

        const modalFactory = this.cfResolver.resolveComponentFactory(ModalComponent);
        // let modalComponentRef = modalFactory.create(this.vcRef.injector);
        // modalComponentRef.changeDetectorRef.detectChanges();

        const modalComponent = this.vcRef.createComponent(
            modalFactory,
            this.vcRef.length,
            undefined,
            [
                [this.photoPreviewWrapper.nativeElement]
            ]);
        modalComponent.changeDetectorRef.detectChanges();
        modalComponent.instance.onComponentDestroy = () => {
            this.isModalNeed.emit(false);
        };

        modalComponent.instance.selfComponent = modalComponent;
    }
}
