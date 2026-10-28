(() => {
  'use strict';
  const pesquisas = {
    iluminacao: { titulo: 'Iluminação sem fio', caminho: 'pesquisas/iluminacao/01-pesquisa/Pesquisa%20-%20clique%20aqui.html' },
    pet: { titulo: 'Presentes personalizados pet', caminho: 'pesquisas/pet/01-pesquisa/Pesquisa%20-%20clique%20aqui.html' }
  };
  const caso = new URLSearchParams(window.location.search).get('caso');
  const pesquisa = Object.prototype.hasOwnProperty.call(pesquisas, caso) ? pesquisas[caso] : null;
  if (!pesquisa) {
    document.getElementById('missing').hidden = false;
    return;
  }
  document.title = pesquisa.titulo + ' | Raio X';
  document.getElementById('viewer-title').textContent = pesquisa.titulo;
  const frame = document.getElementById('research-frame');
  frame.title = 'Raio X: ' + pesquisa.titulo;
  frame.src = pesquisa.caminho;
  frame.hidden = false;
})();
