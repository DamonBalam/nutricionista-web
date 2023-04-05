<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header class="row justify-center q-mt-md">
          <q-img src="../assets/Logo.png" width="200px" />
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <!-- <q-separator spaced /> -->
      </q-list>
      <div class="row justify-center">
        <q-btn
          style="position: absolute; top: 90%"
          flat
          icon="o_power_settings_new"
          label="Cerrar Sesión"
          @click="logout"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Inicio',
    icon: 'o_home',
    link: '/'
  },
  {
    title: 'Pacientes',
    icon: 'o_account_circle',
    link: '/pacientes'
  },
  {
    title: 'Productos',
    icon: 'o_shopping_cart',
    link: '/productos'
  },
  {
    title: 'Ajustes',
    icon: 'o_settings',
    link: '/ajustes'
  }
]
const router = useRouter()
const leftDrawerOpen = true

function logout() {
  localStorage.clear()
  router.push('/login')
  console.log('logout')
}
</script>
