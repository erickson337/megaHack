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
          <q-btn class="full-width" color="primary" label="Obter" @click="obterItem(produto)"/>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'trocarProduto',
  data () {
    return {
      data: [...this.$store.getters['trocarPontos/GET_PRODUTOS']]
    }
  },
  methods: {
    obterItem (produto) {
      const pontosUsuario = this.$store.getters['usuario/GET_PONTOS']
      if (produto.pontos < pontosUsuario) {
        this.$store.dispatch('trocarPontos/obterItem', produto)
        this.$store.dispatch('usuario/obterItem', produto.pontos)
        this.$q.notify({
          type: 'positive',
          message: 'Parabés, seus pontos foram convertidos em um produto.'
        })
      } else {
        this.$q.notify({
          type: 'negative',
          message: ';( Seus pontos são insuficientes para o item desejado.'
        })
      }
    }
  }
}
</script>
