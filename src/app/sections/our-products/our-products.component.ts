import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  longDescription?: string;
}

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
})
export class OurProductsComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;
  selectedProduct: Product | null = null;
  scrollAmount: number = 0;
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Basmati Rice',
        image: 'assets/products/Basmati Rice.webp',
        description: 'Available Grades: 1121 Steamed, 1121 Sella, Traditional\nPackaging: 5kg, 10kg, 25kg, 50kg\nUse: Premium dining, hospitality, exports',
        longDescription: 'Aromatic and long-grained, our Basmati Rice is renowned for its delicate fragrance, slender texture, and fluffy post-cook quality. Ideal for biryanis, pulao, and special dishes, this rice offers unmatched elegance on the plate. We provide both 1121 and traditional varieties, carefully aged for enhanced taste and performance.'
      },
      {
        id: 2,
        name: 'Ponni Rice',
        image: 'assets/products/Ponni Rice.webp', // Replace with correct image path
        description: 'Types Available: Boiled Ponni, Raw Ponni\nBest For: South Indian meals, tiffin rice, everyday use\nGrain Type: RNR long-medium grain',
        longDescription: 'Sourced from the fertile plains of South India, our Ponni Rice (also spelled Pooni) is soft, medium-grained, and ideal for everyday meals. It is preferred for its non-sticky texture and quick cooking properties, especially in Tamil Nadu, Karnataka, and Kerala cuisine.'
      },
      {
        id: 3,
        name: 'Broken Rice',
        image: 'assets/products/Brokens Rice.webp', // Replace with actual image path
        description: 'Grain Size: 25% to 100% broken\nUsage: Idli/dosa batter, porridge, animal feed, distilleries\nPackaging: 25kg, 50kg, bulk container',
        longDescription: 'Broken Rice is derived from the same high-quality grains but with shorter fractured kernels. Economical yet nutritious, it is widely used in bulk cooking, animal feed, breweries, and rice flour production. Despite its size, it retains the full nutritional value of whole grains.'
      },
      {
        id: 4,
        name: 'Raw Rice',
        image: 'assets/products/Raw Rice.webp', // Update with correct image filename if needed
        description: 'Color: White polished or semi-polished\nVariants: RNR Medium Grain Raw, Single Polish\nApplications: Tiffin meals, rice flour, commercial cooking',
        longDescription: 'Our Raw Rice, following the RNR variety grain structure, is unboiled, polished, and perfectly milled to retain the natural taste and firmness. This rice is a favorite in South Indian kitchens for its versatility and aroma, suitable for both casual and commercial kitchens.'
      },
      {
        id: 5,
        name: 'Maize Corn',
        image: 'assets/products/Maize.jpg', // Ensure image file name matches your assets folder
        description: 'Types: Yellow Maize (Feed Grade), White Maize (Food Grade), High-Starch Industrial Maize\nMoisture: <14%\nForeign Matter: <2%\nPacking: 25kg, 50kg PP bags or as per requirement',
        longDescription: 'Our Maize Corn is sourced from certified farms and dried under controlled conditions to preserve purity and nutrition. Known for its golden yellow color, uniform kernel size, and high starch content, it is ideal for animal feed, starch extraction, ethanol production, and food processing industries.\n\nWe supply both Feed Grade and Human Consumption Grade maize, sorted and graded to meet international export standards.'
      },
      {
        id: 6,
        name: 'Toor Dal (Thuvaram Paruppu)',
        image: 'assets/products/Toor Dal (Thuvaram Paruppu).jpg',
        description: 'Color: Bright yellow\nMoisture: <12%\nPackaging: 25kg, 50kg bags\nUse: Sambar, dal curry, rasam base',
        longDescription: 'Our Toor Dal, also known as Thuvaram Paruppu, is rich in protein and fiber, making it a staple in South Indian cuisine, especially for sambar and lentil-based gravies. It is machine-cleaned, polished, and packed to retain freshness and uniformity in size.'
      },
      {
        id: 7,
        name: 'Moong Dal (Paasi Paruppu)',
        image: 'assets/products/Moong Dal (Paasi Paruppu).jpg', // <-- Update filename if needed
        description: 'Variants: Yellow split, green whole\nUse: Pongal, poriyal, soup, sweets\nFeature: High protein, low fat',
        longDescription: 'Moong Dal or Paasi Paruppu is known for its easy digestion, light texture, and high nutritional value. It is used in both sweet (payasam) and savory dishes (kootu, poriyal) across South Asian cuisine. We offer split and whole variants, polished or unpolished.'
      },
      {
        id: 8,
        name: 'Urad Dal (Ulutham Paruppu)',
        image: 'assets/products/Urad Dal (Ulutham Paruppu).jpg', // Update path if needed
        description: 'Types: Whole (black or white), split\nUse: Batter, vada, thogayal, tadka\nExport Grade: High density, machine cleaned',
        longDescription: 'Our Urad Dal, also called Ulutham Paruppu, is ideal for making idli/dosa batter, vadas, and tempering South Indian dishes. It is carefully processed for optimal fermentation and texture.'
      },
      {
        id: 9,
        name: 'Chana Dal (Kadalai Paruppu)',
        image: 'assets/products/Chana Dal (Kadalai Paruppu).jpg', // Update the image path if needed
        description: 'Grain: Uniform size, polished\nUse: Kootu, dal curry, snacks\nPack: 25kg, 50kg woven sacks',
        longDescription: 'Chana Dal, or Kadalai Paruppu, is split chickpea lentil used in a variety of Indian snacks and curries. It has a nutty flavor and remains firm after cooking, making it perfect for kootu, sundal, paruppu usili, and snacks like murukku.'
      },
      {
        id: 10,
        name: 'G9 Banana',
        image: 'assets/products/BANANA.jpg', // Update the image path as needed
        description: 'Grade: Export-quality, blemish-free\nSize: 6–8 inches, uniform bunches\nShelf Life: 15–20 days (controlled ripening)\nPacking: 13–14 kg carton boxes',
        longDescription: 'Our G9 Bananas (Grand Naine variety) are premium-quality bananas cultivated in rich Indian soil, known for their long shelf life, vibrant yellow color, and uniform size. Carefully harvested and post-harvest treated to maintain freshness during long-distance transport, they are ideal for fresh consumption and commercial fruit trade.'
      },
      {
        id: 11,
        name: 'Banana Leaf',
        image: 'assets/products/Banana-Leaf.jpg', // Ensure the path is correct
        description: 'Types: Full leaf, cut leaf, folded, frozen (on request)\nPacking: Bundles in moisture-retained wrap',
        longDescription: 'We supply Banana Leaves that are wide, green, and durable—ideal for traditional South Indian meals, temple offerings, and eco-friendly food packaging. Known for their natural aroma and antibacterial properties, these leaves are hand-picked, cleaned, and packed for international delivery.'
      },
      {
        id: 12,
        name: 'Raw Peanut',
        image: 'assets/products/Raw Peanut.jpg', // Ensure this path is correct and the image exists
        description: 'Grades: Bold, Java\nMoisture: <8%\nSizes: 38/42, 40/50, 50/60\nPacking: 25kg / 50kg PP or jute bags',
        longDescription: 'Our Raw Peanuts are freshly harvested and processed to preserve natural flavor, oil content, and crunch. Rich in protein and healthy fats, these peanuts are ideal for oil extraction, roasting, snacking, and ingredient use in food industries. We supply both with shell and shelled (bold or Java varieties).'
      },
      {
        id: 13,
        name: 'Raw Tamarind',
        image: 'assets/products/Tamarind.jpg', // Ensure this image file exists in your assets
        description: 'Varieties: Seeded / Seedless, Slab / Block form\nMoisture: <12%\nPacking: 1kg, 5kg, 25kg vacuum or loose packs',
        longDescription: 'Our Raw Tamarind is naturally sun-dried and packed to retain its strong sourness and aroma. Used widely in South Asian, African, and Middle Eastern cuisines, our tamarind is ideal for chutneys, sauces, curries, and food processing. We offer both seeded and seedless slab tamarind based on customer requirements.'
      },
      {
        id: 14,
        name: 'Animal Dung Fertilizer',
        image: 'assets/products/ANIMAL DUNG FERTILIZERS.jpg', // Ensure the image exists in your assets
        description: 'Moisture: <15%\nPacking: 25kg / 50kg bags\nType: Dried dung cakes / powdered manure',
        longDescription: 'Our Animal Dung Fertilizer is a 100% organic manure derived from cow/buffalo dung, rich in nitrogen, phosphorus, and potassium (NPK). Ideal for natural farming, it improves soil structure, moisture retention, and crop yield.'
      },
      {
        id: 15,
        name: 'Charcoal (Hardwood / Coconut Shell)',
        image: 'assets/products/Charcoal.jpg', // Ensure the correct image exists in your assets folder
        description: 'Fixed Carbon: 70–85%\nPacking: 5kg, 10kg, 25kg bags (custom options)',
        longDescription: 'Our Charcoal is high-carbon, low-moisture, and smoke-free, ideal for industrial, BBQ, and energy uses. We offer natural hardwood charcoal and coconut shell charcoal, both known for long burn time and low ash output.'
      },
      {
        id: 16,
        name: 'Coco Peat (Cocopeat Blocks)',
        image: 'assets/products/coco peat.jpg', // Make sure this path matches your actual file
        description: 'Form: 5kg blocks, loose mulch\nEC: Low EC / High EC options\nExpansion: 15–18 liters/kg when hydrated',
        longDescription: 'Coco Peat is a by-product of coconut husk used as a growing medium and soil conditioner in agriculture and horticulture. It is eco-friendly, highly water-retentive, and excellent for root aeration.'
      },
      {
        id: 17,
        name: 'Guar Gum / Guar Seeds (Sheed Alaso)',
        image: 'assets/products/GUAR GUM POWPER and SEEDS.jpg', // Replace with actual image path
        description: 'Forms: Guar seeds / Guar gum powder (food/industrial grade)\nViscosity: High – 3500 to 6000 cps\nPacking: 25kg, 50kg, jumbo bags',
        longDescription: 'Guar Gum is a natural thickener and stabilizer extracted from guar seeds (Sheed Alaso). It is widely used in food processing, oil drilling (fracking), textiles, and cosmetics. We supply both seeds and refined gum powder as per application.'
      }

    ];
  }

  ngAfterViewInit() {
    if (this.carouselTrack) {
      const firstItem = this.carouselTrack.nativeElement.querySelector('.carousel-item') as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const computedStyle = getComputedStyle(this.carouselTrack.nativeElement);
        const gap = parseFloat(computedStyle.getPropertyValue('gap')) || 0;
        this.scrollAmount = itemWidth + gap;
      } else {
        this.scrollAmount = 352; // fallback
      }
    }
  }

  scrollLeft(): void {
    this.carouselTrack?.nativeElement.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.carouselTrack?.nativeElement.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
  }

  showDetails(product: Product): void {
    console.log('Clicked Read more', product); // ✅ Add this line for testing
    this.selectedProduct = { ...product };
    this.selectedProduct.description = product.longDescription || product.description;
    //document.body.classList.add('modal-open');
  }


  closeDetails(): void {
    this.selectedProduct = null;
    document.body.classList.remove('modal-open'); // Correct
  }
}
