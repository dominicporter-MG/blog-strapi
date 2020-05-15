<template>  
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>All Courses</h1>

        <CoursesList :courses="courses"></CoursesList>
      </div>
    </div>
  </div>
</template>

<script>  
import CoursesList from "../components/CoursesList.vue";  
import gql from "graphql-tag";

export default {  
  components: {
    CoursesList
  },
  data() {
    return {
      courses: []
    };
  },
  apollo: {
    courses: gql`
      query Courses {
        courses {
          id
          title
          image {
            url
          }
        }
      }
    `
  }
};
</script>  