<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  {
    name: 'name',
    label: 'Nombre',
    field: 'name',
    align: 'left'
  },
  {
    name: 'email',
    align: 'center',
    label: 'Email',
    field: 'email'
  },
  { name: 'rol', label: 'Rol', field: 'rol', align: 'center' },
  { name: 'accion', label: 'Acción', align: 'center' }
]

const colabs = [
  {
    name: 'Natalia Segura',
    email: 'natalia@nutriocionista.com',
    rol: 'Manager'
  },
  {
    name: 'Rebeca Segura',
    email: 'rebeca@nutriocionista.com',
    rol: 'Admin'
  }
]

const prompt = ref(false)

const address = ref('')
</script>

<template>
  <div class="q-mt-lg q-pt-lg row justify-between">
    <span class="text-black text-bold text-h5">Colaboradores</span>
    <q-btn
      label="Añadir Colaborador"
      type="submit"
      color="primary"
      :icon="'add'"
      @click="prompt = true"
    />
  </div>

  <div class="q-mt-lg">
    <q-table
      :rows="colabs"
      :columns="columns"
      row-key="name"
      :hide-pagination="true"
      table-header-class="bg-black text-white"
      table-class="text-bold"
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
        <div class="text-h6">Nuevo Colaborador</div>
      </q-card-section>

      <q-card-section class="row">
        <div class="col q-mx-xs">
          <q-input
            outlined
            label="Nombre"
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </div>
        <div class="col q-mx-xs">
          <q-input
            outlined
            label="E-mail"
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </div>
        <div class="col q-mx-xs">
          <q-input
            outlined
            label="Rol"
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
