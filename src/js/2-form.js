const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedStates = localStorage.getItem(localStorageKey);

    if(savedStates) {
    const { email, message } = JSON.parse(savedStates);
    form.elements.email.value = email !== undefined ? email : "";
    form.elements.message.value = message !== undefined ? message : "";
}

form.addEventListener("input", (evt) => {
    changeLocaleStorage(evt);
});

form.addEventListener("submit", (evt) => {
    submitForm(evt);
});

function changeLocaleStorage (evt) {
    const elements = form.elements;
    const submitData = {
        email: elements.email.value.trim(),
        message: elements.message.value.trim()
    }
    
    localStorage.setItem(localStorageKey, JSON.stringify(submitData));
}

function submitForm (evt) {
    evt.preventDefault();
    localStorage.removeItem(localStorageKey);
    form.reset();
}

