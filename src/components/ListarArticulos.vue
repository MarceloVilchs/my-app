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
                <v-btn :to="{name:'crearArticulo'}" class="mx-2" fab dark color="indigo">
                    <v-icon dark> mdi-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

