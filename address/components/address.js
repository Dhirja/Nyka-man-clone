
const saveData = () => {
  

  let country = document.getElementById("country").value;

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  let pin = document.getElementById("pin").value;

  let address = document.getElementById("locality").value;

  

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  
    user_records.push({
      country: country,
      name: name,
      email: email,
      phone: phone,
      pin: pin,
      address: address,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  
      window.location.href = "payment.html";
};
