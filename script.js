document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from reloading page

  emailjs.send("service_ygy4oyx", "template_5zlf0hd", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(
    function(response) {
      alert("Message sent successfully!");
    },
    function(error) {
      alert("Failed to send message. Please try again.");
    }
  );
});
