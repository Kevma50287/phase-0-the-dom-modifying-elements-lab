// Write your code here!

//removes the element with ID main
document.getElementById('main').remove()

//creates element h1 and assigns it newHeader
const newHeader = document.createElement("h1")

//sets text
newHeader.textContent = "YOUR-NAME is the champion"

//sets ID
newHeader.id = "victory"
