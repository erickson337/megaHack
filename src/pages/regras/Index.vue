<template>
  <q-page padding>
     <q-card>
        <q-card-section>
          <div class="text-h6">Bem Vindo!</div>
        </q-card-section>
        <q-card-section>
          <div class="text-caption text-justify">{{text}}</div>
        </q-card-section>
     </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Regras',
  data () {
    return {
      text: 'Os passos para obter moedas, são bem simples. Basta realizar: compras, compartilhar compras, observar o menu de produtos. Quase todas as suas ações poderão gerar moedas!'
    }
  }
}
</script>
