<script setup lang="ts">
import { ref } from 'vue'
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

const consultorios = ref([
  {
    name: 'Escazú',
    address:
      'Centro Médico Momentum , enfrente de Multiplaza Escazú. Piso 7 , consultorio 72.',
    contact: '2253-3773'
  },
  {
    name: 'Calle Blancos',
    address:
      'Centro Médico Momentum , enfrente de Multiplaza Escazú. Piso 7 , consultorio 72.',
    contact: '2253-3773'
  }
])

const prompt = ref(false)

const address = ref('')
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
      :rows="consultorios"
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
        <q-btn outline label="Cancelar" v-close-popup style="width: 175px"/>
        <q-btn color="primary" label="Añadir consultorio" v-close-popup style="width: 175px"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
