import { storiesOf } from '@storybook/vue'

import ProgressIndicator   from './variant-1/component.vue'

storiesOf('Components/Patterns/Progress indicator', module)
  .add('Default', () => ({
    components: { ProgressIndicator },
    template:'<ProgressIndicator progress="40" />'
  }));