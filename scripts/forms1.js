document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("formContainer");
  const btnHome = document.getElementById("btnHome");
  const btnGym = document.getElementById("btnGym");

  const renderForm = (type) => {
    btnHome.classList.remove("button-selected");
    btnGym.classList.remove("button-selected");
    if (type === "home") btnHome.classList.add("button-selected");
    else btnGym.classList.add("button-selected");

    let contactField = `
      <label for="addressOrGym">${type === "home" ? "Your Address" : "Select Gym Location"}</label>
      ${type === "home"
        ? `<input type="text" id="addressOrGym" name="address" required>`
        : `<select id="addressOrGym" name="gymLocation" required>
            <option value="">Choose location</option>
            <option value="American Fork">American Fork</option>
            <option value="Provo">Provo</option>
          </select>`}
    `;

    formContainer.innerHTML = `
      <form style="text-align: left;">
        <h3>${type === "home" ? "Train from Home" : "Train at Gym"}</h3>
        
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required><br><br>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required><br><br>

        <label>Preferred Contact Method:</label>
        <div class="radio-group">
        <label><input type="radio" name="method" value="Call" required> Call</label>
        <label><input type="radio" name="method" value="Message"> Message</label>
        <label><input type="radio" name="method" value="Email"> Email</label>
        </div>
        

        ${type === "home" ? `
          <label for="trainer">Select Trainer</label>
          <select id="trainer" name="trainer" required>
            <option value="">Choose one</option>
            <option value="Brandon">Brandon</option>
            <option value="Kelsey">Kelsey</option>
            <option value="Luke">Luke</option>
          </select><br><br>` : ''}

        ${contactField}<br><br>

        <label for="session">Pick a Date & Time</label>
        <input type="datetime-local" id="session" name="session" required><br><br>

        <button type="submit" class="primary-bg">Book Session</button>
      </form>
    `;
    formContainer.style.display = "block";

    const form = formContainer.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent actual submission

      const client = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        method: form.method.value,
        location: form.addressOrGym ? form.addressOrGym.value : "",
        trainer: form.trainer ? form.trainer.value : "",
        sessionDate: form.session.value
      };

      // Save to localStorage
      localStorage.setItem("lastClient", JSON.stringify(client));

      alert("Thanks! Your session was saved.");
      form.reset();
    });
  };

  btnHome.addEventListener("click", () => renderForm("home"));
  btnGym.addEventListener("click", () => renderForm("gym"));
});