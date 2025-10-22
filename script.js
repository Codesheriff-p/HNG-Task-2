document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default page reload

    // Collect all fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Error elements
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    let isValid = true;

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.hidden = true;

    // Validate name
    if (name.value.trim() === "") {
      nameError.textContent = "Full name is required.";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email (name@example.com).";
      isValid = false;
    }

    // Validate subject
    if (subject.value.trim() === "") {
      subjectError.textContent = "Subject is required.";
      isValid = false;
    }

    // Validate message
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // Success
    if (isValid) {
      successMessage.hidden = false;
      form.reset();
    }
  });
});
