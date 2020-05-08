<template>
  <v-app>
    <NavBar name="RAEDER" />
    <FooterBar />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
export default {
  name: "App",
  components: {
    // HelloWorld,
    NavBar,
    FooterBar
  },
  data: () => ({
    //.
  })
};
</script>
