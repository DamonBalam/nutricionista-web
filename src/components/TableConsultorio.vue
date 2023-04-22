<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IClinic } from '../interfaces/Clinic'
import { clinicDataServices } from 'src/services/ClinicDataService'
const columns = [
  {
    name: 'name',
    label: 'Ubicación',
    field: 'name',
    align: 'left'
  },
  {
    name: 'address',
    align: 'center',
    label: 'Dirección',
    field: 'address'
  },
  { name: 'contact', label: 'Contacto', field: 'contact', align: 'center' },
  { name: 'accion', label: 'Acción', align: 'center' }
]

const items = ref<IClinic[]>([])
const prompt = ref(false)
const address = ref('')
const loading = ref(false)

onMounted(async () => {
  await getItems()
})

const getItems = async () => {
  loading.value = true
  try {
    const data = await clinicDataServices.getClinics()

    if (data.code === 200) {
      items.value = data.data
    }
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}
</script>

<template>
  <div class="q-mt-lg q-pt-lg row justify-between">
    <span class="text-black text-bold text-h5">Consultorios</span>
    <q-btn
      label="Añadir Consultorio"
      type="submit"
      color="primary"
      :icon="'add'"
      @click="prompt = true"
    />
  </div>

  <div class="q-mt-lg">
    <q-table
      :rows="items"
      :columns="columns"
      row-key="name"
      :hide-pagination="true"
      table-header-class="bg-black text-white"
      :loading="loading"
      no-data-label="No se han encontrado registros"
      rows-per-page-label="Filas por página"
      :rows-per-page-options="[5, 10, 15]"
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

  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 775px; border-radius: 40px" class="q-pa-lg">
      <q-card-section>
        <div class="text-h6">Nuevo Consultorio</div>
      </q-card-section>

      <q-card-section class="row">
        <div class="col q-mx-xs">
          <q-input
            outlined
            label="Ubicación"
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </div>
        <div class="col q-mx-xs">
          <q-input
            outlined
            label="Dirección"
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </div>
        <div class="col q-mx-xs">
          <q-input
            outlined
            label="Contacto"
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary q-mr-md">
        <q-btn outline label="Cancelar" v-close-popup style="width: 175px" />
        <q-btn
          color="primary"
          label="Añadir consultorio"
          v-close-popup
          style="width: 175px"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
