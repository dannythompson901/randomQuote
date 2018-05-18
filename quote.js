/*quote.js*/
var quote = {
    1: "Change your life today. Don't gamble on the future, act now, without delay. - Simone de Beauvoir",
    2: " It does not matter how slowly you go as long as you do not stop. - Confucius",
    3: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you. - Princess Diana",
    4: "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile. -Helen Mirren",
    5:"Goals transform a random walk into a chase. - Mihaly Csikszentmihalyi",
    6: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination. - Sushant Singh Rajput"
};

//var quoteNumber=Math.floor(Math.random()* (3 - 1)) + 1;
//var randomQuote = quote[quoteNumber];

document.querySelector('.btn-quote').addEventListener('click',function(){
    {
        var quoteNumber=Math.floor(Math.random()* (7 - 0));
        
        if(quoteNumber <=0){
            quoteNumber= (quoteNumber + 1);
            var randomQuote = quote[quoteNumber];
            document.querySelector('#panel').innerHTML = randomQuote;
        }
        else{
        randomQuote = quote[quoteNumber];
        document.querySelector('#panel').innerHTML = randomQuote;
        }
    }
});


$(document).ready(function(){
$(".btn-quote").click(function(){
$("#panel").slideDown("slow");
});
});


//document.getElementById("panel").innerHTML = randomQuote;
