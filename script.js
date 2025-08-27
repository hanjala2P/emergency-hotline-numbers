//  add to favorites btn 

document.getElementById("add-favorite1-1").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
document.getElementById("add-favorite1-2").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
document.getElementById("add-favorite1-3").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
// //row1 end
document.getElementById("add-favorite2-1").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
document.getElementById("add-favorite2-2").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
document.getElementById("add-favorite2-3").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
// // row 2 end

document.getElementById("add-favorite3-1").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
document.getElementById("add-favorite3-2").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
document.getElementById("add-favorite3-3").addEventListener('click',
    function(e){
        e.preventDefault()
        const favoriteList = parseInt(document.getElementById("count-fev").innerText)
        const totalFev =  favoriteList + 1
         document.getElementById("count-fev").innerText = totalFev


    }
)
// // row 3 end

// copy list use id ()
document.getElementById("copy1-1").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy1-2").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy1-3").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy2-1").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy2-2").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy2-3").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy3-1").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy3-2").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
document.getElementById("copy3-3").addEventListener('click',
    function(e){
        e.preventDefault()
        const copyList = parseInt(document.getElementById("count-copy").innerText)
        const totalCopy =  copyList + 1
         document.getElementById("count-copy").innerText = totalCopy


    }
)
// copy data


// copy element list end here



// coin count



document.getElementById("call1-1").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling National Emergency Number")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call1-2").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Police Helpline Number")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call1-3").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Fire Service Number")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call2-1").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Ambulance Service")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call2-2").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Women & Child Helpline")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call2-3").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Anti-Corruption Helpline")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call3-1").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Electricity Helpline")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call3-2").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Brac Helpline")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})
document.getElementById("call3-3").addEventListener('click', function(e){
    e.preventDefault()
    const callList = parseInt(document.getElementById("count-coin").innerText)
        const callPrice =  callList - 20 
        document.getElementById("count-coin").innerText = callPrice
    if( callPrice >=0 ){
        alert("✔ Calling Brac Helpline")
    }
    else{
        document.getElementById("count-coin").innerText = 0
        alert( " ❌ You don't have enough coin You have need 20 coin minimum for each call")
    }

})

// time 
  function updateClock() {
      let now = new Date();
      let time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      // সব clock div select করে লুপ চালাই
      document.querySelectorAll(".clock").forEach(clock => {
        clock.innerText = time;
      });
    }

    setInterval(updateClock, 1000);
    updateClock();



    // copy