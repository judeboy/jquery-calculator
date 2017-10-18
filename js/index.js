$(document).ready(function() {

let screenArray = [];
let calScreen = $('#screen')
// console.log($numbers);

  $('span').click(function(event) {
    var target = event.target.innerText
    calScreen.append(target)
    // screenArray.push(target)

    if (target === 'C') {
      $('#clear').click(function() {
        location.reload($('calScreen').empty())
        screenArray = [];
      })
    }

// Is there a way to say if (w,x,y,z){push 1 for w, 2 for y...etc function()??
    if (target === '÷') {
      screenArray.push('/')
    }
    if (target === 'x') {
      screenArray.push('*')
    }
    if (target === '-') {
      screenArray.push('-')
    }
    if (target === '+') {
      screenArray.push('+')
    } else if (target !== 'C' && target !== '÷' && target !== 'x' && target !== '-' && target !== '+' && target !== '=') {
      screenArray.push(target)
    }
    if (target === '=') {
      $('#equals').click(function(event){
        let result = screenArray.join(' ')
        let total = eval(result)
        screenArray.push(total)
        calScreen.empty().append(total)
      })
    }

  }) //mainFunction


// IF STATMENTS
//
// --IF TARGET IS CLEAR THEN....$clear.click function(){location.RELOAD
// $(screen).empty() array = []
// --IF TARGET IS OPERATOR...APPEND SYMBOL IN BUTTON BUT PUSH OPERATOR to
// array....if (target === ÷){calScreen.appened() screenArray.push()
// --ELSE IF TARGET IS NOT THESE^^ APPEND TO calSCREEN & PUSH(TARGET) TO SCREENARRAY

//USE EVAL TO EVALUATE RESULTS
// (=).click(function(event)){$screen.empty()--result=arr.join""--total=eval(result)$screen.append}





}); //doc.ready
