<template>
  <form action="this.action" method="post" v-on:submit.prevent :class="classes">

    <Logo />

    <fieldset class="sign-up-form_fieldset">
      <Legend text="Sign up" />

      <CopyBlock>
        <T2>Please provide some details to access your eWorkout</T2>
      </CopyBlock>

      <TextInput label="First name" id="firstname" placeholder="First name" v-model="firstname" />

      <TextInput label="Last name" id="lastname" placeholder="Last name" v-model="lastname" />

      <TextInput label="Company" id="company" placeholder="Company" v-model="company" />

      <TextInput label="Email address" id="email" placeholder="eg. example@mail.com" v-model="email" />

      <T3 if="formError" classList="message--error">{{formError}}</T3>

    </fieldset>

    <ButtonGroup variant="fullwidth">
      <Button variant="primary" text="Access my free eWorkout" @click="SignUp()" />
    </ButtonGroup>

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
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import T2                 from '@/components/01-arrangements/t2/variant-1/component'
  import T3                 from '@/components/01-arrangements/t3/variant-1/component.vue'
  import Legend             from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import Card               from '@/components/01-arrangements/card/variant-1/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'

  //Patterns --
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select1            from '@/components/02-patterns/select/variant-1/component'
  import Select2            from '@/components/02-patterns/select/variant-2/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import ProductList         from '@/components/02-patterns/product-list/variant-1/component'

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'

  
  //Pages --

  import signupsRef from '@/firebaseconfig';

  export default {
    name: 'SignUpForm',
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, AppBar, Pane, LoginForm, Legend, Card, CopyBlock, H2, T2, T3, 
      TextInput, PasswordInput, Textarea, Select1, Select2, Toggle, ButtonGroup, Button, Icon, Modal
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
      firebase: {
        signups: signupsRef
      },
    },
    data() {
      return {
        firstname: null,
        lastname: null,
        email: null,
        company: null,
        formError: null
      }
    },
    computed: {
      classes() {
        return `sign-up-form ${this.classList}`;  
      }
    },
    methods: {
      validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      setCookie(name,value,days) {
        let expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      },
      SignUp() {
        if(!this.firstname || !this.lastname || !this.company || !this.email){
          this.formError = "Please complete all fields.";
          return
        } else if(!this.validateEmail(this.email)){
          this.formError = "Please provide a valid email address.";
          return
        } else {
          // Create a new post reference with an auto-generated id
          let newSignup = signupsRef.push();
            newSignup.set({
              "firstname": this.firstname,
              "lastname": this.lastname,
              "email": this.email,
              "company": this.company
            })
            .then(() => {
              this.setCookie('workoutaccess','true',999);//Set access cookie
              this.$emit('SignUpAttempt', true);//Return true to navigate to workout
            })
            .catch((error) => {
            //console.log(error);
          });
        }
      }
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
