export function SET_PONTOS_XP (state) {
  state.pontos = state.pontos + 100
  if (state.usuario.xp === 1000) {
    state.usuario.level = state.usuario.level + 1
    state.usuario.xp = 0
  } else {
    state.usuario.xp = state + 100
  }
}

export function SET_ITEM_ADQUIRIDO (state, payload) {
  state.pontos = state.pontos - payload
}
