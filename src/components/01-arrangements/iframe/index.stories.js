import { storiesOf } from '@storybook/vue'

import Iframe from './variant-1/component.vue'

storiesOf('Components/Arrangements/Iframe', module)
  .add('Default', () => ({
    components: { Iframe },
    template: `
          <Iframe />
    `
  }));