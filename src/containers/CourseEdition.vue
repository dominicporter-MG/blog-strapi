<template>  
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="courseEdition.content"
          :source="courseEdition.content"
          id="editor"
        />
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
      courseEdition: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    courseEdition: {
      query: gql`
        query CourseEditions($id: ID!) {
          courseEdition(id: $id) {
            id
            label
            content
            Version
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