import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyReference: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get property details from query params
    this.route.queryParams.subscribe(params => {
      if (params['property']) {
        this.contactForm.propertyReference = `REF-${params['property']}`;
      }
      if (params['title']) {
        this.contactForm.message = `Je suis intéressé(e) par le bien: ${params['title']}\n\n`;
      }
    });
  }

  contactInfo = [
    {
      icon: '📞',
      title: 'Téléphone',
      value: '+243 XXX XXX XXX',
      link: 'tel:+243XXXXXXXXX'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'contact@kmelite.com',
      link: 'mailto:contact@kmelite.com'
    },
    {
      icon: '📍',
      title: 'Adresse',
      value: 'Kinshasa, RD Congo',
      link: '#'
    },
    {
      icon: '🕐',
      title: 'Horaires',
      value: 'Lun - Sam: 8h - 18h',
      link: '#'
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    alert('Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyReference: ''
    };
  }
}
