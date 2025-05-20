function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  })
    .then((res) => res.json())
    .then((user) => {
      const element = document.createElement("div")
      const ul = document.createElement("ul")
      document.body.appendChild(element)
      element.appendChild(ul)
      const newListItem = document.createElement("li")
      newListItem.textContent = `${user.id}. ${user.name}: ${user.email}`
      ul.appendChild(newListItem)
    })
    .catch((error) => {
      const alertError = document.createElement("div")
      document.body.appendChild(alertError)
      alertError.textContent = error.message
    })
}

submitData(user.name, user.email)
