const form = document.querySelector("#form-habits")
const nwlSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nwlSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso ❌")
    return
  }
  alert("Adicionado com sucesso ✔️")
  nwlSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nwlSetup.data))
}

/* const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
  takePills: ["01-03"],
  journal: ["01-02"],
}*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nwlSetup.setData(data)
nwlSetup.load()
