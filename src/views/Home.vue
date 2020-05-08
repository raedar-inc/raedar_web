<template>
  <v-container class="cover">
    <v-row class="my-12">
      <v-col xs="12" md="7" justify="center">
        <div class="my-4 display-3">RAEDAR WEB APPLICATION</div>
        <div class="my-4 title">
          Hey this is raedar web application designed to meet the needs of the
          company like handling new clients
        </div>
        <div class="my-6 font-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          error officiis omnis ratione eveniet? Vel, cum officiis. Cumque
          quibusdam quam iure. Repellat inventore ratione perspiciatis
          voluptatibus sequi voluptatem incidunt laudantium!
        </div>
        <div class="mt-5">
          <v-btn
            color="primary"
            dark
            depressed
            outlined
            rounded
            class="ml-7 pa-6"
            >Try</v-btn
          >
          <v-btn
            color="primary"
            dark
            depressed
            outlined
            rounded
            class="ml-7 pa-6"
            >Demo</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <!--featured in section -->
    <div>
      <v-row class="my-5 body-1" justify="center" align="center">
        <v-col sm="12" md="12" xl="12" align="center">
          <h1 class="headline">FEARURED IN</h1>
          <v-divider></v-divider>
        </v-col>
        <v-col
          cols="auto"
          xs="12"
          sm="6"
          md="4"
          v-for="item in data1"
          :key="item.title"
        >
          <v-card outlined max-width="350" max-height="450">
            <v-card-title class="text-center"
              ><h3>{{ item.head }}</h3></v-card-title
            >
            <v-card-text class="body-1">
              <p>{{ item.body }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- About us section -->
    <div>
      <v-row class="my-5" justify="center" align="center">
        <v-col sm="12" md="12" xl="12" align="center">
          <h1 class="headline">ABOUT US</h1>
          <v-divider></v-divider>
        </v-col>
        <v-col
          cols="auto"
          xs="12"
          sm="6"
          md="4"
          v-for="item in data1"
          :key="item.title"
        >
          <v-card outlined max-width="350" max-height="450">
            <v-card-title class="text-center"
              ><h3>{{ item.head }}</h3></v-card-title
            >
            <v-card-text class="body-1">
              <p>{{ item.body }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- Team section -->
    <div>
      <v-row class="my-5" justify="center" align="center">
        <v-col sm="12" md="12" xl="12" align="center">
          <h1>TEAM</h1>
          <v-divider></v-divider>
        </v-col>

        <v-col
          cols="auto"
          xs="12"
          sm="6"
          md="4"
          v-for="item in data2"
          :key="item.head"
        >
          <v-card max-width="350" max-height="450">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_(cropped).jpg"
              height="200px"
            >
            </v-img>
            <v-card-title class="justify-center"
              ><h3>{{ item.head }}</h3></v-card-title
            >
            <v-card-text>
              <p>{{ item.body }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      data1: [
        {
          head: "heading1",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ab. Consectetur ex modi doloribus veritatis facilis at fugit ea minima quos eos cum laborum porro, sint repellat aut aliquam tenetur?"
        },
        {
          head: "heading2",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ab. Consectetur ex modi doloribus veritatis facilis at fugit ea minima quos eos cum laborum porro, sint repellat aut aliquam tenetur?"
        },
        {
          head: "heading3",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ab. Consectetur ex modi doloribus veritatis facilis at fugit ea minima quos eos cum laborum porro, sint repellat aut aliquam tenetur?"
        }
      ],
      data2: [
        {
          head: "CEO",
          url: "",
          body:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, impedit mollitia eligendi amet, obcaecati, dolorem distinctio tempore quis sit minima delectus repellendus cupiditate eveniet qui ex ipsum labore earum. Doloremque"
        },
        {
          head: "CTO",
          url: "",
          body:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, impedit mollitia eligendi amet, obcaecati, dolorem distinctio tempore quis sit minima delectus repellendus cupiditate eveniet qui ex ipsum labore earum. Doloremque"
        },
        {
          head: "DIRECTOR",
          url: "",
          body:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, impedit mollitia eligendi amet, obcaecati, dolorem distinctio tempore quis sit minima delectus repellendus cupiditate eveniet qui ex ipsum labore earum. Doloremque"
        },
        {
          head: "DIRECTOR",
          url: "",
          body:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, impedit mollitia eligendi amet, obcaecati, dolorem distinctio tempore quis sit minima delectus repellendus cupiditate eveniet qui ex ipsum labore earum. Doloremque"
        }
      ]
    };
  }
};
</script>
