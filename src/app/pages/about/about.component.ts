import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque service fourni à nos clients et partenaires.'
    },
    {
      icon: '🤝',
      title: 'Intégrité',
      description: 'Transparence et honnêteté sont au cœur de toutes nos interactions professionnelles.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Nous adoptons les technologies et méthodes les plus avancées pour servir au mieux nos clients.'
    },
    {
      icon: '🌍',
      title: 'Impact local',
      description: 'Contribuer au développement économique de la RDC est notre mission première.'
    }
  ];

  milestones = [
    {
      year: '2020',
      title: 'Création de KM House',
      description: 'Lancement de notre activité immobilière avec une équipe de 5 professionnels.'
    },
    {
      year: '2022',
      title: 'Expansion des services',
      description: 'Ajout des services de consulting, juridique et stratégie d\'entreprise.'
    },
    {
      year: '2024',
      title: 'KM Elite Entreprise',
      description: 'Transformation en plateforme business complète avec plus de 5000 professionnels.'
    },
    {
      year: '2025',
      title: 'Couverture nationale',
      description: 'Présence dans les 26 provinces de la RDC avec des partenaires locaux.'
    }
  ];

  team = [
    {
      name: 'Ir. Germain KANYINDA',
      role: 'CEO & Fondateur',
      expertise: 'Expert en géomatique et développement d\'entreprise',
      image: '👨‍💼'
    },
    {
      name: 'Marie-Claire LUBOYA',
      role: 'Directrice Juridique',
      expertise: 'Spécialiste en droit des affaires OHADA',
      image: '👩‍💼'
    },
    {
      name: 'Patrick MUKENDI',
      role: 'Directeur Immobilier',
      expertise: '15 ans d\'expérience dans l\'immobilier congolais',
      image: '👨‍💼'
    },
    {
      name: 'Sophie KABONGO',
      role: 'Directrice Marketing',
      expertise: 'Experte en stratégie digitale et communication',
      image: '👩‍💼'
    }
  ];

  statistics = [
    { number: '5000+', label: 'Professionnels actifs', icon: '👥' },
    { number: '500+', label: 'Entreprises partenaires', icon: '🏢' },
    { number: '1200+', label: 'Projets réalisés', icon: '✅' },
    { number: '26', label: 'Provinces couvertes', icon: '🗺️' },
    { number: '98%', label: 'Satisfaction client', icon: '⭐' },
    { number: '50+', label: 'Experts certifiés', icon: '🎓' }
  ];

  services = [
    {
      icon: '🏢',
      title: 'Immobilier',
      description: 'Vente, location et gestion de biens immobiliers (maisons, terrains, espaces commerciaux).'
    },
    {
      icon: '📐',
      title: 'Géomatique',
      description: 'Services de topographie, cadastre, SIG et expertise foncière par des géomètres certifiés.'
    },
    {
      icon: '⚖️',
      title: 'Juridique',
      description: 'Cabinet d\'avocats spécialisé en droit des affaires, droit immobilier et conseil juridique.'
    },
    {
      icon: '📊',
      title: 'Consulting',
      description: 'Stratégie d\'entreprise, étude de marché, plan d\'affaires et accompagnement stratégique.'
    },
    {
      icon: '💰',
      title: 'Finance',
      description: 'Comptabilité, audit, gestion financière et conseil en investissement.'
    },
    {
      icon: '📈',
      title: 'Marketing',
      description: 'Stratégie digitale, communication d\'entreprise et développement de marque.'
    }
  ];

  certifications = [
    {
      icon: '🏅',
      title: 'Certification OHADA',
      description: 'Conformité aux normes juridiques de l\'Organisation pour l\'Harmonisation en Afrique du Droit des Affaires.'
    },
    {
      icon: '📜',
      title: 'Agrément Ministériel',
      description: 'Agréé par le Ministère des Affaires Foncières et le Ministère du Commerce.'
    },
    {
      icon: '🎓',
      title: 'Experts certifiés',
      description: 'Équipe composée de géomètres, avocats et consultants certifiés et diplômés.'
    },
    {
      icon: '🔒',
      title: 'Sécurité des transactions',
      description: 'Processus sécurisés et transparents pour toutes les opérations immobilières et commerciales.'
    }
  ];

  partners = [
    { name: 'Ministère des Affaires Foncières', type: 'Partenaire institutionnel' },
    { name: 'Ordre National des Géomètres-Experts', type: 'Ordre professionnel' },
    { name: 'Barreau de Kinshasa', type: 'Instance juridique' },
    { name: 'Chambre de Commerce RDC', type: 'Organisation économique' },
    { name: 'Fédération des Entreprises du Congo', type: 'Réseau d\'affaires' },
    { name: 'Association des Architectes RDC', type: 'Partenaire technique' }
  ];
}
