 function validar(){
        	var nome  = form.nome.value
        	var email = form.email.value
        	var mensagem = form.mensagem.value;

        	if (nome == "") {
        		alert('Preencha o campo nome');
        		form.nome.focus();
        		return false;	
        	}
           if (email == "") {
           	alert('Preencha o campo email');
        		form.email.focus();
        		return false;	
           }
        
              if (mensagem == "") {
           	alert('Preencha o campo Mensagem');
        		form.mensagem.focus();
        		return false;	
           }
             else{
             	alert('botão clicado e dados enviados com sucesso');
             }
        }  
