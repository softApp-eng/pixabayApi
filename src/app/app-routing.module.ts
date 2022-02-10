import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FootballComponent } from './components/football/football.component';
import { CarsComponent } from './components/cars/cars.component';
import { CitiesComponent } from './components/cities/cities.component';

const routes: Routes = [
  {path : "Food",component : HomeComponent},
  {path : "covid",component:GalleryComponent},
  {path : "football",component:FootballComponent},
  {path : "cars",component:CarsComponent},
  {path : "cities",component:CitiesComponent},
  {path : '',redirectTo:"Food",pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
