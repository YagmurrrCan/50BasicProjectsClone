
const insert = document.querySelector("#insert") 

window.addEventListener("keydown", (event) => {
   insert.innerHTML = 
    `
        <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>even.keyCode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
        <div class="key">
            Key ve keyCode almak için herhangi bir tuşa basınız
        </div>
   `
})