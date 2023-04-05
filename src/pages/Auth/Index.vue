<script setup lang="ts">
import { ref } from "vue";
const usuario = ref("");
const password = ref("");
const accept = ref(false);
</script>

<template>
  <div class="row justify-end">
    <div class="card q-ma-lg">
      <div class="row justify-end q-mx-md q-mt-lg">
        <q-img src="../../assets/Logo.png" width="200px" />
      </div>

      <q-form class="q-gutter-md q-mx-xl q-my-xl" @submit="$router.push('/')">
        <div class="row justify-center">
          <h3 class="text-primary">¡Bienvenida!</h3>
        </div>
        <q-input
          rounded
          outlined
          v-model="usuario"
          label="Ingresa tu correo electrónico"
        >
          <template v-slot:prepend>
            <q-icon name="o_email" />
          </template>
        </q-input>
        <q-input
          rounded
          outlined
          v-model="password"
          label="Ingresa tu contraseña"
        >
          <template v-slot:prepend>
            <q-icon name="o_lock" />
          </template>
        </q-input>

        <div class="row justify-between items-center">
          <q-toggle v-model="accept" label="Recordar contraseña" />
          <router-link to="/pacientes" class="text-primary"
            >¿Has olvidado tu contraseña?</router-link
          >
        </div>

        <div class="row justify-center">
          <q-btn style="width: 200px;" label="Iniciar Sesión" type="submit" color="primary" />
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
