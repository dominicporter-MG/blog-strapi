
<template>

  <div>

    <div :class="classes">
    
      <PageHeader>
      </PageHeader>

      <Banner variant="centred">

        <H1>Avoid virtual communication traps</H1>

        <Lozenge variant="zestgreen">Pulling in the same direction</Lozenge>

        <T1>This workout is part of a group of solutions to Your Team Isn’t Pulling in the Same Direction. A series of workouts to improve Managing Remote Teams.</T1>

        <T2>2 mins</T2>

      </Banner>

      <Pane>

        <Container>

          <CaptionedImage source="https://via.placeholder.com/940x470/111111/999999" />

          <Callout>
            <T2>Short message about these workouts being created after feedback from our users and how we would love the user’s help to keep imroving them.</T2>
          </Callout>

          <CopyBlock>

            <H3>Introduction title</H3>

            <T2>For teams that are thrust into a virtual working set up, there’s a natural tendency to continue with the same ways of working and then wonder why things go awry. As a manager, this might mean replacing all your recurring face-to-face meetings with virtual calls or pulling the whole team together for updates.</T2>

          </CopyBlock>

          <CopyBlock>

            <H3>A Better Way</H3>

            <T2>There’s evidence that virtual communication is more draining and leads to burnout because of interruptions and unpredictability.</T2>

            <T2>Researchers de Guinea and Webster (2015) also found that the benefits of remote working on team outcomes (improved productivity, satisfaction and quality) are lost when team processes fall by the wayside.</T2> 

            <T2>And that’s not including issues of patchy personal wi-fi, distractions from family and friends, and the loss of positive bonds that come from connecting in person.</T2>

            <T2>So, before you replace existing methods with virtual ones, it’s worth taking the time to find out the biggest traps of virtual communication you could fall into.</T2>

            <T2>Explore below and make a note of what’s tripping up your team:</T2>

          </CopyBlock>

          <CopyBlock>

            <H3>When F2F Goes Virtual: The Traps</H3>

          </CopyBlock>

          <Layout grid="40_60">

            <div class="column">

              <CaptionedImage source="img/workout1.gif" />

            </div>

            <div class="column">

              <H4>Find replace</H4>

              <T2>Replacing face-to-face meetings with virtual ones without a thought for flexing the approach e.g. same time/people/agenda/cadence.</T2>

            </div>

          </Layout>

          <Layout grid="40_60">

            <div class="column">

              <CaptionedImage source="img/workout2.gif" />

            </div>

            <div class="column">

              <H4>We’re all in</H4>

              <T2>Replacing face-to-face meetings with virtual ones without a thought for flexing the approach e.g. same time/people/agenda/cadence.</T2>

            </div>

          </Layout>

          <Layout grid="40_60">

            <div class="column">

              <CaptionedImage source="img/workout3.gif" />

            </div>

            <div class="column">

              <H4>We're all out</H4>

              <T2>Limiting it to only one or two people to each meeting so everyone has a role to play, but instead missing out on critical collaboration and ending up endlessly repeating yourself to different groups.</T2>

            </div>

          </Layout>

          <Layout grid="40_60">

            <div class="column">

              <CaptionedImage source="https://via.placeholder.com/380x380/111111/999999" />

            </div>

            <div class="column">

              <H4>We're still BUSY</H4>

              <T2>Productivity paradox – the tendency to appear busy by filling the diary with multiple meetings that get in the way of real work and don’t allow for natural breaks like making a tea/coffee or getting fresh air.</T2>

            </div>

          </Layout>

          <Layout grid="40_60">

            <div class="column">

              <CaptionedImage source="img/workout4.gif" />

            </div>

            <div class="column">

              <H4>We're still close</H4>

              <T2>Navigating unchartered territory of seeing into people's personal lives through video calls whilst struggling with the virtual distance and not quite knowing how much to talk about personal or work matters.</T2>

            </div>

          </Layout>

          <H3>Now consider</H3>

          <Callout variant="shadowed">

            <Ul variant="checked">
              <li class="t2">Which of the traps do you or your team fall into most frequently?</li>
              <li class="t2">What damage might this cause?</li>
              <li class="t2">What can you personally do to change things?</li>
              <li class="t2">How soon could you start?</li>
              <li class="t2">Who will you ask to help you manage this better?</li>
            </Ul>

          </Callout>

        </Container>

      </Pane>

      <Pane>

        <Container>

          <CopyBlock>

            <H3>Recommended next</H3>

          </CopyBlock>

          <Layout grid="50_C">

            <div class="column">

              <Card classList="card--lozenge">
                <h2 class="card_title">Protect your headspace <span class="card_subtitle">3 mins</span></h2>
                <div class="card_content">
                  <T2>Possible super brief hook that can run over a max of two lines.</T2>
                  <T2><Link text="Start" href="/solution/" /></T2>
                </div>
              </Card>

              <Card classList="card--lozenge">
                <h2 class="card_title">Break (and make) the rules <span class="card_subtitle">3 mins</span></h2>
                <div class="card_content">
                  <T2>Possible super brief hook that can run over a max of two lines.</T2>
                  <T2><Link text="Start" href="/solution/" /></T2>
                </div>
              </Card>

            </div>

          </Layout>

          <ButtonGroup variant="centre" style="margin:0 auto;">
            <Button text="Complete this workout" @click="setComplete()" />
          </ButtonGroup>

        </Container>

      </Pane>

    </div>

    <PageFooter>
      <T3>&copy;2020 Mind Gym</T3>
    </PageFooter>

  </div>

</template>

<script>

  import pipwerks           from '@/assets/js/SCORM_API_wrapper.js'

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H1                 from '@/components/01-arrangements/h1/variant-3/component'
  import H2                 from '@/components/01-arrangements/h2/variant-3/component'
  import H3                 from '@/components/01-arrangements/h3/variant-3/component'
  import H4                 from '@/components/01-arrangements/h4/variant-3/component'
  import H5                 from '@/components/01-arrangements/h5/variant-3/component'
  import T1                 from '@/components/01-arrangements/t1/variant-3/component'
  import T2                 from '@/components/01-arrangements/t2/variant-3/component'
  import T3                 from '@/components/01-arrangements/t3/variant-3/component.vue'
  import Ul                 from '@/components/01-arrangements/ul/variant-3/component'
  import Ol                 from '@/components/01-arrangements/ol/variant-3/component.vue'
  import Legend             from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import Card               from '@/components/01-arrangements/card/variant-3/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'
  import Callout            from '@/components/01-arrangements/callout/variant-1/component'

  //Patterns --
  import Link               from '@/components/02-patterns/link/variant-1/component'
  import Form               from '@/components/02-patterns/form/variant-1/component'
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select             from '@/components/02-patterns/select/variant-2/component'
  import Checkbox           from '@/components/02-patterns/checkbox/variant-1/component'
  import RadioButton        from '@/components/02-patterns/radio-button/variant-1/component'
  import CaptionedImage     from '@/components/02-patterns/captioned-image/variant-1/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import ProductList        from '@/components/02-patterns/product-list/variant-1/component'
  import Accordion          from '@/components/02-patterns/accordion/variant-1/component'
  import SearchableList     from '@/components/03-modules/searchable-list/variant-1/component'
  import ProgressIndicator  from '@/components/02-patterns/progress-indicator/variant-1/component'
  import Lozenge            from '@/components/02-patterns/lozenge/variant-1/component'
  

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-5/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-5/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'
  import SearchBar          from '@/components/03-modules/search-bar/variant-1/component'
  import PageFooter         from '@/components/03-modules/page-footer/variant-2/component'
  import Banner             from '@/components/03-modules/banner/variant-1/component'
  import UtilityBar         from '@/components/03-modules/utility-bar/variant-2/component'


  export default {
    name: 'SolutionPage',
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, Accordion, SearchableList, ProgressIndicator, AppBar, Banner, SearchBar, PageFooter, Pane, Form, LoginForm, Legend, Card, CopyBlock, H1, H2, H3,H4, H5, T1, T2, T3,
      Ul, Ol, Link, TextInput, PasswordInput, Textarea, Select, Checkbox, RadioButton, Toggle, ButtonGroup, Button, Icon, Modal, UtilityBar, Callout, CaptionedImage, Lozenge
    },
    props: {
      classList:{
        type: String,
        default: ""
      }
    },
    data: function () {
      return {
        scorm: null,
        lmsConnected: false
      }
    },
    computed: {
      classes() {
        return `solution-page ${this.classList}`;  
      }
    },
    methods: {
      initCourse(){
        //console.log("Called initCourse");

        //scorm.init returns a boolean
        this.lmsConnected = this.scorm.init();

        //If the scorm.init function succeeded...
        if(this.lmsConnected){

            //Let's get the completion status to see if the course has already been completed
            var completionstatus = this.scorm.get("cmi.core.lesson_status");

            //If the course has already been completed...
            if(completionstatus == "completed" || completionstatus == "passed"){

              //...let's display a message and close the browser window
              this.handleError("You have already completed this course. You do not need to continue.");

            }

            //Now let's get the username from the LMS
            var learnername = this.scorm.get("cmi.core.student_name");

            //console.log("Hello " + learnername)

        //If the course couldn't connect to the LMS for some reason...
        } else {

            //... let's alert the user then close the window.
            this.handleError("Error: Course could not connect with the LMS");

        }

      },
      setComplete(){
        //console.log("Called setComplete");

        //If the lmsConnection is active...
        if(this.lmsConnected){

            //... try setting the course status to "completed"
            var success = this.scorm.set("cmi.core.lesson_status", "completed");

            //If the course was successfully set to "completed"...
            if(success){

              //... disconnect from the LMS, we don't need to do anything else.
              this.scorm.quit();

            //If the course couldn't be set to completed for some reason...
            } else {

              //alert the user and close the course window
              this.handleError("Error: Course could not be set to complete!");

            }

        //If the course isn't connected to the LMS for some reason...
        } else {

            //alert the user and close the course window
            this.handleError("Error: Course is not connected to the LMS");

        }

      },
      handleError(msg){
        //console.log("Called handleError");
        alert(msg);
        window.close();
      }
    },
    created() {

      //console.log("PIPWERKS: ", pipwerks)

      this.scorm = pipwerks.SCORM
      
      // this.initCourse()
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

  /deep/.container {
      max-width: $breakpoint-4;
  }

</style>