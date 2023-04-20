<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from 'stores/auth'

const store = useAuthStore()

const { login } = store

const usuario = ref('')
const password = ref('')
const accept = ref(false)

function handleSubmit () {
  login({ email: usuario.value, password: password.value })
}
</script>

<template>
  <div class="row justify-end">
    <div class="card q-ma-lg">
      <div class="row justify-end q-mx-md q-mt-lg">
        <q-img src="../../assets/Logo.png" width="200px" />
      </div>

      <div class="row justify-center q-my-xl q-pt-xl">
        <h3 class="text-primary text-bold">¡Bienvenida!</h3>
      </div>
      <q-form
        class="q-gutter-md q-mx-auto"
        style="width: 420px"
        @submit="handleSubmit"
      >
        <div class="q-mb-none">
          <label for="email" class="text-bold">Correo electrónico</label>
        </div>
        <q-input
          id="email"
          dense
          rounded
          outlined
          v-model="usuario"
          label="Ingresa tu correo electrónico"
        >
          <template v-slot:prepend>
            <q-icon name="o_email" />
          </template>
        </q-input>
        <div class="q-mt-lg">
          <label for="password" class="text-bold">Contraseña</label>
        </div>
        <q-input
          id="password"
          rounded
          dense
          outlined
          v-model="password"
          label="Ingresa tu contraseña"
        >
          <template v-slot:prepend>
            <q-icon name="o_lock" />
          </template>
        </q-input>

        <div class="row justify-between items-center q-mt-lg">
          <q-toggle
            dense
            v-model="accept"
            label="Recordar contraseña"
            size="sm"
            style="font-size: 14px"
          />
          <router-link
            to="/pacientes"
            class="text-primary"
            style="font-size: 14px"
            >¿Has olvidado tu contraseña?</router-link
          >
        </div>

        <div class="row justify-center q-mt-xl">
          <q-btn label="Iniciar Sesión" rounded type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 674px;
  height: 95vh;
  // margin: 0 auto;
  // margin-top: 30px;
}
</style>
