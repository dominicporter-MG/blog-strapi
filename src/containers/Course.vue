<template>  
  <div>
    <div
      v-if="course.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="api_url + course.image.url"
      uk-img
    >
      <h1>{{ course.title }}</h1>
    </div>

    <router-link
          v-for="edition in course.course_editions"
          :to="{ path: '/course_edition/' + edition.id }"
          class="uk-link-reset"
          :key="edition.id"
        >
            <div class="uk-card-body">
              <p id="label" class="uk-text-large">{{ edition.label }}</p>
              <p id="locale" >{{ edition.language.name }}</p>
            </div>
        </router-link>
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="course.content"
          :source="course.content"
          id="editor"
        />
        <p v-if="course.published_at">
          {{ moment(course.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>  
var moment = require("moment");  
import VueMarkdownIt from "vue-markdown-it";  
import gql from "graphql-tag";

export default {  
  data() {
    return {
      course: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    course: {
      query: gql`
        query Courses($id: ID!) {
          course(id:$id) {
            id
            title
            course_editions {
              id
              label
              language {
                name
              }
            }
          } 
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>  