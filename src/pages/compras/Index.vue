<template>
  <q-page padding>
    <template>
      <div class="column q-gutter-md">
        <q-card>
          <img :src="data.url" />
          <q-card-section horizontal class="q-pt-md q-pl-md q-pr-md">
            <div class="col-6 text-left">
              <span> {{data.nome_produto}} </span>
            </div>
            <div class="col-6 text-right">
              <span> R$ {{data.preco.toFixed(2)}} </span>
            </div>
          </q-card-section>
          <q-card-actions align="around">
            <q-btn flat color="primary" @click="comprar(data)">Comprar</q-btn>
            <q-btn flat color="negative" @click="$router.go(-1)">Cancelar</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'produtos',
  created () {
    this.$store.dispatch('produtos/findById', this.$route.params.id)
    this.data = this.$store.getters['produtos/GET_PRODUTO']
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    comprar (data) {
      this.$q.dialog({
        title: 'Confirmar compra',
        message: 'Deseja confirmar a compra?',
        cancel: true
      }).onOk(() => {
        this.$q.notify({
          color: 'positive',
          message: 'Parabéns, sua compra foi finalizada com sucesso!'
        })
        this.$store.dispatch('usuario/atualizaPontos')
        this.$store.dispatch('compras/store', data)
        this.$router.push('/produtos')
      })
    }
  }
}
</script>
