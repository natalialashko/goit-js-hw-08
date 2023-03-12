import throttle from 'lodash.throttle';
const formEll = document.querySelector('.feedback-form');

formEll.addEventListener('input', handleInput);
formEll.addEventListener('submit', handleSubmit);

const currentLocalStorage = localStorage.getItem("feedback-form-state");
if (currentLocalStorage) {
  console.log(JSON.parse(currentLocalStorage));
  const obgOnLocalStorage = JSON.parse(currentLocalStorage);
  if (obgOnLocalStorage.email) {
    formEll.email.value = obgOnLocalStorage.email;
  } else {
    formEll.email.value = "";
  }

  if (obgOnLocalStorage.message) {
    formEll.message.value = obgOnLocalStorage.message;
  } else {
    formEll.message.value = "";
  }

}

  function handleInput(event) {
    event.preventDefault();
    const {
      elements: { email, message }
    } = event.currentTarget;
    const obgEll = {};
  
    obgEll.email = email.value;
    obgEll.message = message.value;
  
    console.log('obgEll',obgEll );
    // localStorage.setItem("feedback-form-state", JSON.stringify(obgEll));
    currentStoragSave(obgEll);
    console.log(`email: ${email.value}, Message: ${message.value}`);
   
};

throttle(
  function currentStoragSave(ell) {
    localStorage.setItem("feedback-form-state", JSON.stringify(ell));
  },
  500);

    
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