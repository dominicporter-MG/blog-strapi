<template>
  <div :class="classes">
    <Container>
      <slot></slot>
    </Container>
  </div>
</template>

<script>

  //Tokens --


  //Arrangements --
  import Container              from '@/components/01-arrangements/container/variant-1/component'
  import T3                     from '@/components/01-arrangements/t3/variant-1/component.vue'

  //Patterns --

  //Modules --


  export default {
    name: 'PageFooter',
    components: {
      Container,
      T3
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
        return `page-footer ${this.classList}`;  
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
