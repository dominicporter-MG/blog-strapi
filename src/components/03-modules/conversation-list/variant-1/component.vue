<template>
  <div :class="classes">

    <H3 class="list-heading">{{ this.listHeading }}</H3>

    <ul>
      <slot></slot>
    </ul>

  </div>
</template>

<script>
  import H3                 from '@/components/01-arrangements/h2/variant-1/component'

  export default {
    name: 'ConversationList',
    components: {
      H3
    },
    props: {
      classList:{
        type: String,
        default: "",
      },
      listHeading: {
        type: String,
        required: true
      }
    },
    data() {
      return {

      }
    },
    computed: {
      classes() {
        return `conversation-list ${this.classList}`;  
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
