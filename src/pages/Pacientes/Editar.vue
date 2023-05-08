<template>
  <q-page class="fondo-gris q-py-md q-px-xl">
    <BotonBack url="/pacientes" />
    <div class="q-mx-md q-mt-md">
      <span class="text-black text-bold text-h5">Nuevo Paciente</span>
    </div>
    <div class="row q-mx-md q-mt-lg">
      <div class="col-12 q-mb-md">
        <span class="text-weight-bold" style="color: #1e293b"
          >Datos personales</span
        >
      </div>
      <div class="col-12 q-mb-md">
        <q-card flat bordered class="q-pa-md">
          <q-card-section>
            <q-form>
              <div class="row q-col-gutter-sm">
                <div class="col-4">
                  <label for="nombre" class="q-ml-xs text-subtitle2 q-mb-none"
                    >Nombre(s)</label
                  >
                  <q-input
                    outlined
                    v-model="formulario.nombre"
                    dense
                    label="Escribe el nombre(s)"
                    lazy-rules
                    :rules="[val => val.length > 0 || 'El nombre es requerido']"
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
                    label="Escribe el primer apellido"
                    lazy-rules
                    :rules="[
                      val => val.length > 0 || 'El primer apellido es requerido'
                    ]"
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
                    label="Escribe el segundo apellido"
                    lazy-rules
                    :rules="[
                      val =>
                        val.length > 0 || 'El segundo apellido es requerido'
                    ]"
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
                    label="Fecha de nacimiento"
                    lazy-rules
                    :rules="[val => val.length > 0 || 'La fecha es requerida']"
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
                    label="Seleccione el sexo"
                    :options="['Masculino', 'Femenino']"
                    lazy-rules
                    :rules="[
                      val => val.length > 0 || 'El apellido es requerido'
                    ]"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 q-mb-md q-mt-lg">
        <span class="text-weight-bold" style="color: #1e293b"
          >Salud y estilo de vida</span
        >
      </div>
      <div class="col-12 q-mb-md">
        <q-card flat bordered class="q-pa-md">
          <q-card-section>
            <q-form>
              <div class="row q-col-gutter-sm">
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
                      val =>
                        val.length > 0 || 'El actividad física es requerida'
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
                    :rules="[
                      val => val.length > 0 || 'El apellido es requerido'
                    ]"
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
                    :rules="[
                      val => val.length > 0 || 'El apellido es requerido'
                    ]"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 q-mb-md q-mt-lg">
        <span class="text-weight-bold" style="color: #1e293b"
          >Datos de contacto</span
        >
      </div>
      <div class="col-12 q-mb-md">
        <q-card flat bordered class="q-pa-md">
          <q-card-section>
            <q-form>
              <div class="row q-col-gutter-sm">
                <div class="col-6">
                  <label for="email" class="q-ml-xs text-subtitle2 q-mb-none"
                    >Correo electrónico</label
                  >
                  <q-input
                    outlined
                    dense
                    v-model="formulario.email"
                    label="correo@ejemplo.com"
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
                    label="Escribe el telefono(s)"
                    lazy-rules
                    :rules="[
                      val => val.length > 0 || 'El telefono es requerido'
                    ]"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 q-mb-md q-mt-lg">
        <span class="text-weight-bold" style="color: #1e293b">Uso interno</span>
      </div>
      <div class="col-12 q-mb-md">
        <q-card flat bordered class="q-pa-md">
          <q-card-section>
            <q-form>
              <div class="row q-col-gutter-sm">
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
                    label="Seleccione la cantidad de actividad física semanal"
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
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 row justify-end q-mb-xl">
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
  </q-page>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from 'vue'
import BotonBack from '../../components/common/BotonBack.vue'

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
  background-color: #F1F5F9;
}
</style>
