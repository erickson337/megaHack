export function SET_PRODUTOS_USUARIO (state, payload) {
  payload.avaliacao = 0
  state.produto_adquiridos = [...state.produto_adquiridos, payload]
}
