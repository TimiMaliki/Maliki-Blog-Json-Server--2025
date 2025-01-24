// javascript for detail.html


const id = new URLSearchParams(window.location.search).get("id")
const container  = document.querySelector(".post")

const renderDetails  = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id)
  const post = await res.json()
  console.log(post)

  const template =  `
  <img
  src="${post.image}"
  alt="A old van"
  class="w-full h-full lg:h-[900px] object-contain"
/>

<div class="flex text-xl text-black justify-center p-20">
     <p>
     ${post.BODY}
     </p>
</div>
  
  `

  container.innerHTML = template
}

window.addEventListener("DOMContentLoaded" , () => renderDetails())