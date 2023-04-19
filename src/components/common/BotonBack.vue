<template>
  <div>
    <q-btn
      size="lg"
      flat
      color="primary"
      label="Regresar"
      icon="chevron_left"
      :to="url"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string
}>()
</script>

<style lang="scss" scoped></style>
