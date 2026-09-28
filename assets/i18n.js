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
  email: "mailto:jv_camacho@hotmail.com",
  cv_pt: "cv/curriculo-pt.pdf",
  cv_en: "cv/resume-en.pdf",
  orbita_site: "https://orbitanoticias.com.br",
  orbita_repo: "https://github.com/jvcamacho1/orbita",
};

const EN = {
  // Navegação e controles
  "nav.about": "About",
  "nav.exp": "Experience",
  "nav.stack": "Stack",
  "nav.featured": "Project",
  "nav.contact": "Contact",
  "ui.back": "← Back to portfolio",

  // Hero
  "hero.eyebrow": "Data Engineer",
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
  "about.p3": "Outside work I build <strong>Órbita Notícias</strong>, a news pipeline I run in production end to end, from ingestion to serving.",

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

  // Projeto em destaque
  "feat.eyebrow": "Personal project",
  "feat.badge": "Live in production",
  "feat.desc": "News-coverage comparator. It collects headlines from 42 outlets across the political spectrum, detects which ones report <strong>the same event</strong>, and shows side by side how each outlet framed it. I designed, built, and operate it end to end.",
  "feat.s1": "sources ingested",
  "feat.s2": "ingestion interval",
  "feat.s3": "re-clustering interval",
  "feat.v4": "1,130",
  "feat.s4": "automated tests",
  "feat.s5": "comparison window",
  "feat.s6": "precision on labeled corpus",
  "feat.s7": "production server",
  "feat.s8": "GitHub Actions workflows",
  "feat.hl.title": "Data engineering highlights",
  "feat.hl.1": "<strong>Resilient ingestion:</strong> RSS with automatic fallback to news sitemaps when a feed silently freezes; per-source failure log in JSONL; daily feed-health workflow.",
  "feat.hl.2": "<strong>Schema migrations as a command:</strong> versioned, with a lock and a backup before each run; a backfill script rebuilds historical events.",
  "feat.hl.3": "<strong>Pre-computed serving layer:</strong> the heavy step (TF-IDF + clustering) runs only in the worker; the web tier reads a ready cache and keeps serving if the worker dies.",
  "feat.hl.4": "<strong>Measured quality:</strong> 192-headline labeled corpus, pairwise precision/recall/F1, and a test that fails if the metric drops below the baseline.",
  "feat.hl.5": "<strong>CI/CD:</strong> lint, tests, dependency audit, deploy with health check, and automatic rollback.",
  "feat.cta.case": "Read the case study",
  "feat.cta.site": "Visit the site",
  "feat.cta.repo": "Code",

  // Diagrama (compartilhado)
  "pipe.src": "42 outlets",
  "pipe.src.sub": "RSS + sitemap",
  "pipe.ingest": "Ingestion",
  "pipe.ingest.sub": "validate · dedupe",
  "pipe.store": "SQLite",
  "pipe.store.sub": "articles · migrations",
  "pipe.cluster": "Clustering",
  "pipe.cluster.sub": "TF-IDF + rules",
  "pipe.cache": "Cache",
  "pipe.cache.sub": "pre-computed",
  "pipe.serve": "Flask + nginx",
  "pipe.serve.sub": "60 s cache",
  "pipe.every5": "every 5 min",
  "pipe.every15": "every 15 min",

  // Roadmap
  "nav.roadmap": "Next",
  "road.eyebrow": "Next projects",
  "road.title": "What I am building next",
  "road.lead": "My professional code is private, so these public projects show the same kind of work, plus tools I am adding to my stack. Each one will have public code, an architecture diagram, and a README explaining the decisions.",
  "road.badge": "In progress",
  "road.badge.live": "Published",
  "road.2.painel": "See the dashboard",
  "road.dt.problem": "Problem",
  "road.dt.shows": "What it demonstrates",
  "road.1.title": "AWS lakehouse as code",
  "road.1.problem": "Build a bronze/silver/gold lake on S3 with Apache Iceberg tables, queried by Athena and fully provisioned with Terraform.",
  "road.1.shows": "Glue jobs in PySpark, partitioning and compaction, Glue Data Catalog, CI/CD with GitHub Actions, cost control.",
  "road.2.title": "Public-data ELT with Airflow + dbt",
  "road.2.problem": "Consolidate Brazilian economic indicators (Central Bank, IBGE) into an analytical model that updates on its own.",
  "road.2.shows": "Orchestration with retries and backfill, dimensional modeling (staging → marts), dbt tests and docs, incremental loads.",
  "road.3.title": "Streaming events with Kafka",
  "road.3.problem": "Process a real-time event stream (e.g. public transport positions) and trigger alerts for anomalies.",
  "road.3.shows": "Producers/consumers, partitioning, windowed aggregations, at-least-once delivery, and idempotent sinks.",

  // Contato
  "contact.eyebrow": "Contact",
  "contact.title": "Get in touch",
  "contact.lead": "Want to talk about data pipelines, AWS, or any of these projects? Reach me by email or LinkedIn.",
  "footer.text": "Static site, no trackers. Source code in the repository.",

  // Estudo de caso
  "case.eyebrow": "Case study",
  "case.title": "Órbita Notícias: a news pipeline in production",
  "case.lead": "How a news comparator became a small data platform: 42 sources, ingestion every 5 minutes, measured-quality clustering, and a serving layer that survives worker failure. All on a 1 GB VPS.",
  "case.toc.problem": "Problem",
  "case.toc.arch": "Architecture",
  "case.toc.ingest": "Ingestion",
  "case.toc.storage": "Storage",
  "case.toc.proc": "Processing",
  "case.toc.quality": "Quality",
  "case.toc.ops": "Operations",
  "case.toc.learn": "Learnings",

  "case.problem.title": "The problem",
  "case.problem.p1": "Each outlet frames the same event differently, but comparing them means opening dozens of sites. Órbita automates that: it collects every headline, finds the ones about <strong>the same event</strong> within a 48-hour window, and places them side by side, ordered across the editorial spectrum.",
  "case.problem.p2": "From a data point of view, that requires: continuous ingestion from heterogeneous sources that fail without warning, text deduplication and clustering, pre-aggregation for serving, and a way to <em>prove</em> the clustering is right.",

  "case.arch.title": "Architecture",
  "case.arch.p1": "Two cadences, both run by a <code>systemd</code> worker: ingestion every 5 minutes and re-clustering every 15. The web process never computes clustering; it only reads the cache.",
  "case.arch.p2": "The code follows a hexagonal architecture: <code>domain</code> has no knowledge of Flask, SQLite, or spaCy, and a test fails whenever a layer boundary is crossed. Swapping SQLite for PostgreSQL means writing a new adapter, not rewriting rules.",

  "case.ingest.title": "Ingestion",
  "case.ingest.li1": "<strong>Two entry points behind one interface:</strong> the outlet's RSS and, when it freezes without notice, the news sitemap on the same domain.",
  "case.ingest.li2": "<strong>Minimal, controlled schema:</strong> headline, description (up to 240 characters), date, outlet, and link. Never the article body. The outlet's classification comes from configuration, not from the XML.",
  "case.ingest.li3": "<strong>Validation at the edge:</strong> links with a scheme other than http/https are dropped on arrival, which blocks stored XSS from a compromised feed.",
  "case.ingest.li4": "<strong>Observability per source:</strong> every failure goes to <code>feed_failures.jsonl</code> with timestamp, outlet, URL, and error type. A daily GitHub Actions job reports feed health from the server.",

  "case.storage.title": "Storage and migrations",
  "case.storage.p1": "SQLite, chosen deliberately: a single 1 GB server, one writer (the worker), many readers. The database path comes from an environment variable, so the test suite uses a disposable DB and local analysis can open a production snapshot without overwriting anything.",
  "case.storage.p2": "Migrations run as a command (<code>migrar.py</code>), versioned, with a lock and a backup taken before applying. A backfill script (<code>backfill_eventos.py</code>) rebuilds historical events when a rule changes.",

  "case.proc.title": "Processing",
  "case.proc.p1": "Clustering is split into three steps, and that split is the architecture in miniature:",
  "case.proc.li1": "<strong>Text preparation</strong> is a domain rule (the headline weighs more than the summary).",
  "case.proc.li2": "<strong>Similarity</strong> is statistics: TF-IDF + cosine, behind a port. It is the only step that needs numpy/scikit-learn, and it runs only in the worker.",
  "case.proc.li3": "<strong>Deciding what is the same event</strong> is back in the domain: similarity threshold, mutual nearest neighbors, shared proper nouns, and specific rules (e.g. polls from different institutes never merge).",
  "case.proc.p2": "The worker also pre-builds heavy views: packing the bubble chart took 260 ms per request and now costs nothing at serving time.",

  "case.quality.title": "Data quality",
  "case.quality.p1": "Threshold tuning used to be checked by eye. To answer \"did this fix break something else?\", I built a <strong>labeled corpus</strong>: all 192 headlines published in a 30-minute window (43 grouped into 15 events, 149 singletons), with a written labeling rule.",
  "case.quality.p2": "The evaluation is <strong>pairwise</strong> precision/recall/F1, so the singletons do not dominate the score. <code>test_corpus.py</code> fails if the metric drops below the recorded baseline.",
  "case.quality.th.threshold": "threshold",
  "case.quality.prod": "(production)",
  "case.quality.p3": "The F1 score would be higher at 0.35, and that alone is not a reason to change. The production threshold was set to prevent a known, costly false merge that is not in this corpus. Choosing a metric means knowing what it cannot see.",

  "case.ops.title": "Operations",
  "case.ops.li1": "<strong>Graceful degradation:</strong> if the worker dies, the site keeps serving the previous cache; after 45 minutes the web process recomputes on its own.",
  "case.ops.li2": "<strong>Serving:</strong> nginx caches responses for 60 s with stale-while-revalidate and compression; static assets are fingerprinted with a one-year cache.",
  "case.ops.li3": "<strong>CI/CD:</strong> feature → develop → release → main flow with GitHub Actions: lint, 1,130 tests, dependency audit, deploy over SSH, a health check that also verifies the worker, and automatic rollback.",

  "case.learn.title": "Learnings and next steps",
  "case.learn.li1": "A labeled evaluation set is worth more than any intuition about thresholds, and it caught mistakes in my own labels.",
  "case.learn.li2": "Pre-computing in the worker was the biggest performance gain, and it also isolated failures.",
  "case.learn.li3": "Next: move storage to PostgreSQL, orchestrate the cadences with Airflow (retries, backfill, lineage), and export the history to Parquet for analysis.",
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

  // Tema
  const savedTheme = store.get("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  const tbtn = document.getElementById("theme-toggle");
  if (tbtn) tbtn.addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
