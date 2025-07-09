import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // NgFor மற்றும் பிற common directives/pipes க்காக

// Define an interface for your product structure for better type safety
interface Product {
  id: number; // Added an ID for better product management, especially for modals
  name: string;
  description: string;
  image: string;
  longDescription?: string; // Optional: For a more detailed description in the modal
}

@Component({
  selector: 'app-our-products',
  standalone: true, // Standalone Component ஆக மாற்றப்பட்டது
  imports: [CommonModule], // CommonModule ஐ இம்போர்ட் செய்ய வேண்டும்
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
})
export class OurProductsComponent implements OnInit, AfterViewInit {
  // Use a more descriptive name for ElementRef and ensure it's not null before use
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  selectedProduct: Product | null = null;
  scrollAmount: number = 0; // Will be calculated dynamically

  products: Product[] = []; // Initialize products array

  ngOnInit(): void {
    // In a real application, you'd typically fetch this data from a service
    this.products = [
      {
        id: 1,
        name: 'Basmati Rice',
        image: 'assets/products/Basmati Rice.webp',
        description: 'Aromatic long grain rice. Ideal for exports and fine dining.',
        longDescription: 'Our premium Basmati Rice is sourced from the finest fields, known for its fragrant aroma and long, slender grains. Perfect for biryanis, pilafs, and exquisite culinary creations, it cooks to a light, fluffy perfection every time.'
      },
      {
        id: 2,
        name: 'Toor Dal',
        image: 'assets/products/Toor Dal (Thuvaram Paruppu).jpg',
        description: 'Protein-rich lentil used in South Indian dishes.',
        longDescription: 'High-quality Toor Dal, also known as Thuvaram Paruppu, is a staple in Indian cuisine. Rich in protein and essential nutrients, it\'s the primary ingredient for delicious sambar, dal fry, and other traditional curries.'
      },
      {
        id: 3,
        name: 'Charcoal',
        image: 'assets/products/Charcoal.jpg',
        description: 'High-carbon charcoal ideal for BBQ and industrial use.',
        longDescription: 'Our industrial-grade charcoal boasts a high carbon content and excellent burning efficiency. It\'s ideal for various applications including barbecue, industrial furnaces, and water purification. Environmentally sourced and processed.'
      },
      {
        id: 4,
        name: 'Banana Leaf',
        image: 'assets/products/Banana-Leaf.jpg',
        description: 'Eco-friendly leaves for meals and packaging.',
        longDescription: 'Fresh, vibrant Banana Leaves are a traditional and eco-friendly choice for serving meals, especially in South Indian culture. They impart a subtle aroma to food and are also great for natural packaging or decorative purposes.'
      },
      {
        id: 5,
        name: 'Maize Corn',
        image: 'assets/products/Maize (Corn).jpg',
        description: 'Used in food, ethanol, feed. Graded & dried.',
        longDescription: 'Premium quality Maize Corn, carefully graded and dried to ensure optimal moisture content. It\'s versatile for human consumption, animal feed production, ethanol generation, and various industrial applications.'
      },
      {
        id: 6,
        name: 'Coco Peat',
        image: 'assets/products/coco peat.jpg',
        description: 'Eco-friendly growing medium for nurseries.',
        longDescription: 'Coco Peat is a highly sustainable and effective growing medium derived from coconut husks. It offers excellent water retention and aeration, making it perfect for nurseries, gardening, and hydroponics. An ideal choice for organic farming.'
      }
    ];
  }

  ngAfterViewInit() {
    // Ensure carouselTrack is defined before trying to access its nativeElement
    if (this.carouselTrack) {
      const firstItem = this.carouselTrack.nativeElement.querySelector('.carousel-item') as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const computedStyle = getComputedStyle(this.carouselTrack.nativeElement);
        // Ensure 'gap' property is retrieved correctly
        const gap = parseFloat(computedStyle.getPropertyValue('gap')) || 0;
        this.scrollAmount = itemWidth + gap;
      } else {
        // Fallback value if no items are found initially (e.g., products load asynchronously)
        // This is a safe default, adjust based on your typical item size + gap
        this.scrollAmount = 320 + 32; // Assuming default item width 320px, gap 2rem (32px)
      }
    }
  }

  scrollLeft(): void {
    // Check if carouselTrack is defined before attempting to scroll
    if (this.carouselTrack) {
      this.carouselTrack.nativeElement.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    // Check if carouselTrack is defined before attempting to scroll
    if (this.carouselTrack) {
      this.carouselTrack.nativeElement.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }

  showDetails(product: Product): void {
    // Create a deep copy if product has nested objects, otherwise shallow copy is fine.
    // For simple objects, `{ ...product }` is sufficient.
    this.selectedProduct = { ...product };

    // Apply the longDescription if available, otherwise use the short one
    this.selectedProduct.description = product.longDescription || product.description;

    // Add a class to the body to prevent scrolling when the modal is open
    document.body.classList.add('modal-open');
  }

  closeDetails(): void {
    this.selectedProduct = null;
    // Remove the class from the body when the modal is closed
    document.body.classList.remove('modal-open');
  }
}