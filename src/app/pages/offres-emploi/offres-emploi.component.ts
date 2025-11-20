import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offres-emploi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offres-emploi.component.html',
  styleUrl: './offres-emploi.component.scss'
})
export class OffresEmploiComponent {
  jobOffers = [
    {
      id: 1,
      title: 'Développeur Full Stack',
      company: 'Tech Solutions RDC',
      location: 'Kinshasa, Gombe',
      type: 'CDI',
      salary: 'Négociable',
      postedDate: '2025-11-15'
    },
    {
      id: 2,
      title: 'Comptable Senior',
      company: 'Cabinet Expertise Comptable',
      location: 'Kinshasa, Limete',
      type: 'CDI',
      salary: '800-1200 USD',
      postedDate: '2025-11-14'
    },
    {
      id: 3,
      title: 'Chef de Projet',
      company: 'Construction & Développement',
      location: 'Lubumbashi',
      type: 'CDD',
      salary: '1500-2000 USD',
      postedDate: '2025-11-13'
    },
    {
      id: 4,
      title: 'Responsable Marketing Digital',
      company: 'Agence Digitale Plus',
      location: 'Kinshasa, Centre-ville',
      type: 'CDI',
      salary: 'À partir de 1000 USD',
      postedDate: '2025-11-12'
    },
    {
      id: 5,
      title: 'Infirmier(ère)',
      company: 'Clinique Moderne',
      location: 'Kinshasa, Ngaliema',
      type: 'CDI',
      salary: '500-800 USD',
      postedDate: '2025-11-11'
    },
    {
      id: 6,
      title: 'Enseignant(e) Anglais',
      company: 'École Internationale',
      location: 'Kinshasa, Gombe',
      type: 'CDI',
      salary: '600-900 USD',
      postedDate: '2025-11-10'
    }
  ];
}
