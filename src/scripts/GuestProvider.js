let guests = []

export const useGuests = () => guests.slice()

export const getGuests = () => {
    return fetch('http://localhost:8088/party')
        .then(response => response.json())
        .then(parsedGuests => {
            guests = parsedGuests
        })

}

export const saveGuest = guest => {

    return fetch('http://localhost:8088/party', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
    .then(getGuests) // After we add a note, get them all again so our new note appears in our collection
}
