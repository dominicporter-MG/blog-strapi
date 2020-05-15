<template>
  <div :class="classes">
    <H2>Calendar</H2>

    <div class="month">
      
      <Ul>
        <li v-for="(month, index) in months" :key="index" :class="{ 'active' : month == months[currentMonthIndex]}">
          {{ month }}
        </li>
      </Ul>
      
    </div>

    <div class="dayasnumber">
      <Ul>
        <li v-for="(day, index) in daysinmonth" :key="index" :class="{ 'active' : day == currentDayIndex}">
          {{ day }}
        </li>
      </Ul>
    </div>

    <div class="dayname">
      <Ul>
        <li v-for="(dayname, index) in days" :key="index" :class="{ 'active' : dayname == days[currentDayNameIndex]}">
          {{ dayname }}
        </li>
      </Ul>
    </div>

    <div class="time">
      <Ul>
        <li v-for="(time, index) in times" :key="index" :class="{ 'active' : time == times[currentTimeIndex]}">
          {{ time }} - {{ times[index + 1] }}
        </li>
      </Ul>
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

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-2/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-3/component'
  import SignUpForm         from '@/components/03-modules/sign-up-form/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'
  import PageFooter         from '@/components/03-modules/page-footer/variant-1/component'
  import VideoConference    from '@/components/03-modules/video-conference/variant-1/component'

  export default {
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, Accordion, SearchableList, ProgressIndicator, Chatbox, AppBar, PageFooter, VideoConference, Pane, Form, LoginForm, SignUpForm, Legend, Card, CopyBlock, H1, H2, H3,H4, H5, T1, T2, T3,
      Ul, Ol, Link, TextInput, PasswordInput, Textarea, Select, Checkbox, RadioButton, Toggle, ButtonGroup, Button, Icon, Modal, Calendar
    },
    name: 'Calendar',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    data() {
      return {
        months: ["January","Feburary","March","April","May","June","July","August","September","October","November","December"],
        days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        times: ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","19:00","20:00","21:00","22:00","23:00","24:00"],
        currentMonthIndex: null,
        currentDayIndex: null,
        currentDayNameIndex: null,
        currentTimeIndex: null,
      };
    },
    computed: {
      classes() {
        return `calendar ${this.classList}`;
      },
      daysinmonth() {
        if(this.currentMonthIndex == 1){
          return 28
        } else {
          return 31
        }
      },
    },
    methods: {
      getCurrentMonth() {
          let d = new Date();
          let n = d.getMonth();
          return n;
      },
      getCurrentDay() {
          let d = new Date();
          return d.getDate();
      },
      getCurrentDayName() {
          let d = new Date();
          let n = d.getDay();
          return n;
      },
      getCurrentTime() {
          let d = new Date();
          let n = d.getHours();
          return n;
      },
    },created() {
        this.currentMonthIndex = this.getCurrentMonth()
        this.currentDayIndex = this.getCurrentDay()
        this.currentDayNameIndex = this.getCurrentDayName()
        this.currentTimeIndex = this.getCurrentTime()
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
