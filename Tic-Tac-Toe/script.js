let curr_Player = 'X'
let arr = Array(9).fill(null)

function checkWinnner(){
    if(arr[0]!=null && (arr[0]===arr[1] && arr[1]===arr[2]) ||
   (arr[3]!=null && (arr[3]===arr[4] && arr[4]===arr[5])) ||
    (arr[6]!=null &&(arr[6]===arr[7] && arr[7]===arr[8]))||
    (arr[0]!=null &&(arr[0]===arr[3] && arr[3]===arr[6]))||
    (arr[1]!=null &&(arr[1]===arr[4] && arr[4]===arr[7]))||
    (arr[2]!=null &&(arr[2]===arr[5] && arr[5]===arr[8]))||
    (arr[0]!=null &&(arr[0]===arr[4] && arr[4]===arr[8]))||
    (arr[2]!=null &&(arr[2]===arr[4] && arr[4]===arr[6]))){
        document.write(`Winner is ${curr_Player}`);
        return;
    }

    if(!arr.some(e=>e===null)){
        document.write(`It's a DRAW`);
        return;
    }
}

function handdleClick(ele){
    console.log(ele.id)
    if(arr[ele.id]!=null)
        return;
    arr[ele.id] = curr_Player;
    ele.innerText = curr_Player;
    checkWinnner();
    curr_Player = curr_Player==='X'?'0':'X';
    console.log(arr)
}