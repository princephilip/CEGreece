import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
// For MDB Angular Pro
// import { WavesModule, InputsModule, ButtonsModule  } from 'ng-uikit-pro-standard'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RorComponent } from './ror/ror.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { FooterComponent } from './footer/footer.component';
import { WorshipWithUsComponent } from './worship-with-us/worship-with-us.component';
import { OnlineChurchComponent } from './online-church/online-church.component';
import { MeetPastorChrisComponent } from './meet-pastor-chris/meet-pastor-chris.component';
import { OurMinistryComponent } from './our-ministry/our-ministry.component';

import {ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RorComponent,
    ContactComponent,
    NavComponent,
    OnlineStoreComponent,
    FooterComponent,
    WorshipWithUsComponent,
    OnlineChurchComponent,
    MeetPastorChrisComponent,
    OurMinistryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlt3H6wDqR7tmCDEm95BtGoSqyUC1FBlo'
      // 'AIzaSyBewjW73ph7ttbEMkkPi2k-8AMyooqdAlE'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
