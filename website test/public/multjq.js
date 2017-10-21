$(document).ready(function() {

  $('#submit_form').on('submit', function() {
    var item = $('form input');
    var entries = {
      item: item.val()
    };

    $.ajax({
      type: "POST",
      url: '/',
      data: entries,
      success: function(data) {
        location.reload();
      }
    });
    return false;
  });

  $('li').on('click', function() {
    var item = $(this).text();
    //console.log(item);
    $.ajax({
      type: 'DELETE',
      url: '/' + item,
      success: function(data) {
        location.reload();
      }
    });

  });

});
