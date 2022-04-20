//1~100까지 사이 숫자만 나오게끔  랜덤으로 숫자를 배정시켜야 함
//숫자 입력시 업인지, 다운인지, 정답인지 나오게
// 남은기회 표시되게끔
// 남은기회가 0일경우 입력버튼 disable
// 리셋하면..남은 기회 다시 살아남


let randomNUm = 0;
let userInput = document.getElementById("user-input");
let notice = document.getElementById("alert");
let userInsert = document.getElementById("insert")
let remainChance = document.getElementById("chance")
let revalue = document.getElementById("reset")
let chance = 3;
let over = false;


userInsert.addEventListener("click",play);
revalue.addEventListener("click",reset);

pickNum()


function pickNum(){
    randomNUm = Math.floor(Math.random()*100)+1;
    console.log(randomNUm)
}


function play(){
    let value = userInput.value;
    if(value >100 || value<1){
        notice.textContent = "1부터100까지만 넣어라";
        return;
    
    }

    
    chance --;
    console.log("남은기회",chance)
    remainChance.textContent=`남은기회는 ${chance} 번`
   
  
   
    if(value>randomNUm){
        notice.textContent="아래로"

    }else if(value<randomNUm){

        notice.textContent="위로"
    }else{
        notice.textContent="정답입니다"
        over =true;

    }
 
    if(over == true || chance<1){
        userInsert.disabled = true;
    }
        
}
    


function reset(){
    userInput.value = ""
    pickNum();
    notice.textContent = "결과가 나옵니다"
    userInsert.disabled = false;

}

   
  




