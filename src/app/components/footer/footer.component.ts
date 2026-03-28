import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  year = new Date().getFullYear();

  socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/sarasafer59',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sarrasafer',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:sarasafer59@gmail.com',
      icon: 'email',
    },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
