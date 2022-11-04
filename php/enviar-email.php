<?php
// Varialves

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s')

// campo email

$arquivo ="
<html>
<p><b>Nome: </b>$nome</p>
<p><b>E-mail: </b>$email</p>
<p><b>Mensagem: </b>$mensagem</p>

<p>Este email foi enviado em  </b>$data_envio</b> às <b>$hora_envio</b></p>
</html>
";

// Email para quem será enviando o Formulário

$destino = "androsilvasitepelox@gmail.com"
$assunto = "Contato pelo site"

// Este sempre deverá existir para garantir a exibição correta dos caracteres

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset-iso-8859-1\n";
$headers .= "form $nome <$email>";

// Enviar

mail($destino, $assunto, $arquivo, $headers);

echo "< meta htpp-equiv'refresh' content='10;URL=../Sobre nos.html' >";
?>