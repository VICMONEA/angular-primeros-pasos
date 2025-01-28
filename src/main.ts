import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { CounterComponent } from './app/counter/counter.component';

platformBrowserDynamic().bootstrapModule(AppModule,{
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
