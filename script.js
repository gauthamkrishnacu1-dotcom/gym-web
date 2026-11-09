/* ===== EDIT ONLY THIS BLOCK FOR EACH NEW CLIENT ===== */
const CLIENT = {
  gymName: "Fight Club",
  phone: "917025711627",            // WhatsApp number: country code + number, no + or spaces
  displayPhone: "+91 70257 11627",  // how the number appears on the page
  address: "Your gym address, town, Kerala",
  timings: "Mon–Sat, 5:30 AM – 9:30 PM",
  tagline: "Multi-class AC gym with a complete family-oriented atmosphere in every session. Men and women train equally, with professional female trainers for women's guidance.",
  oldPrice: "1,200",
  newPrice: "900",
  whatsappMessage: "Hi, I'd like to join the gym.",
  plans: [
    { name: "Monthly",   price: "900",   note: "Pay month by month" },
    { name: "Quarterly", price: "2,400", note: "3 months, save more" },
    { name: "Yearly",    price: "8,000", note: "Best value" }
  ],
  menu: [
    { name: "Strength Zone", description: "Free weights, squat racks and machine circuits for power, muscle and performance." },
    { name: "Cardio Core", description: "Treadmills, bikes and rowing sessions to keep your heart and stamina strong." },
    { name: "Mind & Mobility", description: "Yoga and guided mobility sessions for better flexibility, posture and recovery." },
    { name: "Combat Training", description: "Kickboxing and conditioning classes designed for technique, cardio and confidence." },
    { name: "Recovery Lounge", description: "Sauna and recovery support to help your body reset after every workout." },
    { name: "Personal Coaching", description: "One-on-one guidance tailored to your goals, pace and fitness level." }
  ],
  services: [
    { name: "Strength training", text: "Free weights and machines for all levels.", detail: "Build strength at your own pace with free weights and gym machines, with options for beginners and experienced members.", image: "assets/services/strength-training.jpg" },
    { name: "Personal training", text: "One-to-one coaching built around your goal.", detail: "Get individual guidance, exercise coaching and a training plan shaped around your fitness goals.", image: "assets/services/personal-training.jpg" },
    { name: "Yoga", text: "Guided sessions for flexibility and focus.", detail: "Practice guided poses and breathing exercises to improve flexibility, balance and focus.", image: "assets/services/yoga.jpg" },
    { name: "Zumba fitness", text: "High-energy dance workouts in a group.", detail: "Move to upbeat music in an energetic group workout that combines dance and cardio.", image: "assets/services/zumba.jpg" },
    { name: "Physiotherapy", text: "Recovery and injury support.", detail: "Get support with movement, recovery and return-to-exercise planning based on your needs.", image: "assets/services/physiotherapy.jpg" },
    { name: "Kick boxing", text: "Technique, cardio and conditioning.", detail: "Practice kickboxing combinations and technique while working on cardio and conditioning.", image: "assets/services/kickboxing.jpg" },
    { name: "Sauna", text: "Relax and recover after training.", detail: "Unwind in the sauna after your workout as part of your recovery routine.", image: "assets/services/sauna.jpg" }
  ]
};
/* ===== END CLIENT SETTINGS ===== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Text placeholders
$$("[data-fill]").forEach(el => {
  const v = CLIENT[el.dataset.fill];
  if (v !== undefined) el.textContent = v;
});
document.title = CLIENT.gymName + " | Multi-class AC Gym";
$("#year").textContent = new Date().getFullYear();

// Links
const waUrl = `https://wa.me/${CLIENT.phone}?text=${encodeURIComponent(CLIENT.whatsappMessage)}`;
$$("[data-wa]").forEach(a => { a.href = waUrl; a.target = "_blank"; a.rel = "noopener"; });
$$("[data-tel]").forEach(a => { a.href = "tel:+" + CLIENT.phone; });

// Lists
const li = t => Object.assign(document.createElement("li"), { textContent: t });
CLIENT.services.forEach(s => $("#heroServices").append(li(s.name)));

$("#plans").innerHTML = CLIENT.plans.map(p =>
  `<article class="plan"><h3>${p.name}</h3><p class="price">&#8377;${p.price}</p><p>${p.note}</p></article>`
).join("");

$("#menuGrid").innerHTML = CLIENT.menu.map(item =>
  `<article class="menu-card"><h3>${item.name}</h3><p>${item.description}</p></article>`
).join("");

$("#serviceGrid").innerHTML = CLIENT.services.map(s =>
  `<details class="service"><summary><h3>${s.name}</h3><p>${s.text}</p></summary><div class="service-popover"><img src="${s.image}" alt=""><div class="service-popover-copy"><p>${s.detail}</p></div></div></details>`
).join("");

// Mobile menu
const btn = $(".menu-btn"), nav = $("#nav");
btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
$$("#nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  btn.setAttribute("aria-expanded", false);
}));

// Header background after scrolling
const header = $(".site-header");
const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
