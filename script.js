function ballinOut () {
  $('#trigger').on('mouseenter', function() {
    $('#me').animate({width: 4000},1500)
  })
}
document.ready(ballinOut);
