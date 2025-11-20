import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDropdownOpen = false;
  isNavbarHidden = false;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Scroll vers le bas et on a dépassé 50px
    if (scrollTop > 50 && scrollTop > this.lastScrollTop) {
      this.isNavbarHidden = true;
      this.isDropdownOpen = false;
    } 
    // Scroll vers le haut
    else if (scrollTop < this.lastScrollTop) {
      this.isNavbarHidden = false;
    }
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const userMenu = target.closest('.user-menu');
    
    // Si on clique en dehors du user-menu, fermer le dropdown
    if (!userMenu && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
    
    // Si on clique sur un élément du dropdown (lien), fermer le dropdown
    if (target.closest('.dropdown-item')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
