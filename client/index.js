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
})