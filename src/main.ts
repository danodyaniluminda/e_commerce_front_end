import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assuming your AppModule is defined in app.module.ts

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
