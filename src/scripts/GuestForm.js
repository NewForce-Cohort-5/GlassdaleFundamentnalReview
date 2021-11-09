import { GuestList } from "./GuestList.js"
import { saveGuest } from "./GuestProvider.js"


//rightHanded is saving as a string not a boolean

export const GuestForm =() => {

 const guestForm =  `<section id="guest-inputs">
    <input id="name" type="text" placeholder="Guest's Name">
    <input id="age" type="number" placeholder="Guest's Age">
    <input id="dish" type="text" placeholder="Guest's Favorite Dish">
    <label for="handed">Right Handed:</label>
    <input id="handed" type="checkbox" placeholder="Guest's handed"><br>
    <input id="image" type="text" placeholder="Guest's image">
    <button id="saveButton">Add Guest</button>
</section>`

    document.querySelector("#guest-form").innerHTML = guestForm
}


document.querySelector("#container").addEventListener("click", (event) => {
    if(event.target.id === "saveButton"){
        // console.log("you clicked main")

        const newGuest = {
            name: document.querySelector("#name").value,
            age: +document.querySelector("#age").value,
            favoriteDish: document.querySelector("#dish").value,
            rightHanded: document.querySelector("#handed").checked,
            imageUrl: document.querySelector("#image").value
        }

        console.log(newGuest)
        document.querySelector("#name").value = ""
        document.querySelector("#age").value = ""
        document.querySelector("#dish").value = ""
        document.querySelector("#handed").checked = false
        document.querySelector("#image").value = ""


        saveGuest(newGuest)
        .then(GuestList)



    }
})