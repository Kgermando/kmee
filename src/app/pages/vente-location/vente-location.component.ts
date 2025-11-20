import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vente-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vente-location.component.html',
  styleUrl: './vente-location.component.scss'
})
export class VenteLocationComponent {
  searchQuery: string = '';
  selectedType: string = 'tous';
  selectedCategory: string = 'tous';
  selectedCity: string = 'tous';
  priceRange: string = 'tous';

  constructor(private router: Router) {}

  propertyTypes = [
    { value: 'tous', label: 'Tous les types' },
    { value: 'vente', label: 'Vente' },
    { value: 'location', label: 'Location' }
  ];

  categories = [
    { value: 'tous', label: 'Toutes catégories' },
    { value: 'maison', label: 'Maisons', icon: '🏠' },
    { value: 'appartement', label: 'Appartements', icon: '🏢' },
    { value: 'terrain', label: 'Terrains', icon: '🏞️' },
    { value: 'commercial', label: 'Espaces commerciaux', icon: '🏪' },
    { value: 'bureau', label: 'Bureaux', icon: '💼' }
  ];

  cities = [
    { value: 'tous', label: 'Toutes les villes' },
    { value: 'kinshasa', label: 'Kinshasa' },
    { value: 'lubumbashi', label: 'Lubumbashi' },
    { value: 'goma', label: 'Goma' },
    { value: 'bukavu', label: 'Bukavu' },
    { value: 'matadi', label: 'Matadi' },
    { value: 'kisangani', label: 'Kisangani' }
  ];

  priceRanges = [
    { value: 'tous', label: 'Tous les prix' },
    { value: '0-500', label: '0 - 500 USD' },
    { value: '500-1000', label: '500 - 1000 USD' },
    { value: '1000-2000', label: '1000 - 2000 USD' },
    { value: '2000-5000', label: '2000 - 5000 USD' },
    { value: '5000+', label: '5000+ USD' }
  ];

  featuredProperties = [
    {
      id: 1,
      title: 'Villa moderne à Gombe',
      type: 'vente',
      category: 'maison',
      price: 250000,
      location: 'Gombe, Kinshasa',
      bedrooms: 4,
      bathrooms: 3,
      surface: 350,
      image: '🏡',
      featured: true,
      description: 'Magnifique villa moderne avec piscine et jardin'
    },
    {
      id: 2,
      title: 'Appartement meublé Lubumbashi',
      type: 'location',
      category: 'appartement',
      price: 800,
      location: 'Lubumbashi Centre',
      bedrooms: 2,
      bathrooms: 2,
      surface: 120,
      image: '🏢',
      featured: true,
      description: 'Appartement entièrement meublé dans quartier résidentiel'
    },
    {
      id: 3,
      title: 'Terrain constructible 500m²',
      type: 'vente',
      category: 'terrain',
      price: 50000,
      location: 'Masina, Kinshasa',
      bedrooms: 0,
      bathrooms: 0,
      surface: 500,
      image: '🏞️',
      featured: true,
      description: 'Terrain viabilisé avec tous les raccordements'
    },
    {
      id: 4,
      title: 'Local commercial avenue Kasa-Vubu',
      type: 'location',
      category: 'commercial',
      price: 1200,
      location: 'Kasa-Vubu, Kinshasa',
      bedrooms: 0,
      bathrooms: 1,
      surface: 80,
      image: '🏪',
      featured: true,
      description: 'Emplacement stratégique pour commerce'
    },
    {
      id: 5,
      title: 'Bureau moderne Gombe',
      type: 'location',
      category: 'bureau',
      price: 1500,
      location: 'Gombe, Kinshasa',
      bedrooms: 0,
      bathrooms: 2,
      surface: 150,
      image: '💼',
      featured: false,
      description: 'Espace de bureau tout équipé'
    },
    {
      id: 6,
      title: 'Maison familiale Lemba',
      type: 'vente',
      category: 'maison',
      price: 120000,
      location: 'Lemba, Kinshasa',
      bedrooms: 3,
      bathrooms: 2,
      surface: 200,
      image: '🏠',
      featured: false,
      description: 'Maison spacieuse avec grand jardin'
    }
  ];

  services = [
    {
      icon: '📐',
      title: 'Expertise Géométrique',
      description: 'Services de géomètres experts pour vos terrains'
    },
    {
      icon: '📋',
      title: 'Conseils Juridiques',
      description: 'Accompagnement juridique pour vos transactions'
    },
    {
      icon: '🏗️',
      title: 'Architecture',
      description: 'Plans et conception architecturale sur mesure'
    },
    {
      icon: '💰',
      title: 'Financement',
      description: 'Solutions de financement adaptées à vos besoins'
    }
  ];

  onSearch() {
    console.log('Search:', {
      query: this.searchQuery,
      type: this.selectedType,
      category: this.selectedCategory,
      city: this.selectedCity,
      priceRange: this.priceRange
    });
  }

  get filteredProperties() {
    return this.featuredProperties.filter(property => {
      const matchType = this.selectedType === 'tous' || property.type === this.selectedType;
      const matchCategory = this.selectedCategory === 'tous' || property.category === this.selectedCategory;
      return matchType && matchCategory;
    });
  }

  onCall(property: any) {
    // Simulate phone call action
    const phoneNumber = '+243 XXX XXX XXX';
    alert(`Appel pour: ${property.title}\nNuméro: ${phoneNumber}`);
    // In production: window.location.href = 'tel:+243XXXXXXXXX';
  }

  onContact(property: any) {
    // Navigate to contact form with property details
    this.router.navigate(['/contact'], { 
      queryParams: { 
        property: property.id,
        title: property.title 
      } 
    });
  }
}
