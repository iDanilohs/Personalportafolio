$(".hide").on('click', function() {
    $("nav ul").toggle('slow');
      })

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#truco')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  // console.log(form.get('name'))
  $buttonMailto.setAttribute('href', `mailto:daniloherrera1702@gmail.com?subject= name: ${form.get('name')} email: ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}