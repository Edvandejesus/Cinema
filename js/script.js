// Criar referência ao form e aos elementos h3 e h4 

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector ("h4")
// Cirar um "Ouvinte" de evento, acionado quando obotão submit for clicado.

frm.addEventListener("submit",(e) => {
  const titulo = frm.inTitulo.value //Obtém conteudo dos campos
  const duracao = Number(frm.inDuracao.value)

  const horas = Math.floor (duracao / 60) //arredonda para baixo o resultado

  const minutos = duracao % 60 // obtem o resto da divisão

  resp1.innerText = titulo // exibe respostas
  resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)`
  e.preventDefault() // evita o envio do form

})
