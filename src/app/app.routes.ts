import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { OurProductsComponent } from './sections/our-products/our-products.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { LeadershipComponent } from './sections/leadership/leadership.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'ourproducts', component: OurProductsComponent },
     { path: 'aboutus', component: AboutUsComponent },
    { path: '', component: HomeComponent },
       { path: 'leadership', component: LeadershipComponent },

];
