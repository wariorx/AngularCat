import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FetchPersonsComponent } from '../fetchpersons/fetchpersons.component'

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    title: string = "Home";

    public deleteTitle(): void{
        this.title = "";
    }

}
