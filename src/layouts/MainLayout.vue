<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="gamepad" />
          GeekTec
        </q-toolbar-title>

        <div>{{ dateCurrent }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'MainLayout',

  components: {
  },
  computed: {
    dateCurrent () {
      return date.formatDate(Date.now(), 'DD/MM/YYYY')
    }
  },
  data () {
    return {
    }
  }
}
</script>
