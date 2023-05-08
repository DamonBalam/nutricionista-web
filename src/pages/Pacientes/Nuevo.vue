<template>
  <q-page class="fondo-gris q-py-md q-px-xl">
    <BotonBack url="/pacientes" />
    <div class="q-my-md">
      <span class="text-black text-bold text-h5">Nuevo Paciente</span>
    </div>
    <q-form ref="myForm">
      <div class="row q-col-gutter-sm">
        <!-- DATOS PERSONALES -->
        <div class="col-12 q-mb-md">
          <q-card style="border-radius: 15px;" flat bordered  class="q-pa-lg">
            <div class="row q-col-gutter-sm">
              <div class="col-12">
                <span class="text-weight-bold" style="color: #1e293b"
                  >Datos personales</span
                >
              </div>
              <div class="col-4">
                <label for="nombre" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Nombre(s)</label
                >
                <q-input
                  outlined
                  v-model="formulario.nombre"
                  dense
                  placeholder="Escribe el nombre(s)"
                  lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']"
                />
              </div>
              <div class="col-4">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Primer apellido</label
                >
                <q-input
                  outlined
                  dense
                  v-model="formulario.apellido"
                  placeholder="Escribe el primer apellido"
                  lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']"
                />
              </div>
              <div class="col-4">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Segundo apellido</label
                >
                <q-input
                  outlined
                  dense
                  v-model="formulario.segundoApellido"
                  placeholder="Escribe el segundo apellido"
                  lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']"
                />
              </div>
              <div class="col-4">
                <label for="nombre" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Fecha de nacimiento</label
                >
                <q-input
                  outlined
                  type="date"
                  v-model="formulario.fechaNacimiento"
                  dense
                  placeholder="Fecha de nacimiento"
                  lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']"
                />
              </div>
              <div class="col-4">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Sexo</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.sexo"
                  hide-hint
                  label="Seleccione el sexo"
                  :options="['Masculino', 'Femenino', 'No especificado']"
                  lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']"
                />
              </div>
            </div>
          </q-card>
        </div>

        <!-- SALUD Y ESTILO DE VIDA -->
        <div class="col-12 q-mb-md">
          <q-card style="border-radius: 15px;" flat bordered  class="q-pa-lg">
            <div class="row q-col-gutter-sm">
              <div class="col-12">
                <span class="text-weight-bold" style="color: #1e293b"
                  >Salud y estilo de vida</span
                >
              </div>
              <div class="col-6">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Actividad física semanal</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.actividadFisica"
                  label="Seleccione la cantidad de actividad física semanal"
                  :options="['Masculino', 'Femenino']"
                  lazy-rules
                  :rules="[
                    val => val.length > 0 || 'El actividad física es requerida'
                  ]"
                />
              </div>
              <div class="col-6">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Objetivo Actual</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.objetivoActual"
                  label="Seleccione el objetivo actual"
                  :options="['Masculino', 'Femenino']"
                  lazy-rules
                  :rules="[
                    val => val.length > 0 || 'El objetivo actual es requerido'
                  ]"
                />
              </div>
              <div class="col-6">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Alergias</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.actividadFisica"
                  label="Seleccione la actividad semanal"
                  :options="['Masculino', 'Femenino']"
                  lazy-rules
                  :rules="[val => val.length > 0 || 'El apellido es requerido']"
                />
              </div>
              <div class="col-6">
                <label for="apellido" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Condiciones médicas</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.objetivoActual"
                  label="Seleccione el objetivo actual"
                  :options="['Masculino', 'Femenino']"
                  lazy-rules
                  :rules="[val => val.length > 0 || 'El apellido es requerido']"
                />
              </div>
            </div>
          </q-card>
        </div>

        <!-- DATOS DE CONTACTO -->
        <div class="col-6 q-mb-md">
          <q-card style="border-radius: 15px;" flat bordered  class="q-pa-lg">
            <div class="row q-col-gutter-sm">
              <div class="col-12">
                <span class="text-weight-bold" style="color: #1e293b"
                  >Datos de contacto</span
                >
              </div>
              <div class="col-6">
                <label for="email" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Correo electrónico</label
                >
                <q-input
                  outlined
                  dense
                  v-model="formulario.email"
                  placeholder="correo@ejemplo.com"
                  lazy-rules
                  :rules="[
                    val =>
                      val.length > 0 || 'El correo electrónico es requerido'
                  ]"
                />
              </div>
              <div class="col-6">
                <label for="telefono" class="q-ml-xs text-subtitle2 q-mb-none"
                  >Teléfono</label
                >
                <q-input
                  outlined
                  v-model="formulario.telefono"
                  dense
                  placeholder="Escribe el telefono(s)"
                  lazy-rules
                  :rules="[val => val.length > 0 || 'El telefono es requerido']"
                />
              </div>
            </div>
          </q-card>
        </div>

        <!-- USO INTERNO -->
        <div class="col-6 q-mb-md">
          <q-card style="border-radius: 15px;" flat bordered  class="q-pa-lg">
            <div class="row q-col-gutter-sm">
              <div class="col-12">
                <span class="text-weight-bold" style="color: #1e293b"
                  >Uso interno</span
                >
              </div>
              <div class="col-6">
                <label
                  for="consultorio"
                  class="q-ml-xs text-subtitle2 q-mb-none"
                  >Consultorio</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.consultorio"
                  label="Seleccione el consultorio"
                  :options="['Masculino', 'Femenino']"
                  lazy-rules
                  :rules="[
                    val => val.length > 0 || 'El consultorio es requerido'
                  ]"
                />
              </div>
              <div class="col-6">
                <label
                  for="nutricionista"
                  class="q-ml-xs text-subtitle2 q-mb-none"
                  >Nutricionista</label
                >
                <q-select
                  outlined
                  dense
                  v-model="formulario.nutricionista"
                  label="Elegir nutricionista"
                  :options="['Masculino', 'Femenino']"
                  lazy-rules
                  :rules="[
                    val => val.length > 0 || 'La nutricionista es requerida'
                  ]"
                />
              </div>
            </div>
          </q-card>
        </div>

        <!-- ACTIONS -->
        <div class="col-12 row justify-end">
          <q-btn
            label="Cancelar"
            :to="{ name: 'Pacientes' }"
            class="q-mt-md q-mr-md bg-white"
            outline
            style="width: 240px"
          />
          <q-btn
            :disable="disabled"
            color="primary"
            label="Guardar"
            class="q-mt-md bg-primary text-white border-primary"
            flat
            style="width: 240px"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from 'vue'
import BotonBack from '../../components/common/BotonBack.vue'

const myForm = ref<any>(null)

const formulario = reactive({
  nombre: '',
  apellido: '',
  segundoApellido: '',
  fechaNacimiento: '',
  sexo: '',
  telefono: '',
  email: '',
  alergias: [],
  antecedentes: [],
  actividadFisica: '',
  objetivoActual: '',
  consultorio: '',
  nutricionista: ''
})

const disabled = computed(() => {
  if (
    formulario.nombre.length > 0 &&
    formulario.apellido.length > 0 &&
    formulario.sexo.length > 0 &&
    formulario.telefono.length > 0 &&
    formulario.email.length > 0 &&
    formulario.actividadFisica.length > 0 &&
    formulario.objetivoActual.length > 0 &&
    formulario.consultorio.length > 0 &&
    formulario.nutricionista.length > 0
  ) {
    return false
  } else {
    return true
  }
})
</script>

<style lang="scss" scoped>
.fondo-gris {
  background-color: #f1f5f9;
}
</style>
