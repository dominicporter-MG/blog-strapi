<template >  
    <div :class="classes">
        <div v-html="courseEdition.content" > </div>

    </div>
</template>

<script>  
import gql from "graphql-tag";

//Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H1                 from '@/components/01-arrangements/h1/variant-3/component'
  import H2                 from '@/components/01-arrangements/h2/variant-3/component'
  import H3                 from '@/components/01-arrangements/h3/variant-3/component'
  import H4                 from '@/components/01-arrangements/h4/variant-3/component'
  import H5                 from '@/components/01-arrangements/h5/variant-3/component'
  import T1                 from '@/components/01-arrangements/t1/variant-3/component'
  import T2                 from '@/components/01-arrangements/t2/variant-3/component'
  import T3                 from '@/components/01-arrangements/t3/variant-3/component.vue'
  import Ul                 from '@/components/01-arrangements/ul/variant-3/component'
  import Ol                 from '@/components/01-arrangements/ol/variant-3/component.vue'
  import Legend             from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import Card               from '@/components/01-arrangements/card/variant-3/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'
  import Callout            from '@/components/01-arrangements/callout/variant-1/component'

  //Patterns --
  import Link               from '@/components/02-patterns/link/variant-1/component'
  import Form               from '@/components/02-patterns/form/variant-1/component'
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select             from '@/components/02-patterns/select/variant-2/component'
  import Checkbox           from '@/components/02-patterns/checkbox/variant-1/component'
  import RadioButton        from '@/components/02-patterns/radio-button/variant-1/component'
  import CaptionedImage     from '@/components/02-patterns/captioned-image/variant-1/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import ProductList        from '@/components/02-patterns/product-list/variant-1/component'
  import Accordion          from '@/components/02-patterns/accordion/variant-1/component'
  import SearchableList     from '@/components/03-modules/searchable-list/variant-1/component'
  import ProgressIndicator  from '@/components/02-patterns/progress-indicator/variant-1/component'
  import Lozenge            from '@/components/02-patterns/lozenge/variant-1/component'
  

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-5/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-5/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'
  import SearchBar          from '@/components/03-modules/search-bar/variant-1/component'
  import PageFooter         from '@/components/03-modules/page-footer/variant-2/component'
  import Banner             from '@/components/03-modules/banner/variant-1/component'
  import UtilityBar         from '@/components/03-modules/utility-bar/variant-2/component'

export default {  
  data() {
    return {
      courseEdition: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
          Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, Accordion, SearchableList, ProgressIndicator, AppBar, Banner, SearchBar, PageFooter, Pane, Form, LoginForm, Legend, Card, CopyBlock, H1, H2, H3,H4, H5, T1, T2, T3,
      Ul, Ol, Link, TextInput, PasswordInput, Textarea, Select, Checkbox, RadioButton, Toggle, ButtonGroup, Button, Icon, Modal, UtilityBar, Callout, CaptionedImage, Lozenge
  },
  props: {
        classList:{
        type: String,
        default: ""
        }
    },
    computed: {
      classes() {
        return `solution-page ${this.classList}`;  
      }
    },
  apollo: {
    courseEdition: {
      query: gql`
        query CourseEditions($id: ID!) {
          courseEdition(id: $id) {
            id
            label
            content
            Version
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>  