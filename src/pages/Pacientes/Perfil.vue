<template>
  <q-page class="fondo-gris q-py-md q-px-xl">
    <BotonBack url="/pacientes" />
    <div class="q-mx-md q-mt-md">
      <span class="text-black text-bold text-h5">Resumen del paciente</span>
    </div>
    <div class="row q-mx-md q-mt-lg">
      <div class="col-12 q-mb-xs">
        <q-card flat bordered class="row" style="height: 250px">
          <q-card-section class="col-3" style="border-right: 1px solid #e2e8f0">
            <div class="column items-center justify-center">
              <q-avatar size="80px" class="q-mt-sm">
                <img src="../../assets/images.png" />
              </q-avatar>
              <span class="text-weight-bold q-mt-xs" style="font-size: 20px">{{
                paciente.nombre
              }}</span>
              <span style="font-size: 12px; color: #94a3b8">{{
                paciente.telefono
              }}</span>
              <span style="font-size: 12px; color: #94a3b8">{{
                paciente.email
              }}</span>
              <q-toggle
                v-model="paciente.acceso"
                checked-icon="check"
                color="primary"
                :label="paciente.acceso ? 'Acceso' : 'Sin acceso'"
                unchecked-icon="clear"
                size="xl"
              />
            </div>
          </q-card-section>
          <q-card-section
            class="col-4 q-pl-xl"
            style="border-right: 1px solid #e2e8f0"
          >
            <p class="text-weight-bold q-mt-md">Datos generales</p>
            <div class="row justify-between q-mb-sm" style="width: 180px">
              <span class="text-weight-bold" style="font-size: 16px">Sexo</span>
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ paciente.sexo == 'M' ? 'Hombre' : 'Mujer' }}</span
              >
            </div>
            <div class="row justify-between q-mb-sm" style="width: 180px">
              <span class="text-weight-bold" style="font-size: 16px">Edad</span>
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ '64 años' }}</span
              >
            </div>
            <div class="row justify-between q-mb-sm" style="width: 180px">
              <span class="text-weight-bold" style="font-size: 16px"
                >Estatura</span
              >
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ '184 cms' }}</span
              >
            </div>
            <div class="row justify-between q-mb-sm" style="width: 180px">
              <span class="text-weight-bold" style="font-size: 16px">Peso</span>
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ '1.88 kgs' }}</span
              >
            </div>
          </q-card-section>

          <q-card-section class="col-4 q-pl-xl">
            <div class="row justify-between items-center q-mt-md q-mb-md">
              <p class="text-weight-bold q-mb-none">Datos Adicionales</p>
              <q-btn
                color="primary"
                label="Editar"
                flat
                text-color="primary"
              />
            </div>
            <div class="row justify-between q-mb-sm" style="">
              <span class="text-weight-bold" style="font-size: 16px"
                >Condiciones médicas</span
              >
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ '[Condición médica]' }}</span
              >
            </div>
            <div class="row justify-between q-mb-sm" style="">
              <span class="text-weight-bold" style="font-size: 16px"
                >Actividad física</span
              >
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ 'Cada 3 días' }}</span
              >
            </div>
            <div class="row justify-between q-mb-sm" style="">
              <span class="text-weight-bold" style="font-size: 16px"
                >Alergias</span
              >
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ '[Alergias]' }}</span
              >
            </div>
            <div class="row justify-between q-mb-sm" style="">
              <span class="text-weight-bold" style="font-size: 16px"
                >Objetivo actual</span
              >
              <span
                class="text-weight-bold"
                style="font-size: 16px; color: #94a3b8"
                >{{ 'Perder peso' }}</span
              >
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12">
        <TableCitas />
      </div>
      <div class="col-12 q-mb-md">
        <TableEquivalencias />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from 'vue'
import BotonBack from '../../components/common/BotonBack.vue'
import TableCitas from '../../components/TableCitas.vue'
import TableEquivalencias from '../../components/TableEquivalencias.vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const paciente = reactive({
  nombre: 'Angel Arturo',
  apellido: 'Saldivar',
  segundoApellido: 'Balam',
  fechaNacimiento: '04/05/1995',
  sexo: 'M',
  telefono: '9831820506',
  email: 'damonbalam@gmail.com',
  alergias: ['Polen', 'Polvo', 'Cacahuate'],
  antecedentes: ['Diabetes', 'Hipertensión', 'Colesterol'],
  actividadFisica: '2 veces por semana',
  objetivoActual: 'Estar en forma',
  consultorio: '1',
  nutricionista: 'Nutriologo 1',
  acceso: true
})
</script>

<style lang="scss" scoped>
.fondo-gris {
  background-color: #f1f5f9;
}
</style>
