import { storiesOf } from '@storybook/vue'

import Chatbot 	     from './variant-1/component.vue'

storiesOf('Components/Modules/Chatbot', module)
  .add('Default', () => ({
    components: { Chatbot },
    template: '<Chatbot />'
  }));