import { storiesOf } from '@storybook/vue'

import SignUpForm 	from './variant-1/component.vue'

storiesOf('Components/Modules/Sign up form', module)
  .add('For free workout sign up', () => ({
    components: { SignUpForm },
    template: `
      <SignUpForm />
    `
  }));