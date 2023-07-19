const sendEmail = async() => {
  //Elemnts
  let userNameElement = document.getElementById("name");
  let userEmailElement = document.getElementById("email");
  let subjectElement = document.getElementById("subject");
  let messageElement = document.getElementById("message");
  let data = {
    name: userNameElement.value,
    email: userEmailElement.value,
    subject: subjectElement.value,
    message: messageElement.value,
  };
  if (
    data.name !== "" &&
    data.email !== "" &&
    data.subject !== "" &&
    data.message !== ""
  ) {
    const apiUrl = "https://portfolio-api-ihsu.onrender.com/api/sendemail";
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          showAlert("error");
          throw new Error("Network response was not ok");
        } else {
          showAlert();
          return response.json();
        }
      })
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  } else {
    checkFields("name");
    checkFields("email");
    checkFields("subject");
    checkFields("message");
  }
};

const checkFields = (id) => {
  let element = document.getElementById(id);
  let error = document.getElementById(id + "-validate");

  if (element.value === "") {
    element.classList.add("invalid-validate");
    error.style.display = "block";
  } else {
    element.classList.remove("invalid-validate");
    error.style.display = "none";
    return true;
  }
};

const showAlert = (type) => {
  let element = document.getElementById(type ? "alert-error" : "alert");
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, 4000);
};
