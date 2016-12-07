$(document).ready(function(){
     
  $('#submit').hide(1);
   $('#footershow').click(function(){
     $('#submit').toggle(500);
     $(this).hide(200);
      $('h6').hide(200);
 
   });
 
 var api = 'http://api.openweathermap.org/data/2.5/weather?';
  var key = '&appid=607647625cfa2b9cdc42166692c8ef9f';
  var units = "&units=imperial"; //fahrenheit
  var city ="rain";
   $('#city').focus(function(){
     $(this).val('');
 $('#submitbut').click(function(){
       var city= $("#city" ).val();
  if($("#city").val() == "snow"){
     city = "snow";
     }else if($('#city').val() == "rain"){ city = "rain";
       
  }
   }
    );
       });
  
  $('#city').focus(function(){
     $(this).val('');
 
    $('#submitbut').click(function(){
       var city= $("#city" ).val();
      
      $('#celsius').click(function(){
    var units= "&units=metric";
  console.log(units);
  });//
    $('#fahrenheit').click(function(){
    var units= "&units=imperial";
      console.log(units);
  });//
      
       var getCity = function(){//city
   
    if(city !== "snow" && city !== "cloud" && city !== "rain"){
    $.ajax({
  type: 'GET',
  url: api+"q="+city+key+units,
    dataType: 'jsonp',
  success: function(data) {
   
  $("h2 span").text(data.name);
   $('p:first span').text(data.weather[0].main);
$('h4').text("The temperature is:"+data.main.temp);
$('h5').text("The humidity is:"+data.main.humidity);
    // loaded = true;
    // return loaded;
  }});//ajaxfail
  }else if (city === "snow"){
    $('#main').removeClass("rain");
    weather = city;
  }
       };//getcity
     
      
      
      
   })});
  

  
  var loaded = false;
  
 
  
  
      
  
  var c = function(pos){//SUCESS
   var lat = pos.coords.latitude,
       long = pos.coords.longitude,
       coords = lat+ '&' +long;
   console.log(api+'lat='+lat+"&"+'lon='+long+key);
    
   
    $.ajax ({
  type: 'GET',
  url: api+'lat='+lat+"&"+'lon='+long+key+units,
    dataType: 'jsonp',
  success: function(data) {
 
    console.log(api+'lat='+lat+"&"+'lon='+long+key+units);
   $("h2 span").text(data.name);
   $('p:first span').text(data.weather[0].main);
$('h4').text("The temperature is:"+data.main.temp);
$('h5').text("The humidity is:"+data.main.humidity);
    // loaded = true;
    // return loaded;
  }});//ajaxsucc
    
 };
  
  
  
  
  $('#submitbut').click(function(){
    $('div').animate({
      left:100
    },300);
  });  
  
  
  ///////////////////////
  
   
    
  var f = function(){//fail
   
    
    $.ajax({
  type: 'GET',
  url: api+"q="+city+key+units,
    dataType: 'jsonp',
  success: function() {
   
  $("h2 span").text(data.name);
   $('p:first span').text(data.weather[0].main);
$('h4').text("The temperature is:"+data.main.temp);
$('h5').text("The humidity is:"+data.main.humidity);
    // loaded = true;
    // return loaded;
  }});//ajaxfail
  };

      navigator.geolocation.getCurrentPosition(c,f);
     
   //    });
   // });

    // $('.dropdown-toggle').dropdown();
    
  
  //607647625cfa2b9cdc42166692c8ef9f
  //https://codepen.io/cabello986/pen/rrNpBG?editors=0010
   
if(city== "rain"){
  // number of drops created.
var nbDrop = 858; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}
// Make it rain
createRain();
}else if(city == "snow"){
  var container;
var timeChoices;

function init() {
container = document.getElementById("flake-container");
window.setInterval(createParticle,200);
timeChoices = [5,6,7,8,9,10];
}


function destroy(evt) {
  container.removeChild(evt.target);
}

function createParticle() {
  var particle = document.createElement("span");
  var randomSpeed = timeChoices[Math.floor(Math.random()*timeChoices.length)];
  particle.innerHTML = "*";
  particle.className = "flake";
  particle.style.position = "absolute";
  particle.style.color = "white";
  particle.style.backgroundColor = "transparent";
  particle.style.width = "5px";
  particle.style.height = "5px";
  particle.style.pointerEvents = "none";
  particle.style.right = Math.random()*100 + "%";
  particle.style.borderRadius = "50%";
  particle.style.WebkitAnimation = "snow " + randomSpeed + "s linear";
  particle.style.MozAnimation = "snow " + randomSpeed + "s linear";
  container.appendChild(particle);
  particle.addEventListener("webkitAnimationEnd", destroy);
  particle.addEventListener("animationend", destroy);
}

window.onload = init;
}else if (city== "could"){
  
  
}



});//ready