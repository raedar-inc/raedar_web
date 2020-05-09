<template>
  <!--  <v-footer dark padless class="grey darken-4 text&#45;&#45;darken-3" app>-->
  <v-footer padless class="body-1 text--darken-3" dark>
    <!--links of the footer -->
    <v-row justify="space-around" align="basline">
      <v-col cols="auto" v-for="(links, name) in titles" :key="links">
        <v-list-item-subtitle
          align="center"
          class="font-weight-regular title ma-4 "
        >
          {{ name }}
        </v-list-item-subtitle>
        <v-list-item-subtitle align="center" class="font-weight-light ma-4 ">
          <ul style="list-style:none">
            <li v-for="item in links" :key="item">
              <a v-bind:href="item.linker" style="list-style:none ">
                {{ item.linkname }}
              </a>
            </li>
          </ul>
        </v-list-item-subtitle>
      </v-col>
    </v-row>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider />
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

      titles: {
        About: [
          { linkname: "Year of start", linker: "link" },
          { linkname: "Environment", linker: "link" },
          { linkname: "Members", linker: "link" },
          { linkname: "Foundations", linker: "link" }
        ],
        Products: [
          { linkname: "link name", linker: "link" },
          { linkname: "COVID-19 resources", linker: "link" },
          { linkname: "Members", linker: "link" },
          { linkname: "Payments", linker: "link" }
        ],
        Pricing: [
          { linkname: "link name", linker: "link" },
          { linkname: "COVID-19 resources", linker: "link" },
          { linkname: "Members", linker: "link" }
        ],
        Contacts: [
          { linkname: "link name", linker: "link" },
          { linkname: "Members", linker: "link" }
        ]
      }
    };
  }
};
</script>
<style scoped>
a:link {
  text-decoration: none;
  color: aqua;
}

a:visited {
  text-decoration: none;
  color: azure;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
</style>
