import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  onSubmit() {
    console.log('Login:', { email: this.email, password: this.password, rememberMe: this.rememberMe });
    // Logique de connexion à implémenter
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
