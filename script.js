// Data for foods per 100g
const foodsData = {
  "جبنة قريش": { calories: 98, protein: 11, carbs: 3.4, fats: 4.3 },
  "موز": { calories: 89, protein: 1.1, carbs: 25.4, fats: 0.3 },
  "عيش بلدي": { calories: 286, protein: 8.6, carbs: 58.6, fats: 2.9 },
  "ارز بالشعرية بيتي": { calories: 147, protein: 3, carbs: 30.3, fats: 1.8 },
  "اوراك دجاج (قبل الطهي)": { calories: 173, protein: 28, carbs: 0, fats: 6 },
  "فخد": { calories: 125, protein: 16.4, carbs: 0.5, fats: 6.5 },
  "لبن بقري": { calories: 55, protein: 3, carbs: 4, fats: 3 },
  "عيش فينو": { calories: 318, protein: 7.4, carbs: 52.5, fats: 10 },
  "كبدة بقري (بعد الطهي)": { calories: 165, protein: 26, carbs: 4, fats: 4 },
  "كبدة دجاج (قبل الطهي)": { calories: 167, protein: 25, carbs: 1, fats: 7 },
  "قوانص دجاج": { calories: 87, protein: 15, carbs: 0.5, fats: 3.7 },
  "صدور دجاج (بعد الطهي)": { calories: 165, protein: 31, carbs: 0, fats: 4 },
  "صدور دجاج (قبل الطهي)": { calories: 120, protein: 23, carbs: 0, fats: 3 },
  "بيض مقلي": { calories: 182, protein: 12, carbs: 2, fats: 14 },
  "بيض مسلوق": { calories: 155, protein: 12, carbs: 1.1, fats: 10 },
  "بيضة مسلوقه كاملة": { calories: 79, protein: 6, carbs: 1, fats: 5 },
  "شوفان الحبه الكامله": { calories: 379, protein: 13, carbs: 68, fats: 7 },
  "مكرونه شوفان (قبل الطهي)": { calories: 361, protein: 13, carbs: 70, fats: 4 },
  "عيش شوفان": { calories: 260, protein: 11, carbs: 45, fats: 5 },
  "لحمه مفرومة": { calories: 241, protein: 24, carbs: 0, fats: 15 },
  "لحمه مفرومة (بدون دهن)": { calories: 153, protein: 26, carbs: 0, fats: 5 },
  "لحمه حمراء (بعد الطهي)": { calories: 187, protein: 30, carbs: 0, fats: 7 },
  "ستيك لحمة": { calories: 160, protein: 30, carbs: 0, fats: 5 },
  "بطاطس (قبل الطهي)": { calories: 94, protein: 2, carbs: 21, fats: 0 },
  "بطاطس": { calories: 77, protein: 2, carbs: 17.5, fats: 0 },
  "بطاطا (قبل الطهي)": { calories: 86, protein: 2, carbs: 20, fats: 0 },
  "فول مدمس": { calories: 94, protein: 5.8, carbs: 13, fats: 2.8 },
  "جبنة موزاريلا لايت": { calories: 308, protein: 0, carbs: 6.7, fats: 19.1 },
  "طعمية مصرية (غير مقلية)": { calories: 214, protein: 15, carbs: 35, fats: 2 },
  "ترمس مسلوق": { calories: 120, protein: 16, carbs: 10, fats: 3 },
  "كوسه": { calories: 17, protein: 1.2, carbs: 4.1, fats: 0.3 },
  "سمك بلطي مقلي": { calories: 210, protein: 21.5, carbs: 8.2, fats: 10.3 },
  "مكرونه مسلوقه": { calories: 158, protein: 5.8, carbs: 30.7, fats: 0.9 },
  "مكرونة بالبشاميل": { calories: 300, protein: 12, carbs: 30, fats: 18 },
  "خيار": { calories: 15, protein: 1, carbs: 4, fats: 0 },
  "بطيخ": { calories: 30, protein: 1, carbs: 8, fats: 0 },
  "فول سوداني": { calories: 585, protein: 24, carbs: 22, fats: 50 },
  "زبدة فول سوداني": { calories: 598, protein: 23, carbs: 23, fats: 50 },
  "لوز": { calories: 575, protein: 21, carbs: 22, fats: 49 },
  "توست بني": { calories: 240, protein: 10, carbs: 42, fats: 3 },
  "زيت زيتون": { calories: 884, protein: 0, carbs: 0, fats: 100 },
  "عنب احمر": { calories: 70, protein: 0.6, carbs: 17, fats: 0.2 },
  "عنب اخضر": { calories: 67, protein: 0.6, carbs: 16, fats: 0.2 },
  "بسله قبل الطهي ": { calories: 81, protein: 5, carbs: 14, fats: 0 },
  "بسله بالجزر": { calories: 110, protein: 4, carbs: 18, fats: 5 },
  "تفاح": { calories: 52, protein: 0.3, carbs: 14, fats: 0.2 },
  "زبادي يوناني ساده جهينة": { calories: 50, protein: 8, carbs: 4, fats: 0 },
  "زبادي عادي جهينة": { calories: 65, protein: 4, carbs: 5, fats: 4 },
  "زبادي فراولة جهينة": { calories: 90, protein: 4, carbs: 15, fats: 14 },
  "ملوخية": { calories: 42, protein: 2, carbs: 7, fats: 0 },
  "عين الجمل": { calories: 650, protein: 16, carbs: 14, fats: 65 },
  "كاجو": { calories: 553, protein: 18, carbs: 30, fats: 44 },
  "فصوليا خضراء": { calories: 35, protein: 2, carbs: 8, fats: 0.1 },
  "افوكادو": { calories: 160, protein: 2, carbs: 9, fats: 15 },
  "بروكلي": { calories: 34, protein: 3, carbs: 7, fats: 0 },
  "بذور الشيا": { calories: 486, protein: 17, carbs: 42, fats: 31 },
  "طماطم": { calories: 18, protein: 1, carbs: 4, fats: 0 },
  "بصل": { calories: 40, protein: 1, carbs: 9, fats: 0 },
  "مانجو": { calories: 65, protein: 1, carbs: 17, fats: 0.4 },
  "كانتلوب": { calories: 34, protein: 1, carbs: 8, fats: 0 },
  "اناناس": { calories: 50, protein: 1, carbs: 13, fats: 0 },
  "فول الصويا قبل الطهي": { calories: 175, protein: 17, carbs: 10, fats: 9 },
  "عدس قبل الطهي": { calories: 353, protein: 26, carbs: 60, fats: 1 },
  "عدس بعد الطهي": { calories: 116, protein: 9, carbs: 20, fats: 0.4 },
  "فراولة": { calories: 32, protein: 1, carbs: 8, fats: 0.3 },
  "واي بروتين": { calories: 430, protein: 85, carbs: 8, fats: 6 },
  "قهوه": { calories: 0, protein: 0, carbs: 0, fats: 0 },
  "فول مدمس مطبوخ": { calories: 117, protein: 8, carbs: 20, fats: 0 },
  "لبن كامل الدسم": { calories: 63, protein: 3, carbs: 5, fats: 3 },
  "بنجر": { calories: 43, protein: 2, carbs: 10, fats: 0 },
  "بامية قبل الطهي": { calories: 33, protein: 2, carbs: 8, fats: 0 },
  "بامية بعد الطهي": { calories: 110, protein: 3, carbs: 10, fats: 7 },
  "جزر": { calories: 41, protein: 1, carbs: 10, fats: 0 },
  "سبانخ": { calories: 23, protein: 3, carbs: 4, fats: 0 },
  "باذنجان": { calories: 25, protein: 1, carbs: 6, fats: 0 },
  "باذنجان مقلي ": { calories: 250, protein: 2, carbs: 12, fats: 20 },
  "بطاطس مقلية": { calories: 330, protein: 4, carbs: 40, fats: 17 },
  "بطاطس مشويه في الفرن": { calories: 200, protein: 15, carbs: 20, fats: 10 },
  "جمبري": { calories: 99, protein: 24, carbs: 0, fats: 0 },
  "الدقيق الابيض": { calories: 364, protein: 12, carbs: 77, fats: 1 },
  "التمر (البلح)": { calories: 282, protein: 3, carbs: 75, fats: 0.2 },
  "كمثري": { calories: 57, protein: 0, carbs: 15, fats: 0 },
  "عصير البرتقال": { calories: 50, protein: 1, carbs: 12, fats: 0.2 },
  "عصير الليمون": { calories: 25, protein: 0.3, carbs: 8, fats: 0.1 },
  "عصير المانجو": { calories: 70, protein: 0.5, carbs: 17, fats: 0.2 },
  "عصير فراولة": { calories: 41, protein: 0.8, carbs: 10, fats: 0.1 },
  "خوخ": { calories: 39, protein: 1, carbs: 10, fats: 0 },
  "السكر": { calories: 400, protein: 0, carbs: 100, fats: 0 },
  "جوافة": { calories: 72, protein: 2.6, carbs: 15, fats: 0.9 },
  "عصير الجوافة": { calories: 70, protein: 1, carbs: 16, fats: 0.3 },
  "كاكاو خام دريم": { calories: 387, protein: 20, carbs: 56, fats: 9 },
  "كاكاو خام طبيعي": { calories: 250, protein: 20, carbs: 55, fats: 14 },
  "جرجير": { calories: 25, protein: 3, carbs: 4, fats: 1 },
  "خس": { calories: 15, protein: 1, carbs: 3, fats: 0 },
  "بصل اخضر": { calories: 27, protein: 1, carbs: 6, fats: 1 },
  "فلفل رومي اخضر": { calories: 25, protein: 1, carbs: 4.6, fats: 0.2 },
  "زبادي يوناني بالفواكه جهينة": { calories: 106, protein: 7, carbs: 12, fats: 0 },
  "كيوي": { calories: 61, protein: 1, carbs: 15, fats: 1 },
  "رمان": { calories: 83, protein: 2, carbs: 19, fats: 1 },
  "برتقال": { calories: 47, protein: 0.9, carbs: 12, fats: 0.1 },
  "عسل ابيض": { calories: 320, protein: 0.5, carbs: 84, fats: 0 },
  "عسل اسود": { calories: 310, protein: 1, carbs: 80, fats: 0 },
  "حمس مسلوق": { calories: 130, protein: 9, carbs: 22, fats: 2 },
  "حمص قبل الطهي ": { calories: 378, protein: 21, carbs: 63, fats: 6 },
  "حمص بعد الطهي": { calories: 127, protein: 8.4, carbs: 22.8, fats: 2.1 },
  "فصوليا بيضاء": { calories: 92, protein: 6, carbs: 16, fats: 0 },
  "لب ابيض": { calories: 650, protein: 28, carbs: 15, fats: 55 },
  "لب عباد الشمس ": { calories: 650, protein: 28, carbs: 15, fats: 55 },
  "لب اصفر السوبر": { calories: 650, protein: 28, carbs: 15, fats: 55 },
  "فوشار قبل التحضير": { calories: 380, protein: 13, carbs: 74, fats: 5 },
  "سمنه فلاحي جموسي": { calories: 900, protein: 0, carbs: 0, fats: 100 },
  "سمنه فلاحي بقري": { calories: 900, protein: 0, carbs: 0, fats: 100 },
  "جبنة موزاريلا": { calories: 318, protein: 22, carbs: 3, fats: 25 },
  "جبنة ثلاجه ملح خفيف": { calories: 264, protein: 14, carbs: 4, fats: 21 },
  "جبنة فيتا عبورلاند": { calories: 276, protein: 16.5, carbs: 5, fats: 23 },
  "جبنة رودس فيتا": { calories: 276, protein: 16.5, carbs: 5, fats: 23 },
  "جبنة شيدر": { calories: 400, protein: 25, carbs: 1.3, fats: 33 },
  "جبنة دومتي الفضية": { calories: 311, protein: 5.5, carbs: 7, fats: 29 },
  "مربي التين فيتراك": { calories: 240, protein: 1, carbs: 60, fats: 0 },
  "مربي فراولة فيتراك": { calories: 40, protein: 0, carbs: 10, fats: 0 },
  "تونه": { calories: 130, protein: 25, carbs: 0, fats: 5 },
  "جبنة مثلثات طعمه": { calories: 300, protein: 15, carbs: 4, fats: 25 },
  "جبنة مثلثات برزيدون": { calories: 284, protein: 9, carbs: 5, fats: 25 },
  "فانيلا بودر": { calories: 288, protein: 0.1, carbs: 12, fats: 0.1 },
  "فانيلا سايبه نقط": { calories: 300, protein: 0, carbs: 15, fats: 0 },
  "بيكنج بودر": { calories: 0, protein: 0, carbs: 0, fats: 0 },
  "توت اسود": { calories: 43, protein: 1, carbs: 10, fats: 1 },
  "توت ازرق": { calories: 57, protein: 1, carbs: 15, fats: 0 },
  "لوبيا بعد الطبخ عين سوده": { calories: 116, protein: 8, carbs: 21, fats: 1 },
  "جبنة تركي (رومي)": { calories: 387, protein: 32, carbs: 4, fats: 27 },
  "ذرة حلوه مشويه ": { calories: 100, protein: 4, carbs: 22, fats: 2 },
  "جهينة ميكس بالشوكولاتة": { calories: 88, protein: 2.7, carbs: 15, fats: 1.5 },
  "يوسفي": { calories: 47, protein: 1, carbs: 12, fats: 0 },
  "سردين": { calories: 195, protein: 25, carbs: 0, fats: 10 },
  "قرع عسل قبل الطهي": { calories: 26, protein: 1, carbs: 6, fats: 0 },
  "جبنه حلومي": { calories: 311, protein: 24, carbs: 2, fats: 24 },
  "فستق": { calories: 562, protein: 20, carbs: 28, fats: 45 },
  "توست ابيض": { calories: 293, protein: 9, carbs: 54.4, fats: 4 },
  "حرنكش": { calories: 52, protein: 2, carbs: 11, fats: 1 },
  "روست بيف": { calories: 170, protein: 29, carbs: 0, fats: 6 },
  "بسطرمة": { calories: 147, protein: 22, carbs: 0, fats: 6 },
  "لانشون لحمه بالفلفل الاسود": { calories: 216, protein: 16, carbs: 5, fats: 14 },
  "لانشون فراخ": { calories: 232, protein: 14, carbs: 8, fats: 18 },
  "طعميه مقلية": { calories: 333, protein: 13.3, carbs: 31.8, fats: 17.8 },
  "جلاش باللحمه المفرومة": { calories: 300, protein: 12, carbs: 25, fats: 20 },
  "كنافة سادة بالعسل ": { calories: 400, protein: 6, carbs: 50, fats: 25 },
  "جلاش سادة بالعسل ": { calories: 350, protein: 7, carbs: 45, fats: 20 },
  "زلابية سادة يالعسل": { calories: 320, protein: 4, carbs: 50, fats: 15 },
  "الفايش": { calories: 407, protein: 14, carbs: 13, fats: 7 },
  "كحك العيد ساده ": { calories: 480, protein: 7, carbs: 60, fats: 28 },
  "بقسماط بالسمسم": { calories: 382, protein: 4, carbs: 76, fats: 6 },
  "كرواسون شوكولاته": { calories: 390, protein: 8, carbs: 52, fats: 17 },
  "اجنحه دجاج": { calories: 207, protein: 15, carbs: 3, fats: 15 },
  "رز بلبن": { calories: 52, protein: 3.6, carbs: 5.4, fats: 2.7 },
  "كيكة برتقال": { calories: 319, protein: 5.4, carbs: 33.5, fats: 18.5 },
  "سمك ماكريل": { calories: 222, protein: 22.5, carbs: 0.4, fats: 13.8 },
  "كشري": { calories: 190, protein: 6, carbs: 30, fats: 6 },
  "حواوشي": { calories: 220, protein: 12, carbs: 22, fats: 16 },
  "كفتة لحمة": { calories: 250, protein: 20, carbs: 2, fats: 18 },
  "كفتة فراخ": { calories: 160, protein: 22, carbs: 3, fats: 7 },
  "فطير مشلتت": { calories: 470, protein: 8, carbs: 50, fats: 30 },
  "بوريك بالجبنة": { calories: 320, protein: 12, carbs: 36, fats: 14 },
  " بسكوت النشادر العيد": { calories: 480, protein: 7, carbs: 65, fats: 25 },
  "تانج برتقال": { calories: 420, protein: 0, carbs: 99, fats: 0 },
  "تانج تفاح": { calories: 420, protein: 0, carbs: 99, fats: 0 },
  "رز صيادية": { calories: 160, protein: 3, carbs: 30, fats: 6 },
  "بيض امليت": { calories: 180, protein: 12, carbs: 2, fats: 15 },
};


const meals = ["Breakfast", "Snack", "Lunch", "Dinner", "Snack2"];

const mealsContainer = document.getElementById("mealsContainer");

// Initialize saved data or empty
let savedData = JSON.parse(localStorage.getItem("calorieTrackerData")) || {
  goals: { calories: 0, protein: 0, carbs: 0, fats: 0 },
  meals: {
    Breakfast: [],
    Snack: [],
    Lunch: [],
    Dinner: [],
    Snack2: []
  }
};

function saveData() {
  localStorage.setItem("calorieTrackerData", JSON.stringify(savedData));
  updateSummary();
}

// Create meals UI
function createMealsUI() {
  mealsContainer.innerHTML = "";
  meals.forEach(meal => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("meal");
    mealDiv.id = meal;

    const title = document.createElement("h3");
    title.textContent = meal;
    mealDiv.appendChild(title);

    // List food items in meal
    const foodList = document.createElement("div");
    foodList.classList.add("food-list");
    savedData.meals[meal].forEach((food, index) => {
      const foodItem = document.createElement("div");
      foodItem.classList.add("food-item");

      const nameSpan = document.createElement("span");
      nameSpan.textContent = `${food.name} - ${food.grams}g`;

      const infoSpan = document.createElement("span");
      infoSpan.textContent = 
        `Calories:${food.calories.toFixed(1)}, Protein:${food.protein.toFixed(1)}g, Carb:${food.carbs.toFixed(1)}g, Fat:${food.fats.toFixed(1)}g`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        savedData.meals[meal].splice(index, 1);
        saveData();
        createMealsUI();
      });

      foodItem.appendChild(nameSpan);
      foodItem.appendChild(infoSpan);
      foodItem.appendChild(deleteBtn);
      foodList.appendChild(foodItem);
    });
    mealDiv.appendChild(foodList);

    // Add food controls
    const controls = document.createElement("div");
    controls.classList.add("add-food-controls");

    // Select food dropdown
    const foodSelect = document.createElement("select");
    Object.keys(foodsData).forEach(foodName => {
      const option = document.createElement("option");
      option.value = foodName;
      option.textContent = foodName;
      foodSelect.appendChild(option);
    });
    controls.appendChild(foodSelect);

    // Input grams
    const gramsInput = document.createElement("input");
    gramsInput.type = "number";
    gramsInput.min = "1";
    gramsInput.value = "100";
    gramsInput.placeholder = "grams";
    controls.appendChild(gramsInput);

    // Add button
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", () => {
      const foodName = foodSelect.value;
      const grams = parseFloat(gramsInput.value);
      if (grams <= 0 || isNaN(grams)) {
        alert("Please enter a valid grams amount.");
        return;
      }
      const foodInfo = foodsData[foodName];
      // Calculate macros per grams
      const factor = grams / 100;
      const foodEntry = {
        name: foodName,
        grams: grams,
        calories: foodInfo.calories * factor,
        protein: foodInfo.protein * factor,
        carbs: foodInfo.carbs * factor,
        fats: foodInfo.fats * factor
      };
      savedData.meals[meal].push(foodEntry);
      saveData();
      createMealsUI();
      gramsInput.value = "100";
    });
    controls.appendChild(addBtn);

    mealDiv.appendChild(controls);

    mealsContainer.appendChild(mealDiv);
  });
}

function updateSummary() {
  const goalCalories = savedData.goals.calories || 0;
  const goalProtein = savedData.goals.protein || 0;
  const goalCarbs = savedData.goals.carbs || 0;
  const goalFats = savedData.goals.fats || 0;

  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFats = 0;

  meals.forEach(meal => {
    savedData.meals[meal].forEach(food => {
      totalCalories += food.calories;
      totalProtein += food.protein;
      totalCarbs += food.carbs;
      totalFats += food.fats;
    });
  });

  document.getElementById("totalCalories").textContent = totalCalories.toFixed(1);
  document.getElementById("totalProtein").textContent = totalProtein.toFixed(1);
  document.getElementById("totalCarbs").textContent = totalCarbs.toFixed(1);
  document.getElementById("totalFats").textContent = totalFats.toFixed(1);

  document.getElementById("goalCaloriesDisplay").textContent = goalCalories;
  document.getElementById("goalProteinDisplay").textContent = goalProtein;
  document.getElementById("goalCarbsDisplay").textContent = goalCarbs;
  document.getElementById("goalFatsDisplay").textContent = goalFats;
}

function saveGoals() {
  const calories = parseFloat(document.getElementById("goalCalories").value) || 0;
  const protein = parseFloat(document.getElementById("goalProtein").value) || 0;
  const carbs = parseFloat(document.getElementById("goalCarbs").value) || 0;
  const fats = parseFloat(document.getElementById("goalFats").value) || 0;

  savedData.goals = { calories, protein, carbs, fats };
  saveData();
  updateSummary();
  alert("Goals saved!");
}

// Load goals values on page load
function loadGoals() {
  document.getElementById("goalCalories").value = savedData.goals.calories || "";
  document.getElementById("goalProtein").value = savedData.goals.protein || "";
  document.getElementById("goalCarbs").value = savedData.goals.carbs || "";
  document.getElementById("goalFats").value = savedData.goals.fats || "";
}

// Daily reset at midnight
function checkResetAtMidnight() {
  const lastReset = localStorage.getItem("lastResetDate");
  const today = new Date().toISOString().slice(0, 10);
  if (lastReset !== today) {
    // Reset meals
    savedData.meals = {
      Breakfast: [],
      Snack: [],
      Lunch: [],
      Dinner: [],
      Snack2: []
    };
    saveData();
    localStorage.setItem("lastResetDate", today);
  }
}

// Privacy Policy Modal controls
const privacyLink = document.querySelector('.header-left');
const modal = document.getElementById('privacyModal');
const closeBtn = modal.querySelector('.close-btn');

privacyLink.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Initialize app
window.onload = () => {
  checkResetAtMidnight();
  loadGoals();
  createMealsUI();
  updateSummary();

  document.getElementById("saveGoalsBtn").addEventListener("click", saveGoals);
};
