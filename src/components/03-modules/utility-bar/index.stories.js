import { storiesOf } from '@storybook/vue'

import UtilityList 	from './variant-1/component.vue'

storiesOf('Components/Modules/Utility list', module)
  .add('Default', () => ({
    components: { UtilityList },
    template: `
      <UtilityList />
    `
  }));