<template>
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
            <v-h1 class="display-2 font-weight-bold mb-3">
              Contacto
            </v-h1>
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col class="mb-4">
          <v-btn href="https://www.instagram.com/marcelo.vilchs/" target="_blank" class="mx-10" fab dark large color="pink accent-3"></v-btn>
            <v-icon dark>mdi-instagram</v-icon>
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