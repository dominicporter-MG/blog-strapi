<template>  
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a href="/">Strapi Courses </a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-for="language in languages" v-bind:key="language.id">
            <router-link
              :to="{ path: '/language/' + language.id }"
              :key="language.id"
            >
              {{ language.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>  
import gql from "graphql-tag";

export default {  
  name: "Nav",
  data() {
    return {
      languages: []
    };
  },
  apollo: {
    languages: gql`
      query Languages {
        languages {
          id
          name
        }
      }
    `
  }
};
</script>