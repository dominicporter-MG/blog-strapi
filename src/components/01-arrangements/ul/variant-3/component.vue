
<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'Ul',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: String
    },
    computed: {
      classes() {
        return `ul ul--${this.variant} ${this.classList}`;
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
