

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
</div>`
}