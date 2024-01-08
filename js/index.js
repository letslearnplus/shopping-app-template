
const blur_cont = document.querySelector('.blr'),
      menu_btn = document.querySelector('.lks-men-lgt'),
      menu_clo_btn = document.querySelector('.drwer-cls-btn'),
      menu_holder = document.querySelector('.drwer')
      ;



menu_btn.addEventListener('click',()=>{

    menu_btn.classList.toggle('act')
    blur_cont.classList.toggle('act')
    menu_holder.classList.toggle('act')
})

menu_clo_btn.addEventListener('click',()=>{menu_btn.click()})

blur_cont.addEventListener('click', ()=>{ menu_btn.click()})





