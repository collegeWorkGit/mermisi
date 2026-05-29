// table config

// Modules
export const modules = {
  cms: {
    module: "ვებგვერდის მართვის სისტემების (CMS) გამოყენება",
    teacher: "ლევან ჭუმბურიძე",
    room: 411,
  },
};

// Schedule
export const schedule = [
  { day: "ოთხშაბათი", periods: [2, 3, 4, 5], moduleId: "cms" },
  { day: "პარასკევი", periods: [1, 2], moduleId: "cms", room: 305 },
];

// Time slots
export const timeSlots = {
  ორშაბათი: [
    { period: 1, time: "9:30-10:20" },
    { period: 2, time: "10:30-11:20" },
    { period: 3, time: "11:30-12:20" },
    { period: 4, time: "12:30-13:20" },
    { period: 5, time: "13:30-14:20" },
    { period: 6, time: "14:30-15:20" },
    { period: 7, time: "15:30-16:20" },
    { period: 8, time: "16:30-17:20" },
    { period: 9, time: "17:30-18:20" },
    { period: 10, time: "18:30-19:20" },
    { period: 11, time: "19:30-20:20" },
    { period: 12, time: "20:30-21:20" },
  ],
  სამშაბათი: [
    { period: 1, time: "9:30-10:20" },
    { period: 2, time: "10:30-11:20" },
    { period: 3, time: "11:30-12:20" },
    { period: 4, time: "12:30-13:20" },
    { period: 5, time: "13:30-14:20" },
    { period: 6, time: "14:30-15:20" },
    { period: 7, time: "15:30-16:20" },
    { period: 8, time: "16:30-17:20" },
    { period: 9, time: "17:30-18:20" },
    { period: 10, time: "18:30-19:20" },
    { period: 11, time: "19:30-20:20" },
    { period: 12, time: "20:30-21:20" },
  ],
  ოთხშაბათი: [
    { period: 1, time: "9:30-10:20" },
    { period: 2, time: "10:30-11:20" },
    { period: 3, time: "11:30-12:20" },
    { period: 4, time: "12:35-13:25" },
    { period: 5, time: "13:35-14:25" },
    { period: 6, time: "14:35-15:25" },
    { period: 7, time: "15:30-16:20" },
    { period: 8, time: "16:30-17:20" },
    { period: 9, time: "17:30-18:20" },
    { period: 10, time: "18:30-19:20" },
    { period: 11, time: "19:30-20:20" },
    { period: 12, time: "20:30-21:20" },
  ],
  ხუთშაბათი: [
    { period: 1, time: "9:30-10:20" },
    { period: 2, time: "10:30-11:20" },
    { period: 3, time: "11:30-12:20" },
    { period: 4, time: "12:30-13:20" },
    { period: 5, time: "13:30-14:20" },
    { period: 6, time: "14:30-15:20" },
    { period: 7, time: "15:30-16:20" },
    { period: 8, time: "16:30-17:20" },
    { period: 9, time: "17:30-18:20" },
    { period: 10, time: "18:30-19:20" },
    { period: 11, time: "19:30-20:20" },
    { period: 12, time: "20:30-21:20" },
  ],
  პარასკევი: [
    { period: 1, time: "9:30-10:20" },
    { period: 2, time: "10:30-11:20" },
    { period: 3, time: "11:30-12:20" },
    { period: 4, time: "12:35-13:25" },
    { period: 5, time: "13:35-14:25" },
    { period: 6, time: "14:35-15:25" },
    { period: 7, time: "15:30-16:20" },
    { period: 8, time: "16:30-17:20" },
    { period: 9, time: "17:30-18:20" },
    { period: 10, time: "18:30-19:20" },
    { period: 11, time: "19:30-20:20" },
    { period: 12, time: "20:30-21:20" },
  ],
  შაბათი: [
    { period: 1, time: "9:30-10:20" },
    { period: 2, time: "10:30-11:20" },
    { period: 3, time: "11:30-12:20" },
    { period: 4, time: "12:30-13:20" },
    { period: 5, time: "13:30-14:20" },
    { period: 6, time: "14:30-15:20" },
    { period: 7, time: "15:30-16:20" },
    { period: 8, time: "16:30-17:20" },
    { period: 9, time: "17:30-18:20" },
    { period: 10, time: "18:30-19:20" },
    { period: 11, time: "19:30-20:20" },
    { period: 12, time: "20:30-21:20" },
  ],
};

// Generate table rows
export function initializeTable() {
  const tbody = document.querySelector("table tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  const headerRow = document.createElement("tr");
  headerRow.classList.add("table-header-toggle");
  const headerCell = document.createElement("td");
  headerCell.setAttribute("colspan", "6");
  headerCell.textContent = "📅 ცხრილი (დააჭირეთ გასახსნელად)";
  headerCell.style.cursor = "pointer";
  headerCell.style.textAlign = "center";
  headerCell.style.fontWeight = "bold";
  headerCell.style.padding = "15px";
  headerRow.appendChild(headerCell);
  tbody.appendChild(headerRow);

  // Store all data rows
  const allRows = [];

  Object.entries(timeSlots).forEach(([day, slots]) => {
    // Only show days that have scheduled modules
    const dayHasSchedule = schedule.some((s) => s.day === day);
    if (!dayHasSchedule) return;

    slots.forEach((slot, index) => {
      if (slot.period > 8) return;

      const row = document.createElement("tr");
      row.setAttribute("data-day", day);
      row.classList.add("table-row-hidden");

      // Add day rowspan
      if (index === 0) {
        const dayCell = document.createElement("td");
        dayCell.setAttribute("rowspan", Math.min(slots.length, 8));
        dayCell.textContent = day;
        dayCell.classList.add("day-cell");
        row.appendChild(dayCell);
      }

      // Period
      const periodCell = document.createElement("td");
      periodCell.textContent = slot.period;
      row.appendChild(periodCell);

      // Time
      const timeCell = document.createElement("td");
      timeCell.textContent = slot.time;
      row.appendChild(timeCell);

      // Module, Teacher, Room
      const moduleCell = document.createElement("td");
      const teacherCell = document.createElement("td");
      const roomCell = document.createElement("td");

      // Check if this slot has a scheduled module
      const scheduleEntry = schedule.find((s) => {
        if (s.day !== day) return false;
        const periods = Array.isArray(s.periods) ? s.periods : [s.periods];
        return periods.includes(slot.period);
      });

      if (scheduleEntry && modules[scheduleEntry.moduleId]) {
        const moduleData = modules[scheduleEntry.moduleId];
        moduleCell.classList.add("active");
        teacherCell.classList.add("active");
        roomCell.classList.add("active");
        row.setAttribute("data-module", scheduleEntry.moduleId);

        moduleCell.textContent = moduleData.module;
        teacherCell.textContent = moduleData.teacher;
        roomCell.textContent = scheduleEntry.room || moduleData.room;
      }

      row.appendChild(moduleCell);
      row.appendChild(teacherCell);
      row.appendChild(roomCell);

      allRows.push(row);
      tbody.appendChild(row);
    });
  });

  // Add click
  headerCell.addEventListener("click", function () {
    allRows.forEach((row) => {
      row.classList.toggle("table-row-hidden");
    });
    // Change text
    const isHidden = allRows[0].classList.contains("table-row-hidden");
    headerCell.textContent = isHidden
      ? "📅 ცხრილი (დააჭირეთ გასახსნელად)"
      : "📅 ცხრილი (დააჭირეთ დასახურად)";
  });
}
