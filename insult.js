$(document).ready(function() {
    $.ajax({
        url: "http://insultsbe:8080/rest/insults"
    }).then(function(data) {
       $('.insult-content').append(data.content[0]+' ').append(data.content[1]+' ').append(data.content[2]+'!');
    });
});
