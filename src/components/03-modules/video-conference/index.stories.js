import { storiesOf } from '@storybook/vue'

import VideoConference 	from './variant-1/component.vue'

storiesOf('Components/Modules/Video conference', module)
  .add('Default', () => ({
    components: { VideoConference },
    template: `
      <VideoConference />
    `
  }));