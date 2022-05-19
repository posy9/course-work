const container = document.querySelector(".data-container"); 

  


function generatebars() { 
  let min=+document.getElementById("min").value;
  let max=+document.getElementById("max").value;
  let num=+document.getElementById("quantity").value;
  var myNode =  document.querySelector(".data-container");
  
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
if (min>-101  && max<101 && max>min && num>-1 && num<41 && Number.isInteger(num) && Number.isInteger(max) && Number.isInteger(min)) {
  

  for (let i = 0; i < num; i += 1) { 
    const value = Math.floor(Math.random() * 2*max) +min; 
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 2+150}px`;  

   
    bar.style.transform = `translateX(${i * 40}px)`; 

    const barLabel = document.createElement("label"); 
    barLabel.classList.add("bar_id");  
    barLabel.innerHTML = value; 
    bar.appendChild(barLabel); 
    container.appendChild(bar); 
    

  } 
  document.querySelector(".data-container").style.margin = '0 auto';
  let tmp=num*40
  document.querySelector(".data-container").style.width = tmp + 'px';
  console.log(tmp + 'px');
} 
else{
  alert("Invalid parameters of array. Quantity from 0 to 40. Elements from -100 to 100. They need to be integers");
  return;
}
}


async function SelectionSort(delay = 300) { 
	let bars = document.querySelectorAll(".bar"); 
	var min_idx = 0; 
  const speed=+document.getElementById("speed").value;
  console.log(speed);
  if (speed>0 && typeof speed==="number") {
    disable()
    for (var i = 0; i < bars.length; i += 1) { 
      min_idx = i; 
      bars[i].style.backgroundColor = "darkblue"; 
  
      for (var j = i + 1; j < bars.length; j += 1) { 
        bars[j].style.backgroundColor = "red"; 
      
        await new Promise((resolve) => 
  
          setTimeout(() => { 
  
            resolve(); 
  
          }, speed*1000) 
  
        );
      
        var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 
  
        if (val1 < val2) { 
  
          if (min_idx !== i) { 
            bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)"; 
          } 
      
          min_idx = j; 
  
        } else { 
          bars[j].style.backgroundColor = "  rgb(24, 190, 255)"; 
        } 
  
      } 
   
      var temp1 = bars[min_idx].style.height; 
      var temp2 = bars[min_idx].childNodes[0].innerText; 
      bars[min_idx].style.height = bars[i].style.height; 
      bars[i].style.height = temp1; 
      bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
      bars[i].childNodes[0].innerText = temp2; 
  
      await new Promise((resolve) => 
  
        setTimeout(() => { 
  
          resolve(); 
  
        }, speed*1000) 
  
      ); 
    
      bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)"; 
      bars[i].style.backgroundColor = " rgb(49, 226, 13)"; 
  
    } 
  
    
    document.getElementById("Button1").disabled = false; 
    document.getElementById("Button1").style.backgroundColor = "#6f459e"; 
  
    document.getElementById("Button2").disabled = false; 
    document.getElementById("Button2").style.backgroundColor = "#6f459e"; 
    
  }
  else{
    alert("Invalid type of speed. Speed > 0");
    return;
  }
} 

//generatebars(quantity,min, max); 
 
 function generate() 
{ 
  generatebars(); 
 } 

function disable() 
{  
  document.getElementById("Button1").disabled = true; 
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff"; 
  document.getElementById("Button2").disabled = true; 
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";   
}