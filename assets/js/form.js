document.getElementById("contattami").addEventListener("submit", sendMail);

function sendMail(event){

  event.preventDefault();  /*Prevenire crash di default*/

  emailjs.init({
    publicKey: "Ml6LWDsC0Gnrhw1JW",
  });

  // ciclo for per selezionare valore radio buttons
  var modalitaValue = "";
  var radios = document.getElementsByName("modalita");
  for (var i = 0; i < radios.length; i++) {
    if  (radios[i].checked) {
      modalitaValue = radios[i].value;
      break
    }
  };

  // parametri form
  var params = {
    nome: document.getElementById("nome").value,
    cognome: document.getElementById("cognome").value,
    azienda: document.getElementById("azienda").value,
    email: document.getElementById("email").value,
    motivo: document.getElementById("motivo").value,
    modalita: modalitaValue,
    messaggio: document.getElementById("messaggio").value,
  };
  
  // parametri emailjs
  const serviceID = "service_8ie8ywh";
  const templateID = "template_hsx6o6c";

  // emailjs send function
  emailjs.send(serviceID, templateID, params).then(
    (res) => { 
      // reset il form dopo invio
      document.getElementById("contattami").reset();
      console.log("Email inviata", res);
    },
    (err) => {
      console.log("Errore invio mail non riuscito", err);
    }
  );
}


