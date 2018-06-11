import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchPersonsComponent } from './components/fetchpersons/fetchpersons.component';
import { FetchImagesService } from './fetchimages.service';
import { FadeComponent } from './components/fade/fade.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FetchPersonsComponent,
        FadeComponent,
        SlideComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent, children: [{ path: 'fade', component: FadeComponent }, {path: 'slide', component: SlideComponent}] },
            { path: 'fade', component: FadeComponent },
            { path: 'slide', component: SlideComponent },
            { path: '**', redirectTo: 'home' }
           
        ])
    ],
    providers: [
        FetchImagesService
    ]
})
export class AppModuleShared {
}
