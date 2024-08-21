function Converte(){
  
    const unit =parseFloat(document.getElementById('unit').value);
    
    
    let bill =0;
    
    if(isNaN(unit) || unit<0){
      alert("Please enter valid number of units");
      return;
    }
    if(unit<=30){
     bill = unit * 5.50;
    }else if(unit<=100){
    bill =  (30 * 5.50) + ((unit-30) * 8.00);
    }else if(unit<=200){
    bill= (30 * 5.50) + (70 * 8.00) + ((unit - 100) * 12.00);
    }else if(unit<=230){
    bill =(30 * 5.50) + (70 * 8.00) + (100 * 12.00) + ((unit-200) * 13.00);
    }else {
    bill = (30 * 5.50) + (70 * 8.00) + (100 * 12.00) + (200*13.00) + (unit*15.00)
    }
    document.getElementById('Price').innerText=bill.toFixed(2);
   }
   