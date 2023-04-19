<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IProducto } from '../interfaces/Producto'
import { ref } from 'vue'

const router = useRouter()
const columns = [
  {
    name: 'nombre',
    label: 'Nombre del producto',
    field: 'nombre',
    align: 'left'
  },
  {
    name: 'cantidad_producto',
    label: 'Cantidad del producto',
    field: 'cantidad_producto',
    align: 'center'
  },
  {
    name: 'intercambio_nutricional',
    label: 'Intercambio nutricional',
    field: 'intercambio_nutricional',
    align: 'center'
  },
  {
    name: 'detalles_adicionales',
    label: 'Detalles adicionales',
    field: 'detalles_adicionales',
    align: 'center'
  },
  { name: 'accion', label: 'Acción', align: 'center' }
]

const search = ref('')
const items: IProducto[] = []
</script>
<template>
  <div class="q-mt-lg q-pt-lg row justify-between">
    <span class="text-black text-bold text-h5">Lista de productos</span>
    <div class="row">
      <q-input
        rounded
        class="q-mr-md"
        v-model="search"
        outlined
        dense
        label="Buscar categoría"
        bg-color="white"
        style="width: 250px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn
        to="/productos/nuevo"
        label="Añadir Producto"
        color="primary"
        :icon="'add'"
      />
    </div>
  </div>
  <div class="q-mt-lg">
    <q-table
      :rows="items"
      :columns="columns"
      row-key="name"
      :hide-pagination="true"
      table-header-class="bg-black text-white"
    >
      <template v-slot:body-cell-accion="props">
        <q-td :props="props">
          <div>
            <q-btn flat round color="black" icon="more_vert" />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
