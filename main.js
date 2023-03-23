$(document).ready(function(e) {
$("form button").click(function(e){
   e.preventDefault();
   const NovaTarefa = $("#lista-tarefa").val();
   const NovoItem = $("<li></li>");
   $(`<p>${NovaTarefa}</p>`).appendTo(NovoItem);

   $(NovoItem).appendTo("ul");


   $("#lista-tarefa").val("");
   $(NovoItem).on("click", function () {
      $(NovoItem).addClass("tarefa-feita");
   });
});

});
