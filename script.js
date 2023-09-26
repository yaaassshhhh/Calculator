var opr = 0,eq1= '',eq2 = 0,n,back;
$("button").on("mousedown", (event) => {
    var buttonInnerHTML = event.target.value;
    //  console.log(event.target.value);
    changeColor(buttonInnerHTML);
    mainText(buttonInnerHTML);
});

$("button").hover(function () {
    $(this).addClass("hovered");
}, function () {
    $(this).removeClass("hovered");
});

document.addEventListener("keydown", function (event) {
    var activeButton = event.key;
    changeBackGround(activeButton);
    mainText(activeButton);
})


function changeColor(key) {
    switch (key) {
        case 'c':
            $(".clear").addClass("pressed");
            setTimeout(function () {
                $(".clear").removeClass("pressed");
            }, 100);
            break;

        case '%':
            $(".percentage").addClass("pressed");
            setTimeout(function () {
                $(".percentage").removeClass("pressed");
            }, 100);
            break;

        case '/':
            $(".divide").addClass("pressed");
            setTimeout(function () {
                $(".divide").removeClass("pressed");
            }, 100);
            break;

        case '7':
            $(".seven").addClass("pressed");
            setTimeout(function () {
                $(".seven").removeClass("pressed");
            }, 100);
            break;

        case '8':
            $(".eight").addClass("pressed");
            setTimeout(function () {
                $(".eight").removeClass("pressed");
            }, 100);
            break;

        case '9':
            $(".nine").addClass("pressed");
            setTimeout(function () {
                $(".nine").removeClass("pressed");
            }, 100);
            break;

        case '*':
            $(".multiply").addClass("pressed");
            setTimeout(function () {
                $(".multiply").removeClass("pressed");
            }, 100);
            break;

        case '6':
            $(".six").addClass("pressed");
            setTimeout(function () {
                $(".six").removeClass("pressed");
            }, 100);
            break;

        case '5':
            $(".five").addClass("pressed");
            setTimeout(function () {
                $(".five").removeClass("pressed");
            }, 100);
            break;

        case '4':
            $(".four").addClass("pressed");
            setTimeout(function () {
                $(".four").removeClass("pressed");
            }, 100);
            break;

        case '3':
            $(".three").addClass("pressed");
            setTimeout(function () {
                $(".three").removeClass("pressed");
            }, 100);
            break;

        case '2':
            $(".two").addClass("pressed");
            setTimeout(function () {
                $(".two").removeClass("pressed");
            }, 100);
            break;

        case '1':
            $(".one").addClass("pressed");
            setTimeout(function () {
                $(".one").removeClass("pressed");
            }, 100);
            break;

        case '+':
            $(".plus").addClass("pressed");
            setTimeout(function () {
                $(".plus").removeClass("pressed");
            }, 100);
            break;

        case '-':
            $(".minus").addClass("pressed");
            setTimeout(function () {
                $(".minus").removeClass("pressed");
            }, 100);
            break;

        case '0':
            $(".zero").addClass("pressed");
            setTimeout(function () {
                $(".zero").removeClass("pressed");
            }, 100);
            break;

        case '.':
            $(".decimal").addClass("pressed");
            setTimeout(function () {
                $(".decimal").removeClass("pressed");
            }, 100);
            break;

        case '=':
            $(".result").addClass("pressed");
            setTimeout(function () {
                $(".result").removeClass("pressed");
            }, 100);
            break;

    }
}

function changeBackGround(key) {
    
    switch (key) {
        case 'c':
            $(".clear").addClass("hovered");
            setTimeout(function () {
                $(".clear").removeClass("hovered");
            }, 100);
            break;

        case '%':
            $(".percentage").addClass("hovered");
            setTimeout(function () {
                $(".percentage").removeClass("hovered");
            }, 100);
            break;

        case '/':
            $(".divide").addClass("hovered");
            setTimeout(function () {
                $(".divide").removeClass("hovered");
            }, 100);
            break;

        case '7':
            $(".seven").addClass("hovered");
            setTimeout(function () {
                $(".seven").removeClass("hovered");
            }, 100);
            break;

        case '8':
            $(".eight").addClass("hovered");
            setTimeout(function () {
                $(".eight").removeClass("hovered");
            }, 100);
            break;

        case '9':
            $(".nine").addClass("hovered");
            setTimeout(function () {
                $(".nine").removeClass("hovered");
            }, 100);
            break;

        case '*':
            $(".multiply").addClass("hovered");
            setTimeout(function () {
                $(".multiply").removeClass("hovered");
            }, 100);
            break;

        case '6':
            $(".six").addClass("hovered");
            setTimeout(function () {
                $(".six").removeClass("hovered");
            }, 100);
            break;

        case '5':
            $(".five").addClass("hovered");
            setTimeout(function () {
                $(".five").removeClass("hovered");
            }, 100);
            break;

        case '4':
            $(".four").addClass("hovered");
            setTimeout(function () {
                $(".four").removeClass("hovered");
            }, 100);
            break;

        case '3':
            $(".three").addClass("hovered");
            setTimeout(function () {
                $(".three").removeClass("hovered");
            }, 100);
            break;

        case '2':
            $(".two").addClass("hovered");
            setTimeout(function () {
                $(".two").removeClass("hovered");
            }, 100);
            break;

        case '1':
            $(".one").addClass("hovered");
            setTimeout(function () {
                $(".one").removeClass("hovered");
            }, 100);
            break;

        case '+':
            $(".plus").addClass("hovered");
            setTimeout(function () {
                $(".plus").removeClass("hovered");
            }, 100);
            break;

        case '-':
            $(".minus").addClass("hovered");
            setTimeout(function () {
                $(".minus").removeClass("hovered");
            }, 100);
            break;

        case '0':
            $(".zero").addClass("hovered");
            setTimeout(function () {
                $(".zero").removeClass("hovered");
            }, 100);
            break;

        case '.':
            $(".decimal").addClass("hovered");
            setTimeout(function () {
                $(".decimal").removeClass("hovered");
            }, 100);
            break;

        case '=':
            $(".result").addClass("hovered");
            setTimeout(function () {
                $(".result").removeClass("hovered");
            }, 100);
            break;

    }
}

function mainText(key)
{    
    switch(key)
    {
        case 'c':
            eq1=0;
            eq2=0;
            opr=0;
            $(".h").text(eq1);
            $(".hh").text(" ");
            $(".op").text(" ");
            $(".ans").text(" ");
            break;

        case '%':
                opr = key;
                $(".op").text(opr);
                break;
    
        case '/':
                opr = key;
                $(".op").text(opr);
                break;
    
        case '7':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                   
                }
                if(opr !=0) 
                {
                    eq2+=key;
                    eq2/=1;
                    $(".hh").text(eq2);
                    
                }
                break;
    
        case '8':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '9':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '*':
                opr = key;
                $(".op").text(opr);
                break;
    
        case '6':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '5':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '4':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '3':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '2':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
        case '1':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '+':
                opr = key;
                $(".op").text(opr);
                break;
    
        case '-':
                opr = key;
                $(".op").text(opr);
                break;
    
        case '0':
                if(opr == 0)
                {
                    eq1+=key;
                    eq1/=1;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    eq2/=1;
                    $(".hh").text(eq2);
                }
                break;
    
        case '.':
                if(opr == 0)
                {
                    eq1+=key;
                    $(".h").text(eq1);
                }
                else if(opr != 0) 
                {
                    eq2 += key;
                    $(".hh").text(eq2);
                }
                break;
    
        case '=':
               var answer = eq1+opr+eq2;
                $(".ans").text(eval(answer));
                break;

        case 'Enter':
                var answer = eq1+opr+eq2;
                $(".ans").text(eval(answer));
                break;

        case 'Backspace':
            
            if(eq2 == 0 && opr == 0)
           { 
            eq1 /= 10;
            eq1 = Math.floor(eq1);
            // eq1 = eq1.substring(0, eq1.length-1);
            $(".h").text(eq1);
           }

           if(eq2 == 0 && eq1 != 0 )
           { opr = 0;
             console.log(opr);
             $(".op").text(opr);
           }
           else
           {
            eq2 /= 10;
            eq2 = Math.floor(eq2);
            $(".hh").text(eq2);
           }
            
    }
}


// same things as done above but in JS
/*for(var i = 0; i<document.querySelectorAll("button").length ;i++ ){
document.querySelectorAll("button")[i].addEventListener("mousedown",function()
{
    var buttonInnerHTML= this.innerHTML;;
    changeColor(buttonInnerHTML);
   
});
}
*/

/*function changeColor(key)
{
    switch (key)
    {
        case 'c':
            document.querySelector(".clear").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".clear").classList.remove("pressed");
        },100);
        break;

        case '%':
            document.querySelector(".percentage").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".percentage").classList.remove("pressed");
        },100);
        break;

        case '÷':
            document.querySelector(".divide").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".divide").classList.remove("pressed");
        },100);
        break;

        case '7':
            document.querySelector(".seven").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".seven").classList.remove("pressed");
        },100);
        break;

        case '8':
            document.querySelector(".eight").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".eight").classList.remove("pressed");
        },100);
        break;

        case '9':
            document.querySelector(".nine").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".nine").classList.remove("pressed");
        },100);
        break;

        case '×':
            document.querySelector(".multiply").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".multiply").classList.remove("pressed");
        },100);
        break;

        case '6':
            document.querySelector(".six").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".six").classList.remove("pressed");
        },100);
        break;

        case '5':
            document.querySelector(".five").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".five").classList.remove("pressed");
        },100);
        break;

        case '4':
            document.querySelector(".four").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".four").classList.remove("pressed");
        },100);
        break;

        case '3':
            document.querySelector(".three").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".three").classList.remove("pressed");
        },100);
        break;

        case '2':
            document.querySelector(".two").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".two").classList.remove("pressed");
        },100);
        break;

        case '1':
            document.querySelector(".one").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".one").classList.remove("pressed");
        },100);
        break;

        case '+':
            document.querySelector(".plus").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".plus").classList.remove("pressed");
        },100);
        break;

        case '-':
            document.querySelector(".minus").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".minus").classList.remove("pressed");
        },100);
        break;

        case '0':
            document.querySelector(".zero").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".zero").classList.remove("pressed");
        },100);
        break;

        case '.':
            document.querySelector(".decimal").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".decimal").classList.remove("pressed");
        },100);
        break;

        case '=': 
        document.querySelector(".result").classList.add("pressed");
            setTimeout(function()
        {
            document.querySelector(".result").classList.remove("pressed");
        },100);
        break;

    }
}

*/
