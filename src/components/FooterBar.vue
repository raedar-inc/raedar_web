<template>
  <v-footer  padless class="body-1 text--darken-3" dark app >
    <!--links of the footer -->
      <v-row justify="space-around" align="basline">
        <v-col cols="auto" v-for="item in titles" :key="item" >
          <div class="ma-4">
            <v-list-item-subtitle align="center" class="font-weight-regular">{{item}}</v-list-item-subtitle>
            <ul style="list-style:none" v-for="link in links" :key="link" > 
              <li class="font-weight-light " >{{link}}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
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
      ],
      links: ["Documentation", "COVID-19 resources", "Partner Program", "Environment","Foundations", "Payments"],
      titles: ["About","Products","Pricing","Contacts"]
    };
  }
};
</script>
