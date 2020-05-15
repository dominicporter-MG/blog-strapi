import { storiesOf } from '@storybook/vue'

import SearchBar 	from './variant-1/component.vue'

storiesOf('Components/Modules/App bar', module)
  .add('Default', () => ({
    components: { SearchBar },
    template: `
      <SearchBar />
    `
  }));