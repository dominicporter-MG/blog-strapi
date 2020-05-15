import { storiesOf } from '@storybook/vue'

import Layout   from   '../../01-arrangements/layout/variant-1/component.vue'
import T2       from   '../../01-arrangements/t2/variant-1/component.vue'

import Card1 from './variant-1/component.vue'
import Card2 from './variant-2/component.vue'
import Card3 from './variant-3/component.vue'
import Card4 from './variant-4/component.vue'

storiesOf('Components/Arrangements/Card', module)
  .add('Variant 1', () => ({
    components: { Card1, T2, Layout },
    template: `
    <Layout grid="25_25_25_25" style="padding: 20px">
      <div class="column">

          <Card1>
            <div class="card_media">
            <img src="https://via.placeholder.com/600x400" />
            </div>
          	<h2 class="card_title">Card title here</h2>
          	<div class="card_content">
          		<T2>Loren ipsum dolor sit etiet emet..</T2>
          	</div>
          </Card1>

        </div>
      </Layout>
    `
  }))
  .add('Variant 2', () => ({
    components: { Card2, T2, Layout },
    template: `
    <Layout grid="25_25_25_25" style="background: #ccc; padding: 20px">
      <div class="column">

          <Card2>
          	<h2 class="card_title">Card title here</h2>
          	<div class="card_content">
              <T2>Equipped with the right tools, teams can discover more opportunity than ever before and take action with confidence.</T2>
              <ul class="category_list">
                <li class="management-development"><span>Management development</span></li>
                <li class="customer-service"><span>Customer service</span></li>
              </ul>
            </div>
          </Card2>

        </div>
      </Layout>
    `
  }))
  .add('Variant 3', () => ({
    components: { Card3, T2, Layout },
    template: `
    <Layout grid="25_25_25_25" style="padding: 20px">
      <div class="column">

          <Card3>
            <div class="card_media">
            <img src="https://via.placeholder.com/600x400" />
            </div>
          	<h2 class="card_title">Card title here</h2>
          	<div class="card_content">
          		<T2>Loren ipsum dolor sit etiet emet..</T2>
          	</div>
          </Card3>

        </div>
      </Layout>
    `
  }))
  .add('Variant 4', () => ({
    components: { Card4, T2, Layout },
    template: `
    <Layout grid="50_50" style="padding: 20px">
      <div class="column">

          <Card4>
            <div class="card_media">
              <img src="https://via.placeholder.com/300x300" />
            </div>
            <h2 class="card_title">A conflict detox masterclass</h2>
            <div class="card_content">
              <T2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis felis id odio dapibus eleifend. Donec laoreet urna ut blandit vehicula. Nam fermentum tellus posuere tincidunt laoreet. Cras in vehicula libero, at varius odio. Quisque bibendum est eget consequat blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut condimentum luctus scelerisque.</T2>
            </div>
          </Card4>
        
      </div>
    </Layout>
    `
  }));