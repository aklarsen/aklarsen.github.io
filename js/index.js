function myFunction() {

  var responses = ["Buy gas next time and you're even.",
  "Tell 5 jokes and you're even.",
  "Do the dishes to settle debt.",
  "I'll water the plants, you cook dinner.",
  "Rock paper scissors: best of 3 - winner pays the debt.",
  "Give Netflix password to settle debt."]
  
  var owedtext = document.getElementById("owed").value;
  var owed = Number(owedtext)

  var yeartext = document.getElementById("year").value;
  var year = Number(yeartext)

  if (isNaN(owed) || owed <= 0){
  	document.getElementById("demo").innerHTML = "Invalid Amount Owed";
  }
  else if (isNaN(year) || year <= 0 || year > 2019){
  	document.getElementById("demo").innerHTML = "Invalid Year Borrowed";
  }
  else {
  	var rand = Math.round(Math.random()*5)
  	var respo = responses[rand]

  	document.getElementById("demo").innerHTML = respo;
  }

}

var $form = $( "#form" );
var $input = $form.find( "input" );

$input.on( "keyup", function( event ) {
 
    // 1.
    var selection = window.getSelection().toString();
    if ( selection !== '' ) {
        return;
    }
 
    // 2.
    if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
        return;
    }
 
} );

// 1
var $this = $( this );
var input = $this.val();
 
// 2
var input = input.replace(/[\D\s\._\-]+/g, "");
 
// 3
input = input ? parseInt( input, 10 ) : 0;
 
// 4
$this.val( function() {
    return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
} );