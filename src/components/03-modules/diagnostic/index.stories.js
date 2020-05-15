import { storiesOf } from '@storybook/vue'

import Diagnostic1 	from './variant-1/component.vue'
import Diagnostic2 	from './variant-2/component.vue'

storiesOf('Components/Modules/Diagnostic', module)
  .add('Variant 1', () => ({
    components: { Diagnostic1 },
    template: `
      <Diagnostic1 />
    `
  }))
  .add('Variant 2', () => ({
    components: { Diagnostic2 },
    template: `
      <Diagnostic2 />
    `
  }));