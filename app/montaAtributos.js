function montaAtributos(nome, opcoes = {}) {
  let r = {nome: nome, votos: 1};
  if (opcoes['mostrarVencedor']) {
    Object.assign(r, {vencedor: false})
  }
  return r;
}

module.exports = { montaAtributos };
