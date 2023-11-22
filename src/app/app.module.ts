import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

// Page Route
import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

// Laguage
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Auth
import { environment } from '../environments/environment';


// Component
import { AppComponent } from './app.component';
import { BrowserCacheLocation, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';


export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId: environment.clientId,
      redirectUri: environment.redirectUrl,
      authority: environment.authority
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: true, // set to true for IE 11
    }
  })
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],

      }
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:MSAL_INSTANCE,
      useFactory:MSALInstanceFactory
      },
      MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
