import { storiesOf } from '@storybook/vue'

import Calender from './variant-1/component.vue'

storiesOf('Components/Patterns/Calender', module)
  .add('Default', () => ({
    components: { Calender },
    template:'<Calender openText="Hide filters" closedText="Show filters" />'
  }));