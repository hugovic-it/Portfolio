import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContatoComponent  } from "./contato/contato.component";
import { SobreComponent } from "./sobre/sobre.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NotFoundComponent } from "./not-found/not-found.component";
 

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: '**', component: NotFoundComponent}
];