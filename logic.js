
const f_qnty = document.getElementById("f-qnty")
const e_qnty = document.getElementById("e-qnty")
const sub = document.getElementById("sub")
const vat = document.getElementById("vat")
const total = document.getElementById("total")

const f_plus = document.getElementById("f-plus")
const f_minus = document.getElementById("f-minus")
const e_plus = document.getElementById("e-plus")
const e_minus = document.getElementById("e-minus")



function update_price(e){
    let price;
    let prev_price = sub.innerText
    prev_price = prev_price.split("$")
    prev_price = prev_price[1]
    prev_price = parseInt(prev_price, 10)
    console.log(prev_price)
    if(e == 1){
        price = prev_price + 150
        sub.innerText = "$"+price
    }else if(e == 2){
        price = prev_price - 150
        sub.innerText = "$"+price
    }else if(e == 3){
        price = prev_price + 100
        sub.innerText = "$"+price
    }else if(e == 4){
        price = prev_price - 100
        sub.innerText = "$"+price
    }
    add_vat(price);
}

function add_vat(price){
    let calc_vat = (price / 100) * 10
    console.log(price, calc_vat)
    vat.innerText = "$"+calc_vat;
    let final = price + calc_vat
    total.innerText = "$"+final
}

function btn_clicked(event){

    if(event.target.id == "f-plus"){
        f_qnty.value++;
        update_price(1)
    }else if(event.target.id == "f-minus"){
        f_qnty.value--;
        update_price(2)
    }else if(event.target.id == "e-plus"){
        e_qnty.value++;
        update_price(3)
    }else if(event.target.id == "e-minus"){
        e_qnty.value--;
        update_price(4)
    }
}