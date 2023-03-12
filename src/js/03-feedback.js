const formEll = document.querySelector('.feedback-form');

formEll.addEventListener('input', handleInput);
formEll.addEventListener('submit', handleSubmit);
const obgOnLocalStorage = {};
const currentLocalStorage = localStorage.getItem("feedback-form-state")
// if (currentLocalStorage) {
  console.log(JSON.parse(currentLocalStorage));
// }

function handleInput(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
   
    const obgEll = {};
    obgEll.email = email.value;
    obgEll.message = message.value;
    console.log(obgEll);
    localStorage.setItem("feedback-form-state", JSON.stringify(obgEll));
    console.log(`email: ${email.value}, Message: ${message.value}`);
  //  event.currentTarget.reset();
}
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

    if (email.value === "" || message.value === "") {
    //   const message = "Please fill in all the fields";
    alert("Please fill in all the fields");
    return ;
    }
    localStorage.getItem("feedback-form-state");
    localStorage.removeItem("feedback-form-state");
    console.log(`email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
}