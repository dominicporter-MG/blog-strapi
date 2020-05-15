import { storiesOf } from '@storybook/vue'

import Table from './variant-1/component.vue'

storiesOf('Components/Arrangements/Table', module)
  .add('Default', () => ({
    components: { Table },
    template: '<Table />'
  }));