//This script will display a quote bubble with an entered
//name coming out of my mouth.
$(document).ready(function() {
 $('#greetVisitorButton').click(function() {
	var name  = $('#visitorsName').val();
	if (name.length > 17) {
		name = 'visitor.'
	}
	var formalGreeting = 'Hello, ' + name + '.';
	if (name){
		$('.speech').text(formalGreeting);
	} else {
		$('.speech').text('Hello, visitor.');
	}
 }); //end click
}); //end ready