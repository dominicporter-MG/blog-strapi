import { storiesOf } from '@storybook/vue'

import Chatbox from './variant-1/component.vue'

storiesOf('Components/Patterns/Chatbox', module)
  .add('Default', () => ({
    components: { Chatbox },
    template:'<Chatbox />'
  }));