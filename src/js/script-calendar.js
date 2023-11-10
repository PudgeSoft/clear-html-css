
    const daysContainer = document.querySelector(".days");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
  
    const month = document.querySelector(".month");

    const months = [
	"Січень",
	"Лютий",
	"Березень",
	"Квітень",
	"Травень",
	"Червень",
	"Липень",
	"Серпень",
	"Вересень",
	"Жовтень",
	"Листопад",
	"Грудень",
	];
//get current date
    const date = new Date();

    //get current month
    let currentMonth = date.getMonth();
    
    //get current year
    let currentYear = date.getFullYear();

    const renderCalendar = () => {
      date.setDate(1);
      const firstDay = new Date(currentYear, currentMonth, 1);
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const lastDayDate = lastDay.getDate();
      const nextDays = 7 - lastDay.getDay();

      month.textContent = `${months[currentMonth]} ${currentYear}`;

      let days = "";

if (currentYear === 2023 && (currentMonth === 11)) {
    // Якщо умова виконується, показати елемент з id "two-months"
    document.getElementById('DECEMBER').style.display = 'block';
} else {
    // Якщо умова не виконується, приховати елемент з id "two-months"
    document.getElementById('DECEMBER').style.display = 'none';
}


      for (let i = 1; i <= lastDayDate; i++) {
        if (
          currentYear === 2023 && ( currentMonth === 11)
        ) {
          // days += ` <h3>${i}</h3>`;
        } else {
          days += `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="image-container">
                <img src="https://storge.pic2.me/c/1360x800/926/60d4fc494721e4.25969374.jpg" class="img-fluid img-fit">
                <div class="day-number-box">
                    <h3 class="day-number ">${i}</h3>
                </div>
            </div>
        </div>`;
        }
      }

      daysContainer.innerHTML = days;
      hideTodayBtn();
    };

    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    });

    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    });

    renderCalendar();




  