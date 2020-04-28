<template>
  <v-footer dark padless class="grey darken-4 text--darken-3" app>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} - <strong>&copy;raeder.org</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
  data: function() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-google-plus",
        "mdi-linkedin",
        "mdi-instagram"
      ]
    };
  }
};
</script>
