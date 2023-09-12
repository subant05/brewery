import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { AppComponent } from '../app.component'
import { BreweryComponent } from "../pages/brewery/brewery.component"
import { BreweriesComponent } from "../pages/breweries/breweries.component"


const routes: Routes = [
      {
        path: "",
        component: BreweriesComponent,
        runGuardsAndResolvers: 'always',
    },
    {
        path: "brewery/:id",
        component: BreweryComponent,
        runGuardsAndResolvers: 'always',
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutes { }