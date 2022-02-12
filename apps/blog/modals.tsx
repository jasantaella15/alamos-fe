import { ModalRoutesType } from './models/modals';
import { PostComponent } from './pages/post/[slug]';

export const ModalRoutes: ModalRoutesType = {
  post_view: {
    component: PostComponent,
    params: ['slug']
  }
};
