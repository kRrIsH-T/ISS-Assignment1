// ########## Change background header #############
console.log("hehe")
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


document.addEventListener('DOMContentLoaded', (event) => {
    const heartButton = document.getElementById('heart-button');
    const likeCounter = document.getElementById('like-counter');
    heartButton.addEventListener('click', function() {
        if (this.classList.contains('bx-heart')) {
            this.classList.remove('bx-heart');
            this.classList.add('bxs-heart', 'liked');
            likeCounter.textContent = '1';
        } else {
            this.classList.remove('bxs-heart', 'liked');
            this.classList.add('bx-heart' );
            likeCounter.textContent = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const heartButton = document.getElementById('heart-button2');
    const likeCounter = document.getElementById('like-counter2');
    heartButton.addEventListener('click', function() {
        if (this.classList.contains('bx-heart')) {
            this.classList.remove('bx-heart');
            this.classList.add('bxs-heart', 'liked');
            likeCounter.textContent = '1';
        } else {
            this.classList.remove('bxs-heart','liked');
            this.classList.add('bx-heart');
            likeCounter.textContent = '0';
        }
    });
});

function submitComment() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    if (name && comment) {
        var newComment = {
            name: name,
            comment: comment
        };

        var existingComments = JSON.parse(localStorage.getItem('comments')) || [];

        existingComments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(existingComments));
        displayComments();

        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please enter both name and comment.');
    }
}

function scrollActive() {
    const scrollDown = window.scrollY;

    // Iterate over each section
    document.querySelectorAll('section[id]').forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; 
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav_list a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         
            sectionsClass.classList.add('active-link');
        } else {
          
            sectionsClass.classList.remove('active-link');
        }
    });
}


document.querySelectorAll('.nav_list a').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

      
        window.scrollTo({
            top: targetSection.offsetTop - 57, 
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const contactLink = document.getElementById('contact-link');
    const activeLink = document.querySelector('.active');
    contactLink.addEventListener('click', function() {
        activeLink.classList.remove('active');
        this.classList.add('active');
    });
});


window.addEventListener('scroll', scrollActive);

// #################### light dark theme ##################

document.addEventListener('DOMContentLoaded', (event) => {
    const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  
    if (document.body.classList.contains(lightTheme)) {
        document.body.classList.remove(lightTheme);
        themeButton.classList.remove(iconTheme);
        document.body.classList.add('dark-theme');
        themeButton.classList.add('bx-moon');
    } else {
        document.body.classList.remove('dark-theme');
        themeButton.classList.remove('bx-moon');
        document.body.classList.add(lightTheme);
        themeButton.classList.add(iconTheme);
    }
    
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
});
document.addEventListener('DOMContentLoaded', (event) => {
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__handle',{delay:700})
sr.reveal('.about_img')
sr.reveal('.about__data')
sr.reveal('.skills__data')
sr.reveal('.ecard')
sr.reveal('.blog')
})
