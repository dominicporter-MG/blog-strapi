import { storiesOf } from '@storybook/vue'

import ConversationList 	from './variant-1/component.vue'

storiesOf('Components/Modules/Conversation list', module)
  .add('Default', () => ({
    components: { ConversationList },
    template: `
      <ConversationList listHeading="Conversations" />
    `
  }));