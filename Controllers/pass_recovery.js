import { cambiar } from '../Controllers/firebase.js'

const recover = document.getElementById('recort')
const vol = document.getElementById('volver')

async function resetear() {
  const email = document.getElementById('verCorr').value

  const verificar = cambiar(email)
  const validation = await verificar

    .then(() => {
      alert('resert password seccesfull' + email)
      window.location.href = '../index.html'
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}
async function volver() {
  window.location.href = '../index.html'
}

window.addEventListener('DOMContentLoaded', async () => {
  recover.addEventListener('click', resetear)
})

window.addEventListener('DOMContentLoaded', async () => {
  vol.addEventListener('click', volver)
})
