const btnForm = document.querySelector("#btn-form");
btnForm.addEventListener("click", () => {
  const inpuns = document.querySelectorAll(".form-group input");
  inpuns.forEach((input) => {
    if (input.value == "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
    postForm();
  });
});

function postForm() {
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Ваше сообщение было успешно отправлено!");
          form.reset();
        } else {
          alert("Произошла ошибка при отправке сообщения.");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Произошла ошибка при отправке сообщения.");
      });
  });
}
