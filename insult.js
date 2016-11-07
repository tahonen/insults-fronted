$(document).ready(function() {
    $('#insult-button').on('click', function() {
      $.ajax({
          url: "http://insults-be-sake.apps.ocp.ninja/rest/insults"
      }).then(function(data) {
        var data = 'Thou ' + data.content[0] + ' ' + data.content[1] + ' ' + data.content[2]+ ' ';
        $('#insult-data').html(data);
      });
    });
});
