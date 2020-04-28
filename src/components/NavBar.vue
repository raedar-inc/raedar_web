<template>
  <div>
    <v-navigation-drawer class="breakpoint: '' " right v-model="drawer" app>
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
        class="shrink mr-2 "
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="50"
        id="imgstyle"
      />
      <!--    </div>-->
      <v-text contain min-width="100" width="500">
       {{name}}
      </v-text>

      <v-spacer />
      <v-btn href="" v-for="link of links" v-bind:key="link" text>
        {{ link }}
      </v-btn>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
      drawer: false
    };
  }
};
</script>

<style>
#imgstyle {
  border-radius: 30px;
}
</style>
