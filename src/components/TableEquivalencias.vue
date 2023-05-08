<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IProducto } from '../interfaces/Producto'
import { productoDataServices } from '../services/ProductoDataService'
import { ref, onMounted } from 'vue'
import { computed } from '@vue/reactivity'

const router = useRouter()
const columns = [
  {
    name: 'alimentos',
    label: 'Alimentos',
    field: 'alimentos',
    align: 'left'
  },
  {
    name: 'desayuno',
    label: 'Desayuno',
    field: 'desayuno',
    align: 'center'
  },
  {
    name: 'media_manana',
    label: 'Media mañana',
    field: 'media_manana',
    align: 'center'
  },
  {
    name: 'almuerzo',
    label: 'Almuerzo',
    field: 'almuerzo',
    align: 'center'
  },
  {
    name: 'media_tarde',
    label: 'Media tarde',
    field: 'media_tarde',
    align: 'center'
  },
  {
    name: 'cena',
    label: 'Cena',
    field: 'cena',
    align: 'center'
  },
  {
    name: 'media_noche',
    label: 'Media noche',
    field: 'media_noche',
    align: 'center'
  },

  {
    name: 'total',
    label: 'Total',
    field: 'total',
    align: 'center'
  }
]

const search = ref('')
const loading = ref(false)
const items = ref<any[]>([
  {
    alimentos: 'Carbohidratos',
    desayuno: '2',
    media_manana: '1',
    almuerzo: '1',
    media_tarde: '1',
    cena: '1',
    media_noche: '1',
    total: '7'
  },
  {
    alimentos: 'Frutas',
    desayuno: '2',
    media_manana: '1',
    almuerzo: '1',
    media_tarde: '1',
    cena: '1',
    media_noche: '1',
    total: '7'
  },
  {
    alimentos: 'Vegetales',
    desayuno: '2',
    media_manana: '1',
    almuerzo: '1',
    media_tarde: '1',
    cena: '1',
    media_noche: '1',
    total: '7'
  },
  {
    alimentos: 'Lácteos',
    desayuno: '2',
    media_manana: '1',
    almuerzo: '1',
    media_tarde: '1',
    cena: '1',
    media_noche: '1',
    total: '7'
  },
])

onMounted(async () => {
  // await getItems()
})

const getItems = async () => {
  loading.value = true
  try {
    const data = await productoDataServices.getProductos()

    if (data.code === 200) {
      items.value = data.data
    }
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const itemsFiltered = computed(() => {
  if (search.value === '') {
    return items.value
  }

  return items.value.filter(item => {
    return item.nombre.toLowerCase().includes(search.value.toLowerCase())
  })
})
</script>
<template>
  <div class="q-mt-lg q-pt-lg row justify-between">
    <span class="text-black text-bold text-h5"
      >Equivalencias nutricionales</span
    >
    <q-btn label="Nuevo registro" color="primary" :icon="'add'" />
  </div>
  <div class="q-mt-lg">
    <q-table
      flat
      :rows="itemsFiltered"
      :columns="columns"
      row-key="name"
      table-header-class="bg-accent text-black border-accent text-weight-bold"
      :separator="'cell'"
      :loading="loading"
      no-data-label="No se han encontrado registros"
      hide-pagination
    >
    </q-table>
  </div>
</template>
