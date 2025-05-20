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
    .then((data) => {
      const user = data
      console.log(user.id)
    })
    .catch((error) => {
      alert("Bad things! Ragnarők!")
      console.log(error.message)
    })
}

submitData()

const element = document.createElement("div")
const ul = document.createElement("ul")

document.body.appendChild(element)
element.appendChild(ul)

//  1) submitData()
//        handles the POST request response, retrieves the new id value and appends it to the DOM:
//      AssertionError: expected '\n    <script src="index.js"></script>\n  \n\n' to include 95
