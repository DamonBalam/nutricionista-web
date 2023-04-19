<template>
  <q-page class="fondo-gris q-py-md q-px-xl">
    <BotonBack url="/productos" />
    <div class="q-mx-md q-mt-xl">
      <span class="text-black text-bold text-h5">Producto Nuevo</span>
    </div>
    <div class="row q-mt-lg">
      <div class="col-6 q-px-md">
        <q-card flat class="q-pa-md" style="height: 620px">
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <label for="nombre" class="text-semibold q-mb-none"
                >Nombre del producto</label
              >
              <q-input
                outlined
                rounded
                v-model="formProducto.nombre"
                label="Nombre del producto"
                lazy-rules
                :rules="[val => val.length > 0 || 'El nombre es requerido']"
              />
              <label for="cantidad" class="text-semibold q-mb-none"
                >Cantidad del producto</label
              >
              <q-input
                outlined
                rounded
                v-model="formProducto.cantidad_producto"
                label="Cantidad del producto"
                lazy-rules
                :rules="[val => val.length > 0 || 'La cantidad es requerida']"
              />
              <label for="intercambio" class="text-semibold q-mb-none"
                >Intercambio nutricional</label
              >
              <q-input
                outlined
                rounded
                v-model="formProducto.intercambio_nutricional"
                label="Intercambio nutricional"
                lazy-rules
                :rules="[
                  val =>
                    val.length > 0 || 'El intercambio nutricional es requerido'
                ]"
              />
              <label for="detalles" class="text-semibold q-mb-none"
                >Detalles adicionales</label
              >
              <q-input
                outlined
                rounded
                v-model="formProducto.detalles_adicionales"
                label="Detalles adicionales"
                lazy-rules
                type="textarea"
                :rules="[
                  val =>
                    val.length > 0 || 'Los detalles adicionales son requeridos'
                ]"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 q-px-md">
        <q-card flat class="q-pa-md" style="height: 620px">
          <q-card-section>
            <div class="text-h6">
              Seleccionar categoría y subcategoria del producto
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-between">
              <q-input
                rounded
                class="q-mr-md"
                v-model="search"
                outlined
                dense
                label="Buscar categoría"
                bg-color="white"
                style="width: 350px"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn label="Crear Categoría" color="primary" :icon="'add'" />
            </div>
            <div class="q-mt-lg" style="max-height: 26rem; overflow-y: scroll">
              <q-card flat bordered v-for="item in itemsFilered" :key="item.value">
                <q-card-section>
                  <div class="row justify-between">
                    <div class="text-h6">{{ item.label }}</div>
                    <q-btn
                      :label="
                        category === item
                          ? 'Categoría Seleccionada'
                          : 'Seleccionar'
                      "
                      :color="category !== item ? 'black' : 'primary'"
                      :outline="category !== item"
                      unelevated
                      @click="selectedCategory(item)"
                    />
                  </div>
                </q-card-section>
                <template v-if="category === item">
                  <q-card
                    flat
                    bordered
                    v-for="subItem in item.children"
                    :key="subItem.value"
                  >
                    <q-card-section>
                      <div class="row justify-between">
                        <div>
                          <!-- <q-icon name="chevron_right" /> -->
                          <span>{{ subItem?.label }}</span>
                        </div>
                        <q-btn
                          unelevated
                          :label="
                            subcategory === subItem
                              ? 'Subcategoria Seleccionada'
                              : 'Seleccionar'
                          "
                          :color="subcategory !== subItem ? 'black' : 'primary'"
                          :outline="subcategory !== subItem"
                          @click="selectedSubcategory(subItem)"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </template>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row justify-end">
      <q-btn
        label="Cancelar"
        color="white"
        class="text-black q-mt-md q-mr-md"
        @click="onReset"
        style="width: 200px"
      />
      <q-btn
        label="Guardar"
        color="primary"
        class="q-mt-md q-mr-md"
        type="submit"
        style="width: 200px"
      />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import BotonBack from '../../components/common/BotonBack.vue'
import { reactive, ref } from 'vue'

const search = ref('')
const category = ref(null)
const subcategory = ref(null)

const formProducto = reactive({
  nombre: '',
  cantidad_producto: '',
  intercambio_nutricional: '',
  detalles_adicionales: ''
})
const formProductoDefault = reactive({
  nombre: '',
  cantidad_producto: '',
  intercambio_nutricional: '',
  detalles_adicionales: ''
})

//buscador de categorias
const itemsFilered = computed(() => {
  if (search.value.length > 0) {
    return items.value.filter(item => item.label.toLowerCase().includes(search.value.toLowerCase()))
  }
  return items.value
})

const items = ref([
  {
    label: 'Categoría 1',
    value: '1',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 2',
    value: '2',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 3',
    value: '3',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 4',
    value: '3',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 5',
    value: '3',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 6',
    value: '3',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 7',
    value: '3',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  },
  {
    label: 'Categoría 8',
    value: '3',
    children: [
      {
        label: 'Subcategoria 1',
        value: '1'
      },
      {
        label: 'Subcategoria 2',
        value: '2'
      },
      {
        label: 'Subcategoria 3',
        value: '3'
      }
    ]
  }
])

function selectedCategory(item: any) {
  if (category.value === item) {
    category.value = null
    subcategory.value = null
  } else {
    category.value = item
  }
}

function selectedSubcategory(item: any) {
  if (subcategory.value === item) {
    subcategory.value = null
  } else {
    subcategory.value = item
  }
}

function onSubmit() {
  console.log(formProducto)
}

function onReset() {
  console.log(formProducto)
}
</script>

<style lang="scss" scoped>
.fondo-gris {
  background-color: #eeeeee;
}
</style>
