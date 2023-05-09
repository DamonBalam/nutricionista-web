<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { computed } from '@vue/reactivity'
import { IPaciente } from '../interfaces/Paciente'
import { pacienteDataServices } from 'src/services/PacienteDataService'

const router = useRouter()
const columns = [
  {
    name: 'nombre',
    label: 'Nombre completo',
    field: 'nombre',
    align: 'left'
  },

  {
    name: 'cita',
    label: 'Fecha ultima cita',
    field: 'cita',
    align: 'center'
  },
  {
    name: 'suscripcion',
    label: 'Acceso',
    field: 'suscripcion',
    align: 'center'
  },
  {
    name: 'consultorio',
    label: 'Consultorio',
    field: 'consultorio',
    align: 'center'
  },
  {
    name: 'nutricionista',
    label: 'Nutricionista',
    field: 'nutricionista',
    align: 'center'
  },
  {
    name: 'telefono',
    label: 'Teléfono',
    field: 'telefono',
    align: 'center'
  },
  {
    name: 'email',
    label: 'Correo electrónico',
    field: 'email',
    align: 'center'
  },

  { name: 'accion', label: '', align: 'center' }
]

const search = ref('')
const fecha = ref('')
const acceso = ref(null)
const consultorio = ref('')
const colaborador = ref('')

const options = [
  { label: 'Todos', value: null },
  { label: 'Activos', value: true },
  { label: 'Inactivos', value: false }
]

const loading = ref(false)
const items = ref<any[]>([])

onMounted(async () => {
  await getItems()
})

const getItems = async () => {
  loading.value = true
  try {
    const data = await pacienteDataServices.getAll()

    if (data.code === 200) {
      items.value = data.data
      // console.log(data.data)
    }
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}
const fechaActual = computed(() => {
  const fechaActual = new Date().toISOString().substr(0, 10)
  return fechaActual
})

function isFechaEnRango(fechaInicio: string, fechaFin: string) {
  return fechaActual.value >= fechaInicio && fechaActual.value <= fechaFin
}
// const pacientesFiltered = computed(() => {
//   return items.value.filter((item: IPaciente) => {
//     const coincideNombre =
//       search.value === '' ||
//       item.nombre.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
//     const coincideAcceso = acceso.value === null || item.acceso === acceso.value
//     const coincideConsultorio =
//       consultorio.value === '' || item.consultorio === consultorio.value
//     const coincideFecha = fecha.value === '' || item.fecha === fecha.value
//     // const coincideColaborador = colaborador.value === null || item.colaborador === colaborador.value

//     return (
//       coincideNombre && coincideAcceso && coincideConsultorio && coincideFecha
//     )
//   })
// })

const getPerfil = (id: string) => {
  console.log(id)

  router.push({ name: 'PerfilPaciente', params: { id } })
}
</script>
<template>
  <div class="q-mt-lg q-pt-lg">
    <p class="text-black text-bold text-h5 q-mb-lg">Lista de pacientes</p>
    <div class="row justify-between">
      <q-input
        rounded
        class="q-mr-xs"
        v-model="fecha"
        type="date"
        outlined
        dense
        label="Fecha"
        bg-color="white"
        style="width: 240px"
      >
      </q-input>
      <q-select
        rounded
        class="q-mr-xs"
        v-model="acceso"
        :options="options"
        outlined
        dense
        label="Acceso"
        bg-color="white"
        style="width: 240px"
        emit-value
        map-options
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-select>
      <q-input
        rounded
        class="q-mr-xs"
        v-model="consultorio"
        outlined
        dense
        label="Consultorio"
        bg-color="white"
        style="width: 240px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-input
        rounded
        class="q-mr-xs"
        v-model="colaborador"
        outlined
        dense
        label="Nutricionista"
        bg-color="white"
        style="width: 240px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-input
        rounded
        class="q-mr-xs"
        v-model="search"
        outlined
        dense
        label="Buscar paciente"
        bg-color="white"
        style="width: 240px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn
        :to="{ name: 'NuevoPaciente' }"
        label="Nuevo Paciente"
        color="primary"
        :icon="'add'"
      />
    </div>
  </div>
  <div class="q-mt-lg">
    <q-table
      flat
      :rows="items"
      :columns="columns"
      row-key="name"
      table-header-class="bg-accent text-black border-accent text-weight-bold"
      :separator="'cell'"
      :loading="loading"
      no-data-label="No se han encontrado registros"
      rows-per-page-label="Filas por página"
      :rows-per-page-options="[10, 15, 30, 50]"
    >
      <template v-slot:body-cell-cita="props">
        <q-td key="cita" :props="props">
          {{
            props.row.cita.fecha !== null
              ? props.row.cita.fecha
              : 'No hay registro'
          }}
        </q-td>
      </template>
      <template v-slot:body-cell-suscripcion="props">
        <q-td key="suscripcion" :props="props">
          <q-chip
            :color="
              isFechaEnRango(
                props.row.suscripcion.empieza,
                props.row.suscripcion.termina
              )
                ? 'primary'
                : 'negative'
            "
            text-color="white"
            size="md"
            class="q-pa-md"
          >
            {{
              isFechaEnRango(
                props.row.suscripcion.empieza,
                props.row.suscripcion.termina
              )
                ? 'Con acceso'
                : 'Sin acceso'
            }}
          </q-chip>
        </q-td>
      </template>
      <template v-slot:body-cell-accion="props">
        <q-td :props="props">
          <q-btn flat round color="black" icon="more_vert">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item
                  clickable
                  v-close-popup
                  @click="getPerfil(props.row.id)"
                >
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Editar</q-item-section>
                </q-item>
                <!-- <q-item clickable v-close-popup>
                    <q-item-section>New incognito tab</q-item-section>
                  </q-item> -->
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
