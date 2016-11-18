$(document).ready(function() {
    $.ajax({
        url: "http://insults-backend-redhat.apps.ecloud.fi/rest/insults"
    }).then(function(data) {
       $('.insult-content').append(data.content[0]+' ').append(data.content[1]+' ').append(data.content[2]+'!');
    });
});
