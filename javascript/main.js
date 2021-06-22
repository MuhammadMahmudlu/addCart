let carts = document.querySelectorAll('.add-cart');

let product =[
    {
        name: " Qara Kefen",
        tag: "kefen1",
        price: 10,
        inCart:0
    },
    {
        name: " Ag Kefen",
        tag: "kefen2",
        price: 10,
        inCart:0
    },
    {
        name: " Boz Kefen",
        tag: "kefen3",
        price: 10,
        inCart:0
    },
    {
        name: " VIP Kefen",
        tag: "kefen4",
        price: 50,
        inCart:0
    }
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=> {
     cartNumbers();
    })
}
function onloadCartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
    
}


function cartNumbers(){
let productNumbers= localStorage.getItem('cartNumbers');

productNumbers = parseInt(productNumbers);

if (productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent=productNumbers+1;
}else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent=1;
}
}
onloadCartNumbers();