const messages = [
  "andres",
  "alexis",
  "francisco",
  "ludwing",
  "alejandra",
  "carlos",
  "claudia",
  "yazmin"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }