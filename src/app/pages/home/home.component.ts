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
        { title: 'Restaurant', icon: '🍴', link: '/restaurant' },
        { title: 'Electricien', icon: '⚡', link: '/electricien' },
        { title: 'Beauté', icon: '💅', link: '/beaute' },
        { title: 'Pharmacie', icon: '⚕️', link: '/pharmacie' },
        { title: 'Kiné', icon: '🏥', link: '/kine' },
        { title: 'Taxi', icon: '🚕', link: '/taxi' },
        { title: 'Comptable', icon: '📊', link: '/comptable' },
        { title: 'Notaire', icon: '✍️', link: '/notaire' },
        { title: 'Plombier', icon: '🔧', link: '/plombier' }
    ];

    articles = [
        {
            title: 'Rénovation : ces 4 couleurs qui métamorphosent une pièce',
            date: '17 novembre 2025',
            badge: 'Actualités'
        },
        {
            title: 'Le retour des punaises de lit : panique dans les salles obscures',
            date: '16 novembre 2025',
            badge: 'Actualités'
        },
        {
            title: 'Chaudière qui fuit par le bas : pourquoi et comment réparer ?',
            date: '15 novembre 2025',
            badge: 'Chaudière'
        },
        {
            title: 'Incendie de poêle et cheminée : comment éviter le drame cet hiver',
            date: '15 novembre 2025',
            badge: 'Actualités'
        },
        {
            title: 'La tension artérielle : quand le pompe du corps s\'emballe',
            date: '14 novembre 2025',
            badge: 'Actualités'
        }
    ];

    healthCategories = [
        { title: 'Se soigner au quotidien', image: '🏥', link: '/sante/quotidien' },
        { title: 'Spécialités médicales', image: '👨‍⚕️', link: '/sante/specialites' }
    ];

    housingCategories = [
        { title: 'Les travaux de la maison', image: '🏗️', link: '/logement/travaux' },
        { title: 'Équiper la maison', image: '🛋️', link: '/logement/equipement' },
        { title: 'Jardins et extérieurs', image: '🌳', link: '/logement/jardin' },
        { title: 'L\'immobilier', image: '🏘️', link: '/logement/immobilier' }
    ];

    proximityCategories = [
        { title: 'Les bons restos', image: '🍽️', link: '/proximite/restaurants' },
        { title: 'Sorties', image: '🎭', link: '/proximite/sorties' },
        { title: 'Shopping', image: '🛍️', link: '/proximite/shopping' },
        { title: 'Cuisiner de bons repas', image: '🥘', link: '/proximite/cuisine' }
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

    onSearch() {
        console.log('Recherche:', this.searchQuery, this.locationQuery);
    }
}
