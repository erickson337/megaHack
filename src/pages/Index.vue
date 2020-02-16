<template>
  <q-page class="flex flex-center">
    <q-layout view="hHr LpR lFf">
      <q-page-container>
        <q-page padding>
          <p>aqui ficará o texto</p>
          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="play_arrow" color="accent" to="/produtos/"/>
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
