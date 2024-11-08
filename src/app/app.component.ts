import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    // Replace with actual login check logic
    return false;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {
    const dashboardLink = document.getElementById('dashboard-link');
    const progressLink = document.getElementById('progress-link');
    const aboutLink = document.getElementById('about-link');
    const dashboardSection = document.querySelector('#dashboard-section') as HTMLElement;
    const aboutSection = document.querySelector('#about-section') as HTMLElement;
    const progressSection = document.querySelector('#progress-section') as HTMLElement;

    

    

    // Smooth scroll to About Section
    if (aboutLink && aboutSection) {
      aboutLink.addEventListener('click', (e: Event) => {
        e.preventDefault();
        window.scrollTo({
          top: aboutSection.offsetTop,
          behavior: 'smooth'
        });
      });
    }

    // Smooth scroll to Dashboard Section
    if (dashboardLink && dashboardSection) {
      dashboardLink.addEventListener('click', (e: Event) => {
        e.preventDefault();
        window.scrollTo({
          top: dashboardSection.offsetTop,
          behavior: 'smooth'
        });
      });
    }

    // Smooth scroll to Dashboard Section
    if (progressLink && progressSection) {
      progressLink.addEventListener('click', (e: Event) => {
        e.preventDefault();
        window.scrollTo({
          top: progressSection.offsetTop,
          behavior: 'smooth'
        });
      });
    }


    // Dynamic title animation
    this.animateTitle();
  }

  animateTitle(): void {
    const title = document.getElementById('dynamic-title');
    if (title) {
      let i = 0;
      const titleText = 'AI-Powered Study Planner';
      const interval = setInterval(() => {
        title!.innerHTML = titleText.slice(0, ++i);
        if (i === titleText.length) clearInterval(interval);
      }, 150);
    }
  }
  
}




