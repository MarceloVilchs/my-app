<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4"> 
                <h1 class="display-2 font-weight-bold mb-3">
                    Formulario de ALTA
                </h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <form v-on:submit.prevent="guardarArticulo()">
                    <v-text-field v-model="articulo.descripcion" 
                    label="Descripcion"
                    outline
                    required 
                    >

                    </v-text-field>
                    <v-text-field  
                                clearable label="Descripcion" 
                                variant="underlined"
                                outline
                                required 
                    ></v-text-field>
                    <v-text-field  
                                clearable label="Stock" 
                                variant="underlined"
                                outline
                                required 
                    ></v-text-field>
                    <v-text-field  
                                clearable label="Precio" 
                                variant="underlined"
                                outline
                                required 
                    ></v-text-field>
                    
                    <v-card>
                        <v-btn
                                depressed
                                color="primary"
                                class="mr-4"
                                type="submit"
                                >
                        Guardar
                        </v-btn>
                    </v-card>

                </form>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default{
    name:'crearArticulo'
}
</script>