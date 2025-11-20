import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: string = 'particulier';
  acceptTerms: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    if (!this.acceptTerms) {
      alert('Veuillez accepter les conditions d\'utilisation');
      return;
    }
    console.log('Register:', {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
      userType: this.userType,
      acceptTerms: this.acceptTerms
    });
    // Logique d'inscription à implémenter
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
