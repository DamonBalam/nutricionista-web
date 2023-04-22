<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from 'stores/auth'
import { authDataServices } from '../../services/AuthDataService'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()
const { login } = store

const myForm = ref(null)
const isPwd = ref(true)
const usuario = ref('admin@gmail.com')
const password = ref('admin09')
const message = ref('')
const accept = ref(false)
const disabled = ref(false)

const messageError = computed(() => {
  return message.value || null
})

async function handleSubmit () {
  disabled.value = true
  myForm.value.validate().then(async success => {
    if (success) {
      try {
        const { data } = await authDataServices.login(
          usuario.value,
          password.value
        )

        if (data.code === 200) {
          login(data.data)
        } else {
          message.value = data.msg
        }
      } catch (error) {
        console.log(error)
        // message.value = error.response.data.message
      }
    }
  })
  disabled.value = false
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
        ref="myForm"
        class="q-gutter-md q-mx-auto"
        style="width: 420px"
        @submit="handleSubmit"
      >
        <div class="q-mb-none">
          <label for="email" class="text-bold">Correo electrónico</label>
        </div>
        <q-input
          id="email"
          type="email"
          dense
          rounded
          outlined
          v-model="usuario"
          label="Ingresa tu correo electrónico"
          :rules="[
            val =>
              (val && val.length > 0) || 'Ingrese un correo electrónico válido'
          ]"
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
          :type="isPwd ? 'password' : 'text'"
          rounded
          dense
          outlined
          v-model="password"
          label="Ingresa tu contraseña"
          :rules="[
            val => (val && val.length > 0) || 'Ingrese una contraseña válida'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="o_lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div v-if="messageError">
          <span class="text-red">{{ messageError }}</span>
        </div>

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
          <q-btn
            label="Iniciar Sesión"
            rounded
            type="submit"
            color="primary"
            :disabled="disabled"
          />
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
