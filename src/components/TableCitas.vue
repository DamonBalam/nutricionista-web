<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IProducto } from '../interfaces/Producto'
import { productoDataServices } from '../services/ProductoDataService'
import { ref, onMounted } from 'vue'
import { computed } from '@vue/reactivity'

const router = useRouter()
const columns = [
  {
    name: 'fecha',
    label: 'Fecha',
    field: 'fecha',
    align: 'left'
  },
  {
    name: 'peso',
    label: 'Peso',
    field: 'peso',
    align: 'left'
  },
  {
    name: 'musculo',
    label: 'Músculo',
    field: 'musculo',
    align: 'left'
  },
  {
    name: 'grasas',
    label: 'Grasas',
    field: 'grasas',
    align: 'left'
  },
  {
    name: 'porcentaje_grasa',
    label: '% de Grasa',
    field: 'porcentaje_grasa',
    align: 'left'
  },
  {
    name: 'cc',
    label: 'CC',
    field: 'cc',
    align: 'left'
  },
  {
    name: 'grasa_visceral',
    label: 'Grasas',
    field: 'grasa_visceral',
    align: 'left'
  }
]

const search = ref('')
const loading = ref(false)
const items = ref<IProducto[]>([])

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
  <div class="q-mt-lg q-pt-lg row justify-between items-center">
    <span class="text-black text-bold text-h5">Registro de citas</span>
    <q-btn  color="primary" :icon="'add'" >Nueva cita</q-btn>
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
      rows-per-page-label="Filas por página"
      :rows-per-page-options="[10, 15, 30, 50]"
    >
    </q-table>
  </div>
</template>
