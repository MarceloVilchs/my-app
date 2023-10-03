<template>
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h2 class="display-2 font-weight-bold mb-3">
            Listado de Artículos
          </h2>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col class="mb-1">
          <v-btn :to="{ name: 'crearArticulo' }" class="mx-2" fab red style="background-color: rgb(201, 41, 41);">
            <v-icon dark style="color: rgb(253, 253, 253);">mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
  
      <v-row class="text-center">
        <v-col cols="12">
          <v-simple-table fixed-header class="elevation-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">ID</th>
                  <th class="text-center">DESCRIPCIÓN</th>
                  <th class="text-center">PRECIO</th>
                  <th class="text-center">STOCK</th>
                  <th class="text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="articulo in articulos" :key="articulo.id">
                  <td>{{ articulo.id }}</td>
                  <td>{{ articulo.Descripcion }}</td>
                  <td>{{ articulo.Precio }}</td>
                  <td>{{ articulo.Stock }}</td>
                  <td>{{ articulo.Acciones }}</td>
                  <td>
                    <v-btn fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
  
      <!--ventana de diálogo para eliminar registros -->
      <v-dialog v-model="dialog" max-width="350">
        <!-- Contenido de la ventana de diálogo -->
      </v-dialog>
  
      <v-snackbar v-model="snackbar" color="success"> {{ textsnack }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false // Inicializa dialog como false o true según tus necesidades iniciales
      };
    }
  };
  </script>
  
  <script>
  export default{
      name:'listarArticulos'
  }
  </script>
  

  