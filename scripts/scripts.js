const profile = {
  name: "Leon Orlov",
  initials: "LO",
  headline: "Berlin, Germany",
  aboutText:
    "I'm a passionate developer who loves building clean, performant web applications. With experience across the full stack, I enjoy turning complex problems into elegant solutions.",
  photoSrc: "", // show initials if empty

  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle", 
  github: "https://github.com/your-handle"
};

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

const experience = [
  {
    role: "Senior Frontend Developer",
    org: "Tech Company Inc.",
    period: "2022 — Present",
    description:
      "Led development of the main SaaS product, improving performance by 40%. Mentored junior developers and established coding standards.",
    tags: ["React", "TypeScript", "Node.js"]
  },
  {
    role: "Frontend Developer",
    org: "Startup Studio",
    period: "2020 — 2022",
    description:
      "Built and shipped 3 products from scratch. Collaborated closely with design and product teams in an agile environment.",
    tags: ["Vue.js", "Tailwind CSS", "GraphQL"]
  },
  {
    role: "Junior Developer",
    org: "Digital Agency",
    period: "2018 — 2020",
    description:
      "Developed responsive websites and web applications for various clients across industries.",
    tags: ["JavaScript", "HTML/CSS", "PHP"]
  }
];

const education = [
  {
    title: "M.Sc. Computer Science",
    org: "University of Technology",
    period: "2016 — 2018",
    description: "Focused on distributed systems and web technologies.",
    tags: []
  },
  {
    title: "B.Sc. Computer Science",
    org: "State University",
    period: "2012 — 2016",
    description: "Graduated with honors. Active member of the coding club.",
    tags: []
  }
];

const projects = [
  {
    name: "Minishell",
    description:
      "Unix-like shell that parses user input, handles pipes and redirections, executes built-in and external commands, and manages environment variables and processes similarly to bash.",
    tags: ["C",],
    url: "https://github.com/moonsund/minishell"
  },
  {
    name: "E-commerce Platform",
    description:
      "Modern e-commerce storefront with payment integration, inventory management, and order tracking.",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    url: "https://example.com"
  },
  {
    name: "Weather Dashboard",
    description:
      "Interactive weather dashboard with location search, 7-day forecasts, and beautiful data visualizations.",
    tags: ["TypeScript", "D3.js", "REST API"],
    url: "https://example.com"
  }
];

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"] },
  { category: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "PostgreSQL", "Figma"] },
  { category: "Practices", items: ["Agile / Scrum", "CI/CD", "Testing", "Code Review", "Accessibility"] }
];

const contact = {
  text: "I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!",
  ctaLabel: "Say Hello"
};

/* Icons */
const ICONS = {
  mail: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>`,
  linkedin: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  github: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  external: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 3h7v7"></path>
      <path d="M10 14 21 3"></path>
      <path d="M21 14v7H3V3h7"></path>
    </svg>`
};

function setIcon(id, svg) {
  const node = document.getElementById(id);
  if (node) node.innerHTML = svg;
}

/* DOM helpers */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  }
  for (const child of children) {
    if (typeof child === "string") node.appendChild(document.createTextNode(child));
    else if (child) node.appendChild(child);
  }
  return node;
}

function safeUrl(url) {
  if (!url) return "";
  const u = url.trim();
  return (u.startsWith("https://") || u.startsWith("http://")) ? u : "";
}

/* Navigation: smooth scroll + fixed header offset + active link */
function getHeaderOffset() {
  const header = document.querySelector(".site-header");
  return header ? header.offsetHeight : 0;
}

function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset() - 12;
  window.scrollTo({
    top: y,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
}

function setActiveNav(id) {
  document.querySelectorAll(".nav-link").forEach(a => {
    const active = a.getAttribute("data-target") === id;
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

function renderNav(listEl) {
  listEl.innerHTML = "";
  navItems.forEach(({ id, label }) => {
    const a = el("a", {
      class: "nav-link",
      href: `#${id}`,
      "data-target": id
    }, [label]);
    listEl.appendChild(el("li", {}, [a]));
  });
}

function setupNavHandlers() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.nav-link");
    if (!a) return;
    const id = a.getAttribute("data-target");
    if (!id) return;

    e.preventDefault();
    closeMobileMenu();
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);
  });

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(en => en.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) setActiveNav(visible.target.id);
  }, {
    root: null,
    rootMargin: `-${getHeaderOffset() + 20}px 0px -60% 0px`,
    threshold: [0.15, 0.25, 0.35, 0.5]
  });

  navItems.forEach(n => {
    const sec = document.getElementById(n.id);
    if (sec) observer.observe(sec);
  });

  const initial = (location.hash || "#about").slice(1);
  setActiveNav(navItems.some(n => n.id === initial) ? initial : "about");

  if (location.hash) {
    const id = location.hash.slice(1);
    if (navItems.some(n => n.id === id)) setTimeout(() => scrollToId(id), 0);
  }
}

/* Mobile menu */
const burgerBtn = document.getElementById("burgerBtn");
const mobilePanel = document.getElementById("mobilePanel");

function openMobileMenu() {
  burgerBtn.setAttribute("aria-expanded", "true");
  mobilePanel.setAttribute("aria-hidden", "false");
  burgerBtn.setAttribute("aria-label", "Close menu");
}
function closeMobileMenu() {
  burgerBtn.setAttribute("aria-expanded", "false");
  mobilePanel.setAttribute("aria-hidden", "true");
  burgerBtn.setAttribute("aria-label", "Open menu");
}
function toggleMobileMenu() {
  const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
  expanded ? closeMobileMenu() : openMobileMenu();
}
function setupMobileMenu() {
  burgerBtn.addEventListener("click", toggleMobileMenu);

  document.addEventListener("click", (e) => {
    const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
    if (!expanded) return;
    const within = e.target.closest("#mobilePanel") || e.target.closest("#burgerBtn");
    if (!within) closeMobileMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMobileMenu();
  });
}

/* Render sections */
function applyProfile() {
  document.title = `Portfolio — ${profile.name}`;

  document.getElementById("name").textContent = profile.name;
  document.getElementById("brandName").textContent = profile.name;
  document.getElementById("footerName").textContent = profile.name;
  document.getElementById("headline").textContent = profile.headline;
  document.getElementById("aboutText").textContent = profile.aboutText;

  const photo = document.getElementById("profilePhoto");
  const fallback = document.getElementById("avatarFallback");
  fallback.textContent = profile.initials || "YN";

  if (profile.photoSrc && profile.photoSrc.trim()) {
    photo.src = profile.photoSrc.trim();
    photo.alt = `Portrait of ${profile.name}`;
  } else {
    photo.style.display = "none";
    fallback.style.display = "grid";
  }

  const mail = `mailto:${profile.email}`;
  document.getElementById("emailLink").href = mail;
  // document.getElementById("contactEmail").href = mail;

  const li = safeUrl(profile.linkedin);
  const gh = safeUrl(profile.github);

  document.getElementById("linkedinLink").href = li || "#";
  document.getElementById("githubLink").href = gh || "#";

  // document.getElementById("contactLinkedIn").href = li || "#";
  // document.getElementById("contactGitHub").href = gh || "#";
}

function renderStack(gridId, items, kind) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";

  items.forEach((item) => {
    const leftTitle = (kind === "experience") ? item.role : item.title;
    const top = el("div", { class: "entry-top" }, [
      el("div", {}, [
        el("h3", { class: "entry-title" }, [leftTitle]),
        el("div", { class: "entry-org" }, [item.org])
      ]),
      el("div", { class: "entry-period" }, [item.period])
    ]);

    const desc = el("p", { class: "entry-desc" }, [item.description || ""]);

    const pills = el(
      "div", 
      { class: "pills" }, 
      (item.tags || []).map(tag => el("span", { class: "pill" }, [tag]))
    );

    const cardChildren = [top, desc];
    if ((item.tags || []).length) cardChildren.push(pills);

    grid.appendChild(el("article", { class: "card entry", role: "article" }, cardChildren));
  });
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  projects.forEach((project) => {
    const title = el("h3", { class: "proj-title" }, [project.name]);
    const desc = el("p", { class: "proj-desc" }, [project.description]);

    const pills = el(
      "div", 
      { class: "pills" }, 
      (project.tags || []).map(tag => el("span", { class: "pill" }, [tag]))
    );

    const url = safeUrl(project.url);
    const link = url ? el("a", {
      class: "proj-link",
      href: url,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `View Project: ${project.name}`
    }, [
      "View Project on GitHub ",
      el("span", { class: "icon", "aria-hidden": "true" }, [])
    ]) : null;

    if (link) link.querySelector(".icon").innerHTML = ICONS.external;

    const cardChildren = [title, desc, pills];
    if (link) cardChildren.push(link);

    grid.appendChild(el("article", { class: "card proj", role: "article" }, cardChildren));
  });
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";

  skills.forEach((g) => {
    const title = el("h3", {}, [g.category]);
    const pills = el("div", { class: "skill-pills" }, (g.items || []).map(s => el("span", { class: "skill-pill" }, [s])));
    grid.appendChild(el("div", { class: "skill-group" }, [title, pills]));
  });
}

function applyContact() {
  document.getElementById("contactText").textContent = contact.text;
  document.getElementById("sayHelloBtn").querySelector("span:last-child").textContent = contact.ctaLabel;

  document.getElementById("sayHelloBtn").addEventListener("click", () => {
    window.location.href = `mailto:${profile.email}`;
  });
}

/* Init */
function initIcons() {
  setIcon("iconEmail", ICONS.mail);
  setIcon("iconLinkedIn", ICONS.linkedin);
  setIcon("iconGitHub", ICONS.github);

  // setIcon("iconLinkedIn2", ICONS.linkedin);
  // setIcon("iconGitHub2", ICONS.github);
  // setIcon("iconEmail2", ICONS.mail);

  setIcon("iconMailWhite", ICONS.mail);
  // Ensure the icon inherits white on the CTA button
  document.getElementById("sayHelloBtn").style.color = "#fff";
  const ctaIcon = document.getElementById("sayHelloBtn").querySelector(".icon");
  ctaIcon.style.width = "20px";
  ctaIcon.style.height = "20px";
}

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderNav(document.getElementById("desktopNav"));
  renderNav(document.getElementById("mobileNav"));

  initIcons();
  applyProfile();

  renderStack("experienceGrid", experience, "experience");
  renderStack("educationGrid", education, "education");
  renderProjects();
  renderSkills();
  applyContact();

  setupNavHandlers();
  setupMobileMenu();
}

init();