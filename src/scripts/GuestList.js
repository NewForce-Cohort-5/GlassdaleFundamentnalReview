import { getGuests , useGuests } from "./GuestProvider.js";
import { guest } from "./Guest.js";


export const GuestList = () => {
const contentTarget = document.querySelector("#guest-list")

getGuests()
.then(() => {

 const guestList = useGuests()

    contentTarget.innerHTML = guestList.map(singleguest => {
        return guest(singleguest)
    }).join("")




})


}