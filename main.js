$(document).ready(function(e) {

$('form button').click(function(e){
   e.preventDefault();
   const NovaTarefa= $('#lista-tarefa').val();
   const NovoItem= $('<li></li>');
   $(`<p>${NovaTarefa}</p>`).appendTo(NovoItem);
   
    $('<p></p>').click(function(e){
      $('form').slideUp();
  })

   $(NovoItem).appendTo('ul');
   $('#lista-tarefa').val('');
})


})
