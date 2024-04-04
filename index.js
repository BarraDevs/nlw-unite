

let participantes = [
  {
  nome: "Guilherme Barra",
  email: "guibarrasilva@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00) 
},
{
  nome: "Sildanei",
  email: "sildanei@gmail.com",
  dataInscricao: new Date(2024, 1, 22, 19, 20),
  dataCheckIn: new Date(2024, 1, 25, 22, 00) 
},
{
  nome: "Ruivin",
  email: "Ruivin@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 20),
  dataCheckIn: new Date(2024, 2, 02, 22, 00) 
},
{
  nome: "Doub",
  email: "doub@gmail.com",
  dataInscricao: new Date(2024, 2, 11, 19, 20),
  dataCheckIn: new Date(2024, 2, 11, 22, 00) 
},
{
  nome: "Emanuel",
  email: "Manel@gmail.com",
  dataInscricao: new Date(2024, 2, 12, 19, 20),
  dataCheckIn: new Date(2024, 2, 13, 22, 00) 
},
{
  nome: "Guidizinha",
  email: "gingrid@gmail.com",
  dataInscricao: new Date(2024, 2, 05, 19, 20),
  dataCheckIn: new Date(2024, 2, 05, 22, 00) 
},
{
  nome: "Bob",
  email: "gbod@gmail.com",
  dataInscricao: new Date(2024, 2, 13, 19, 20),
  dataCheckIn: new Date(2024, 2, 13, 22, 00) 
},
{
  nome: "Jack",
  email: "kacj@gmail.com",
  dataInscricao: new Date(2024, 2, 14, 19, 20),
  dataCheckIn: new Date(2024, 2, 14, 22, 00) 
},
{
  nome: "Jegvb",
  email: "jegbsa@gmail.com",
  dataInscricao: new Date(2024, 2, 10, 19, 20),
  dataCheckIn: new Date(2024, 2, 10, 22, 00) 
},
{
  nome: "GHenquie",
  email: "gyhenqr@gmail.com",
  dataInscricao: new Date(2024, 2, 16, 19, 20),
  dataCheckIn: new Date(2024, 2, 16, 22, 00) 
},
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
      dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
      Confirmar check-in
      </button>

      `
      
  }

  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>
        ${dataInscricao}
      </td>
      <td>
        ${dataCheckIn}
      </td>
    </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)

  }  
document.querySelector('tbody')
.innerHTML = output

}

atualizarLista(participantes)

const adicionarPatcipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find((p) => 
    p.email == participante.email
  
  )

  if(participanteExiste){
    alert("Email já cadastrado!")
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value=""
  event.target.querySelector('[name="email"]').value=""
}
 
const fazerCheckIn = (event) =>{

  const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?"
  if(confirm(mensagemConfirmacao) == false){
    return
  }

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  }) 

  participante.dataCheckIn = new Date()
  atualizarLista(participantes)

}