// const width = document.querySelector(".input-width");
// const height = document.querySelector(".input-height");
// const radius = document.querySelector(".input-radius");
// const color = document.querySelector(".input-color");
// const btn = document.querySelector(".button");
// const box = document.querySelector(".content");
// const form = document.querySelector(".form");

// form.addEventListener("submit",(e) => {
//     e.preventDefault()

//    box.style.width = width.value + "px"
//    box.style.height = height.value + "px"
//    box.style.borderRadius = radius.value + "px"
//    box.style.background = color.value 
// })


// const form = document.querySelector(".form")
// const input = document.querySelector(".input")
// const box = document.querySelector(".box");
// const btn = document.querySelector(".btn")
// const ren = document.querySelector(".rend")
// const active = document.querySelector(".active")


// const rendeContent = () => {
//     const data = JSON.parse(localStorage.getItem("datas")) || [];

//     box.innerHTML = data.map((item) => `
//     <p class="rend_text">${item}</p>
//     <button data-id="1" class="per">per</button>
//     `).join("")

    
// }

// const local = (data) => {
//     const olddata = JSON.parse(localStorage.getItem("datas")) || [];
//     localStorage.setItem("datas", JSON.stringify([data, ...olddata]));
// }

// form.addEventListener("submit",(e) => {
//     e.preventDefault()
   
//     local(input.value)

    
//     rendeContent()
   
    
// })


// btn.addEventListener("click", (e) => {
//     const id = e.target.dataset.id
    
//     if(id){
//         localStorage.setItem("datas", JSON.stringify([data, ...olddata]));
//     }

//     actRender()
   

// })



// const actRender = () => {
//      const data = JSON.parse(localStorage.getItem("datas")) || [];


//      active.innerHTML = data.map((item) => `
//      <p class="rend_text">${item}</p>
//      `).join("")
// }









// const form = document.querySelector(".form");
// const input = document.querySelector(".input");
// const btn = document.querySelector(".rend");
// const set = document.querySelector(".set");

// if (form && input && btn && set) {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const timer = input.value;
//         set.textContent = `${timer}`;
//     });

//     btn.addEventListener("click", () => {
//         const timer = input.value;
//         set.style.opacity = "1";
//         time(timer);
//         input.value = "";
//     });
// }

// const time = (timer) => {
//     let countdown = Number(timer);
//     const interval = setInterval(() => {
//         set.textContent = `${countdown}`;
//         countdown--;
//         if (countdown < 0) {
//             clearInterval(interval);
//             set.textContent = "tugadi";
//         }
//     }, 1000);
// };





