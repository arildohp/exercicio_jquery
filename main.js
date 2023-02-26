$(document).ready(function(e) {

$('form button').click(function(e){
   e.preventDefault();
   const NovaTarefa= $('#lista-tarefa').val;
   const NovoItem= $('<li></li>');
   $(`<a href="${NovaTarefa}"/a>`).appendTo(NovoItem);

   $(NovoItem).appendTo('ul');
   $('#lista-tarefa').val('');
})

})