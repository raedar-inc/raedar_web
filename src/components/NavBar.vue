<template>
  <div>
    <v-navigation-drawer class="breakpoint: '' " right v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="link of links" v-bind:key="link" link>
          <v-list-item-content>
            <v-list-item-title> {{ link }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="grey darken-4 text--darken-3" dark>
      <!--    <div class="" >-->
      
      <v-img
        alt="Raeder Logo"
        class="shrink mr-2 ml-5"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="50"
        id="imgstyle"
  
      />
      <!--    </div>-->
      <v-text contain min-width="100" width="500" align="center">
       {{name}}
      </v-text>
      <v-spacer />
      <!-- Conditionally rendering the bbavbar links icon on large screens -->
      <div v-if="!this.$vuetify.breakpoint.smAndDown">
        <v-btn href="" v-for="link of links" v-bind:key="link" text>
        {{ link }} 
      </v-btn>
      </div>
      <v-spacer />
      <!-- Conditionally rendering the navbar icon on small screens -->
      <div v-if="this.$vuetify.breakpoint.smAndDown">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      
      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    name: String
  },
  data: function() {
    return {
      links: ["home", "about", "pages", "market", "contact"],
      drawer: false,
    };
  },
 
};
</script>

<style>
#imgstyle {
  border-radius: 30px;
}
</style>
