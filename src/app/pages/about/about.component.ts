import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  

  // Array of objects for each box
  boxes = [
    { label: 'Planner', image: 'https://img.freepik.com/free-vector/business-team-meeting-office-co-working-space_74855-6913.jpg?t=st=1731059914~exp=1731063514~hmac=c4a8fbd62c47d2a09dd49c19aab413d97169887d583df5405dd357a5a19914da&w=1380' },
    { label: 'Scheduler', image: 'https://img.freepik.com/free-vector/marketing-group-working-presentation_1262-19833.jpg?t=st=1731060223~exp=1731063823~hmac=7cdda9c7fb688e142bee4a5ac1655de00a70371c7a42b819697c8f42af5448c4&w=1380' },
    { label: 'Tasks', image: 'https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?ga=GA1.1.1126351441.1731058586&semt=ais_hybrid' },
    { label: 'Quize', image: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-24586.jpg?t=st=1731060501~exp=1731064101~hmac=53ad372f3a4055bd3492b425f71a48566bccf0107c253013111335871b07bc03&w=826' },
    { label: 'Score', image: 'https://img.freepik.com/free-vector/design-team-concept-illustration_114360-4531.jpg?t=st=1731061795~exp=1731065395~hmac=f4d3665089138220c3706324d3fd96eeade45723353cfa3655da0cd8eda4c368&w=900' },
    { label: 'Progress', image: 'https://img.freepik.com/free-vector/group-analysts-working-graphs_1262-21249.jpg?t=st=1731060191~exp=1731063791~hmac=fd3b2c4c9d776de56505cb172d22bae3fc9e10119d5125acc895d4d4fec3f0e6&w=1380' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.activateAnimation();
    }, 1000);
  }

  activateAnimation() {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.add('merged');
    }
  }
}
