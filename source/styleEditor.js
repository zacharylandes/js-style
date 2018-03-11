$(document).ready(function(){
  $('.sub').click(function(){
    var sel = $('#selector').val();
    var prop = $('#property').val();
    var vals = $('#vals').val();
    event.preventDefault();
    $(`${sel}`).css(`${prop}`,`${vals}`);
  })
});
