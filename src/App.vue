<template>
  <v-app>
    <NavBar name="RAEDER" />
    <v-content>
      <Home />
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script>
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
export default {
  name: "App",

  components: {
    Home,
    NavBar,
    FooterBar
  },

  data: () => ({
    //
  })
};
</script>
