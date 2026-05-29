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
        content: `
          <h3>📝 დავალების არსი (ონლაინ მაღაზიის მარტივი კალკულატორი):</h3>
          <ol>
            <li>შექმენით <code>index.html</code> და <code>script.js</code> ფაილები და დააკავშირეთ ისინი ერთმანეთთან.</li>
            <li><code>let</code> და <code>const</code> გამოყენებით გამოაცხადეთ ცვლადები: პროდუქტის ფასი, რაოდენობა, მომხმარებლის სახელი და ფასდაკლების პროცენტი.</li>
            <li>გამოიყენეთ არითმეტიკული ოპერატორები ჯამური თანხის გამოსათვლელად.</li>
            <li>გამოიყენეთ სტრიქონული ოპერატორები მომხმარებლის სახელისა და მისალმების ტექსტის შესაერთებლად.</li>
            <li>გამოიყენეთ ტერნარული (პირობითი) ოპერატორი, რათა დაადგინოთ ეკუთვნის თუ არა მომხმარებელს უფასო მიტანა (მაგალითად, თუ ჯამური თანხა აღემატება 100-ს).</li>
            <li>გამოიტანეთ მისალმების ტექსტი <code>alert()</code>-ის მეშვეობით.</li>
            <li>გამოიტანეთ გამოთვლის შუალედური პროცესი დეველოპერის კონსოლში <code>console.log()</code>-ის გამოყენებით.</li>
            <li>საბოლოო ჯამური თანხა და შეტყობინება დაბეჭდეთ კონსოლში <code>console.log()</code>-ის გამოყენებით.</li>
          </ol>
          <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
          <p>დაზიპული პროექტის ფოლდერი, რომელიც შეიცავს ყველა დავალების HTML, CSS და JS ფაილებს.</p>
          <p>
            <a href="https://drive.google.com/drive/folders/1j6890OO_UglRi6JrO07GxtT4biYExVO3?usp=drive_link" target="_blank">🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a>
          </p>`,
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 2.	ამოცანის გადაჭრა ძირითადი კონსტრუქციების გამოყენებით",
        date: "14.05.2026",
        duration: "1 სთ",
        content: `
        <h3>📝 დავალების არსი (რიცხვების გენერატორი და კატეგორიზაცია):</h3>
        <ol>
            <li>შექმენით ღილაკი HTML ფაილში და დააკავშირეთ მასზე <code>onclick</code> ხდომილება (ან გამოიყენეთ <code>addEventListener</code>).</li>
            <li>ღილაკზე დაჭერისას <code>prompt()</code>-ის მეშვეობით მოითხოვეთ მომხმარებლისგან რიცხვის შეყვანა (1-დან 7-ის ჩათვლით).</li>
            <li>გამოიყენეთ <code>if/else</code> რათა გადაამოწმოთ, არის თუ არა შეყვანილი მონაცემი ნამდვილად რიცხვი.</li>
            <li>გამოიყენეთ <code>switch</code> ოპერატორი შეყვანილი რიცხვის მიხედვით კვირის დღის გამოსატანად.</li>
            <li>გამოიყენეთ <code>for</code> ციკლი, რათა კონსოლში გამოიტანოთ ყველა ლუწი რიცხვი 1-დან შეყვანილ რიცხვამდე.</li>
            <li>გამოიყენეთ <code>while</code> ან <code>do-while</code> ციკლი შეყვანილი რიცხვის ციფრთა ჯამის დასათვლელად და გამოიტანეთ კონსოლში.</li>
        </ol>
        <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
        <p>დაზიპული პროექტის ფოლდერი, რომელიც შეიცავს ყველა დავალების HTML, CSS და JS ფაილებს.</p>
        <p>
            <a href="https://drive.google.com/drive/folders/1j6890OO_UglRi6JrO07GxtT4biYExVO3?usp=drive_link" target="_blank">🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a>
        </p>`,
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 3.	მასივებთან მუშაობა",
        date: "14.05.2026",
        duration: "1 სთ",
        content: `
        <h3>📝 დავალების არსი (სტუდენტების მართვის სისტემა):</h3>
        <ol>
          <li>შექმენით სტუდენტების სახელების მასივი (Array), რომელიც შეიცავს მინიმუმ 5 ელემენტს.</li>
          <li>გამოიყენეთ <code>push</code> ან <code>unshift</code> მასივის ბოლოში ან თავში ახალი სტუდენტის დასამატებლად.</li>
          <li>გამოიყენეთ <code>pop</code>, <code>shift</code> ან <code>splice</code> მასივიდან ერთი სტუდენტის ამოსაღებად.</li>
          <li>გამოიყენეთ <code>join</code> მეთოდი, რათა მასივი გარდაქმნათ ერთიან სტრიქონად (მძიმეებით გამოყოფილი სიით).</li>
          <li>მიღებული საბოლოო სტრიქონი გამოიტანეთ ბრაუზერის ეკრანზე ან კონსოლში.</li>
        </ol>
        <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
        <p>დაზიპული პროექტის ფოლდერი, რომელიც შეიცავს ყველა დავალების HTML, CSS და JS ფაილებს.</p>
        <p>
            <a href="https://drive.google.com/drive/folders/1j6890OO_UglRi6JrO07GxtT4biYExVO3?usp=drive_link" target="_blank">🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a>
        </p>`,
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 4.	ბრაუზერთან სამუშაო (უტილიტარული) ფუნქციების გამოყენება",
        date: "14.05.2026",
        duration: "1 სთ",
        content: `
        <h3>📝 დავალების არსი (დინამიური საინფორმაციო დაფა):</h3>
        <ol>
          <li>გამოიყენეთ <code>setInterval</code> და <code>Date</code> ობიექტი, რათა კონსოლში გამოიტანოთ დღევანდელი დღე თვე და რიცხვი</li>
          <li>ამოიღეთ ეკრანის სიგანე და სიმაღლე <code>window.screen</code> ობიექტის გამოყენებით.</li>
          <li>ამოიღეთ ბრაუზერის დასახელება და ვერსია <code>window.navigator</code> ობიექტის გამოყენებით.</li>
          <li>გარდაქმენით ბრაუზერის დასახელების ტექსტი მთავრულ (დიდ) ასოებად <code>toUpperCase()</code> მეთოდის გამოყენებით.</li>
          <li>ყველა მიღებული ინფორმაცია ჩასვით HTML-ში <code>document.getElementById()</code> და <code>innerHTML</code> გამოყენებით.</li>
        </ol>
        <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
        <p>დაზიპული პროექტის ფოლდერი, რომელიც შეიცავს ყველა დავალების HTML, CSS და JS ფაილებს.</p>
        <p>
          <a href="https://drive.google.com/drive/folders/1j6890OO_UglRi6JrO07GxtT4biYExVO3?usp=drive_link" target="_blank">🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a>
        </p>
        `,
      },
      {
        time: new Date(2026, 4, 14).getTime(),
        text: "ს.შ 5.	JavaScript-ის ბიბლიოთეკების ინტეგრაცია ვებგვერდთან",
        date: "14.05.2026",
        duration: "1 სთ",
        content: `        
        <h3>📝 დავალების არსი (გარე ბიბლიოთეკის შემოტანა):</h3>
        <ol>
          <li>გამოიყენეთ ანიმაციური ბიბლიოთეკა (მაგ: Anime.js, GSAP ან jQuery)</li>
          <li>ჩასვით CDN ბმული თქვენს HTML ფაილში შესაბამისი <code>&lt;script&gt;</code> ტეგის მეშვეობით.</li>
          <li>ბიბლიოთეკის დოკუმენტაციიდან გადმოიტანეთ ანიმაციის კოდის სნიპეტი და მოარგეთ თქვენს HTML ელემენტებს (კლასებს ან ID-ებს).</li>
          <li>ბიბლიოთეკის მეთოდების გამოყენებით დინამიურად შეცვალეთ ტექსტის შინაარსი/ფერი, სურათის ზომა ან ბმულის ვიზუალი.</li>
        </ol>
        <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
        <p>დაზიპული პროექტის ფოლდერი, რომელიც შეიცავს ყველა დავალების HTML, CSS და JS ფაილებს.</p>
        <p>
          <a href="https://drive.google.com/drive/folders/1j6890OO_UglRi6JrO07GxtT4biYExVO3?usp=drive_link" target="_blank">🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a>
        </p>
        `,
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
          <a
            href="https://drive.google.com/drive/folders/1A-CP4YTndeYmdvPSOI692Osy92Jol0rM?usp=drive_link"
            target="_blank"
            >🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a
          >
        `,
      },
      {
        time: new Date(2026, 4, 27).getTime(),
        text: "ს.შ 2 კლიენტის მხარის თარგის დაინსტალირება და კონფიგურაცია",
        date: "27.05.2026",
        duration: "3 სთ",
        content: `
        <h3>📝 დავალების არსი:</h3>
        <ol>
          <li>ვორდპრესის აქტიურ თემაში (თუ არ გაქვთ, შექმენით ახალი საქაღალდე <code>wp-content/themes/my-custom-theme</code>) შექმენით ბაზისური ფაილები: <code>index.php</code> და <code>style.css</code>.</li>
          <li>გამოყავით საიტის სტრუქტურა: შექმენით <code>header.php</code> და <code>footer.php</code>. გადაიტანეთ შესაბამისი HTML ტეგები        (<code>&lt;head&gt;</code>, ნავიგაცია, ფუტერი) ამ ფაილებში და გამოიძახეთ ისინი <code>index.php</code>-ში.</li>
          <li>შექმენით <code>functions.php</code> ფაილი და დაუკავშირეთ ძირითადი სტილები (<code>style.css</code>) და სკრიპტები WordPress-ის        სტანდარტით, <code>wp_enqueue_scripts</code> ჰუკზე.</li>
          <li><code>functions.php</code>-ში დაარეგისტრირეთ დინამიური მენიუს მხარდაჭერა <code>register_nav_menu()</code> ფუნქციით. ვორდპრესის        ადმინისტრირების პანელიდან (Appearance -> Menus) შექმენით მენიუ და მიაბით შესაბამის ლოკაციას.</li>
          <li>გამოიტანეთ დარეგისტრირებული მენიუ <code>header.php</code>-ში (ან სასურველ ადგილას) <code>wp_nav_menu()</code> ფუნქციის        მეშვეობით.</li>
          <li>შექმენით შაბლონური ფაილი <code>page.php</code> შიდა გვერდების (Pages) უნიკალური სტრუქტურისთვის.</li>
        </ol>
        <h3>📁 ჩასაბარებელი მტკიცებულებები:</h3>
        <p>თქვენ მიერ შექმნილი ვორდპრესის თემის დაზიპული საქაღალდე (Theme Folder) და ბაზა (sql file).</p>
        <a
          href="https://drive.google.com/drive/folders/1rnYZeKSX87lwVmRP6dP1GylVSj651HqZ?usp=drive_link"
          target="_blank"
          >🔗 გამოცდის ჩასაბარებელი ლინკი (Google Drive)</a
        >`,
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
