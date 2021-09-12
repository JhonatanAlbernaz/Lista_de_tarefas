var tarefas = [];

$("#adicionar").on("click", function(e) {

    var valor_input_nova_tarefa = $("#tarefa").val();

    if(valor_input_nova_tarefa == "") {
        $("#tarefa").addClass("border border-danger");
        $("#erro").removeClass("d-none");
    }else {

        var elemento_repetido = false;

        for(var i = 0; i <= (tarefas.length - 1); i++) {
            var novo_elemento = tarefas[i];

            if(novo_elemento == valor_input_nova_tarefa) {
                elemento_repetido = true;
            }
        }

        if(elemento_repetido == false) {
            tarefas.push(valor_input_nova_tarefa);

        $("#lista_de_tarefas").append(
            `<div class="container">
              <div class="row">
               <div class="col-6 offset-3 form-group">
                <input type="text" class="form-control" value="${valor_input_nova_tarefa}" placeholder="Entre com o nome da nova tarefa" />
                <small class="text-danger d-none" data-posicao="${tarefas.length - 1}"> O nome da terefa é obrigatório </small>
               </div>
               <div class="col-3">
                <button class="btn btn-danger" > X </button>
               </div>
              </div>
             </div>`
        );

        }

        $("#tarefa").val("");

    }

});

$("#tarefa").on("focus", function(e) {
    $("#erro").addClass("d-none");
    $("#tarefa").removeClass("border border-danger");
});

$("#lista_de_tarefas").on("click", ".excluir", function(e) {
    var remover_posicao = $(this).data('posicao');
    tarefas.splice(remover_posicao, 1);
});