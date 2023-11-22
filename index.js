const countValue = document.getElementById('counter');

decrement = ()=>{
   let value =parseInt( countValue.innerText);
   value = value - 1;
   countValue.innerText = value
}

increment = ()=>{
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value
}