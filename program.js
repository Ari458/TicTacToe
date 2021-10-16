var msg= document.querySelector('.msg');
var field= document.querySelectorAll('.item');
var output= document.querySelector('.output');
var txt= document.querySelectorAll('.txt');
var loading= document.querySelector('.loading');
var footer= document.querySelector('.footer');
var toggle=1,count=0;
var array=[],j=0;
var load=1;

msg.innerHTML="Your Turn...";

for(let i=0;i<=field.length-1;i++){
    field[i].addEventListener('click',()=>{
        console.log(i);
        msg.innerHTML="Machine's Turn...";
     array[j++]=i;  
        if(field[i].innerHTML==""){
            if(toggle==0){
            field[i].innerHTML="O";
            toggle=1;
           }
        else if(toggle==1){
            field[i].innerHTML="X";
            toggle=0;
           }
        }
        for(let k=0;k<=field.length-1;k++){
            field[k].style.pointerEvents="none";
        }
        setTimeout(random,1000);

     
    }, { once: true });
}


var random= ()=>{
    let index= Math.abs(Math.floor((Math.random()*10)-1));
    
        if(array.includes(index) && array.length<8){
            console.log("r:"+index);
             random();
        }
        else{
            console.log(index);
            array[j++]=index;  
            if(field[index].innerHTML==""){
                if(toggle==0){
                field[index].innerHTML="O";
                toggle=1;
               }
            else if(toggle==1){
                field[index].innerHTML="X";
                toggle=0;
               }
            }
        field[index].style.pointerEvents = 'none';

        for(let k=0;k<=field.length-1;k++){
            if(array[k]!==k){
                field[k].style.pointerEvents="visible";
            }
            
        }
        msg.innerHTML="Your Turn...";
        winner();
        }
};




var winner= ()=>{
    var key="";
    count++;
    console.log("winner");
    if((field[0].innerHTML!="" && field[1].innerHTML!="" && field[2].innerHTML!="") && (field[0].innerHTML==field[1].innerHTML && field[0].innerHTML==field[2].innerHTML)){
        key= field[0].innerHTML;
        userChecking(key);
        console.log("win"+1);
        
    }
    else if((field[3].innerHTML!="" && field[4].innerHTML!="" && field[5].innerHTML!="") && (field[3].innerHTML==field[4].innerHTML && field[3].innerHTML==field[5].innerHTML)){
        key= field[3].innerHTML;
        userChecking(key);
        console.log("win"+2);
        
    }
    else if((field[6].innerHTML!="" && field[7].innerHTML!="" && field[8].innerHTML!="") && (field[6].innerHTML==field[7].innerHTML && field[6].innerHTML==field[8].innerHTML)){
        key= field[6].innerHTML;
        userChecking(key);
        console.log("win"+3);  
        
    }
    else if((field[0].innerHTML!="" && field[3].innerHTML!="" && field[6].innerHTML!="") && (field[0].innerHTML==field[3].innerHTML && field[0].innerHTML==field[6].innerHTML)){
        key= field[0].innerHTML;
        userChecking(key);
        console.log("win"+4);  
        
    }
    else if((field[1].innerHTML!="" && field[4].innerHTML!="" && field[7].innerHTML!="") && (field[1].innerHTML==field[4].innerHTML && field[1].innerHTML==field[7].innerHTML)){
        key= field[1].innerHTML;
        userChecking(key);
        console.log("win"+5);
        
    }
    else if((field[2].innerHTML!="" && field[5].innerHTML!="" && field[8].innerHTML!="") && (field[2].innerHTML==field[5].innerHTML && field[2].innerHTML==field[8].innerHTML)){
        key= field[2].innerHTML;
        userChecking(key);
        console.log("win"+6);
        
    }
    else if((field[0].innerHTML!="" && field[4].innerHTML!="" && field[8].innerHTML!="") && (field[0].innerHTML==field[4].innerHTML && field[0].innerHTML==field[8].innerHTML)){
        key= field[0].innerHTML;
        userChecking(key);
        console.log("win"+7);
        
    }
    else if((field[2].innerHTML!="" && field[4].innerHTML!="" && field[6].innerHTML!="") && (field[2].innerHTML==field[4].innerHTML && field[2].innerHTML==field[6].innerHTML)){
        key= field[2].innerHTML;
        userChecking(key);
        console.log("win"+8);
        
    }
    else if(count==4){
        // if(field[0].innerHTML!=""&& field[1].innerHTML!=""&& field[2].innerHTML!=""&& field[3].innerHTML!=""&& field[4].innerHTML!=""&& field[5].innerHTML!=""&& field[6].innerHTML!=""&& field[7].innerHTML!=""&& field[8].innerHTML!=""){
        //    userChecking(key);
        //}
        userChecking(key);
    }
    console.log("count="+count);
}


var userChecking= (key)=>{
        if(key=='X'){
            txt[0].innerHTML="Hurray ☻";
            txt[1].innerHTML="You";
            txt[2].innerHTML="are";
            txt[3].innerHTML="Winner !";
            
            output.style.visibility='visible';
        }
        else if(key=='O'){
            txt[0].innerHTML="Opps ☻";
            txt[1].innerHTML="Machine";
            txt[2].innerHTML="is";
            txt[3].innerHTML="Winner !";
            
            showWinner();
        }
        else if(key==""){
            txt[0].innerHTML="";
            txt[1].innerHTML="";
            txt[2].innerHTML="Draw !";

            showWinner();
        }
}

var showWinner= ()=>{
    setTimeout(()=>{
        output.style.visibility='visible';
    },500);
}


var loader= ()=>{
    if(load==1){
        setTimeout(()=>{
                loading.style.visibility='hidden';
            },3000);
    }
    load++;
}




var d= new Date();
footer.innerHTML= footer.innerHTML+' '+d.getFullYear();