function showThxMessage() {
  document.googleForm.submit();
  document.getElementById('form').style.display = 'none';
  document.getElementById('thxMessage').style.display = 'block';
  $("#id_button").on("click", function () {
    $(this).parent("form").get(0).reportValidity();
  });
}

$('.input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('.input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});

