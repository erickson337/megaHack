export function atualizaPontos ({ commit }, payload) {
  commit('SET_PONTOS_XP', payload)
}

export function obterItem ({ commit }, payload) {
  commit('SET_ITEM_ADQUIRIDO', payload)
}
