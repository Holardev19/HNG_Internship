document.addEventListener("DOMContentLoaded", function () {
   function updateTime() {
      const utcTimeElement = document.getElementById("utcTime");
      const dayOfWeekElement = document.getElementById("dayOfWeek");
      const now = new Date();

      const utcHours = now.getUTCHours().toString().padStart(2, "0");
      const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
      const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
      utcTimeElement.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

      const daysOfWeek = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday",
      ];
      dayOfWeekElement.textContent = daysOfWeek[now.getUTCDay()];
   }

   updateTime();
   setInterval(updateTime, 1000);
});

// function ShowBrowserWidth() {
//    const width = window.innerWidth;
//    document.querySelector("h4").innerText = `width: ${width}`;
// }

// window.onload = ShowBrowserWidth;
// window.onresize = ShowBrowserWidth;
