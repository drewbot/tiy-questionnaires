

$('#profile-send-link button').click(function() {
	var profileRecipient = $('#profile-recipient').val();
	var profileSubject = $('#profile-subject').val();
	var profileMessage = $('#profile-message').val();
    $("#profile-send-link").attr('href',"mailto:" + profileRecipient + "?subject=" + profileSubject + "&body=" + profileMessage);
    $('#profile-recipient').val('');
})

$('#project-send-link button').click(function() {
	var projectRecipient = $('#project-recipient').val();
	var projectSubject = $('#project-subject').val();
	var projectMessage = $('#project-message').val();
    $("#project-send-link").attr('href',"mailto:" + projectRecipient + "?subject=" + projectSubject + "&body=" + projectMessage);
    $('#project-recipient').val('');
})