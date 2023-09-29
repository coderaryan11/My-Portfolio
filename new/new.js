var tablinks  = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");    //.remove("active-link"): This is a method of the classList object. It removes the specified CSS class ("active-link" in this case) from the class list of the HTML element. If the class doesn't exist on the element, it has no effect, and if it does exist, it is removed.
    document.getElementById(tabname).classList.add("active-tab");
}




  const scriptURL = 'https://script.google.com/macros/s/AKfycbwWIhsXdLEZd_N2_Cj6YphYtMypvao3ye3DhlQAKauRqbuX-lEriwYIvAPGEgXbt2WjcA/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
//this function reset the for after 5 second and show message under the submit button the "messsage sent successfully".
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
