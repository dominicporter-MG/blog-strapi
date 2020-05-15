import { storiesOf } from '@storybook/vue'
import store from '@/store';

import EworkoutArticlePage1 from './variant-1/component.vue'

storiesOf('Components/Pages/eWorkout page 1', module)
  .add('Default', () => ({
  	store,
    components: { EworkoutArticlePage1 },
    template: '<EworkoutArticlePage1 />'
  }));
