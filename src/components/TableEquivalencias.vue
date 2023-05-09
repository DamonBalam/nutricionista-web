<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IProducto } from '../interfaces/Producto'
import { productoDataServices } from '../services/ProductoDataService'
import { ref, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
import { E } from 'app/dist/spa/assets/index.0a47eace'

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
    desayuno: '',
    media_manana: '',
    almuerzo: '',
    media_tarde: '',
    cena: '',
    media_noche: '',
  },
  {
    alimentos: 'Frutas',
    desayuno: '',
    media_manana: '',
    almuerzo: '',
    media_tarde: '',
    cena: '',
    media_noche: '',
  },
  {
    alimentos: 'Vegetales',
    desayuno: '',
    media_manana: '',
    almuerzo: '',
    media_tarde: '',
    cena: '',
    media_noche: '',
  },
  {
    alimentos: 'Lácteos',
    desayuno: '',
    media_manana: '',
    almuerzo: '',
    media_tarde: '',
    cena: '',
    media_noche: '',
  },
  {
    alimentos: 'Proteínas',
    desayuno: '',
    media_manana: '',
    almuerzo: '',
    media_tarde: '',
    cena: '',
    media_noche: '',
  },
  {
    alimentos: 'Grasas',
    desayuno: '',
    media_manana: '',
    almuerzo: '',
    media_tarde: '',
    cena: '',
    media_noche: '',
  }
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
  <div class="q-mt-md">
    <span class="text-black text-bold text-h5"
      >Equivalencias nutricionales</span
    >
  </div>
  <div class="q-mt-md">
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
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="alimentos" :props="props">{{ props.row.alimentos }}</q-td>
          <q-td key="desayuno" :props="props">
            {{ props.row.desayuno }}
            <q-popup-edit v-model="props.row.desayuno" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="media_manana" :props="props">
            {{ props.row.media_manana }}
            <q-popup-edit v-model="props.row.media_manana" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="almuerzo" :props="props">
            {{ props.row.almuerzo }}
            <q-popup-edit v-model="props.row.almuerzo" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>

          <q-td key="media_tarde" :props="props">
            {{ props.row.media_tarde }}
            <q-popup-edit v-model="props.row.media_tarde" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="cena" :props="props">
            {{ props.row.cena }}
            <q-popup-edit v-model="props.row.cena" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="media_noche" :props="props">
            {{ props.row.media_noche }}
            <q-popup-edit v-model="props.row.media_noche" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="total" :props="props">{{
            Number(props.row.desayuno) +
            Number(props.row.media_manana) +
            Number(props.row.almuerzo) +
            Number(props.row.media_tarde) +
            Number(props.row.cena) +
            Number(props.row.media_noche)
          }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
  <div class="row justify-end q-mt-md">
    <q-btn color="primary">Guardar</q-btn>
  </div>
</template>
