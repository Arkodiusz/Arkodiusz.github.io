
const cookbookWakeUrl = 'https://bcookbook.herokuapp.com/wakeup'
const taskerWakeUrl = 'https://btasker.herokuapp.com/wakeup'
const genderPredictorWakeUrl = 'https://bgenderator.herokuapp.com/'

window.onload = async () => {
    await fetch(cookbookWakeUrl)
        .then((response) => response.json())
        .then((msg) => console.log('message =>', msg))

    await fetch(taskerWakeUrl)
        .then((response) => response.json())
        .then((msg) => console.log('message =>', msg))

    await fetch(genderPredictorWakeUrl)
        .then((response) => {
            response.status === 200
                ? console.log('message =>', 'Gender Predictor app is awake')
                : console.log('message =>', 'Error during waking up Gender Predictor')
        })
};