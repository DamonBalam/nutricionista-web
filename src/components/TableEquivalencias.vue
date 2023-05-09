<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { computed } from '@vue/reactivity'
import { citaControlDataServices } from '../services/CitaControlDataService'
import { eqNuDataService } from '../services/EqNuDataService'

const props = defineProps({
  id: {
    type: String || Number,
    required: true
  },
  cita: {
    type: Number || null,
    required: false,
    default: null
  }
})
const columns = [
  {
    name: 'tiempo',
    label: '',
    field: 'tiempo',
    align: 'center'
  },
  {
    name: 'carbohidratos',
    label: 'Carbohidratos',
    field: 'carbohidratos',
    align: 'center'
  },
  {
    name: 'frutas',
    label: 'Frutas',
    field: 'frutas',
    align: 'center'
  },
  {
    name: 'vegetales',
    label: 'Vegetales',
    field: 'vegetales',
    align: 'center'
  },
  {
    name: 'lacteos',
    label: 'Lácteos',
    field: 'lacteos',
    align: 'center'
  },
  {
    name: 'proteinas',
    label: 'Proteínas',
    field: 'proteinas',
    align: 'center'
  }
]

const loading = ref(false)
const cita_control_id = ref<string | number | null>(null)
const equivalencia_id = ref<string | number | null>(null)
const fecha = ref<string | number | null>(null)

watch(
  () => props.cita,
  async (newValue, oldValue) => {
    cita_control_id.value = newValue

    getItems()
  }
)

const items = ref<any[]>([
  {
    tiempo: 'Desayuno',
    carbohidratos: '',
    frutas: '',
    vegetales: '',
    lacteos: '',
    proteinas: ''
  },
  {
    tiempo: 'Media Mañana',
    carbohidratos: '',
    frutas: '',
    vegetales: '',
    lacteos: '',
    proteinas: ''
  },
  {
    tiempo: 'Almuerzo',
    carbohidratos: '',
    frutas: '',
    vegetales: '',
    lacteos: '',
    proteinas: ''
  },
  {
    tiempo: 'Media Tarde',
    carbohidratos: '',
    frutas: '',
    vegetales: '',
    lacteos: '',
    proteinas: ''
  },
  {
    tiempo: 'Cena',
    carbohidratos: '',
    frutas: '',
    vegetales: '',
    lacteos: '',
    proteinas: ''
  },
  {
    tiempo: 'Merienda Noche',
    carbohidratos: '',
    frutas: '',
    vegetales: '',
    lacteos: '',
    proteinas: ''
  }
])

onMounted(async () => {
  const data = await citaControlDataServices.getAll(props.id)
  if (data.code === 200) {
    cita_control_id.value = data.data.reverse()[0].id ?? null
    // console.log(cita_control_id.value)
  }
  await getItems()
})

const getItems = async () => {
  loading.value = true
  try {
    const data = await eqNuDataService.getByCita(
      cita_control_id.value as string
    )

    if (data.code === 200) {
      fecha.value = data.data.cita_control.fecha_cita
      equivalencia_id.value = data.data.equivalencias_nutricionales[0].id

      const desayuno = JSON.parse(
        data.data.equivalencias_nutricionales[0].desayuno
      )
      const media_m = JSON.parse(
        data.data.equivalencias_nutricionales[0].media_mañana
      )

      const almuerzo = JSON.parse(
        data.data.equivalencias_nutricionales[0].almuerzo
      )

      const media_tarde = JSON.parse(
        data.data.equivalencias_nutricionales[0].media_tarde
      )
      const cena = JSON.parse(data.data.equivalencias_nutricionales[0].cena)
      const merienda_noche = JSON.parse(
        data.data.equivalencias_nutricionales[0].merienda_noche
      )

      items.value[0].carbohidratos = desayuno.carbohidratos
      items.value[0].frutas = desayuno.frutas
      items.value[0].vegetales = desayuno.vegetales
      items.value[0].lacteos = desayuno.lacteos
      items.value[0].proteinas = desayuno.proteinas

      items.value[1].carbohidratos = media_m.carbohidratos
      items.value[1].frutas = media_m.frutas
      items.value[1].vegetales = media_m.vegetales
      items.value[1].lacteos = media_m.lacteos
      items.value[1].proteinas = media_m.proteinas

      items.value[2].carbohidratos = almuerzo.carbohidratos
      items.value[2].frutas = almuerzo.frutas
      items.value[2].vegetales = almuerzo.vegetales
      items.value[2].lacteos = almuerzo.lacteos
      items.value[2].proteinas = almuerzo.proteinas

      items.value[3].carbohidratos = media_tarde.carbohidratos
      items.value[3].frutas = media_tarde.frutas
      items.value[3].vegetales = media_tarde.vegetales
      items.value[3].lacteos = media_tarde.lacteos
      items.value[3].proteinas = media_tarde.proteinas

      items.value[4].carbohidratos = cena.carbohidratos
      items.value[4].frutas = cena.frutas
      items.value[4].vegetales = cena.vegetales
      items.value[4].lacteos = cena.lacteos
      items.value[4].proteinas = cena.proteinas

      items.value[5].carbohidratos = merienda_noche.carbohidratos
      items.value[5].frutas = merienda_noche.frutas
      items.value[5].vegetales = merienda_noche.vegetales
      items.value[5].lacteos = merienda_noche.lacteos
      items.value[5].proteinas = merienda_noche.proteinas
    } else {
      equivalencia_id.value = null
      fecha.value = null
      items.value[0].carbohidratos = ''
      items.value[0].frutas = ''
      items.value[0].vegetales = ''
      items.value[0].lacteos = ''
      items.value[0].proteinas = ''
      items.value[1].carbohidratos = ''
      items.value[1].frutas = ''
      items.value[1].vegetales = ''
      items.value[1].lacteos = ''
      items.value[1].proteinas = ''
      items.value[2].carbohidratos = ''
      items.value[2].frutas = ''
      items.value[2].vegetales = ''
      items.value[2].lacteos = ''
      items.value[2].proteinas = ''
      items.value[3].carbohidratos = ''
      items.value[3].frutas = ''
      items.value[3].vegetales = ''
      items.value[3].lacteos = ''
      items.value[3].proteinas = ''
      items.value[4].carbohidratos = ''
      items.value[4].frutas = ''
      items.value[4].vegetales = ''
      items.value[4].lacteos = ''
      items.value[4].proteinas = ''
      items.value[5].carbohidratos = ''
      items.value[5].frutas = ''
      items.value[5].vegetales = ''
      items.value[5].lacteos = ''
      items.value[5].proteinas = ''
    }
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const getTotal = computed(() => {
  let carbohidratos = 0
  let frutas = 0
  let vegetales = 0
  let lacteos = 0
  let proteinas = 0
  items.value.forEach(item => {
    carbohidratos += Number(item.carbohidratos)
    frutas += Number(item.frutas)
    vegetales += Number(item.vegetales)
    lacteos += Number(item.lacteos)
    proteinas += Number(item.proteinas)
  })
  return {
    carbohidratos,
    frutas,
    vegetales,
    lacteos,
    proteinas
  }
})

const submit = async () => {
  try {
    const data = {
      cita_control_id: cita_control_id.value,
      desayuno: {
        carbohidratos: items.value[0].carbohidratos || 0,
        frutas: items.value[0].frutas || 0,
        vegetales: items.value[0].vegetales || 0,
        lacteos: items.value[0].lacteos || 0,
        proteinas: items.value[0].proteinas || 0
      },
      media_mañana: {
        carbohidratos: items.value[1].carbohidratos || 0,
        frutas: items.value[1].frutas || 0,
        vegetales: items.value[1].vegetales || 0,
        lacteos: items.value[1].lacteos || 0,
        proteinas: items.value[1].proteinas || 0
      },
      almuerzo: {
        carbohidratos: items.value[2].carbohidratos || 0,
        frutas: items.value[2].frutas || 0,
        vegetales: items.value[2].vegetales || 0,
        lacteos: items.value[2].lacteos || 0,
        proteinas: items.value[2].proteinas || 0
      },
      media_tarde: {
        carbohidratos: items.value[3].carbohidratos || 0,
        frutas: items.value[3].frutas || 0,
        vegetales: items.value[3].vegetales || 0,
        lacteos: items.value[3].lacteos || 0,
        proteinas: items.value[3].proteinas || 0
      },
      cena: {
        carbohidratos: items.value[4].carbohidratos || 0,
        frutas: items.value[4].frutas || 0,
        vegetales: items.value[4].vegetales || 0,
        lacteos: items.value[4].lacteos || 0,
        proteinas: items.value[4].proteinas || 0
      },
      merienda_noche: {
        carbohidratos: items.value[5].carbohidratos || 0,
        frutas: items.value[5].frutas || 0,
        vegetales: items.value[5].vegetales || 0,
        lacteos: items.value[5].lacteos || 0,
        proteinas: items.value[5].proteinas || 0
      }
    }

    if (equivalencia_id.value === null) {
      const res = await eqNuDataService.save(data)
      if (res.code === 201) {
        await getItems()
      }
    } else {
      const res = await eqNuDataService.update(equivalencia_id.value, data)
      if (res.code === 200) {
        await getItems()
      }
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="q-mt-md">
    <span class="text-black text-bold text-h5"
      >Equivalencias nutricionales
      {{ fecha === null ? '' : ` - ${fecha}` }}</span
    >
  </div>
  <div class="q-mt-md">
    <q-table
      flat
      :rows="items"
      :columns="columns"
      row-key="name"
      table-header-class="bg-accent text-black border-accent text-weight-bold"
      :separator="'cell'"
      :loading="loading"
      no-data-label="No se han encontrado registros"
      :rows-per-page-options="[6]"
      hide-pagination
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td style="height: 30px" key="tiempo" :props="props" auto-width>{{
            props.row.tiempo
          }}</q-td>
          <q-td style="height: 30px" key="carbohidratos" :props="props">
            {{ props.row.carbohidratos }}
            <q-popup-edit v-model="props.row.carbohidratos" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td style="height: 30px" key="frutas" :props="props">
            {{ props.row.frutas }}
            <q-popup-edit v-model="props.row.frutas" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td style="height: 30px" key="vegetales" :props="props">
            {{ props.row.vegetales }}
            <q-popup-edit v-model="props.row.vegetales" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td style="height: 30px" key="lacteos" :props="props">
            {{ props.row.lacteos }}
            <q-popup-edit v-model="props.row.lacteos" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td style="height: 30px" key="proteinas" :props="props">
            {{ props.row.proteinas }}
            <q-popup-edit v-model="props.row.proteinas" v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:bottom-row>
        <q-tr>
          <q-td
            style="height: 30px"
            class="text-center text-bold bg-primary text-white"
            >Total</q-td
          >
          <q-td
            style="height: 30px"
            class="text-center text-bold bg-primary text-white"
            >{{ getTotal.carbohidratos }}</q-td
          >
          <q-td
            style="height: 30px"
            class="text-center text-bold bg-primary text-white"
            >{{ getTotal.frutas }}</q-td
          >
          <q-td
            style="height: 30px"
            class="text-center text-bold bg-primary text-white"
            >{{ getTotal.vegetales }}</q-td
          >
          <q-td
            style="height: 30px"
            class="text-center text-bold bg-primary text-white"
            >{{ getTotal.lacteos }}</q-td
          >
          <q-td
            style="height: 30px"
            class="text-center text-bold bg-primary text-white"
            >{{ getTotal.proteinas }}</q-td
          >
        </q-tr>
      </template>
    </q-table>
  </div>
  <div class="row justify-end q-mt-md">
    <q-btn color="primary" @click="submit">{{
      equivalencia_id ? 'Actualizar' : 'Guardar'
    }}</q-btn>
  </div>
</template>
