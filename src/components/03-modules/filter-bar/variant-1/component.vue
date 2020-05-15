<template>
  <div :class="classes">

    <Accordion variant="handheld" openText="Hide filters" closedText="Show filters">

      <slot></slot>

    </Accordion>

  </div>
</template>

<script>

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --

  //Patterns --
  import Accordion          from '@/components/02-patterns/accordion/variant-1/component'

  //Modules --


  export default {
    name: 'FilterBar',
    components: {
      Accordion
    },
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    data() {
      return {
      }
    },
    computed: {
      classes() {
        return `filter-bar ${this.classList}`;
      }
    },
    methods: {
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
