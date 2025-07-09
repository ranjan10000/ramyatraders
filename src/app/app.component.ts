import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { OurProductsComponent } from './sections/our-products/our-products.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { LeadershipComponent } from './sections/leadership/leadership.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurProductsComponent,
    ContactUsComponent,
    AboutUsComponent,
    LeadershipComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'ramya-traders';
}
