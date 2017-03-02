$(document).ready(function() {
    $.ajax({
        url: "http://insultsbe-dev.52.178.131.150.xip.io/rest/insults"
    }).then(function(data) {
       $('.insult-content').append(data.content[0]+' ').append(data.content[1]+' ').append(data.content[2]+'!');
    });
});
