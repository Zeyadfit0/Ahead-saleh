function calculateAge() {
  const birthInput = document.getElementById("birthDate").value;
  const resultDiv = document.getElementById("result");

  if (!birthInput) {
    resultDiv.innerHTML = "من فضلك أدخل تاريخ الميلاد.";
    resultDiv.classList.add("show");
    return;
  }

  const birthDate = new Date(birthInput);
  const refDate = new Date("2025-10-01"); // التاريخ الثابت

  let years = refDate.getFullYear() - birthDate.getFullYear();
  let months = refDate.getMonth() - birthDate.getMonth();
  let days = refDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const daysInPrevMonth = new Date(refDate.getFullYear(), refDate.getMonth(), 0).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.innerHTML = `
    <div class="age-line"><strong>سنة:</strong><br>${years}</div>
    <div class="age-line"><strong>شهر:</strong><br>${months}</div>
    <div class="age-line"><strong>يوم:</strong><br>${days}</div>
  `;
  resultDiv.classList.add("show");
}
