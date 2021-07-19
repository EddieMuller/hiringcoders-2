const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (c) => {
  c.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let dados = {
      nome,
      email,
  }

  let convertData = JSON.stringify(dados);

  localStorage.setItem('usuario', convertData);

  let content = document.getElementById('content')

  let pronto = `<p class = "cadastro">Cadastro efetuado com sucesso.</p>`

  content.innerHTML = pronto

  setTimeout(() => {
      content.innerHTML = pronto
  }, 1000)

  setTimeout(() => {
    location.reload()
}, 2500);

})
