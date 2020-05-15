<template>
  <router-link :to="buildLink(this.linkTarget)" :class="classes">
    <span class="logo_text">MindGym</span>
    <svg width="26px" height="28px" viewBox="0 0 26 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Product" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="MVP-1024-01-Dashboard-01" transform="translate(-34.000000, -17.000000)">
              <g id="logo-small" transform="translate(34.000000, 17.000000)">
                  <path d="M4.80681447,19.1085711 C2.29774451,19.1085711 0.26218988,21.0537533 0.26218988,23.4514282 C0.26218988,25.8493853 2.29774451,27.7942852 4.80681447,27.7942852 C7.31617982,27.7942852 9.35143906,25.8493853 9.35143906,23.4514282 C9.35143906,21.0537533 7.31617982,19.1085711 4.80681447,19.1085711" id="Fill-171"></path>
                  <path d="M12.9345401,7.08766366e-14 C5.79288974,7.08766366e-14 -9.33911317e-14,5.83500272 -9.33911317e-14,13.0282475 C-9.33911317e-14,15.0549285 0.459870477,16.9738177 1.2799889,18.6845682 C2.33341687,17.764615 3.70595831,17.20591 5.20608087,17.20591 C8.51579859,17.20591 11.2084993,19.9181861 11.2084993,23.2519647 C11.2084993,24.1800104 10.999292,25.0595013 10.6268322,25.8460905 C11.3762508,25.9820442 12.146558,26.0571424 12.9345401,26.0571424 C20.0765118,26.0571424 25.8694015,20.2224634 25.8694015,13.0282475 C25.8694015,5.83500272 20.0765118,7.08766366e-14 12.9345401,7.08766366e-14" id="Fill-175"></path>
              </g>
          </g>
      </g>
    </svg>
  </router-link>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: "white",
      },
      linkTarget: {
        type: String,
        default: "/",
      }
    },
    computed: {
      classes() {
        return `logo logo--${this.variant} ${this.classList}`;
      },
    },
    methods: {
      buildLink(location) {
        return "/" + this.$store.state.ui.currentPrototype + location
      },
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
