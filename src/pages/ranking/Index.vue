<template>
  <q-page padding>
    <template>
      <q-table
          grid
          dense
          card-class="bg-primary text-white"
          title="Ranking"
          :data="data"
          :columns="columns"
          row-key="nome_usuario"
          :filter="filter"
          hide-header
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
              <q-icon name="search" />
          </template>
          </q-input>
        </template>
      </q-table>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'produtos',
  created () {
    this.data = this.$store.getters['ranking/GET_USUARIOS_RANKING'].slice()
  },
  data () {
    return {
      filter: '',
      data: [],
      columns: [
        { name: 'nome_usuario', align: 'left', label: 'Usuario', field: 'nome_usuario', sortable: true },
        { name: 'level', align: 'center', label: 'Lv', field: 'level', sortable: true },
        { name: 'ecoin', align: 'left', label: 'Ecoins', field: 'ecoin', sortable: true },
        { name: 'xp', align: 'center', label: 'XP', field: 'xp', sortable: true }
      ]
    }
  }
}
</script>
