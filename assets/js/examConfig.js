// exams config

// Module exam configurations
export const moduleConfigs = {
  javascript: {
    name: "JavaScript",
    exams: [
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 1.	მარტივი (წრფივი) ამოცანის გადაწყვეტა JavaScript ენის ძირითადი ელემენტების გამოყენებით",
        date: "14.05.2026",
        duration: "1 სთ",
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 2.	ამოცანის გადაჭრა ძირითადი კონსტრუქციების გამოყენებით",
        date: "14.05.2026",
        duration: "1 სთ",
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 3.	მასივებთან მუშაობა",
        date: "14.05.2026",
        duration: "1 სთ",
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 4.	ბრაუზერთან სამუშაო (უტილიტარული) ფუნქციების გამოყენება",
        date: "14.05.2026",
        duration: "1 სთ",
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 5.	JavaScript-ის ბიბლიოთეკების ინტეგრაცია ვებგვერდთან",
        date: "14.05.2026",
        duration: "1 სთ",
      },
    ],
  },
  cms: {
    name: "CMS (Content Management Systems)",
    exams: [
      {
        time: new Date(2026, 3, 22).getTime(),
        text: "ს.შ 1 (CMS ინსტალაცია)",
        date: "22.04.2026",
        duration: "1 სთ",
        content: `
          <h3>📝 დავალების არსი:</h3>
          <ol>
            <li>გადმოწერეთ და დააინსტალირეთ ლოკალური სერვერი (მაგალითად: XAMPP).</li>
            <li>გაუშვით (Start) Apache და MySQL სერვისები.</li>
            <li>შედით phpMyAdmin-ის პანელში და შექმენით ახალი მონაცემთა ბაზა: <strong>client_website_db</strong>.</li>
            <li>wordpress.org-დან გადმოწერეთ WordPress-ის უახლესი ვერსია.</li>
            <li>ამოაარქივეთ და მოათავსეთ htdocs-ში, დაარქვით <strong>my-project</strong>.</li>
            <li>ბრაუზერიში გადადით <code>http://localhost/my-project/</code> და დაიწყეთ ინსტალაცია.</li>
            <li>დააკავშირეთ ბაზასთან (user: root, password: empty).</li>
            <li>შეავსეთ საიტის მონაცემები (admin_student, etc).</li>
          </ol>
          <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
          <p>დაზიპული ვორდპრეს საქაღალდე + გამოექსპორტებული MySQL ბაზა.</p>
        `,
      },
      {
        time: new Date(2026, 4, 27).getTime(),
        text: "ს.შ 2 კლიენტის მხარის თარგის დაინსტალირება და კონფიგურაცია",
        date: "27.05.2026",
        duration: "1 სთ",
      },
      { time: null, text: "თარიღი მალე დაემატება", date: null, duration: null },
      { time: null, text: "თარიღი მალე დაემატება", date: null, duration: null },
    ],
  },
};

export function initializeExams(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  Object.entries(moduleConfigs).forEach(([moduleId, config]) => {
    const moduleSection = document.createElement("section");
    moduleSection.classList.add("module-section");
    moduleSection.innerHTML = `<h2 class="sub-title">${config.name}</h2>`;

    config.exams.forEach((exam, index) => {
      const details = document.createElement("details");
      details.classList.add("closed");

      const summary = document.createElement("summary");

      const badge = document.createElement("span");
      badge.classList.add("badge", "badge-colored");
      badge.textContent = `გამოცდა ${index + 1}`;

      if (exam.time === null) {
        badge.classList.add("soon");
      }

      let timeBadge = "";
      if (exam.duration) {
        timeBadge = `<span class="badge badge-time">${exam.duration}</span>`;
      }

      summary.innerHTML = `
        ${badge.outerHTML}
        ${exam.text}
        ${timeBadge}
        ${exam.date ? `- ${exam.date}` : ""}
      `.trim();

      const content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML =
        exam.content ||
        "<p>გამოცდის დავალება და დეტალები ჯერ არ არის ხელმისაწვდომი.</p>";

      details.appendChild(summary);
      details.appendChild(content);

      // Event listeners
      summary.addEventListener("click", (e) => {
        const now = Date.now();

        if (exam.time === null) {
          e.preventDefault();
          alert("გამოცდის თარიღი მალე დაემატება");
        } else if (!details.open && now < exam.time) {
          e.preventDefault();
          alert(`გამოცდა გაიხსნება ${exam.date} რიცხვში`);
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
          setTimeout(() => details.classList.remove("opening"), 300);
        } else {
          details.classList.add("closed");
          details.classList.remove("open", "opening");
          setTimeout(() => details.classList.remove("closing"), 300);
        }
      });

      moduleSection.appendChild(details);
    });

    container.appendChild(moduleSection);
  });
}
