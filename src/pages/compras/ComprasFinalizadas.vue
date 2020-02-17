<template>
  <q-page padding>
    <template>
      <div class="column q-gutter-md">
         <q-card v-for="(produto, index) in data" :key="index">
          <img :src="produto.url" />
          <q-card-section horizontal class="q-pt-md q-pl-md q-pr-md">
            <div class="col-6 text-left">
              <span> {{produto.nome_produto}} </span>
            </div>
            <div class="col-6 text-right">
              <span> R$ {{produto.preco.toFixed(2)}} </span>
            </div>
          </q-card-section>
          <q-card-actions align="center">
            <q-rating v-model="produto.avaliacao" size="2.5em" :max="5" color="yellow-6" icon="star_border" icon-selected="star" @input="changeValue($event, index)"/>
          </q-card-actions>
        </q-card>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'compras',
  data () {
    return {
      data: this.$store.getters['compras/GET_COMPRAS'].map(a => ({ ...a }))
    }
  },
  methods: {
    changeValue (props, index) {
      this.$store.state.compras.compras[index].avaliacao = props
    }
  }
}
</script>
