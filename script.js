var typed = new Typed(".text", {
  strings: ["Full Stack Java Developer", "Java Backend Developer", "React Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function sendMail() {
  (function(){
    emailjs.init("Qxpkn8FQ_ppfr09OU")
  })();

  var params = {
    sendername: document.querySelector("#sendername").value,
    from: document.querySelector("#from").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  var serviceId = "service_nxs163z";
  var templateId = "template_e63xzwn";

  emailjs.send(serviceId, templateId, params)
  .catch();
  document.getElementById("myForm").reset();
}