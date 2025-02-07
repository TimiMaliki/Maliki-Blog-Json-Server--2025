/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})






const displayPosts = async () => {
  let url = "http://localhost:3000/posts"
  const res = await fetch(url)
  const data = await res.json()
  // console.log(data)

  let template = ""

  data.forEach(post => {
 template += `
        
 <div class="blog-one p-2 lg:p-12">
  <div
    class="max-w-sm lg:max-w-full mx-auto border border-gray-200 rounded-2xl shadow-lg bg-slate-100"
  >
    <a href="#">
      <img
        class="rounded-t-2xl w-full h-full object-cover"
        src="${post.image}"
        alt="${post.Header}"
      />
    </a>
    <div class="p-0">
      <a href="#">
        <h5
          class="mb-4 text-lg md:text-xl lg:text-2xl text-center font-bold tracking-tight text-gray-800"
        >
          ${post.Header}
        </h5>
      </a>
      <p
        class="mb-6 text-sm md:text-base text-center text-gray-700"
      >
        ${post.text}
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-2 lg:mb-4">
      <!-- Read More Button -->
      <a
        href="./details.html?id=${post.id}"
        class="w-auto text-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xs sm:text-sm px-4 py-2"
      >
        Read More
      </a>
      <!-- Not Free Button -->
      <a
        href="./becomeABlogger.html"
        class="w-auto text-center mb-4 lg:mb-0 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xs sm:text-sm px-4 py-2"
      >
        Not Free
      </a>
    </div>
    
       
      </div>
    </div>
  </div>
</div>

 
 
 `

  })

  document.querySelector(".blog-wrapper").innerHTML = template
}


window.addEventListener("DOMContentLoaded" , () => displayPosts())


