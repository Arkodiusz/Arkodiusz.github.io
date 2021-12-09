
const cookbookWakeUrl = 'https://bcookbook.herokuapp.com/wakeup'
const taskerWakeUrl = 'https://btasker.herokuapp.com/wakeup'

window.onload = async (event) => {
    await fetch(cookbookWakeUrl)
        .then((response) => response.json())
        .then((msg) => console.log('message =>', msg))

    await fetch(taskerWakeUrl)
        .then((response) => response.json())
        .then((msg) => console.log('message =>', msg))
};