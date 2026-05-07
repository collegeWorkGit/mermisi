// table config
const tableData = {
  module: "ვებგვერდის მართვის სისტემების (CMS) გამოყენება",
  teacher: "ლევან ჭუმბურიძე",
  room: 411,
  fridayRoom: 305, // change this value manually each week
};

const rows = Array.from(document.querySelectorAll("table tbody tr"));
let currentDay = "";

const fridayRoom =
  typeof tableData.fridayRoom === "number" &&
  !Number.isNaN(tableData.fridayRoom)
    ? tableData.fridayRoom
    : tableData.room;

rows.forEach((row) => {
  const firstCell = row.querySelector("td:first-child");
  if (firstCell && firstCell.hasAttribute("rowspan")) {
    currentDay = firstCell.textContent.trim();
  }

  const activeCells = row.querySelectorAll("td.active");
  if (activeCells.length < 1) {
    return;
  }

  const roomCell = activeCells[activeCells.length - 1];
  const moduleCell = activeCells[0];
  const teacherCell = activeCells.length > 1 ? activeCells[1] : null;

  moduleCell.textContent = tableData.module;
  if (teacherCell) {
    teacherCell.textContent = tableData.teacher;
  }
  roomCell.textContent =
    currentDay === "პარასკევი" ? fridayRoom : tableData.room;
});

// examms config
const date1 = new Date(2026, 3, 22).getTime(); // April 22, 2026
const date2 = new Date(2026, 4, 27).getTime(); // May 27, 2026

const unlockDates = [
  {
    time: date1,
    text: "ს.შ 1 (CMS ინსტალაცია)",
    date: "22.04.2026",
    duration: "1 სთ",
  },
  {
    time: date2,
    text: "ს.შ 2 კლიენტის მხარის თარგის დაინსტალირება და კონფიგურაცია",
    date: "27.05.2026",
    duration: "1 სთ",
  },
  { time: null, text: "თარიღი მალე დაემატება", date: null, duration: null },
  { time: null, text: "თარიღი მალე დაემატება", date: null, duration: null },
];

const accordions = document.querySelectorAll("details");

accordions.forEach((details, index) => {
  const summary = details.querySelector("summary");
  const targetConfig = unlockDates[index];

  summary.innerHTML = "";

  const badge = document.createElement("span");
  badge.classList.add("badge", "badge-colored");
  badge.textContent = `გამოცდა ${index + 1}`;

  if (targetConfig.time === null) {
    badge.classList.add("soon");
  }

  let timeBadge = "";
  if (targetConfig.duration) {
    timeBadge = `<span class="badge badge-time">${targetConfig.duration}</span>`;
  }

  summary.innerHTML = `
    ${badge.outerHTML}
    ${targetConfig.text}
    ${timeBadge}
    ${targetConfig.date ? `- ${targetConfig.date}` : ""}
  `.trim();

  summary.addEventListener("click", (e) => {
    const now = Date.now();

    if (targetConfig.time === null) {
      e.preventDefault();
      alert("გამოცდის თარიღი მალე დაემატება");
    } else if (!details.open && now < targetConfig.time) {
      e.preventDefault();
      alert(`გამოცდა გაიხსნება ${targetConfig.date} რიცხვში`);
    } else {
      if (details.open) {
        details.classList.remove("opening");
        details.classList.add("closing");
      } else {
        details.classList.remove("closing");
        details.classList.add("opening");
      }
    }
  });

  details.addEventListener("toggle", () => {
    if (details.open) {
      details.classList.add("open");
      details.classList.remove("closed", "closing");

      setTimeout(() => {
        details.classList.remove("opening");
      }, 300);
    } else {
      details.classList.add("closed");
      details.classList.remove("open", "opening");

      setTimeout(() => {
        details.classList.remove("closing");
      }, 300);
    }
  });

  details.classList.add("closed");
});
