import { removeGuest } from "./GuestProvider.js";
import { GuestList } from "./GuestList.js";

export const guest = (singleGuestObject) => {
    return `<div class="guest-card">
    <img class="guest-image" src="${singleGuestObject.imageUrl}" alt="">
    <h4 class="guest-name">${singleGuestObject.name}</h4>
    <p class="guest-age">${singleGuestObject.age}</p>
    <p class="guest-dish">${singleGuestObject.favoriteDish}</p>
    ${singleGuestObject.rightHanded ?
        `<p class="guest-righty">Righty</p>`
        :
        `<p class="guest-righty">Lefty</p>`}
        <button id="deleteNote--${singleGuestObject.id}">Delete</button>

</div>`
}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    console.log(eventObject.target.id.split("--"))

    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes

    removeGuest(idToDelete)
    .then(GuestList)
  }
});

