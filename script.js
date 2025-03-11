/*=============== TYPED JS ===============*/
const typed = new Typed(".text", {
    strings: ["Frontend Developer . . .", "Programmer . . .", "Web Developer . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

/*=============== ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', navHighlighter);

// Sources:
// 1. https://github.com/gagamenon/simplePagePorfolio
// 2. https://www.codewithfaraz.com/content/98/halloween-landing-page-design-made-easy-with-html-css-and-javascript
// 3. https://github.com/8ptk4/technical-documentation-page
// 4. https://github.com/MuriloRoque/new_portfolio