<template>
  <form :action="this.action" method="post" :class="classes">
    <fieldset class="form_fieldset">
      <Legend :text="this.legend" v-if="this.legend" />

      <slot name="form-fields"></slot>

    </fieldset>

    <slot name="form-buttons"></slot>

  </form>
</template>

<script>

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H1                 from '@/components/01-arrangements/h1/variant-1/component'
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import H3                 from '@/components/01-arrangements/h3/variant-1/component'
  import H4                 from '@/components/01-arrangements/h4/variant-1/component'
  import H5                 from '@/components/01-arrangements/h5/variant-1/component'
  import T1                 from '@/components/01-arrangements/t1/variant-1/component'
  import T2                 from '@/components/01-arrangements/t2/variant-1/component'
  import T3                 from '@/components/01-arrangements/t3/variant-1/component.vue'
  import Ul                 from '@/components/01-arrangements/ul/variant-1/component'
  import Ol                 from '@/components/01-arrangements/ol/variant-1/component.vue'
  import Legend             from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import Card               from '@/components/01-arrangements/card/variant-1/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'

  //Patterns --
  import Link               from '@/components/02-patterns/link/variant-1/component'
  import Form               from '@/components/02-patterns/form/variant-1/component'
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select             from '@/components/02-patterns/select/variant-2/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import ProductList        from '@/components/02-patterns/product-list/variant-1/component'
  import Accordion          from '@/components/02-patterns/accordion/variant-1/component'

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'


  export default {
    name: 'Form',
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, Accordion, AppBar, Pane, Form, LoginForm, Legend, Card, CopyBlock, H1, H2, H3,H4, H5, T1, T2, T3,
      Ul, Ol, Link, TextInput, PasswordInput, Textarea, Select, Toggle, ButtonGroup, Button, Icon, Modal
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      action: {
        type: String,
        default: "",
      },
      legend: {
        type: String,
        default: null,
      }
    },
    data() {
      return {

      }
    },
    computed: {
      classes() {
        return `form ${this.classList}`;  
      }
    },
    methods: {
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
