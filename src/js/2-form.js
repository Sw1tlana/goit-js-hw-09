const form = document.querySelector(".feedback-form");
const localeStorageKey = "feedback-form-state";

const savedStates = localStorage.getItem(localeStorageKey);
if(savedStates) {
    const { email, message } = JSON.parse(savedStates);
    form.elements.email.value = email;
    form.elements.message.value = message;
}

form.addEventListener("input", (evt) => {
    changeLocaleStorage()
});

form.addEventListener("submit", (evt) => {
    submitForm();
});

function changeLocaleStorage (evt) {
    const elements = form.elements;
    const message = elements.message.value.trim();
    const email = elements.email.value.trim();
    localStorage.setItem(localeStorageKey, JSON.stringify({ email, message }));
}

function submitForm (evt) {
    evt.preventDefault();
    const elements = form.elements;
    const submitData = {
        email: elements.email.value.trim(),
        message: elements.message.value.trim()
    }
    console.log(submitData);
    localStorage.removeItem(localeStorageKey);
    form.reset();
};