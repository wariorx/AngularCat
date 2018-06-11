import { Component, Inject } from '@angular/core';

import { FetchImagesService, ImageData } from '../../fetchimages.service';
import { AsyncSubject } from 'rxjs';



@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    providers: [FetchImagesService]
})
export class CounterComponent {

    constructor(private imageService: FetchImagesService, @Inject('BASE_URL') baseUrl: string) {

        let response = new AsyncSubject<ImageData[]>();

        this.imageService.getJson(baseUrl, response);

        response.subscribe((result: ImageData[]) => {
            this.images = result
        }, (error: any) => console.error(error));

       
    }

    private images: ImageData[] = [{ id: 20, src: 'potato' }, { id: 21, src: 'potato' }, { id: 22, src: 'potato' }];

    public currentCount = 1;

    private imageIndex: number = Math.floor(Math.random() * 3);


    public incrementCounter() {
        this.currentCount++;
    }

    public scrollImage(): void {
        if (this.imageIndex + 1 < this.images.length)
            this.imageIndex++;
        else
            this.imageIndex = 0;
    }

    /*
    private getImages(@Inject('BASE_URL') baseUrl: string) {
        this.imageService.getJson(baseUrl).subscribe((result: ImageData[]) => {
            this.images = result
        });

    }
    */
}
