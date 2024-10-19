let firstNumber = '';
let secoundNumber = '';
let operation = '';

//add number to screen
function num(x){
  if(firstNumber == ''){
    firstNumber = x;
    document.querySelector(".display-result").innerHTML = x ;
  }else if(firstNumber != '' && operation == ''){
    firstNumber += x;
    document.querySelector(".display-result").innerHTML += x ;
  }
  else if(secoundNumber == '' && operation != ''){
    secoundNumber = x;
    document.querySelector(".display-result").innerHTML += x ;
  }
  else if(secoundNumber != '' && operation != ''){
    secoundNumber += x;
    document.querySelector(".display-result").innerHTML += x ;
  }
}

//add operation to screen
function op(x){
  if(secoundNumber == ''){
    if(operation == ''){
      operation = x;
      firstNumber = document.querySelector(".display-result").innerHTML;
      document.querySelector(".display-result").innerHTML += x ;
    }
  }else{
    let result = calc();
    if(result == 'not valid'){
      alert("not allowed to dived on 0");
    } else{
      document.querySelector(".display-result").innerHTML = result + x;
      operation= x;
      firstNumber = result;
      secoundNumber = '';
    }
  }
}

//calculation
function calc(){
  let num1 = Number(firstNumber);
  let num2 = Number(secoundNumber);
  switch(operation){
    case '/':
      {
        if(num2 == 0){
          return 'not valid'
        }else{
          return num1/ num2;
        }
      }
      case '+':
      {
        return num1+ num2;
      }
      case '-':
      {
        return num1- num2;
      }
      case '*':
      {
        return num1* num2;
      }
  }
}

/** calc final result on screen **/
function Equal() {
  if(firstNumber != '' && operation == '')
        document.querySelector(".display-result").innerHTML = firstNumber;
    else{
      if(secoundNumber == '')
        alert('Error please insert seound operand');
        else{
          let result = calc();
          if(result == 'not valid')
            alert("not allowed to dived on 0");
          else{
            document.querySelector(".display-result").innerHTML = result;
            firstNumber = '';
            operation = '';
            secoundNumber = '';
          }
        }
    }
}

/** clear input**/
function clr() {
  document.querySelector(".display-result").innerHTML = "0";
  firstNumber = '';
  operation = '';
  secoundNumber = '';
}
  
  