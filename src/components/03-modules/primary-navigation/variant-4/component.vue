<template>
  <div :class="this.$store.state.ui.primaryNavigation.visible == true ? 'primary-navigation primary-navigation--visible' : 'primary-navigation'" >

    <Button variant="icononly" classList="primary-navigation_trigger" @click="toggleMenu()">
      <span class="button_text">Menu</span>
      <Icon placement="after" graphic="close" />
    </Button>

    <ul class="primary-navigation_list">
      
      <li  v-for="(navItem, index) in navItems" :key="index" class="primary-navigation_list-item" @click="toggleMenu(buildNavLink(navItem.location))"><router-link :to="buildNavLink(navItem.location)" class="primary-navigation_link"><Icon placement="before" :graphic="navItem.icon" /><span class="link_text">{{navItem.text}}</span></router-link></li>
    
      <li  v-if="this.$store.getters.loggedInUser" class="primary-navigation_list-item"><a href="#n" class="primary-navigation_link" @click.prevent="onLogout"><Icon placement="before" graphic="logout" /><span class="link_text">Sign out</span></a></li>

    </ul>

  </div>
</template>

<script>

  //Tokens --
  import Icon                   from '@/components/00-tokens/icon/variant-1/component'
  import Logo                   from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container              from '@/components/01-arrangements/container/variant-1/component'
  import Layout                 from '@/components/01-arrangements/layout/variant-1/component'
  import Pane                   from '@/components/01-arrangements/pane/variant-1/component'
  import H1                     from '@/components/01-arrangements/h1/variant-1/component'
  import H2                     from '@/components/01-arrangements/h2/variant-1/component'
  import H3                     from '@/components/01-arrangements/h3/variant-1/component'
  import H4                     from '@/components/01-arrangements/h4/variant-1/component'
  import H5                     from '@/components/01-arrangements/h5/variant-1/component'
  import T1                     from '@/components/01-arrangements/t1/variant-1/component'
  import T2                     from '@/components/01-arrangements/t2/variant-1/component'
  import T3                     from '@/components/01-arrangements/t3/variant-1/component.vue'
  import Ul                     from '@/components/01-arrangements/ul/variant-1/component'
  import Ol                     from '@/components/01-arrangements/ol/variant-1/component.vue'
  import Legend                 from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup            from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import Card                   from '@/components/01-arrangements/card/variant-1/component'
  import CopyBlock              from '@/components/01-arrangements/copy-block/variant-1/component'

  //Patterns --
  import Link                   from '@/components/02-patterns/link/variant-1/component'
  import Form_1                 from '@/components/02-patterns/form/variant-1/component'
  import Textarea               from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput              from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput          from '@/components/02-patterns/password-input/variant-1/component'
  import Select                 from '@/components/02-patterns/select/variant-2/component'
  import Checkbox               from '@/components/02-patterns/checkbox/variant-1/component'
  import RadioButton            from '@/components/02-patterns/radio-button/variant-1/component'
  import Toggle                 from '@/components/02-patterns/toggle/variant-1/component'
  import Button                 from '@/components/02-patterns/button/variant-1/component'
  import Modal                  from '@/components/02-patterns/modal/variant-1/component'
  import ProductList            from '@/components/02-patterns/product-list/variant-1/component'
  import Accordion              from '@/components/02-patterns/accordion/variant-1/component'
  import SearchableList         from '@/components/03-modules/searchable-list/variant-1/component'
  import ProgressIndicator      from '@/components/02-patterns/progress-indicator/variant-1/component'
  import Chatbox                from '@/components/02-patterns/chatbox/variant-1/component'
  import Calendar               from '@/components/02-patterns/calendar/variant-1/component'
  import VideoPlayer            from '@/components/02-patterns/video-player/variant-1/component'

  //Modules --
  import PageHeader             from '@/components/03-modules/page-header/variant-4/component'
  import PrimaryNavigation      from '@/components/03-modules/primary-navigation/variant-4/component'
  import SignUpForm             from '@/components/03-modules/sign-up-form/variant-1/component'
  import LoginForm              from '@/components/03-modules/login-form/variant-1/component'
  import Listen                 from '@/components/03-modules/listen/variant-1/component'
  import AppBar                 from '@/components/03-modules/app-bar/variant-1/component'
  import PageFooter             from '@/components/03-modules/page-footer/variant-2/component'
  import VideoConference        from '@/components/03-modules/video-conference/variant-1/component'
  import Chatbot                from '@/components/03-modules/chatbot/variant-1/component'
  import UtilityBar             from '@/components/03-modules/utility-bar/variant-1/component'

  export default {
    name: 'PrimaryNavigation_1',
    components: {
      Icon,
      Button
    },
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        loggedIn: {
          items: [
            {
              "text": "Topic",
              "location": "/topic/",
              "icon": "star"
            },
            {
              "text": "Article page 1",
              "location": "/eworkout/page-1/",
              "icon": "star"
            },
            {
              "text": "Article page 2",
              "location": "/eworkout/page-2/",
              "icon": "star"
            },
            {
              "text": "Article page 3",
              "location": "/eworkout/page-3/",
              "icon": "star"
            }
          ]
        },
        loggedOut: {
          items: [
            {
              "text": "Topic",
              "location": "/topic/",
              "icon": "star"
            },
            {
              "text": "Article page 1",
              "location": "/eworkout/page-1/",
              "icon": "star"
            },
            {
              "text": "Article page 2",
              "location": "/eworkout/page-2/",
              "icon": "star"
            },
            {
              "text": "Article page 3",
              "location": "/eworkout/page-3/",
              "icon": "star"
            }
          ]
        }
      }
    },
    computed: {
      classes() {
        return `primary-navigation primary-navigation--${this.variant} ${this.classList}`;  
      },
      navItems() {
        if(this.$store.getters.loggedInUser){
          return this.loggedIn.items
        } else {
          return this.loggedOut.items
        }
      }
    },
    methods: {
      buildNavLink(location) {
        return "/" + this.$store.state.ui.currentPrototype + location
      },
      toggleMenu (location){
        //console.log("Called toggleMenu");
        if(this.$store.state.ui.primaryNavigation.visible == true){
          this.$store.state.ui.primaryNavigation.visible = false
          if(location){
            this.$router.push(location);
          }
        } else {
          this.$store.state.ui.primaryNavigation.visible = true
        }
      },
      onLogout() {
        this.$emit('logOut')
      }
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
