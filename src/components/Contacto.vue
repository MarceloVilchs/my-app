<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 text-center" style="align-self: flex-start;">
        <v-h1 class="headline" style="font-size: 36px;">
          Contacto
        </v-h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <v-btn href="https://www.instagram.com/marcelo.vilchs/" target="_blank" class="mx-10" fab >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default{
    name:'contactoContacto'
}
</script>



/*ICONO PARA INSTAGRAM

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiInstagram } from '@mdi/js';
export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiInstagram,
    }
  }
}

v-btn href="https://www.instagram.com/marcelo.vilchs/" target="dark"
            svg-icon type="mdi" :path="path"/svg-icon
        v-btn
*/