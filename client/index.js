document.addEventListener('DOMContentLoaded', ()=> {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal')
            } else {
                entry.target.classList.remove('reveal')
            }
        })
    },{
        threshold: 0.15,
        rootMargin: '0px'
    })
    let hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el))
});


/* email json*/

const btn = document.getElementById('btn-after');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...'; 

  const serviceID = 'service_z1n6ibd';
  const templateID = 'template_4i5dnug';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      this.reset();

      // Create and style the popup for the top of the screen
      const popup = document.createElement('div');
      popup.textContent = 'Message has been sent!';
      popup.style.position = 'fixed';
      popup.style.top = '7.5%';
      popup.style.left = '0';
      popup.style.width = '100%';
      popup.style.padding = '20px 0';
      popup.style.backgroundColor = 'blue';
      popup.style.color = 'white';
      popup.style.fontWeight = "bold"
      popup.style.textAlign = 'center'; 
      popup.style.zIndex = '1900000';
      popup.style.fontSize = '22px'


      document.body.appendChild(popup);

      // Remove the popup after a few seconds
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 2500);

    }, (err) => {
      btn.value = 'Send Email';
      // error handling
      console.error("Failed to send message:", err);
    });
});