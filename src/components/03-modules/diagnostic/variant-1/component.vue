<template>
  <div :class="classes">

        <div v-for="(question1, index1) in reducedSet" :key="index1" class="level-1">

            <Checkbox @change="reduceSet('1', question1.text)" :name="`checkbox-${index1}`" :options="question1.text" />

            <div v-for="(question2, index2) in question1.level2" :key="index2" class="level-2">

                <Checkbox @change="reduceSet('2', question2.text)" :name="`checkbox-${index2}`" :options="question2.text" />

                <div v-for="(question3, index3) in question2.level3" :key="index3" class="level-3">

                    <Checkbox @change="reduceSet('3', question3.text)" :name="`checkbox-${index3}`" :options="question3.text" />

                    <div v-for="(question4, index4) in question3.level4" :key="index4" class="level-4">

                        <Checkbox @change="reduceSet('4', question4.text)" :name="`checkbox-${index4}`" :options="question4.text" />

                        <div class="level-5">

                            <Link href="/results/" text="This links to the results page" />

                            <Link href="/results/" text="This links to the results page" />

                            <Link href="/results/" text="This links to the results page" />

                        </div>

                    </div>

                </div>

            </div>

        </div>

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
  import Form                   from '@/components/02-patterns/form/variant-1/component'
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
  import PageHeader             from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation      from '@/components/03-modules/primary-navigation/variant-1/component'
  import SignUpForm             from '@/components/03-modules/sign-up-form/variant-1/component'
  import LoginForm              from '@/components/03-modules/login-form/variant-1/component'
  import Listen                 from '@/components/03-modules/listen/variant-1/component'
  import AppBar                 from '@/components/03-modules/app-bar/variant-1/component'
  import PageFooter             from '@/components/03-modules/page-footer/variant-1/component'
  import VideoConference        from '@/components/03-modules/video-conference/variant-1/component'
  import Chatbot                from '@/components/03-modules/chatbot/variant-1/component'
  import UtilityBar             from '@/components/03-modules/utility-bar/variant-1/component'

  export default {
    name: 'Diagnostic',
    components: {
        Ul, T2, Checkbox, Link
    },
    props: {
      classList: {
        type: String,
        default: "",
      }
    },
    data() {
      return {
        currentLevel: "level-1",
        selectionLevel1: null,
        selectionLevel2: null,
        selectionLevel3: null,
        selectionLevel4: null,
        reducedSet: [],
        questions: [
            {"text": "Managing teams 1",
            "level2": [
                {"text": "I feel the team are pulling in different directions 1.1",
                "level3": [
                    {"text": "1.1.1",
                    "level4": [
                        {"text": "1.1.1.1"},
                        {"text": "1.1.1.2"}      
                    ]},   
                    {"text": "1.1.2",
                    "level4": [
                        {"text": "1.1.2.1"},
                        {"text": "1.1.2.2"}      
                    ]},
                ]},
                {"text": "My team are struggling to collaborate virtually 1.2",
                "level3": [
                    {"text": "1.2.1",
                    "level4": [
                        {"text": "1.2.2.1"},
                        {"text": "1.2.2.2"}      
                    ]},   
                    {"text": "1.2.2",
                    "level4": [
                        {"text": "1.2.2.1"},
                        {"text": "1.2.2.2"}      
                    ]},
                ]},
                {"text": "I don't have visibility of the team's workload 1.3",
                "level3": [
                    {"text": "1.3.1",
                    "level4": [
                        {"text": "1.3.1.1"},
                        {"text": "1.3.1.2"}      
                    ]},   
                    {"text": "1.3.2",
                    "level4": [
                        {"text": "1.3.2.1"},
                        {"text": "1.3.2.2"}      
                    ]},
                ]},
                {"text": "I feel there's a lack of trust in the team 1.4",
                "level3": [
                    {"text": "1.4.1",
                    "level4": [
                        {"text": "1.4.1.1"},
                        {"text": "1.4.1.2"}      
                    ]},   
                    {"text": "1.4.2",
                    "level4": [
                        {"text": "1.4.2.1"},
                        {"text": "1.4.2.2"}      
                    ]},
                ]},
                {"text": "Virtual communication is time-consuming 1.5",
                "level3": [
                    {"text": "1.5.1",
                    "level4": [
                        {"text": "1.5.1.1"},
                        {"text": "1.5.1.2"}      
                    ]},   
                    {"text": "1.5.2",
                    "level4": [
                        {"text": "1.5.2.1"},
                        {"text": "1.5.2.2"}      
                    ]},
                ]},
                {"text": "It’s hard to connect on personal matters 1.6",
                "level3": [
                    {"text": "1.6.1",
                    "level4": [
                        {"text": "1.6.1.1"},
                        {"text": "1.6.1.2"}      
                    ]},   
                    {"text": "1.6.2",
                    "level4": [
                        {"text": "1.6.2.1"},
                        {"text": "1.6.2.2"}      
                    ]},
                ]},
                {"text": "I don’t know how people are feeling 1.7",
                "level3": [
                    {"text": "1.7.1",
                    "level4": [
                        {"text": "1.7.1.1"},
                        {"text": "1.7.1.2"}      
                    ]},   
                    {"text": "1.7.2",
                    "level4": [
                        {"text": "1.7.2.1"},
                        {"text": "1.7.2.2"}      
                    ]},
                ]},
                {"text": "I don’t know what people are doing 1.8",
                "level3": [
                    {"text": "1.8.1",
                    "level4": [
                        {"text": "1.8.1.1"},
                        {"text": "1.8.1.2"}      
                    ]},   
                    {"text": "1.8.2",
                    "level4": [
                        {"text": "1.8.2.1"},
                        {"text": "1.8.2.2"}      
                    ]},
                ]},
                {"text": "My team feel disconnected from their work 1.9",
                "level3": [
                    {"text": "1.9.1",
                    "level4": [
                        {"text": "1.9.1.1"},
                        {"text": "1.9.1.2"}      
                    ]},   
                    {"text": "1.9.2",
                    "level4": [
                        {"text": "1.9.2.1"},
                        {"text": "1.9.2.2"}      
                    ]},
                ]},
                {"text": "My team feel disconnected from each other 1.10",
                "level3": [
                    {"text": "1.10.1",
                    "level4": [
                        {"text": "1.10.1.1"},
                        {"text": "1.10.1.2"}      
                    ]},   
                    {"text": "1.10.2",
                    "level4": [
                        {"text": "1.10.2.1"},
                        {"text": "1.10.2.2"}      
                    ]},
                ]},
                {"text": "We’re not getting creative ideas as a team 1.11",
                "level3": [
                    {"text": "1.11.1",
                    "level4": [
                        {"text": "1.11.1.1"},
                        {"text": "1.11.1.2"}      
                    ]},   
                    {"text": "1.11.2",
                    "level4": [
                        {"text": "1.11.2.1"},
                        {"text": "1.11.2.2"}      
                    ]},
                ]},
                {"text": "I struggle to unite my team 1.12",
                "level3": [
                    {"text": "1.12.1",
                    "level4": [
                        {"text": "1.12.1.1"},
                        {"text": "1.12.1.2"}      
                    ]},   
                    {"text": "1.12.2",
                    "level4": [
                        {"text": "1.12.2.1"},
                        {"text": "1.12.2.2"}      
                    ]},
                ]},
                {"text": "Miscommunications are common 1.13",
                "level3": [
                    {"text": "1.13.1",
                    "level4": [
                        {"text": "1.13.1.1"},
                        {"text": "1.13.1.2"}      
                    ]},   
                    {"text": "1.13.2",
                    "level4": [
                        {"text": "1.13.2.1"},
                        {"text": "1.13.2.2"}      
                    ]},
                ]},
                {"text": "I get mixed messages about people’s performance 1.14",
                "level3": [
                    {"text": "1.14.1",
                    "level4": [
                        {"text": "1.14.1.1"},
                        {"text": "1.14.1.2"}      
                    ]},   
                    {"text": "1.14.2",
                    "level4": [
                        {"text": "1.14.2.1"},
                        {"text": "1.14.2.2"}      
                    ]},
                ]},
                {"text": "I can’t see what people are struggling with 1.15",
                "level3": [
                    {"text": "1.15.1",
                    "level4": [
                        {"text": "1.15.1.1"},
                        {"text": "1.15.1.2"}      
                    ]},   
                    {"text": "1.15.2",
                    "level4": [
                        {"text": "1.15.2.1"},
                        {"text": "1.15.2.2"}      
                    ]},
                ]},
                {"text": "It’s hard to prioritise people’s needs 1.16",
                "level3": [
                    {"text": "1.16.1",
                    "level4": [
                        {"text": "1.16.1.1"},
                        {"text": "1.16.1.2"}      
                    ]},   
                    {"text": "1.16.2",
                    "level4": [
                        {"text": "1.16.2.1"},
                        {"text": "1.16.2.2"}      
                    ]},
                ]},
                {"text": "I don’t feel in control of our outcomes as a team 1.17",
                "level3": [
                    {"text": "1.17.1",
                    "level4": [
                        {"text": "1.17.1.1"},
                        {"text": "1.17.1.2"}      
                    ]},   
                    {"text": "1.17.2.1",
                    "level4": [
                        {"text": "1.17.2.1"},
                        {"text": "1.17.2.2"}      
                    ]},
                ]},
                {"text": "I struggle to maintain our momentum as a team 1.18",
                "level3": [
                    {"text": "1.18.1",
                    "level4": [
                        {"text": "1.18.1.1"},
                        {"text": "1.18.1.2"}      
                    ]},   
                    {"text": "1.18.2",
                    "level4": [
                        {"text": "1.18.2.1"},
                        {"text": "1.18.2.2"}      
                    ]},
                ]},
                {"text": "I struggle to give feedback to my team virtually 1.19",
                "level3": [
                    {"text": "1.19.1",
                    "level4": [
                        {"text": "1.19.1.1"},
                        {"text": "1.19.1.2"}      
                    ]},   
                    {"text": "1.19.2",
                    "level4": [
                        {"text": "1.19.2.1"},
                        {"text": "1.19.2.2"}      
                    ]},
                ]},
                {"text": "It’s hard to track progress 1.20",
                "level3": [
                    {"text": "1.20.1",
                    "level4": [
                        {"text": "1.20.1.1"},
                        {"text": "1.20.1.2"}      
                    ]},   
                    {"text": "1.20.2",
                    "level4": [
                        {"text": "1.20.2.1"},
                        {"text": "1.20.2.2"}      
                    ]},
                ]},
            ]},
            {"text": "Managing individuals 2",
            "level2": [
                {"text": "I feel overwhelmed with all the different communication channels 2.1",
                "level3": [
                    {"text": "2.1.1",
                    "level4": [
                        {"text": "2.1.1.1"},
                        {"text": "2.1.1.2"}      
                    ]},   
                    {"text": "2.1.2",
                    "level4": [
                        {"text": "2.1.2.1"},
                        {"text": "2.1.2.2"}      
                    ]},
                ]},
                {"text": "I get distracted at home 2.2",
                "level3": [
                    {"text": "2.2.1",
                    "level4": [
                        {"text": "2.2.1.1"},
                        {"text": "2.2.1.2"}      
                    ]},   
                    {"text": "2.2.2",
                    "level4": [
                        {"text": "2.2.2.1"},
                        {"text": "2.2.2.2"}      
                    ]},
                ]},
                {"text": "I feel isolated 2.3",
                "level3": [
                    {"text": "2.3.1",
                    "level4": [
                        {"text": "2.3.1.1"},
                        {"text": "2.3.1.2"}      
                    ]},   
                    {"text": "2.3.2",
                    "level4": [
                        {"text": "2.3.2.1"},
                        {"text": "2.3.2.2"}      
                    ]},
                ]},
                {"text": "I don't feel like I have the physical space I need 2.4",
                "level3": [
                    {"text": "2.4.1",
                    "level4": [
                        {"text": "2.4.1.1"},
                        {"text": "2.4.1.2"}      
                    ]},   
                    {"text": "2.4.2",
                    "level4": [
                        {"text": "2.4.2.1"},
                        {"text": "2.4.2.2"}      
                    ]},
                ]},
                {"text": "I'm concerned about the people I live with 2.5",
                "level3": [
                    {"text": "2.5.1",
                    "level4": [
                        {"text": "2.5.1.1"},
                        {"text": "2.5.1.2"}      
                    ]},   
                    {"text": "2.5.2",
                    "level4": [
                        {"text": "2.5.2.1"},
                        {"text": "2.5.2.2"}      
                    ]},
                ]},
                {"text": "I'm concerned about my wellbeing 2.6",
                "level3": [
                    {"text": "2.6.1",
                    "level4": [
                        {"text": "2.6.1.1"},
                        {"text": "2.6.1.2"}      
                    ]},   
                    {"text": "2.6.2",
                    "level4": [
                        {"text": "2.6.2.1"},
                        {"text": "2.6.2.2"}      
                    ]},
                ]},
                {"text": "I'm struggling to communicate effectively 2.7",
                "level3": [
                    {"text": "2.7.1",
                    "level4": [
                        {"text": "2.7.1.1"},
                        {"text": "2.7.1.2"}      
                    ]},   
                    {"text": "2.7.2",
                    "level4": [
                        {"text": "2.7.2.1"},
                        {"text": "2.7.2.2"}      
                    ]},
                ]},
                {"text": "I feel excluded or 'out of the loop' 2.8",
                "level3": [
                    {"text": "2.8.1",
                    "level4": [
                        {"text": "2.8.1.1"},
                        {"text": "2.8.1.2"}      
                    ]},   
                    {"text": "2.8.2",
                    "level4": [
                        {"text": "2.8.2.1"},
                        {"text": "2.8.2.2"}      
                    ]}
                ]},
                {"text": "I worry I'm not focusing on the right things 2.9",
                "level3": [
                    {"text": "2.9.1",
                    "level4": [
                        {"text": "2.9.1.1"},
                        {"text": "2.9.1.2"}      
                    ]},   
                    {"text": "2.9.2",
                    "level4": [
                        {"text": "2.9.2.1"},
                        {"text": "2.9.2.2"}      
                    ]},
                ]},
                {"text": "I feel less connected to my team 2.10",
                "level3": [
                    {"text": "2.10.1",
                    "level4": [
                        {"text": "2.10.1.1"},
                        {"text": "2.10.1.2"}      
                    ]},   
                    {"text": "2.10.2",
                    "level4": [
                        {"text": "2.10.2.1"},
                        {"text": "2.10.2.2"}      
                    ]},
                ]},
                {"text": "I'm concerned I'm less likely to develop 2.11",
                "level3": [
                    {"text": "2.11.1",
                    "level4": [
                        {"text": "2.11.1.1"},
                        {"text": "2.11.1.2"}      
                    ]},   
                    {"text": "2.11.2",
                    "level4": [
                        {"text": "2.11.2.1"},
                        {"text": "2.11.2.2"}      
                    ]},
                ]},
                {"text": "I feel like I may miss opportunities 2.12",
                "level3": [
                    {"text": "2.12.1",
                    "level4": [
                        {"text": "2.12.1.1"},
                        {"text": "2.12.1.2"}      
                    ]},   
                    {"text": "2.12.2",
                    "level4": [
                        {"text": "2.12.2.1"},
                        {"text": "2.12.2.2"}      
                    ]},
                ]},
                {"text": "I'm concerned I'm going to miss out socially 2.13",
                "level3": [
                    {"text": "2.13.1",
                    "level4": [
                        {"text": "2.13.1.1"},
                        {"text": "2.13.1.2"}      
                    ]},   
                    {"text": "2.13.2",
                    "level4": [
                        {"text": "2.13.2.1"},
                        {"text": "2.13.2.2"}      
                    ]},
                ]},
            ]}
        ]
      }
    },
    computed: {
      classes() {
        return `diagnostic ${this.currentLevel} ${this.classList}`;  
      }
    },
    methods: {
        reduceSet(level, selectedText) {
            //console.log("level is: " + level, "selectedText is: " + selectedText);

            let reduced

            this.currentLevel = "level-" + (parseInt(level) + 1)//Add class to display the appropriate level --
            this["selectionLevel" + level] = selectedText;


            //console.log(this.reducedSet[0].level2);

            if(this.selectionLevel1){
                //console.log("Level 1 selection: ", this.selectionLevel1);

                reduced = this.reducedSet.filter((item) => {
                    return item.text === this.selectionLevel1;
                });

                if(this.selectionLevel2){
                    //console.log("Level 2 selection: ", this.selectionLevel2);

                    reduced[0].level2 = reduced[0].level2.filter((item) => {
                        return item.text === this.selectionLevel2;
                    });

                    if(this.selectionLevel3){
                        //console.log("Level 3 selection: ", this.selectionLevel3);

                        reduced[0].level2[0].level3 = reduced[0].level2[0].level3.filter((item) => {
                            return item.text === this.selectionLevel3;
                        });

                        if(this.selectionLevel4){
                            //console.log("Level 4 selection: ", this.selectionLevel4);

                            reduced[0].level2[0].level3[0].level4 = reduced[0].level2[0].level3[0].level4.filter((item) => {
                                return item.text === this.selectionLevel4;
                            });
                        }
                    }
                }
            }

            this.reducedSet = reduced
        }
    },
    created() {
        this.reducedSet = this.questions;
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
