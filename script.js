
const cookbookWakeUrl = 'https://bcookbook.herokuapp.com/wakeup'

window.onload = async (event) => {
    fetch(cookbookWakeUrl)
        .then((response) => response.json())
        .then((msg) => console.log('message =>', msg))
};