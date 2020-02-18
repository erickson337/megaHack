<template>
  <q-page class="flex flex-center">
    <q-layout view="hHr LpR lFf">
      <q-page-container>
        <q-page padding>
          <!-- <p>aqui ficará o texto</p> -->
          <q-card class="my-card bg-white text-purple fullscreen">
            <q-card-section>
              <div class="text-h6">Bem Vindo!</div>
            </q-card-section>

            <q-card-section>
              <q-input v-model="login" label="Login" />
              <q-input v-model="senha" type="password" label="Senha" />
            </q-card-section>

            <q-separator dark />

            <q-card-actions align="around">
              <q-btn flat to="/produtos/">Entrar</q-btn>
              <a href="/">Esqueci minha senha</a>
            </q-card-actions>
          </q-card>
          <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]"> -->
            <!-- <q-btn fab icon="play_arrow" color="accent" to="/produtos/"/> -->
          <!-- </q-page-sticky> -->
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      login: '',
      senha: ''
    }
  }
}
</script>
