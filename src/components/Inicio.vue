<template>
    <v-container>
        <v-row class = "text-center">
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Espacio Seguro</h1>
            </v-col>

            <v-col cols="12">
                <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="300" max-width="500" src="https://picsum.photos/id/11/500/300"></v-img>
            </v-col>
            
        </v-row>

        <v-row class="text-center">
      <v-col cols="11">
        <!-- Contenedor de las palabras -->
        <div class="text-right">
          <h1 class="display-5 font-weight-bold mb-3">objeto</h1>
          <h1 class="display-5 font-weight-bold mb-3">natural</h1>
          <h1 class="display-5 font-weight-bold mb-3">radiacion</h1>
        </div>
      </v-col>
      <v-col cols="11">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
  name:'inicioComponent'
}
</script>