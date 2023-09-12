// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { AppRoutes } from './routes/app-routes.module'
// Material Modules

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

// Components
import { AppComponent } from './app.component';

// Interceptor
import { RequestInterceptor } from './interceptor/request.interceptor';
import { BreweryComponent } from './pages/brewery/brewery.component';
import { BreweriesComponent } from './pages/breweries/breweries.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    BreweryComponent,
    BreweriesComponent,
    FilterComponent,
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutes,
    AgmCoreModule.forRoot({
      apiKey: 'put key here'
    }),
    // Material
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule, 
     MatSelectModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
