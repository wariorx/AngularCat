import { Component, Inject } from '@angular/core';

import { FetchDataComponent } from '../fetchdata/fetchdata.component';

@Component({
    selector: 'fade',
    templateUrl: './fade.component.html',
    providers: [FetchDataComponent]
})
export class FadeComponent {

    constructor(private data: FetchDataComponent) {
        this.data.getImages().subscribe((result: any) => {
            this.images = result;
        }, (error: any) => error.log(error));
    }

    private images = this.data.images; //defaults to potato images
}