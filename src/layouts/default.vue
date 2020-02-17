<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          <div class="row justify-between">
            <div><span> GeekTec </span></div>
            <div><span> E-coins: {{pontos}} <q-icon style="margin-top: -3px" name="monetization_on" size="sm" color="yellow-12"/></span> </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
        v-model="leftDrawer"
        show-if-above
        side="left"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
      <q-scroll-area class="fit">
        <q-item-label header class="text-grey-8">Menu</q-item-label>
        <q-list v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple :to="menuItem.to">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'shopping_cart',
    label: 'Produtos',
    separator: true,
    to: '/produtos'
  },
  {
    icon: 'loyalty',
    label: 'Compras realizadas',
    separator: true,
    to: '/compras/finalizadas'
  },
  {
    icon: 'list_alt',
    label: 'Ranking',
    separator: true,
    to: '/ranking'
  },
  {
    icon: 'exit_to_app',
    label: 'Sair',
    separator: false,
    to: '/'
  }
]
export default {
  name: 'produtoLayout',
  data () {
    return {
      leftDrawer: true,
      menuList
    }
  },
  computed: {
    pontos () {
      return this.$store.getters['usuario/GET_PONTOS']
    }
  }
}
</script>
