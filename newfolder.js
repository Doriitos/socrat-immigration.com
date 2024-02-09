const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ0BcRBMcjyPM8_Zku339FjdirtJGiqRTIISNZyzv3DIbkui9RaW8tMwUIKA1u0AN0Hg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, {method: 'POST', body: new FormData(form)})
	.then(response => alert("Thank You! Your form is submitted successfully."))
	.then(() => { window.location.reload(); })
	.catch(error => console.error('Error!', error.message))
})