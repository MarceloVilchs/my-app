<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="750"
    width="2100"
  >
    <v-system-bar color="cyan"></v-system-bar>

    <v-app-bar
      color="cyan"
      white
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-center">Articulos Upgrade</v-toolbar-title>

      <v-spacer></v-spacer>


      

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      app clipped
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{path:'/inicio'}">
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/articulos'}">
            <v-list-item-title>Articulos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/contacto'}">
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text>
      Prueba de pagina u aplicacion web en curso por marcelo vilches :)
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>


