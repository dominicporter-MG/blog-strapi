import { storiesOf } from '@storybook/vue'

import Callout from './variant-1/component.vue'

storiesOf('Components/Arrangements/Callout', module)
  .add('Default', () => ({
    components: { Callout },
    template: '<Callout />'
  }));