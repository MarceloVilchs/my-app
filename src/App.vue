<template>
  <div id="app" data-app>
    <v-card
      class="mx-auto overflow-hidden"
      height="600"
      width="800"
      
    >
      <v-system-bar color="cyan"></v-system-bar>

      <v-app-bar
      style="background-color: rgb(93, 203, 223);"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-center"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn href="https://www.youtube.com" target="_blank" class="mx-10" fab icon>
          <v-icon style="color: rgb(231, 43, 43);">mdi-youtube</v-icon>
        </v-btn>

        <v-btn icon >
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
        <v-card-text class="text-center" style="margin-top: auto;">
          m.vilchess@duocuc.cl
        </v-card-text>
      </v-navigation-drawer>


        <!-- Este es el lugar donde se mostrará el contenido de las páginas -->
        <router-view></router-view>

    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
