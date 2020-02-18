<template>
  <q-page padding>
    <div class="column q-gutter-md">
      <q-card v-for="(produto, index) in data" :key="index">
        <img :src="produto.url" />
        <q-card-section horizontal class="q-pl-md q-pt-md q-pr-md">
          <div class="col-6 text-left">
            <span> {{produto.nome_produto}} </span>
          </div>
          <div class="col-6 text-right ">
            <span> {{produto.pontos}} </span><q-icon name="monetization_on" size="sm" color="yellow"/>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-rating v-model="produto.avaliacao" size="2.5em" :max="5" color="yellow-6" icon="star_border" icon-selected="star" @input="changeValue($event, index)"/>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'itensAdquiridos',
  data () {
    return {
      data: this.$store.getters['trocarPontos/GET_PRODUTOS_USUARIO'].map(a => ({ ...a }))
    }
  },
  methods: {
    changeValue (props, index) {
      this.$store.state.compras.compras[index].avaliacao = props
    }
  }
}
</script>
