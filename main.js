$(document).ready(function(e) {

$('form button').click(function(e){
   e.preventDefault();
   const NovaTarefa= $('#lista-tarefa').val();
   const NovoItem= $('<li></li>');
   $(`<p href="formulario">${NovaTarefa}</p>`).appendTo(NovoItem);

   $(NovoItem).appendTo('ul');
   $('#lista-tarefa').val('');
})


})
