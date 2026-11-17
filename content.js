// Edit this file to change what the site says.
// Rule of thumb: every claim here should be backed by your resume. Add numbers only when they are real.
// Lines marked TODO are things I don't have on file: fill them in or delete them.
window.CONTENT = {
  name: "Nathamayil Natesh",
  role: "Software Engineer · Java · AI & Security",
  tagline: "I build secure Java and Spring Boot payment systems, and the AI agents and retrieval tools that help engineering teams move faster.",
  location: "India",
  timeZone: "Asia/Kolkata", // must be an IANA time zone name, or the clock crashes the page
  // Job-search details show only to visitors who arrive through a personal ?ref= link.
  // Everyone else, including colleagues and search engines, sees `status`.
  availability: "Open to software engineering roles in AI and cybersecurity",
  status: "Software Engineer, Payment Processing Infrastructure · Chennai, India",
  email: "nathamayilnatesh@gmail.com", // your public email
  photo: "photo.jpg",
  cv: null, // e.g. "Nathamayil-CV.pdf": set a file name to show Download CV buttons

  // Visitor analytics (cookieless, via GoatCounter). Use YOUR code, not the previous owner's. null = no analytics.
  goatcounter: null,
  links: [
    { label: "GitHub", url: "https://github.com/nathamayil" },
  { label: "LinkedIn", url: "https://in.linkedin.com/in/nathamayil-natesh" },
  ],

  // Job-search line on the hero card (personal ?ref= links only).
  heroOpen: "Open to new roles · AI security & backend engineering",

  // Shown on the hero card.
  years: "3+",

  // About. **double asterisks** mark phrases highlighted in the lede.
  about: {
    lede: "I'm a software engineer with about three years at **Bank of America GBS** in Chennai, working on **backend Java and Spring Boot payment processing infrastructure**. Alongside that I contribute to **patent filings**, help bring **AI tooling** into everyday engineering work, and build projects at the edge of **AI, security and art**. I also hold **ISC2 and Google Cybersecurity certifications**.",
  },
  facts: [
    { k: "Based in", v: "India", icon: "pin", clock: true },
    // TODO: add a Languages fact if you want one.
    { k: "Education", v: "B.Tech, Computer Science and Engineering", sub: "VIT Chennai", icon: "cap" },
  ],

  // How I work: principles, each tied to something I actually do.
  principles: [
    { title: "Say only what I can defend.", desc: "My resume and this site claim what I can explain in depth. If I haven't done it, it isn't listed." },
    { title: "Security is part of the build.", desc: "Detection, validation and abuse cases belong in the design from the first sketch, not in a review at the end." },
    { title: "Tools should save people time.", desc: "I write prompts, agents and hooks that fit into how engineers already work, and I clean up after them (like stripping agent comments before a commit)." },
    { title: "Design is part of engineering.", desc: "Years of client design work taught me to listen first, scope clearly and deliver something people actually use." },
  ],

  // Projects, anonymised where they touch employer work. No client names, no internal numbers.
  caseStudies: [
        {
      title: "Enterprise RAG assistant for engineering knowledge and incident RCA",
      context: "Internal tooling · AI-assisted engineering",
      myRole: "Sole Python developer",
      challenge: "Answers about our systems were scattered across Confluence, Bitbucket, Jira, Splunk and incident history, so developers, support teams and new hires lost time searching five tools by hand. Ungrounded LLM answers also risked hallucination.",
      approach: "Built a RAG agent on a FastAPI backend that retrieves ranked, cited evidence from a vector index of about 5,000 chunks, so every answer is grounded in sources. One source-aware retrieval layer sits across all five tools. For incident root cause analysis, the agent correlates incident history, code context and live Splunk logs, with retrieval narrowed to relevant keywords to keep cost and latency low. It is exposed through custom skills in GitHub Copilot and VS Code, so people use it inside their existing workflow.",
      result: "A single query replaces manual searching across five tools. Validated against real-time defects with QA, and used by developers, support teams and new hires.",
      metrics: ["~5,000 chunks indexed", "5 sources, one query"],
      stack: ["Python", "FastAPI", "RAG", "Splunk", "GitHub Copilot", "VS Code"],
    },
    {
      title: "Art Provenance Ledger",
      context: "Personal project · AI × art",
      myRole: "Sole builder",
      challenge: "Tracing where an artwork came from, and how similar works relate, is hard to do by eye.",
      approach: "Built a full-stack system: a FastAPI backend, CLIP image embeddings indexed with FAISS (HNSW) for similarity search, a Neo4j graph of provenance, and a React force-graph frontend. Deployed on Vercel, Render and Neo4j Aura.",
      result: "Running end to end with 500 artworks seeded. Moved to a smaller CLIP model to fit the free hosting memory limits.",
      metrics: ["500 artworks seeded"],
      stack: ["FastAPI", "Neo4j", "CLIP", "FAISS", "React"],
    },
    {
      title: "Patent work in fintech",
      context: "Bank of America GBS · Innovation",
      myRole: "Contributor",
      challenge: "Finding technical ground in fintech that few others have patented.",
      approach: "Took part in a structured patent landscape analysis, then produced a five-layer system architecture and a full claim set for one invention, written in a company-agnostic way that references only open standards (RFC 7519, ISO 20022, W3C VC Data Model 2.0).",
      result: "Contributes to patent filings at the bank.",
      metrics: [],
      stack: ["Patents", "System design", "Open standards"],
    },
  ],

  // A starting plan, not a template. TODO: adjust to the role you are applying for.
  first90: {
    title: "My first 90 days on your team.",
    intro: "How I would start. The specifics come from your team, not from a template.",
    phases: [
      { when: "Days 1–30", title: "Listen and learn", points: [
        "Learn the codebase, the deployment path and the on-call history before proposing changes.",
        "Pair with teammates to understand how decisions get made and where work gets stuck.",
        "Ship well-tested fixes to learn the review and release process.",
      ] },
      { when: "Days 31–60", title: "Own something small", points: [
        "Take a well-scoped feature or improvement from design to production.",
        "Add tests or tooling that remove a repeated pain for the team.",
        "Write down what I learned so the next new joiner starts faster.",
      ] },
      { when: "Days 61–90", title: "Raise the bar", points: [
        "Propose one improvement to reliability, security or developer experience, with trade-offs stated.",
        "Bring in the AI tooling and security habits that fit the team, and drop what does not.",
        "Share knowledge through a short internal talk or documentations.",
      ] },
    ],
  },

  // Internal work and activities. TODO: confirm titles and venues before publishing.
  workshops: [
    { type: "Internal tooling", icon: "layers", title: "Enterprise RAG assistant for engineering knowledge and incident RCA",
      where: "Bank of America GBS",
      desc: "Architected and built a retrieval-augmented assistant that answers from Confluence, Bitbucket, Jira, Splunk and incident history, with cited sources, and exposed it inside GitHub Copilot and VS Code.",
      tags: ["RAG", "FastAPI", "GitHub Copilot", "VS Code"] },
    { type: "Internal tooling", icon: "terminal", title: "Agent that validates 3,000+ line API payload responses in Splunk",
      where: "Bank of America GBS",
      desc: "An agent that checks very large API payload responses in Splunk, reducing 500+ hours and review of thousands of lines.",
      tags: ["Agents", "Splunk", "API validation"] },
    { type: "Internal tooling", icon: "layers", title: "Agent that writes release and feature documentation from PRs",
      where: "Bank of America GBS",
      desc: "An agent that reads the pull requests and commit history in Bitbucket, drafts release and code feature documentation, and publishes it to Confluence.",
      tags: ["Agents", "Bitbucket", "Confluence"] },
    { type: "Risk management & governance", icon: "layers", title: "Enterprise risk, access and compliance",
      where: "Bank of America GBS",
      desc: "Author articles for the enterprise risk newsletter, evaluate and manage role access so permissions match each person's work, and keep applications compliant with governance requirements.",
      tags: ["Risk", "Access control", "Governance", "Compliance"] },
    { type: "Sessions", icon: "mic", title: "Prompt engineering sessions",
      where: "Bank of America GBS",
      desc: "Sessions on writing reliable prompts for coding assistants and agents, drawing on the tools above.",
      tags: ["Prompt engineering", "Copilot", "Agents"] },
    { type: "Competition", icon: "mic", title: "Capture the flag competitions",
      where: "Target, Amazon, Women in Cybersecurity, and internal events at work",
      desc: "Reached Tier 4 in the Women in Cybersecurity(WiCyS) Security Training Scholarship 2024, took part in CTFs run by Target and Amazon, and have won CTFs at work.",
      tags: ["CTF", "Security"] },
  ],

  // Recommendations, with each person's permission. The block stays hidden while empty.
  testimonials: [],

  // Experience. Every line should map to a bullet on your resume.
  experience: [
    {
      role: "Software Engineer 1A",
      company: "Bank of America - GBS",
      period: "About 3 years · Present", // TODO: add your start month and year
      meta: "Chennai · Payment processing infrastructure",
      summary: "Backend engineer on payment processing infrastructure, also contributing to patent filings and AI tooling adoption.",
      stack: ["Java", "Spring Boot", "SQL", "Splunk", "Git", "Ansible", "Jenkins","Postman", "GitHub Copilot", "IntelliJ IDEA"],
      themes: [
        { title: "Backend engineering", points: [
          "Build and scale secure Java and Spring Boot microservices for high-volume payment platforms, keeping PII compliance through OAuth2 and proactive vulnerability remediation.",
          "Contribute to JDK migrations (8 → 17 → 21) and to decoupling a monolith into services, lowering infrastructure and processing costs while improving transaction throughput and resilience.",
        ] },
        { title: "AI tooling & automation", points: [
          "Drove adoption of GitHub Copilot, M365 Copilot and Copilot Studio across the SDLC by designing prompt strategies and building LLM-based agents for onboarding, code documentation and access auto-regulation, reducing manual effort by 60% and reclaiming 30 hours a week across the team.",
          "Automated SonarQube code reviews and remediation end to end with custom AI agents, lifting code quality compliance to 90% and cutting manual review time by 50%.",
        ] },
        { title: "Patents & Innovation", points: [
          "Contributed to USPTO patent filings; architecting systems covering Business Intelligence, modernized loan-preprocessing and session playback systems.",
          "Took part in a fintech patent landscape analysis and produced a five-layer architecture and full claim set for novel inventions.",    ] },
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "BoxFile Web Services",
      period: "December 2022 – February 2023",
      meta: "Remote · Financial audit application",
      summary: "Built the front-end components for a financial audit application.",
      stack: ["Angular", "Angular Material"],
      points: [
        "Developed responsive Angular Material components for a financial audit application, improving UI performance across core platform workflows.",
      ],
    },
    {
      role: "Summer Intern, Software Engineer Programme (SEP)",
      company: "JP Morgan Chase & Co.",
      period: "June 2022 – July 2022",
      meta: "Bengaluru · Consumer and Investment Banking",
      summary: "Built and deployed the containerised cloud infrastructure that Spring Boot applications run on.",
      stack: ["AWS EKS", "Kubernetes", "Docker", "Terraform", "Spring Boot"],
      points: [
        "Built and deployed containerised cloud infrastructure for Spring Boot applications using AWS EKS, Kubernetes, Docker and Terraform, within the Consumer and Investment Banking space.",
      ],
    },
  ],

  // Skills. `roles` = where each capability was used; "since" is derived from the earliest of those roles.
  // TODO: year values below are estimates from "about 3 years": check them.
   roles: [
    { key: "bofa", name: "Bank of America GBS", year: 2023 },
    { key: "bfx", name: "BoxFile Web Services", year: 2022 },
    { key: "jpm", name: "JP Morgan Chase", year: 2022 },
    { key: "proj", name: "Personal projects", year: 2026 },
  ],
  capabilities: [
    { id: "java", name: "Backend engineering", tools: "Java · Spring Boot · Microservices · JDK 8 → 17 → 21 · OAuth2", roles: ["bofa", "jpm", "proj"],
      evidence: "Secure, high-volume payment microservices at Bank of America, including JDK migrations and a monolith decoupling that cut costs and improved throughput." },
    { id: "agents", name: "AI agents & tooling adoption", tools: "GitHub Copilot · M365 Copilot · Copilot Studio · prompt engineering · LLM agents", roles: ["bofa"],
      evidence: "Drove Copilot adoption across the SDLC and built agents for onboarding, documentation, SonarQube remediation and access auto-regulation, with prompt engineering sessions for the team." },
    { id: "rag", name: "RAG & applied AI", tools: "Python · FastAPI · RAG · vector search · CLIP · FAISS", roles: ["bofa", "proj"],
      evidence: "Architected an enterprise RAG assistant over Confluence, Bitbucket, Jira and Splunk; built an image-similarity and provenance system in Art Provenance Ledger." },
    { id: "sec", name: "Security, risk & governance", tools: "OAuth2 · PII compliance · vulnerability remediation · access reviews · prompt injection detection · ISC2 · Google Cybersecurity", roles: ["bofa", "proj"],
      evidence: "Role access evaluation, application governance compliance and risk newsletter articles at work; an LLM security gateway in progress; Tier 4 in the Women in Cybersecurity scholarship and CTF wins." },
    { id: "cloud", name: "Cloud & containers", tools: "AWS EKS · Kubernetes · Docker · Terraform", roles: ["jpm"],
      evidence: "Built and deployed containerised cloud infrastructure for Spring Boot applications during the JP Morgan Chase internship." },
    { id: "quality", name: "Code quality & engineering tooling", tools: "SonarQube · Bitbucket · Confluence · Jira · Splunk · Git hooks", roles: ["bofa"],
      evidence: "SonarQube review and remediation agents, a Splunk payload validation agent, and release documentation published to Confluence from Bitbucket history." },
    { id: "data", name: "Graph & vector stores", tools: "Neo4j · FAISS", roles: ["proj"],
      evidence: "Neo4j provenance graph and FAISS similarity index with 500 seeded artworks." },
    { id: "frontend", name: "Frontend", tools: "React · Angular Material", roles: ["bfx", "proj"],
      evidence: "Responsive Angular Material components for a financial audit application; React dashboards in personal projects." },
  ],

  // Certifications. TODO: add the exact names and years from your certificates.
  certifications: [
    { group: "Security", items: [
      { issuer: "ISC2", name: "Certified in Cybersecurity", short: "ISC2", tier: "Certified" },
      { issuer: "Google", name: "Google Cybersecurity Certificate", short: "Cybersecurity", tier: "Certificate" },
      { issuer: "Cisco", name: "Cisco Certified Cybersecurity Technician", short: "Cybersecurity", tier: "Certificate" },
      { issuer: "IBM", name: "DevOps Fundamentals", short: "DevOps", tier: "Certificate" },
    ] },
    { group: "DevOps", items: [
      { issuer: "IBM", name: "DevOps Fundamentals", short: "DevOps", tier: "Certificate" },
    ] },
    { group: "Languages", items: [
      { issuer: "Ministère de l'Éducation Nationale", name: "DELF A1", short: "French", tier: "Certificate" },
      { issuer: "Ministère de l'Éducation Nationale", name: "DELF A2", short: "French", tier: "Certificate" },
    ] },
  ],

  // Course completions and programmes: listed as learning, not as certifications.
  learning: [
    { issuer: "McKinsey", name: "McKinsey Forward Program", year: 2026 }, 
  ],

  // Not part of the original template: add a block in the site to render this.
  publications: [
    { name: "Learning Analytics: Game-based Learning for Programming Course in Higher Education - Elsevier - Procedia Computer Science (Shortlisted for WEEF 2019)  Jan 2020 · Jan 1, 2020", note: "64 citations" }, // TODO: add the exact title
  ],
};