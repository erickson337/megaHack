export function SET_COMPRAS (state, payload) {
  payload.avaliacao = 0
  state.compras = [...state.compras, payload]
}
