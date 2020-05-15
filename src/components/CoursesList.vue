<template>  
  <div>
    <ul class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="course in courses"
          :to="{ path: '/course/' + course.id }"
          class="uk-link-reset"
          :key="course.id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img :src="api_url + course.image.url" alt="" height="50" />
            </div>
            <li class="uk-card-body">
              <p id="title" class="uk-text-large">{{ course.title }}</p>
            </li>
          </div>
        </router-link>
      </div>
    </ul>
  </div>
</template>

<script>  
export default {  
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    courses: Array
  },
  computed: {
  }
};
</script>  