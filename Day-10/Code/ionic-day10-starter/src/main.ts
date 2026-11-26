
import { bootstrapApplication } from '@angular/platform-browser';

import {
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';

import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  checkmarkDoneOutline,
  clipboardOutline,
  chevronForwardOutline,
  addOutline
} from 'ionicons/icons';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Register Ionic icons
addIcons({
  'checkmark-done-outline': checkmarkDoneOutline,
  'clipboard-outline': clipboardOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'add-outline': addOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
  ],
});
