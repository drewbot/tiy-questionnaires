
$('.display-share-button').click(function(){
	$('.display-share-form').toggleClass('display-share-form-show')
})

$('#profile-send-link button').click(function() {
	if (!$('#profile-recipient').val()) {
		alert('You must enter a recipient\'s email address to send')
	} else {
		var profileRecipient = $('#profile-recipient').val();
		var profileSubject = $('#profile-subject').val();
		var profileMessage = $('#profile-message').val();
	    $("#profile-send-link").attr('href',"mailto:" + profileRecipient + "?subject=" + profileSubject + "&body=" + profileMessage);
	    $('#profile-recipient').val('');
	}
})

$('#project-send-link button').click(function() {
	if (!$('#project-recipient').val()) {
		alert('You must enter a recipient\'s email address to send')
	} else {
		var projectRecipient = $('#project-recipient').val();
		var projectSubject = $('#project-subject').val();
		var projectMessage = $('#project-message').val();
	    $("#project-send-link").attr('href',"mailto:" + projectRecipient + "?subject=" + projectSubject + "&body=" + projectMessage);
	    $('#project-recipient').val('');
	}
})

$('.submit-form').click(function(){
	// Clear input fields
})

$(document).ready(function(){
	if (submitted == true) {
		alert('clear inputs')
	}
})
 