const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedStates = localStorage.getItem(localStorageKey);

if (savedStates) {
    const { email, message } = JSON.parse(savedStates);
    form.elements.email.value = email || "";
    form.elements.message.value = message || "";
}

form.addEventListener("input", changeLocalStorage);

form.addEventListener("submit", submitForm);


function changeLocalStorage(evt) {
    const elements = form.elements;
    const submitData = {
        email: elements.email.value.trim(),
        message: elements.message.value.trim()
    }

    localStorage.setItem(localStorageKey, JSON.stringify(submitData));
}

function submitForm(evt) {
    evt.preventDefault();

    const elements = form.elements;
    const submitData = {
        email: elements.email.value.trim(),
        message: elements.message.value.trim()
    }

    if (submitData.email && submitData.message) {
        console.log(submitData);

    localStorage.removeItem(localStorageKey);
    form.reset();
    } else {
        alert("Будь ласка, заповніть обидва поля");
    }
}

