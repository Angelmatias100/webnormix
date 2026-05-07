import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/landing/landing.routes')
      .then(m => m.LANDING_ROUTES),
    data: { title: 'Normix · Inteligencia Regulatoria' }
  },
  {
    path: 'assistant',
    loadChildren: () => import('./features/assistant/assistant.routes')
      .then(m => m.ASSISTANT_ROUTES),
    data: { title: 'Asistente Regulatorio' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
