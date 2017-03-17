
var count=0;
var combination=[];
var gInput=[],gI=0;
var MovesToWin=20; // later change it to 20 , because that's required by FCC

var redSound = new Audio('simonSound1.mp3');
var greenSound = new Audio('simonSound2.mp3');
var blueSound = new Audio('simonSound3.mp3');
var yellowSound = new Audio('simonSound4.mp3');

$(".startbutton").click(function(){
 count=0;
 combination[0]=0;

 //document.getElementById('debug').value="startbutton pressed";
 $('#debug').val("startbutton pressed");

 $(".countbutton").val(count);
 makeCombination();
 showCombination();
  
});

function makeCombination()
{var x;
 x=Math.random()*4;
 x=Math.floor(x);

 switch(x)
  {case 0: combination[count]='r';break;
   case 1: combination[count]='b';break;
   case 2: combination[count]='g';break;
   case 3: combination[count]='y';break;
  }
 ++count;
 $(".countbutton").val(count);
}

function showCombination()
{var i;
 for(i=0;i<count;++i)
  {
   switch(combination[i])
    {
     case 'r': (function(i){
                setTimeout(function(){
                $(".redbutton").css({'background-color':'white'});
                }, 1600 * (i+1) );
                setTimeout(function(){
                $(".redbutton").css({'background-color':'red'});
                }, 1600 * (i+1) + 800 );
                })(i);
               break;

      case 'g':(function(i){
                setTimeout(function(){
                $(".greenbutton").css({'background-color':'white'});
                }, 1600 * (i+1) );
                setTimeout(function(){
                $(".greenbutton").css({'background-color':'green'});
                }, 1600 * (i+1) + 800 );
                })(i); 
                
               break;

       case 'b':(function(i){
                setTimeout(function(){
                $(".bluebutton").css({'background-color':'white'});
                }, 1600 * (i+1) );
                setTimeout(function(){
                $(".bluebutton").css({'background-color':'blue'});
                }, 1600 * (i+1) + 800 );
                })(i);
               break;

       case 'y': (function(i){
                setTimeout(function(){
                $(".yellowbutton").css({'background-color':'white'});
                }, 1600 * (i+1) );
                setTimeout(function(){
                $(".yellowbutton").css({'background-color':'yellow'});
                }, 1600 * (i+1) + 800 );
                })(i);
                 break;  
 
    }

  }

}

$(".redbutton").click(function(){
 document.getElementById('debug').value="red button pressed";
 
 //blinking of button 
 $(".redbutton").css({'background-color':'white'});
 setTimeout(function(){$(".redbutton").css({'background-color':'red'});},888);

 //document.getElementById('redsound').play();
 redSound.play();
 
 gInput[gI]='r';
 ++gI;
 gamePlay();
});

$(".greenbutton").click(function(){

 $("#debug").val("green button pressed");

 //blinking of button 
 $(".greenbutton").css({'background-color':'white'});
 setTimeout(function(){$(".greenbutton").css({'background-color':'green'});},888);

 //$("#greensound").trigger('play');
 greenSound.play();

 gInput[gI]='g';
 ++gI;
 gamePlay();

 /*
 var i;
 for(i=0;i<21;++i)
  {
 (function(i){
    setTimeout(function(){
      wCounter(i);
    }, 1000 * (i+1) );
  })(i);
 }
 */
});

$(".bluebutton").click(function(){

 $("#debug").val("blue button pressed");
 
 //blinking of button 
 $(".bluebutton").css({'background-color':'white'});
 setTimeout(function(){$(".bluebutton").css({'background-color':'blue'});},888);

 //$("#bluesound").trigger('play');
 blueSound.play();
 
 gInput[gI]='b';
 ++gI;
 gamePlay();
});

$(".yellowbutton").click(function(){
 $("#debug").val("yellow button pressed");

 //blinking of button 
 $(".yellowbutton").css({'background-color':'white'});
 setTimeout(function(){$(".yellowbutton").css({'background-color':'yellow'});},888);

 //$("#yellowsound").trigger('play');
 yellowSound.play();

 gInput[gI]='y';
 ++gI;
 gamePlay();
});

function checkCombination()
{var i,r=true;

 for(i=0;i<count;++i)
  {if(combination[i]!=gInput[i]){r=false;}
  }
 
 return r;
}

function gamePlay()
{
 if(count<MovesToWin && gI==count)
  {if(checkCombination())
    {makeCombination();
     showCombination();
     gI=0;
    }
   else
    {gI=0;
     showCombination();
     $('#debug').val('you pressed a wrong button!');
    }
  }

 if(count==MovesToWin) 
  {$("#debug").val("you won !");}

 if(gI>count)
  {gI=0;
    showCombination();
  }

}
