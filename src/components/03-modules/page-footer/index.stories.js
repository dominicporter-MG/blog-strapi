import { storiesOf } from '@storybook/vue'

import PageFooter 	from './variant-1/component.vue'

storiesOf('Components/Modules/Page footer', module)
  .add('Default', () => ({
    components: { PageFooter},
    template: `
      <PageFooter>
        Page footer
      </PageFooter>
    `
  }));