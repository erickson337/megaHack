<template>
  <q-page padding>
    <template>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://www.materialui.co/materialIcons/action/account_circle_black_108x108.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>{{nome}}
          <q-chip outline color="orange" text-color="white" icon-right="star">
            LV:6  EXP:959626
          </q-chip>
        </q-item-section>
      </q-item>
    </template>
    <template>
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered>
          <q-item-label header>Conquistas</q-item-label>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.pixabay.com/photo/2012/04/12/19/11/fire-30231_1280.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>Fogueira
              <q-item-label caption>Iniciante ganhou um incrivel brinde, opa començando a pegar fogo.</q-item-label>
              <q-linear-progress size="15px" :value="0.3" color="accent">
                <div class="absolute-full flex flex-center">
                  <!-- <q-badge color="white" text-color="accent" :label="'30.00%'" /> -->
                </div>
              </q-linear-progress>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>Campeão
              <q-item-label caption>É o melhor entre os duelista no E-Commerce</q-item-label>
              <q-linear-progress size="15px" :value="0.6" color="accent">
                <div class="absolute-full flex flex-center">
                  <!-- <q-badge color="white" text-color="accent" :label="'60.00%'" /> -->
                </div>
              </q-linear-progress>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.pixabay.com/photo/2015/10/30/12/10/friends-1013856_1280.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>Amigável
              <q-item-label caption>Ganhou E-Coins por indicar o e-commercer</q-item-label>
              <q-linear-progress size="15px" :value="0.7" color="accent">
                <div class="absolute-full flex flex-center">
                  <!-- <q-badge color="white" text-color="accent" :label="'70.00%'" /> -->
                </div>
              </q-linear-progress>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.pixabay.com/photo/2016/03/31/15/04/earth-1292975_1280.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>Mão aberta
              <q-item-label caption>Você presenteou um amigo.</q-item-label>
              <q-linear-progress size="15px" :value="0.3" color="accent">
                <div class="absolute-full flex flex-center">
                  <!-- <q-badge color="white" text-color="accent" :label="'30.00%'" /> -->
                </div>
              </q-linear-progress>
            </q-item-section>
          </q-item>

        </q-list>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'perfil',
  mounted () {
    this.nome = this.$store.getters['usuario/GET_NOME']
    console.log(this.nome)
  },
  data () {
    return {
      nome: ''
    }
  }
}
</script>
