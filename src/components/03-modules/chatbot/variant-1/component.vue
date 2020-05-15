<template>
  <div :class="classes">

    <div v-if="this.variant == 'new'">
    
      <div class="chatbot_header">
        <Icon placement="before" graphic="cheveron" @click="close()" />
        <H2 class="conversation_title">New Conversation <span class="conversation_status">Online</span></H2>
      </div>
      <div class="chatbot_conversation" id="chatbot_conversation">
        <ul>

        </ul>
      </div>
      <div class="chatbot_input">
        <Textarea id="abc" maxLength="400" label="Type your response" placeholder="Type your response" @input="addToConvo()" />
          <ButtonGroup variant="right">
            <Button variant="secondary" text="Attach file"><Icon placement="before" graphic="checkmark" /></Button>
            <Button variant="secondary" text="Insert Emoticon"><Icon placement="before" graphic="mood-happy-outline" /></Button>
          </ButtonGroup>
      </div>

    </div>

    <div v-else>

      <div class="chatbot_header">
        <Icon placement="before" graphic="cheveron" @click="close()" />
        <H2 class="conversation_title">Conversation 2 <span class="conversation_status">Online</span></H2>
      </div>
      <div class="chatbot_conversation" id="chatbot_conversation">
        <ul>
          <li :class="conv.type" v-for="(conv, index) in conversation" :key="index">
            <H2 v-if="conv.title">{{ conv.title }}</H2>
            {{ conv.content }}
            <ButtonGroup variant="left" v-if="conv.buttonText">
              <Button variant="primary" :text="conv.buttonText" />
            </ButtonGroup>
          </li>
        </ul>
      </div>
      <div class="chatbot_input">
        <Textarea id="abc" maxLength="400" label="Type your response" placeholder="Type your response" @input="addToConvo()" />
          <ButtonGroup variant="right">
            <Button variant="secondary" text="Attach file"><Icon placement="before" graphic="checkmark" /></Button>
            <Button variant="secondary" text="Insert Emoticon"><Icon placement="before" graphic="mood-happy-outline" /></Button>
          </ButtonGroup>
      </div>

    </div>

  </div>
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
  import Checkbox           from '@/components/02-patterns/checkbox/variant-1/component'
  import RadioButton        from '@/components/02-patterns/radio-button/variant-1/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import ProductList        from '@/components/02-patterns/product-list/variant-1/component'
  import Accordion          from '@/components/02-patterns/accordion/variant-1/component'
  import SearchableList     from '@/components/03-modules/searchable-list/variant-1/component'
  import ProgressIndicator  from '@/components/02-patterns/progress-indicator/variant-1/component'
  import Chatbox            from '@/components/02-patterns/chatbox/variant-1/component'
  import Calendar           from '@/components/02-patterns/calendar/variant-1/component'
  import VideoPlayer        from '@/components/02-patterns/video-player/variant-1/component'

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import SignUpForm         from '@/components/03-modules/sign-up-form/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'
  import PageFooter         from '@/components/03-modules/page-footer/variant-1/component'
  import VideoConference    from '@/components/03-modules/video-conference/variant-1/component'

  export default {
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, Accordion, SearchableList, ProgressIndicator, Chatbox, AppBar, PageFooter, VideoConference, Pane, Form, LoginForm, SignUpForm, VideoPlayer, Legend, Card, CopyBlock, H1, H2, H3,H4, H5, T1, T2, T3,
      Ul, Ol, Link, TextInput, PasswordInput, Textarea, Select, Checkbox, RadioButton, Toggle, ButtonGroup, Button, Icon, Modal, Calendar
    },
    name: 'Chatbot',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant:{
        type: String,
        default: null,
      },
      visible:{
        type: String,
        default: "hidden",
      }
    },
    data() {
      return {
        conversation: [
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "response",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "response",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "response",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "response",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "input",
            "title": null,
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": null,
            "buttonText": null,
          },
          {
            "type": "response",
            "title": "Card title",
            "content": "Lorem ipsum dolor sit etiet emet moleste door etu valerian est..",
            "link": "#",
            "buttonText": "View workout",
          }
        ],
      }
    },
    computed: {
      classes() {
        return `chatbot chatbot--${this.visible} ${this.classList}`;  
      },
    },
    methods: {
      close(){
        this.$emit("close");
      },
      scrollToLatest() {
        //window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        var objDiv = document.getElementById("chatbot_conversation");
        objDiv.scrollTop = objDiv.scrollHeight;
      },
      addToConvo() {

      }
    },
    created() {
      let delay = setTimeout(() => {
        this.scrollToLatest();
      }, 200);
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
