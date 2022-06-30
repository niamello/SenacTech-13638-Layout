function validar(){
	/* cria variável local recebendo valor do form user, usando name's dos inputs */
	var nome = formUser.nome.value;
	var email = formUser.email.value;
	var telefone = formUser.telefone.value;
	var endereco = formUser.endereco.value;
	var cpf = formUser.cpf.value;
	var cnpj = formUser.cnpj.value;
	var senha = formUser.senha.value;
	
	if(nome == "" || nome.length <=3){
		alert("Informe o seu nome completo!");
		formUser.nome.focus();
		return false;
	}
	
	if(email == "" || email.length <10){
		alert("E-mail não atende os requisitos!");
		formUser.email.focus();
		return false;
	}
	
	if(telefone == "" || telefone.length <= 5){
		alert("Informe telefone com DDD!");
		formUser.telefone.focus();
		return false;
	}
	
	if(endereco == "" || endereco.length <= 5){
		alert("Informe um endereço válido!");
		formUser.endereco.focus();
		return false;
	}
	
	if (cpf == "" && cnpj == ""){
		alert("Informe CPF ou CNPJ");
		formUser.cpf.focus();
		return false;
	}
	
	if (cpf != "" && cnpj != ""){
		alert("Escolha CPF ou CNPJ");
		formUser.cpf.focus();
		return false;
	}
	
	if(cpf == "" && cnpj != ""){
		if(cnpj.length != 18){
			alert("Informe um CNPJ válido!");
			formUser.cnpj.focus();
			return false;
		}
	}else if(cnpj == "" && cpf != ""){
		if(cpf.length != 14){
		alert("Informe um CPF válido!!");
		formUser.cpf.focus();
		return false;
		}
	}
	
	if(senha == "" || senha.length <= 6){
		alert("Informe uma senha com no mínimo 6 dígitos!");
		formUser.senha.focus();
		return false;
	}
}

function mascaratelefone(i){
	const v = i.value;
	if(isNaN(v[v.length -1])){
		i.value = v.substring(0,v.length - 1);
		return;
	}
	i.setAttribute("maxlength", "14");
	if(v.length == 1) i.value ="("+ i.value;
	if(v.length == 3) i.value +=")";
	if(v.length == 9) i.value +="-";
}

function mascaraCPF(i){
	const v = i.value;
	if(isNaN(v[v.length -1])){
		i.value = v.substring(0,v.length - 1);
		return;
	}
	i.setAttribute("maxlength", "14");
	if(v.length == 3 || v.length == 7) i.value +=".";
	if(v.length == 11) i.value +="-";
}

function mascaraCNPJ(i){
	const v = i.value;
	if(isNaN(v[v.length -1])){
		i.value = v.substring(0,v.length - 1);
		return;
	}
	i.setAttribute("maxlength", "18");
	if(v.length == 2 || v.length == 6) i.value +=".";
	if(v.length == 10) i.value +="/";
	if(v.length == 15) i.value +="-";
}