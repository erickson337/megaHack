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
          <q-card-actions align="right">
            <q-btn flat round color="red" :icon="produto.like ? 'favorite' : 'favorite_border' " @click="produto.like = !produto.like"/>
            <q-btn flat round color="teal" icon="shopping_cart" :to="`/compras/produto/${index}`"/>
            <q-btn flat round color="primary" icon="share" />
            <q-btn flat round color="primary" icon="help" to="/regras" />
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
    this.data = this.$store.getters['produtos/GET_PRODUTOS'].slice()
  },
  data () {
    return {
      data: []
    }
  }
}
</script>
