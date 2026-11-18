/*
 * Portfolio: dados pessoais, tema e alternância PT/EN.
 *
 * O português está escrito direto no HTML, então a página funciona sem JS.
 * Na carga, o texto original de cada [data-i18n] vira o dicionário "pt".
 * O inglês fica em EN, abaixo. Chave nova no HTML precisa de entrada em EN.
 * O teste check_i18n.py reprova a chave que ficar faltando.
 */

/* ===== EDITE AQUI: seus dados ===== */
const CONFIG = {
  name: "José Camacho",
  github: "https://github.com/jvcamacho1",
  linkedin: "https://www.linkedin.com/in/jvcamacho/",
  email: "mailto:contato@jvcamacho.dev",
  cv_pt: "cv/curriculo-pt.pdf",
  cv_en: "cv/resume-en.pdf",
};

const EN = {
  // Navegação e controles
  "nav.about": "About",
  "nav.exp": "Experience",
  "nav.stack": "Stack",
  "nav.contact": "Contact",

  // Hero
  "hero.eyebrow": "Data Engineer",
  "hero.title": "I extract information and build <em>knowledge</em> out of a sea of <span class=\"chaos\" data-text=\"chaotic\">chaotic</span> data.",
  "hero.scroll": "Scroll to bring order",
  "hero.role": "Data Engineer at GFT · AWS, Big Data & Infrastructure as Code",
  "hero.lead": "I design, build, and optimize batch and streaming data pipelines on AWS and Hadoop: from ingestion to the Data Mesh, with Terraform, CI/CD, and automated tests.",
  "hero.cta.exp": "See my experience",
  "hero.cta.cv": "Résumé (PDF)",

  // Números
  "num.1": "AWS accounts democratized to the Data Mesh",
  "num.2": "tables made available to the Data Mesh",
  "num.3": "of processing saved per year",
  "num.3.v": "940 h",
  "num.4": "years working with data",
  "num.4.v": "4+",

  // Sobre
  "about.eyebrow": "About",
  "about.title": "Scalable pipelines, delivered as code",
  "about.p1": "I am a Computer Engineer from UTFPR and have worked with data since 2022. My experience covers designing, implementing, and optimizing data pipelines, with a strong background in Big Data (<strong>Hadoop, PySpark, Hive</strong>) and the AWS ecosystem (<strong>Glue, Athena, S3, Lambda, Step Functions, Kinesis</strong>), as well as relational and non-relational databases.",
  "about.p2": "Today, at GFT, I deploy batch and streaming pipelines with <strong>Terraform and GitHub Actions</strong> and help turn data from dozens of AWS accounts into products in a <strong>Data Mesh</strong>. Before that, at TCS, I migrated legacy routines from SQL Server and SAS to Hadoop and then to AWS Glue.",

  // Experiência
  "exp.eyebrow": "Experience",
  "exp.title": "Where I have worked",
  "exp.gft.role": "Data Engineer · GFT",
  "exp.gft.date": "May 2024 — present",
  "exp.gft.1": "Deployment of <strong>batch and streaming</strong> data pipelines with Terraform and GitHub Actions.",
  "exp.gft.2": "Democratized <strong>60+ AWS accounts</strong> and <strong>200+ tables</strong> of the client into the Data Mesh.",
  "exp.gft.3": "Created a <strong>Terraform template for Glue jobs</strong> that ingests historical data from DynamoDB tables.",
  "exp.gft.4": "Worked with multiple squads to adopt Terraform templates for data democratization in the Data Mesh.",
  "exp.gft.5": "Deployed ingestion pipelines via <strong>Lambda</strong> and snapshots of multiple <strong>RDS</strong> instances.",
  "exp.tcs.role": "Data Engineer · Tata Consultancy Services",
  "exp.tcs.date": "Jul 2022 — Apr 2024 · Londrina",
  "exp.tcs.1": "Migrated routines from <strong>SQL Server 2008 and SAS</strong> to Hadoop (EC2 + EMR), turning transactional procedures into pipelines orchestrated by <strong>Oozie</strong> with ETL in <strong>HiveQL</strong>.",
  "exp.tcs.2": "Migrated on-premises ETL/ELT processes coordinated by Python code to the Hadoop environment on AWS.",
  "exp.tcs.3": "Designed pipelines that compute <strong>10+ KPIs for 7 departments</strong>, previously calculated by hand in Excel.",
  "exp.tcs.4": "<strong>Saved 940 hours/year</strong> of processing by migrating on-premises routines to Hadoop.",
  "exp.tcs.5": "Migrated ETLs from Hive to <strong>AWS Glue with PySpark</strong>.",
  "exp.intern.role": "Intern · Tata Consultancy Services",
  "exp.intern.date": "Mar 2022 — Jun 2022 · Londrina",
  "edu.title": "Education & certifications",
  "edu.degree": "Bachelor's in Computer Engineering",
  "edu.school": "Federal Technological University of Paraná (UTFPR), Cornélio Procópio",
  "edu.award": "3rd place at the XIII Idea Fair (Oct 2019) with the idea \"NoQueue\"",
  "edu.cert2": "AWS Certified Data Engineer – Associate (2026)",
  "edu.cert": "AWS Certified Cloud Practitioner (2023)",
  "edu.courses": "SQL (HackerRank, 2022) · Python (CodinGame, 2022) · Coding Speed: Legend (CodinGame, 2023)",
  "edu.lang": "Languages: Portuguese and English",

  // Stack
  "stack.eyebrow": "Stack",
  "stack.title": "Tools",
  "stack.legend.used": "Used professionally or in production",
  "stack.legend.learning": "Studying / next projects",
  "stack.g.lang": "Languages & processing",
  "stack.g.aws": "AWS",
  "stack.g.storage": "Databases & Big Data",
  "stack.g.ops": "Infrastructure, DevOps & methods",
  "stack.batch": "Batch & streaming ETL",
  "stack.agile": "Scrum / Kanban",

  // Roadmap
  "nav.roadmap": "Next",
  "road.eyebrow": "Next projects",
  "road.title": "What I am building next",
  "road.lead": "My professional code is private, so these public projects show the same kind of work, plus tools I am adding to my stack. Each one will have public code, an architecture diagram, and a README explaining the decisions.",
  "road.badge": "In progress",
  "road.badge.live": "Published",
  "road.2.painel": "See the dashboard",
  "road.cta.repo": "Code",
  "road.dt.problem": "Problem",
  "road.dt.shows": "What it demonstrates",
  "road.1.title": "AWS lakehouse as code",
  "road.1.problem": "Build a bronze/silver/gold lake on S3 with Apache Iceberg tables, queried by Athena and fully provisioned with Terraform.",
  "road.1.shows": "Glue jobs in PySpark, partitioning and compaction, Glue Data Catalog, CI/CD with GitHub Actions, cost control.",
  "road.2.title": "Public-data ELT with Airflow + dbt",
  "road.2.problem": "Consolidate Brazilian economic indicators (Central Bank, IBGE) into an analytical model that updates on its own.",
  "road.2.shows": "Orchestration with retries and backfill, dimensional modeling (staging → marts), dbt tests and docs, incremental loads.",
  "road.3.title": "Bluesky trends in streaming with Kafka",
  "road.3.problem": "Follow in real time what Portuguese-speaking Bluesky is talking about: consume the public post stream (Jetstream), filter by language, and compute trending terms and post volume.",
  "road.3.shows": "Async producer with reconnection and cursor, Kafka in KRaft mode, Avro with Schema Registry and schema evolution, dead-letter topic, integration tests, and CI/CD deploy. Next phases: Flink windows, ClickHouse, and Grafana.",
  "road.3.live": "See it live",

  // Contato
  "contact.eyebrow": "Contact",
  "contact.title": "Get in touch",
  "contact.lead": "Want to talk about data pipelines, AWS, or any of these projects? Reach me by email or LinkedIn.",
  "footer.text": "Static site, no trackers. Source code in the repository.",

};

(function () {
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sem storage: segue sem lembrar */ } },
  };

  // Dados pessoais
  document.querySelectorAll("[data-cfg]").forEach((el) => { el.textContent = CONFIG[el.dataset.cfg]; });
  document.querySelectorAll("[data-cfg-href]").forEach((el) => { el.href = CONFIG[el.dataset.cfgHref]; });

  // Idioma
  const PT = {};
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => { PT[el.dataset.i18n] = el.innerHTML; });
  const dict = { pt: PT, en: EN };

  function setLang(lang) {
    nodes.forEach((el) => {
      const v = dict[lang][el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    root.lang = lang === "en" ? "en" : "pt-BR";
    document.querySelectorAll("[data-cv]").forEach((el) => { el.href = CONFIG[lang === "en" ? "cv_en" : "cv_pt"]; });
    document.querySelectorAll(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const t = document.querySelector("title[data-title-en]");
    if (t) { t.dataset.titlePt = t.dataset.titlePt || t.textContent; t.textContent = lang === "en" ? t.dataset.titleEn : t.dataset.titlePt; }
    store.set("lang", lang);
  }

  const saved = store.get("lang");
  const initial = saved || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");
  document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  setLang(initial);

  // Tema: escuro por padrão; o <head> já aplicou a escolha salva.
  const tbtn = document.getElementById("theme-toggle");
  if (tbtn) tbtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    store.set("theme", root.dataset.theme);
  });

  // A palavra ".chaos" nunca assenta: troca letras por glifos o tempo todo.
  // O texto real fica intacto no HTML; o que pisca é só o atributo data-show.
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const GLYPHS = "01{}[]<>/#%&?!*+=~^:;";
  function scramble() {
    document.querySelectorAll(".chaos").forEach((el) => {
      const chars = (el.dataset.text || el.textContent).split("");
      if (!reduce) for (let i = 0; i < 2; i++) chars[(Math.random() * chars.length) | 0] = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      el.dataset.show = chars.join("");
    });
  }
  scramble();
  if (!reduce) setInterval(scramble, 140);
  document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", scramble));

  // Entrada suave dos blocos ao rolar.
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("main section:not(.hero) .wrap > *, .job, .stat, .stack-group, .road-grid > .card").forEach((el) => {
      const sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty("--d", Math.min(sib, 6) * 70 + "ms");
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
