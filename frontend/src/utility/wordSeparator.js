


 const wordSeparator = (str)=>{

let arr = [];

let temp = str;
for(let i  = 0;i<str.length;i++){
    arr.push(temp+'|')
   temp   = temp.slice(0,-1);
}

arr.push("|")

return arr;

}

export default wordSeparator;




