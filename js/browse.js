
const blur_cont = document.querySelector('.blr'),
      menu_btn = document.querySelector('.lks-men-lgt'),
      menu_clo_btn = document.querySelector('.drwer-cls-btn'),
      menu_holder = document.querySelector('.drwer'),
      liHolder = document.querySelector('.li_hlder')
      ;



menu_btn.addEventListener('click',()=>{

    menu_btn.classList.toggle('act')
    if(blur_cont.classList.contains('act')){
        blur_cont.classList.remove('act')
    }
    else
    {
        blur_cont.classList.add('act')
    }
   
    menu_holder.classList.add('act')
})

menu_clo_btn.addEventListener('click',()=>{

    menu_holder.classList.remove('act')
    if(blur_cont.classList.contains('act')){
        blur_cont.classList.remove('act')
    }
})

blur_cont.addEventListener('click', ()=>{ 

    if(blur_cont.classList.contains('act')){
        blur_cont.classList.remove('act')
        if(menu_holder.classList.contains('act')){
            menu_holder.classList.remove('act')
        }
        if(liHolder.classList.contains('act')){
            liHolder.classList.remove('act')
        }
        blur_cont.innerHTML =''
    }
    else
    {
        blur_cont.classList.add('act')
        
    }
})


const sale_items = [...new Set(list_data.map(item=>{return item}))]

function display_Content(event){

    switch(event) {
        case " ": 

        break;

        default:
        break;
    }

}

const displaySales = ()=>{

    sale_items.map(item=>{

        const {name,price,cover,seller,seller_cover,brand,year,quality,origin,link,id,details} = item
        document.querySelector('.rgt-hlder').innerHTML +=`
        
        <div class="itm-bx" >
        <div class="itm-bx-hd">
        <div class='tp'>
        <img class='sc' src="${seller_cover}" alt="">
        <div class='desc'>
        <span>${seller}</span>
        <span>Author</span>
        </div>
       
        </div>
        <div class='bt'>
            ${details}
        </div>
        
        <div class='pr'>
        <img src='../assets/icons/cash.png'/>
         ${price} FCFA
         </div>
         </div>
         <div class="itm-bx-img">
             <img src="${cover}" alt="">
         </div>
         <div class="itm-bx-btm">
             <div class="cmt btn">
             <span>
             <img src='../assets/icons/discus.png'/>
             comment
             </span>
             </div>
             <div class="shw btn" onClick ="openItem(${id})">
             <span>
             view
             </span>
             </div>
             <div class="whats btn">
                 <a href="${link}">
                 <img src='../assets/icons/Whatsapp.png'/>
                 whatsApp
                 </a>
             </div>
         </div>
     </div>
        
        `

    }).join('')
    
    
    
    
}


function openItem(id){

    blur_cont.classList.add('act')
    liHolder.classList.add('act')

   liHolder.innerHTML = `
    <img src ='${sale_items[id].cover}'/>
    <div class='det'>
    <div class="nam">${sale_items[id].price}<span>fcfa</span> </div>
   
    </div>


    <div class ='bot'>
    <div class='bot-itm'>
    <span class='t'>${sale_items[id].details}</span>
    </div>
    
    </div>
   
    `

}



// BROWSE PAGE

const cat_btn = document.querySelectorAll(".ctg-hd")
const float_btn = document.querySelectorAll(".ctg-btn")
const head_content = document.querySelector('.cnt-bt')
const filter_search = document.querySelector('#inp')
const cont_li = document.querySelectorAll('.lbtn')
const view_btn = document.querySelectorAll('.vw')


float_btn.forEach(a=>{
    a.addEventListener('click',floatAction)
})

function floatAction(){
    float_btn.forEach(a=>{
        a.classList.remove('act')
    })
    this.classList.add('act')

    let content = this.getAttribute('data-item')
    cont_li.forEach(item=>{

        let att = item.getAttribute('data-item')
        if(att == content){

            item.parentElement.classList.add('opnd')
           
        } else {
            item.parentElement.classList.remove('opnd')
            // alert('not matched')
        }
    })

}

view_btn.forEach(a=>{
    a.addEventListener('click',()=>{
    })
})


let head_division_content = document.querySelector('.ctg-btn.act.lbtn')
let content_type = head_division_content.getAttribute('data-item')
document.querySelector('.cnt-dsion').textContent =content_type
let msg = `Search in ${content_type}...`
filter_search.setAttribute('placeholder',msg)

cont_li.forEach(a=>{
    a.addEventListener('click',()=>{

        let head_division = document.querySelector('.cnt-dsion')
        let content = a.getAttribute('data-item')
    head_division.innerHTML = content
    let msg = `Search in ${content}...`
    filter_search.setAttribute('placeholder',msg) 

    float_btn.forEach(item=>{
        let att = item.getAttribute('data-item')
        if(att == content){

            item.classList.add('act')
        } else {
            item.classList.remove('act')
        }
    })

        
    })
})
cat_btn.forEach(item=>{

    item.addEventListener('click',opendItem)
})

function opendItem(){

    cat_btn.forEach(item=>{ 
        let holder = item.parentElement

        holder.classList.remove('opnd')

    })

    let parent = this.parentElement

    parent.classList.add('opnd')

}

displaySales()