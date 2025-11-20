import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    searchQuery: string = '';
    locationQuery: string = '';

    topCategories = [
        { title: 'Stratégie', icon: '📋', link: '/strategie' },
        { title: 'Partenariat', icon: '🤝', link: '/partenariat' },
        { title: 'Marketing', icon: '📈', link: '/marketing' },
        { title: 'Juridique', icon: '⚖️', link: '/juridique' },
        { title: 'Immobilier', icon: '🏢', link: '/immobilier' },
        { title: 'Architecture', icon: '📐', link: '/architecture' },
        { title: 'Cabinets', icon: '💼', link: '/cabinets' },
        { title: 'Services', icon: '🔧', link: '/services' },
        { title: 'Terrains', icon: '🏞️', link: '/terrains' },
        { title: 'Espaces', icon: '🏗️', link: '/espaces' }
    ];

    articles = [
        {
            title: 'Les nouvelles stratégies de croissance pour les entreprises en RDC',
            date: '19 novembre 2025',
            badge: 'Stratégie',
            excerpt: 'Découvrez les approches innovantes qui transforment le paysage entrepreneurial congolais'
        },
        {
            title: 'Partenariats Public-Privé : Opportunités en infrastructure',
            date: '18 novembre 2025',
            badge: 'Partenariat',
            excerpt: 'Comment structurer des partenariats gagnants pour les grands projets'
        },
        {
            title: 'Réforme du droit OHADA : Impact sur les entreprises',
            date: '17 novembre 2025',
            badge: 'Juridique',
            excerpt: 'Les nouvelles dispositions juridiques à connaître absolument'
        },
        {
            title: 'Boom immobilier à Kinshasa : Zones d\'investissement 2025',
            date: '16 novembre 2025',
            badge: 'Immobilier',
            excerpt: 'Les quartiers émergents qui promettent les meilleurs rendements'
        },
        {
            title: 'Architecture durable : Tendances et innovations locales',
            date: '15 novembre 2025',
            badge: 'Architecture',
            excerpt: 'Les nouveaux standards de construction adaptés au climat tropical'
        },
        {
            title: 'Marketing digital en RDC : Les clés du succès',
            date: '14 novembre 2025',
            badge: 'Marketing',
            excerpt: 'Comment conquérir le marché local avec les outils numériques'
        }
    ];

    businessCategories = [
        { title: 'Consulting & Stratégie', image: '📊', link: '/business/consulting', description: 'Experts en développement stratégique et mise en œuvre' },
        { title: 'Services Juridiques', image: '⚖️', link: '/business/juridique', description: 'Cabinets d\'avocats et conseillers juridiques' },
        { title: 'Services Financiers', image: '💰', link: '/business/finance', description: 'Comptabilité, audit et gestion financière' },
        { title: 'Marketing & Communication', image: '📢', link: '/business/marketing', description: 'Agences de communication et stratégie digitale' }
    ];

    propertyCategories = [
        { title: 'Terrains & Parcelles', image: '🏞️', link: '/immobilier/terrains', description: 'Opportunités foncières et terrains à bâtir' },
        { title: 'Espaces Commerciaux', image: '🏢', link: '/immobilier/espaces', description: 'Bureaux, entrepôts et locaux professionnels' },
        { title: 'Architecture & Design', image: '📐', link: '/immobilier/architecture', description: 'Plans architecturaux et conception de projets' },
        { title: 'Expertise Immobilière', image: '🏘️', link: '/immobilier/expertise', description: 'Évaluation, conseil et gestion immobilière' }
    ];

    partnershipCategories = [
        { title: 'Partenaires Stratégiques', image: '🤝', link: '/partenariat/strategique', description: 'Alliances d\'affaires et collaborations' },
        { title: 'Réseaux d\'Experts', image: '👥', link: '/partenariat/experts', description: 'Mise en relation avec des cabinets spécialisés' },
        { title: 'Services Externes', image: '🔧', link: '/partenariat/services', description: 'Prestataires et fournisseurs qualifiés' },
        { title: 'Opportunités d\'Affaires', image: '💼', link: '/partenariat/opportunites', description: 'Projets et investissements en cours' }
    ];

    regions = [
        { name: 'Kinshasa', image: '🏙️' },
        { name: 'Lubumbashi', image: '🏙️' },
        { name: 'Goma', image: '🏙️' },
        { name: 'Bukavu', image: '🏙️' },
        { name: 'Matadi', image: '🏙️' },
        { name: 'Kisangani', image: '🏙️' },
        { name: 'Mbandaka', image: '🏙️' },
        { name: 'Kananga', image: '🏙️' }
    ];

    cities = [
        { name: 'Kinshasa', image: '🌆' },
        { name: 'Lubumbashi', image: '🌆' },
        { name: 'Goma', image: '🌆' },
        { name: 'Bukavu', image: '🌆' },
        { name: 'Matadi', image: '🌆' },
        { name: 'Kisangani', image: '🌆' },
        { name: 'Mbandaka', image: '🌆' },
        { name: 'Kananga', image: '🌆' }
    ];

    statistics = [
        { number: '5000+', label: 'Professionnels Inscrits', icon: '👥' },
        { number: '50+', label: 'Catégories de Services', icon: '📊' },
        { number: '26', label: 'Provinces Couvertes', icon: '🗺️' },
        { number: '98%', label: 'Satisfaction Client', icon: '⭐' }
    ];

    testimonials = [
        {
            name: 'Jean-Pierre K.',
            role: 'PDG, Société d\'Architecture',
            text: 'Grâce à KM House, j\'ai pu développer mon réseau professionnel et décrocher plusieurs contrats importants.',
            rating: 5
        },
        {
            name: 'Marie L.',
            role: 'Avocate d\'Affaires',
            text: 'Une plateforme exceptionnelle pour la mise en relation avec des clients et partenaires stratégiques.',
            rating: 5
        },
        {
            name: 'Patrick M.',
            role: 'Consultant en Stratégie',
            text: 'L\'outil idéal pour gérer ma visibilité en ligne et attirer de nouveaux clients qualifiés.',
            rating: 5
        }
    ];

    onSearch() {
        console.log('Recherche:', this.searchQuery, this.locationQuery);
    }
}
