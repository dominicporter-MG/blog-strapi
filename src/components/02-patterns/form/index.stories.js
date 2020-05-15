import { storiesOf } from '@storybook/vue'

import Form 	from './variant-1/component.vue'

storiesOf('Components/Modules/Form', module)
  .add('Default', () => ({
    components: { Form },
    template: `
      <Form />
    `
  }));