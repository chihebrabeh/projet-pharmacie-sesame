import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import {AdressComponent} from './components/adress/adress.component';
import { ContainerComponent } from './components/container/container.component';
import { InfoComponent } from './components/info/info.component';
import { TeamComponent } from './components/team/team.component';
import { ServicesComponent } from './components/services/services.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MtSectionComponent } from './components/mt-section/mt-section.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { PubliciteComponent } from './components/publicite/publicite.component';
import { PubComponent } from './components/pub/pub.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProduitInfoComponent } from './components/produit-info/produit-info.component';
import {Routes , RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { MarquesComponent } from './components/marques/marques.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScanComponent } from './components/scan/scan.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { AutreComponent } from './components/autre/autre.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'Produits', component: ProduitsComponent },
  { path: 'Marques', component: MarquesComponent },
  { path: 'Services', component: ServiceListComponent },
  { path: 'Contacts', component: ContactComponent },
  { path: 'Scan', component: ScanComponent },
  { path: 'Autre', component: AutreComponent },
  { path: 'Promotion', component: PromotionsComponent },
  { path: '', component: IndexComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AdressComponent,
    ContainerComponent,
    InfoComponent,
    TeamComponent,
    ServicesComponent,
    NewsletterComponent,
    MtSectionComponent,
    ProduitsComponent,
    PubliciteComponent,
    PubComponent,
    FooterComponent,
    ProduitInfoComponent,
    IndexComponent,
    MarquesComponent,
    ServiceListComponent,
    ContactComponent,
    ScanComponent,
    PromotionsComponent,
    AutreComponent


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
