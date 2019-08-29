import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctions, AngularFireFunctionsModule } from '@angular/fire/functions';

// Instructions ---->
// Replace configPlaceholder with your firebase credentials
//import configPlaceholder from '../env';
import { CheckoutComponent } from './checkout/checkout.component';
//import { ElementsComponent } from './elements/elements.component';

const config = {
  apiKey: "AIzaSyA3Y6mzlKtiSDqE8U9N2CeiHE_smquJA3E",
    authDomain: "stripes-angular.firebaseapp.com",
    databaseURL: "https://stripes-angular.firebaseio.com",
    projectId: "stripes-angular",
    storageBucket: "stripes-angular.appspot.com",
    messagingSenderId: "921628641345",
    appId: "1:921628641345:web:e7b12045b5578453"
}
@NgModule({
  declarations: [AppComponent, CheckoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
