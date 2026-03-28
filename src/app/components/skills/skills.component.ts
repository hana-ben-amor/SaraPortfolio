import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

interface SkillGroup {
  key: 'devops' | 'cloud' | 'languages' | 'web';
  icon: string;
  color: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  skillGroups: SkillGroup[] = [
    {
      key: 'devops',
      icon: '☁️',
      color: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
      items: ['Databricks', 'MLflow', 'Docker', 'Jenkins'],
    },
    {
      key: 'cloud',
      icon: '🧠',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'LangChain'],
    },
    {
      key: 'languages',
      icon: '💻',
      color: 'from-pink-500/20 to-pink-500/20 border-pink-500/30',
      items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
    },
    {
      key: 'web',
      icon: '🌐',
      color: 'from-green-500/20 to-teal-500/20 border-green-500/30',
      items: ['Django', 'Angular', 'Streamlit', 'Spring Boot', 'Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Neo4j'],
    },
  ];
}
