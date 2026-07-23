export interface Fact {
  label: string;
  value: string;
}

export interface SidebarGroup {
  label: string;
  primary: string;
  secondary?: string;
}

export interface CourseSection {
  heading: string;
  lead?: string;
  body?: string[];
  items?: { title: string; body?: string }[];
  numbered?: boolean;
}

export interface OutlineItem {
  title: string;
  /** Sequence label ("Phase 1 of 3 — Spark") shown above the title, so order is obvious. */
  step?: string;
  meta?: string;
  body?: string;
  /** Optional module/detail list shown when the outline row is expanded. */
  points?: string[];
  /** Key subjects, shown as chips on the closed row so the content is legible at a glance. */
  topics?: string[];
}

export interface IntegrationItem {
  title: string;
  centre: string;
  body?: string;
}

export interface AdmissionTab {
  label: string;
  intro?: string;
  items: { title: string; body: string }[];
}

export interface FinderMeta {
  categoryLabel: string;
  ages: string;
  level: "Introductory" | "Intermediate" | "Advanced" | "All levels";
  duration: string;
  format: string;
  status: "Register interest" | "In development";
}

export interface Course {
  slug: string;
  kind: "category" | "programme";
  parent?: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  tagline: string;
  intro: string[];
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  status?: string;
  /** Right-hand facts panel in the course hero. */
  sidebar?: SidebarGroup[];
  facts?: Fact[];
  /** "Educational objectives" — boxed intro + bulleted outcomes. */
  objectives?: { heading?: string; intro?: string; items: string[] };
  /** Programme outline — accordion of phases/stages/sessions. */
  outline?: { heading?: string; badges?: string[]; items: OutlineItem[] };
  /** Hub-and-spoke interdisciplinary integration across the ten centres. */
  integration?: { heading?: string; intro: string; items: IntegrationItem[] };
  /** Tabbed admission / enrolment information. */
  admission?: { heading?: string; tabs: AdmissionTab[] };
  /** Highlighted policy callout. */
  policy?: { title: string; body: string[] };
  learn?: { heading: string; intro?: string; items: string[] };
  sections?: CourseSection[];
  finder?: FinderMeta;
  cta: { heading: string; body: string; label: string };
  children?: string[];
}

export const courses: Course[] = [
  /* ------------------------------------------------ Artificial Intelligence */
  {
    slug: "artificial-intelligence",
    kind: "category",
    title: "Artificial Intelligence",
    shortTitle: "Artificial Intelligence",
    eyebrow: "Artificial Intelligence",
    tagline: "Learn how intelligent systems work — and how to build them responsibly.",
    intro: [
      "Artificial intelligence is more than a collection of tools. Meaningful AI education requires students to understand data, code, models, uncertainty, human needs and the consequences of technical decisions.",
      "Students begin with foundations, progress through data science and machine learning, then choose an application pathway and develop a working prototype. Communication, entrepreneurship and ethics continue throughout so technical capability grows alongside judgement.",
    ],
    seoTitle: "AI Programme for School Students in Sri Lanka | Ananda COE",
    metaDescription:
      "Explore a two-year AI pathway in Python, data, machine learning, responsible AI, industry applications and capstone development.",
    keywords: [
      "AI programme for school students Sri Lanka",
      "artificial intelligence course Sri Lanka",
      "machine learning for students",
      "Python course for school students",
      "AI course Colombo",
    ],
    image: "/images/centre-ai.jpg",
    imageAlt: "Student studying a data visualisation in the Artificial Intelligence Centre",
    cta: {
      heading: "Explore the programme",
      body: "The Artificial Intelligence Innovation Programme is a selective, two-year pathway planned for students after O/L examinations.",
      label: "View the AI Innovation Programme",
    },
    children: ["ai-innovation-programme"],
  },
  {
    slug: "ai-innovation-programme",
    kind: "programme",
    parent: "artificial-intelligence",
    title: "Artificial Intelligence Innovation Programme",
    shortTitle: "AI Innovation Programme",
    eyebrow: "Post-O/L curriculum",
    tagline:
      "A selective, two-year flagship programme bridging secondary education, industry-grade AI practice and venture creation. Transition from a consumer of technology to a creator.",
    intro: [
      "Build a grounded understanding of artificial intelligence through code, mathematics, experimentation and responsible design. Across four terms, students develop from foundational learners into teams capable of defining a problem, testing a model and presenting a working prototype.",
      "The programme combines independent online learning with a weekly physical laboratory, moving from Python and mathematical foundations to machine learning, specialised applications and a team capstone. Communication, entrepreneurship and ethics continue throughout so technical capability grows alongside judgement.",
    ],
    seoTitle: "AI Innovation Programme After O/L | Ananda College COE",
    metaDescription:
      "A selective two-year blended AI programme after O/L covering Python, machine learning, deep learning, responsible AI and a capstone.",
    keywords: [
      "AI course after O/L Sri Lanka",
      "Python and machine learning course Sri Lanka",
      "AI course for students Colombo",
      "deep learning for students",
    ],
    image: "/images/centre-ai.jpg",
    imageAlt: "Student at work in the Artificial Intelligence Centre",
    status: "Register your interest",
    sidebar: [
      {
        label: "Duration & schedule",
        primary: "Two years · four terms",
        secondary:
          "Blended: one 3-hour weekly physical laboratory plus 2–3 hours of online theory",
      },
      {
        label: "Tuition & funding",
        primary: "Proposed as a fully funded programme",
        secondary: "Supported via technology alliances and sponsorships",
      },
      {
        label: "Annual intake",
        primary: "Selective cohort — 50+ AI innovators a year",
        secondary: "Based on a standardised aptitude assessment; final process to be confirmed",
      },
      {
        label: "Curriculum",
        primary: "Written by Dr Chulaka Gunasekara",
        secondary:
          "Senior Research Scientist, IBM Watson. Reviewed annually by a panel of enterprise partners and industry leaders",
      },
    ],
    objectives: {
      heading: "Educational objectives",
      intro:
        "The primary objective is to cultivate skills for an AI future. The curriculum directly addresses the global talent supply-demand imbalance by producing well-prepared, industry-ready young AI innovators.",
      items: [
        "Transition from a consumer of technology to a creator by mastering AI, machine learning and data science.",
        "Develop specialised domain knowledge across fields such as healthcare, finance, agriculture and smart manufacturing.",
        "Transform technical capstone projects into viable startup concepts through the Spark, Build, Launch journey.",
        "Integrate technical coding with design thinking, business strategy and statistical analysis.",
        "Actively identify and mitigate algorithmic bias to build fair, inclusive and ethical technology.",
        "Train deep-learning architectures, work with language-model tools and explore organised AI workflows.",
      ],
    },
    outline: {
      heading: "Programme outline",
      badges: ["Three phases across four terms", "Project-based learning", "Facilitation over lecturing"],
      items: [
        {
          title: "Python, mathematics and the AI landscape",
          step: "Phase 1 of 3 — Spark",
          meta: "Year 1, Term 1",
          topics: [
            "AI foundations",
            "Python",
            "Maths for machine learning",
            "Design thinking",
            "Communication",
            "Prompting & APIs",
          ],
          body: "Twelve weeks establishing the language of AI while introducing the human-centred 'spoke' skills alongside it. Laboratories introduce prompting, application programming interfaces and small experiments.",
          points: [
            "AI Foundations — what AI is and is not, key milestones, and the data-to-model-to-deployment pipeline.",
            "Python Programming for AI I — Python, Jupyter, NumPy, pandas, plotting, files, APIs and basic SQL.",
            "Mathematics for Machine Learning I — vectors, matrices, functions, gradients, and probability for intuition.",
            "Introduction to Design Thinking — understanding user needs, generating ideas and testing solutions with empathy.",
            "Communication I — building confidence in speaking and writing, up to a short talk on AI's impact on society.",
            "Labs — the AI playground, prompting basics, and a first Python application calling a language-model API.",
          ],
        },
        {
          title: "Data science and classical machine learning",
          step: "Phase 2 of 3 — Build",
          meta: "Year 1, Term 2",
          topics: [
            "pandas & scikit-learn",
            "Probability & statistics",
            "Regression & clustering",
            "Neural network basics",
            "PyTorch",
            "Entrepreneurship",
          ],
          body: "Students deepen their work in Python and data science while entrepreneurship enters the curriculum. Laboratories move through structured data practice and the first machine-learning models, building the habits of careful experimentation.",
          points: [
            "Python Programming for AI II — pandas, NumPy, Matplotlib and scikit-learn for real data analysis.",
            "Mathematics for Machine Learning II — distributions, mean and variance, and correlation.",
            "Classical Machine Learning and Neural Networks — supervised and unsupervised learning, regression, clustering, and the basics of neurons, layers, training and overfitting.",
            "Communication II — explaining data and technical concepts to both technical and non-technical audiences.",
            "Entrepreneurship I — entrepreneurial mindset, opportunity identification, business models and value propositions.",
            "Labs — sentiment analysis comparing classical ML against language models, a mini retrieval-augmented QA system, and a first PyTorch network.",
          ],
        },
        {
          title: "Deep learning, AI workflows and ethics",
          step: "Phase 2 of 3 — Build",
          meta: "Year 2, Term 1",
          topics: [
            "Computer vision",
            "Natural language processing",
            "Transformers & LLMs",
            "MLOps",
            "Ethical AI",
            "AI agents",
          ],
          body: "The second term of the Build phase advances into deep learning and the operational practices that make models usable. Ethics is taught as a discipline in its own right rather than a closing caveat.",
          points: [
            "Deep Learning for Computer Vision — convolutional architectures and vision applications.",
            "Deep Learning for NLP — sequence models, transformers and large language models.",
            "DevOps, DataOps and MLOps — automating workflows, deploying models, and ensuring reproducibility, monitoring and governance.",
            "Entrepreneurship II — customer discovery, advanced business models, funding and growth.",
            "Ethical AI — risk, fairness, accountability and global governance approaches.",
            "Labs — prompt engineering, tool calling, multimodal captioning, and deploying a first multi-step agent.",
          ],
        },
        {
          title: "Industry specialisation and the team capstone",
          step: "Phase 3 of 3 — Launch",
          meta: "Year 2, Term 2",
          topics: [
            "Industry pathway",
            "12-week capstone",
            "Model cards",
            "Ethical red-teaming",
            "Startup pitch",
            "Portfolio",
          ],
          body: "Students select an application pathway and work in teams of three or four with industry sponsors. Over a twelve-week capstone — proposal and stakeholder interviews, iterative prototyping with weekly mentor reviews, testing and ethical red-teaming, then pitch preparation — each team builds towards Industry Showcase Day.",
          points: [
            "Deliverable: a working prototype, deployed locally or in the cloud.",
            "Deliverable: a model card documenting bias, limitations and metrics.",
            "Deliverable: an ethical impact report outlining risks and mitigations.",
            "Deliverable: a final pitch deck and demo to an industry audience.",
            "Communication III — portfolio building, technical blogging, resume writing and mock interviews.",
            "Entrepreneurship III — funding models, financial projections, go-to-market strategy and a demo-day pitch.",
            "Labs — fine-tuning open language models with LoRA and QLoRA, multi-agent collaboration, and MCP tool integration.",
          ],
        },
      ],
    },
    integration: {
      heading: "Interdisciplinary integration",
      intro:
        "Great AI solutions don't succeed in a vacuum: coding is only half the journey. The Artificial Intelligence Centre serves as the core technical engine, while students collaborate with specialised facilities across the Centre of Excellence to transform raw code into an impactful, human-centred product.",
      items: [
        {
          title: "Creative AI & experience design",
          centre: "Fine Arts Centre",
          body: "Interface design, visual identity and user experience for AI products.",
        },
        {
          title: "Tech leadership & scientific communication",
          centre: "Language Lab & Auditorium",
          body: "Explaining technical work clearly to real audiences: on paper and on stage.",
        },
        {
          title: "AI venture architecture & startup operations",
          centre: "Entrepreneur Business Skills Centre",
          body: "User need, enterprise case and responsible value creation around each solution.",
        },
        {
          title: "Smart systems & hardware automation",
          centre: "STEAM Hub",
          body: "Sensors, physical computing and embedded intelligence for working prototypes.",
        },
        {
          title: "Digital media & cognitive marketing",
          centre: "Media Studio",
          body: "Documenting, presenting and publishing project work with editorial care.",
        },
      ],
    },
    learn: {
      heading: "What students will learn",
      intro: "Students will learn to:",
      items: [
        "write and debug Python programs",
        "work with data, probability and statistics",
        "understand classical machine-learning and neural-network approaches",
        "design, train, test and evaluate models",
        "explore computer vision, natural-language processing and language-model tools",
        "identify bias, privacy, safety and social-impact questions",
        "communicate technical ideas clearly",
        "examine the user need and enterprise case around a solution",
        "document and present a responsible prototype",
      ],
    },
    sections: [
      {
        heading: "Proposed application pathways",
        lead: "In Phase 3, students specialise in domains aligned with their interests and with Sri Lanka's industry needs, then build a capstone within that field.",
        items: [
          {
            title: "Healthcare AI",
            body: "Diagnosis support, patient triage, hospital operations and medical imaging, with a strong emphasis on privacy and fairness in health data.",
          },
          {
            title: "Finance and insurance AI",
            body: "Fraud detection, credit risk, forecasting and insurance claims — including the ethics of bias in credit scoring and lending.",
          },
          {
            title: "Smart manufacturing and tourism AI",
            body: "Quality control, anomaly detection and demand forecasting for local industry, plus recommendation engines for tourism and hospitality.",
          },
          {
            title: "Logistics and supply chain AI",
            body: "Demand forecasting, route optimisation and inventory planning, applied to apparel exports, ports, e-commerce and retail.",
          },
          {
            title: "Cybersecurity and surveillance AI",
            body: "Video analytics, intrusion detection and digital threat detection — alongside the ethical and privacy trade-offs of surveillance.",
          },
          {
            title: "Retail and marketing AI",
            body: "Recommender systems, customer segmentation and generative AI for campaigns, balanced against cultural sensitivity in advertising.",
          },
        ],
      },
      {
        heading: "How the Centre teaches",
        lead: "The guiding philosophy is to guide, not just to teach — a deliberate shift away from rote instruction.",
        items: [
          {
            title: "Facilitation over lecturing",
            body: "Industry-experienced instructors act as technical mentors and product guides. Their role is not to deliver content that is already available online, but to unblock students, challenge design decisions and build resilience in problem-solving.",
          },
          {
            title: "A Debug Squad",
            body: "Computer science undergraduates support hands-on laboratory work, so students are rarely stuck for long.",
          },
          {
            title: "Inquiry-based learning",
            body: "Students are encouraged to ask the AI or read the documentation first, cultivating the self-reliance a modern engineering environment demands.",
          },
          {
            title: "Blended delivery",
            body: "Theory is studied online through curated world-class content; physical laboratory sessions are dedicated entirely to building — coding, debugging and prototyping.",
          },
          {
            title: "Industry-led workshops",
            body: "Visiting experts and alumni run exclusive sessions, from startup journeys to niche topics outside the standard curriculum such as generative art or AI in sport.",
          },
        ],
      },
      {
        heading: "Partnerships and resources",
        lead: "The curriculum is a living document, reviewed annually so every module uses a current tech stack.",
        items: [
          {
            title: "Global technology alliances",
            body: "Collaboration with global technology leaders including IBM, Google and Microsoft, giving students access to enterprise-grade tools and cloud platforms.",
          },
          {
            title: "Local industry council",
            body: "Sri Lankan industry leaders help co-create a curriculum that reflects local market needs alongside global trends.",
          },
          {
            title: "Student software access",
            body: "Global education grants are used to provide free access to the GitHub Student Developer Pack, Microsoft Azure and Google Cloud credits for model training, and Hugging Face repositories.",
          },
          {
            title: "Infrastructure",
            body: "Dedicated laptops, high-speed connectivity for cloud training, a learning management system with curated study material, and a modular collaborative space for group projects.",
          },
          {
            title: "Competitions",
            body: "An elite squad is trained to represent the College in local and global hackathons such as APICTA and the Microsoft Imagine Cup.",
          },
          {
            title: "Career pathways",
            body: "Top performers are offered internships with partner technology firms and, potentially, university sponsorships.",
          },
        ],
      },
    ],
    admission: {
      heading: "Admission & enrolment",
      tabs: [
        {
          label: "Entry requirements",
          items: [
            {
              title: "Academic standing",
              body: "Applicants should be post-O/L secondary school students demonstrating academic maturity.",
            },
            {
              title: "Standardised assessment",
              body: "Admission is planned to require a selective evaluation testing logic and pattern recognition, algorithmic thinking and creative problem solving. The final process is to be confirmed.",
            },
            {
              title: "Technical baseline",
              body: "Basic, baseline coding capability is highly recommended before entry.",
            },
            {
              title: "Demonstrated interest",
              body: "Active prior participation in school computing activities — or demonstrable enthusiasm for the field — strengthens an application.",
            },
          ],
        },
        {
          label: "Application process",
          items: [
            {
              title: "Register interest",
              body: "Families register to receive confirmed information about eligibility, assessment, dates, fees, faculty and places.",
            },
            {
              title: "Selective assessment",
              body: "Candidates sit the standardised aptitude assessment once the intake process is approved and announced.",
            },
            {
              title: "Confirmation & enrolment",
              body: "Successful candidates receive enrolment details, the laboratory schedule and the online learning plan for Term 1.",
            },
          ],
        },
        {
          label: "Assessment & portfolio",
          items: [
            {
              title: "Continuous assessment",
              body: "Progress is demonstrated through weekly coding challenges, continuous assignments, practical tests and sprint reviews.",
            },
            {
              title: "Digital portfolio",
              body: "Every student builds a digital portfolio evidencing how they think, collaborate and improve — not only what they know.",
            },
            {
              title: "Final work",
              body: "The programme concludes with a team capstone: a working prototype, a model card, an ethical impact report and a public demonstration with a final pitch.",
            },
            {
              title: "Certification",
              body: "Certificates are to be issued by the Centre of Excellence in collaboration with industry partners. Accreditation from a recognised foreign international body is being sought and is subject to final approval.",
            },
          ],
        },
      ],
    },
    policy: {
      title: "Academic continuity, intellectual property & safeguards",
      body: [
        "To protect performance in national examinations, the proposed curriculum features a blackout period in the three months before G.C.E. A/L examinations in which no new modules are introduced. Students sitting examinations may defer their capstone defence until after their A/Ls.",
        "All intellectual property created during capstones remains the property of the student creator, with the school or partner retaining only a non-exclusive licence for educational display.",
        "All commercial exposure, intellectual property discussions and external partnerships operate under school governance, parental consent frameworks and age-appropriate safeguards — ensuring student welfare, equity and educational primacy.",
      ],
    },
    finder: {
      categoryLabel: "Artificial Intelligence",
      ages: "After O/L (16–18)",
      level: "Advanced",
      duration: "Two years",
      format: "Blended",
      status: "Register interest",
    },
    cta: {
      heading: "Interested in the first approved intake?",
      body: "Register to receive confirmed information about eligibility, assessment, dates, fees, faculty and places.",
      label: "Register interest",
    },
  },

  /* ------------------------------------------------ STEAM, Coding and Making */
  {
    slug: "steam-coding-making",
    kind: "category",
    title: "STEAM, Coding and Making",
    shortTitle: "STEAM, Coding & Making",
    eyebrow: "STEAM, coding and making",
    tagline: "Move from an idea to something that works.",
    intro: [
      "STEAM learning connects scientific inquiry, technology, engineering, the arts and mathematics through purposeful making. Students identify a need, learn the tools required to respond and improve their work through testing and feedback.",
    ],
    seoTitle: "STEAM, Arduino and 3D Design for Students | Ananda COE",
    metaDescription:
      "Explore project-based learning in creative problem-solving, coding, electronics, Arduino, sensors and 3D design at Ananda College.",
    keywords: [
      "STEAM course for students Sri Lanka",
      "Arduino course for students Sri Lanka",
      "coding and electronics course",
      "3D design course Colombo",
      "STEM workshop students",
    ],
    image: "/images/centre-steam.jpg",
    imageAlt: "Hands connecting wires to a microcontroller in the STEAM Hub",
    cta: {
      heading: "Design, code, connect and create.",
      body: "The STEAM Innovation Workshop introduces the journey from identifying a useful problem to presenting an improved physical-computing project.",
      label: "View the STEAM Innovation Workshop",
    },
    children: ["steam-innovation-workshop"],
  },
  {
    slug: "steam-innovation-workshop",
    kind: "programme",
    parent: "steam-coding-making",
    title: "STEAM Innovation Workshop",
    shortTitle: "STEAM Innovation Workshop",
    eyebrow: "STEAM, coding and making",
    tagline: "Design, code, connect and create.",
    intro: [
      "This twelve-session workshop, developed with Rysera STEM, introduces students to the journey from identifying a useful problem to presenting an improved physical-computing project. Participants explore programming, electronics, Arduino, sensors, actuators and 3D design before bringing the pieces together in a final showcase.",
      "The workshop begins long before any circuit is built or any code is written — it begins with a mindset. Children are taught to approach the world as problem-finders rather than only problem-solvers, because innovation does not have to be high-tech. Some of the most powerful ideas students arrive at are beautifully simple.",
    ],
    seoTitle: "STEAM Innovation Workshop with Arduino and 3D Design",
    metaDescription:
      "A 12-session workshop covering design thinking, coding, electronics, Arduino, sensors, Tinkercad, 3D printing and a final showcase.",
    keywords: [
      "STEAM innovation workshop Sri Lanka",
      "Arduino workshop for students",
      "coding workshop Colombo",
      "Tinkercad 3D design course",
      "electronics workshop",
    ],
    image: "/images/centre-steam.jpg",
    imageAlt: "Close-up of prototyping work in the STEAM Hub",
    status: "Register your interest",
    sidebar: [
      {
        label: "Duration & format",
        primary: "12 practical sessions",
        secondary: "Project-based learning in the STEAM Hub",
      },
      {
        label: "Level",
        primary: "Introductory",
        secondary: "No prior coding or electronics experience required",
      },
      {
        label: "Language",
        primary: "Taught in the language a student is most comfortable in",
        secondary:
          "All material is in English, so students are consistently exposed to it in a meaningful, contextual way",
      },
      {
        label: "Final work",
        primary: "A developed project and presentation",
        secondary: "Shown at the final showcase",
      },
    ],
    objectives: {
      heading: "What the workshop develops",
      intro:
        "By the end of the workshop, students should be able to move confidently from a need to a working, tested physical-computing project.",
      items: [
        "Explain the relationship between code, a controller, sensors and outputs.",
        "Write and debug simple programs that control real hardware.",
        "Build basic circuits and connect sensors and actuators through Arduino.",
        "Create a simple 3D design and prepare it for printing and fabrication.",
        "Test, gather feedback and improve a project through iteration.",
        "Present the problem, the process and the result with clarity.",
      ],
    },
    outline: {
      heading: "Session sequence",
      badges: ["12 sessions", "Hands-on from session one", "Final showcase"],
      items: [
        {
          title: "Introduction to STEAM and innovation",
          step: "Session 1 of 12",
          body: "How science, technology, engineering, the arts and mathematics combine around real problems — and what the workshop will build towards.",
        },
        {
          title: "Creativity, observation and needs-finding",
          step: "Session 2 of 12",
          body: "Noticing needs, patterns and possibilities, and framing a problem worth solving.",
        },
        {
          title: "Programming fundamentals",
          step: "Session 3 of 12",
          body: "First programs: instructions, sequences, variables and logic.",
        },
        {
          title: "Problem-solving and debugging",
          step: "Session 4 of 12",
          body: "Reading errors, isolating causes and fixing code methodically.",
        },
        {
          title: "Electronics fundamentals",
          step: "Session 5 of 12",
          body: "Circuits, components and safe prototyping practice.",
        },
        {
          title: "Arduino and coding",
          step: "Session 6 of 12",
          body: "Bringing code and electronics together on a microcontroller.",
        },
        {
          title: "Sensors and actuators",
          step: "Session 7 of 12",
          body: "Reading the world through sensors and responding through motors, lights and sound.",
        },
        {
          title: "3D design",
          step: "Session 8 of 12",
          body: "Designing simple parts and enclosures in Tinkercad.",
        },
        {
          title: "Project development and presentation",
          step: "Session 9 of 12",
          body: "Assembling the project and learning to explain the problem, process and result.",
        },
        {
          title: "Testing, feedback and improvement",
          step: "Session 10 of 12",
          body: "Observing what happens, collecting feedback and identifying limitations.",
        },
        {
          title: "3D printing and fabrication",
          step: "Session 11 of 12",
          body: "Printing designed parts and finishing the physical build.",
        },
        {
          title: "Final showcase",
          step: "Session 12 of 12",
          body: "Final project presentations to peers, instructors and guests, with live demonstration of prototypes, questions and constructive feedback from the audience, reflection, certificates and celebration.",
        },
      ],
    },
    sections: [
      {
        heading: "Three core disciplines",
        lead: "Not every student will master all three. But an intuitive grasp of all three, early, changes how they see everything around them.",
        items: [
          {
            title: "Electronics",
            body: "Introduced hands-on before any formal abstraction. The moment a student lights their first LED with a circuit they built themselves, something clicks. From there they grow into understanding how components behave and how microcontrollers think.",
          },
          {
            title: "Coding",
            body: "Taught as a thinking skill first and a technical skill second. C++ and Arduino are used deliberately: C++ builds strong computational thinking, while Arduino connects software directly to real-world hardware so students see their code act on the physical world.",
          },
          {
            title: "3D design and printing",
            body: "Using Tinkercad — intuitive, browser-based and beginner-friendly, yet capable of real printable designs. Students start with physical blocks and real-world analogies before moving to the screen, and learn to think for the printer: tolerances, overhangs and print orientation.",
          },
        ],
      },
      {
        heading: "The Problem and Idea Booklet",
        lead: "From the first day, every student receives a booklet with one instruction.",
        body: [
          "Write down every problem you notice, no matter how small, silly, unrelated or unsolvable it seems. A door that is hard to open. A bag strap that keeps slipping. Noise in a classroom. Nothing is too trivial.",
          "The goal is creative confidence — the belief that I noticed something, and I can do something about it. Students are divided into teams of four in the first session, and the booklet feeds both the team project and the individual capstone throughout the workshop.",
        ],
      },
      {
        heading: "What a student gains",
        items: [
          { title: "Problem-finding and creative thinking skills" },
          { title: "Confidence to act on ideas, however small" },
          { title: "Intuitive understanding of electronics, coding and 3D design" },
          { title: "English literacy through immersive material" },
          { title: "Research, teamwork and presentation skills" },
          { title: "A lasting habit of observation and curiosity" },
        ],
      },
    ],
    finder: {
      categoryLabel: "STEAM, Coding & Making",
      ages: "Open to school students",
      level: "Introductory",
      duration: "12 sessions",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Be part of the first showcase.",
      body: "Register to receive workshop dates, eligibility and enrolment details as they are confirmed.",
      label: "Register for workshop updates",
    },
  },

  /* ------------------------------------------------ Entrepreneurship */
  {
    slug: "entrepreneurship",
    kind: "category",
    title: "Entrepreneurship",
    shortTitle: "Entrepreneurship",
    eyebrow: "Entrepreneurship Centre by nVentures",
    tagline: "Start with a problem worth understanding.",
    intro: [
      "The Entrepreneurship Centre is designed to function as an incubator within the school, integrating STEAM skills with entrepreneurial thinking. It is sponsored and operated by nVentures, an early-stage venture capital fund licensed under the Monetary Authority of Singapore that invests across South and Southeast Asia.",
      "The proposed Student Entrepreneurship Accelerator is a year-long, project-based programme in which students investigate a real need they have experienced themselves, test their assumptions, build a useful first solution and present what they have learned. Progress is judged by evidence, honesty and improvement.",
      "Entrepreneurship begins long before a pitch deck. It begins with the discipline to observe carefully, ask useful questions, recognise what is not yet known and revise an idea when evidence changes.",
    ],
    seoTitle: "Entrepreneurship for School Students | Ananda COE",
    metaDescription:
      "A year-long student accelerator in problem discovery, user research, prototyping, MVP development, ethical enterprise and presentation.",
    keywords: [
      "entrepreneurship programme for school students Sri Lanka",
      "student entrepreneurship course Colombo",
      "innovation programme for students",
      "business skills for school students",
    ],
    image: "/images/course-entrepreneurship.jpg",
    imageAlt: "Students mapping ideas in the Entrepreneur Business Skills Centre",
    status: "In development",
    sidebar: [
      {
        label: "Duration & schedule",
        primary: "One year",
        secondary: "One after-school session every two weeks",
      },
      {
        label: "Cohort",
        primary: "Proposed 20–30 students per cohort",
        secondary: "Competitively selected on curiosity, honesty and commitment — not academic rank",
      },
      {
        label: "Approach",
        primary: "Project-based accelerator with gate reviews",
        secondary: "Students progress when they demonstrate the work, not when the calendar says so",
      },
      {
        label: "Final event",
        primary: "Demo Day",
        secondary: "Eight minutes to present, five for questions — no rankings, no prizes",
      },
    ],
    objectives: {
      heading: "What the accelerator develops",
      intro:
        "The programme teaches enterprise as a process of careful discovery, improvement and ethical value creation — not performance.",
      items: [
        "Observe carefully and move from symptoms to underlying needs.",
        "Interview real users and document what is actually said.",
        "Identify critical assumptions and design honest tests for them.",
        "Prototype early, cheaply and without attachment.",
        "Turn feedback into a genuinely more useful next version.",
        "Explain a need, the evidence, a solution and its limitations — plainly.",
      ],
    },
    outline: {
      heading: "The four stages",
      badges: ["One year", "Evidence over polish", "Demo Day finale"],
      items: [
        {
          title: "Discover: find and validate a real problem",
          step: "Stage 1 of 4",
          meta: "Ends with a gate review",
          topics: [
            "User interviews",
            "The Five Whys",
            "Problem statements",
            "Existing-solutions audit",
            "Team formation",
          ],
          body: "Students define an area of interest, speak with approved potential users and use tools such as the Five Whys to move from symptoms to underlying needs. They examine existing solutions before proposing another one. Sessions run from a workshop on what makes a problem worth solving, through problem pitches and team formation, interview debriefs, a problem statement workshop and an existing-solutions audit, to a gate review.",
          points: [
            "Exit: a specific problem statement in the correct format.",
            "Exit: evidence from at least six real user interviews.",
            "Exit: one existing solution identified and its gap explained.",
            "Exit: a credible answer to where technology fits.",
            "Exit: full team alignment on the problem.",
          ],
        },
        {
          title: "Define: design and test a solution",
          step: "Stage 2 of 4",
          meta: "Ends with a gate review",
          topics: [
            "How Might We",
            "Assumption mapping",
            "No-code tools",
            "Low-fidelity mockups",
            "Solution canvas",
          ],
          body: "Students generate possible responses through How Might We brainstorming, map their assumptions and design tests for them, debrief the results, learn what no-code tools can actually build, and gather feedback on a mockup before the gate review.",
          points: [
            "Exit: a specific solution concept with a named technology component.",
            "Exit: at least three assumptions tested with real people, results documented.",
            "Exit: a low-fidelity mockup showing the user flow.",
            "Exit: feedback from at least three real potential users on the mockup.",
            "Exit: a completed one-page solution canvas.",
          ],
        },
        {
          title: "Build: ship a working MVP",
          step: "Stage 3 of 4",
          meta: "Ends with a gate review",
          topics: [
            "MVP scoping",
            "Build sprints",
            "User testing",
            "Iteration",
            "Product storytelling",
          ],
          body: "Students scope the build, run two build sprints with a real user test outside the lab in between, learn to explain their build to a stranger, and hold an internal demo day for peer review before the gate review. The goal is an MVP a stranger can use without help.",
          points: [
            "Exit: a functional MVP where a user can complete the core task unaided.",
            "Exit: at least five real users have tested it, with feedback documented.",
            "Exit: at least one full iteration cycle based on that feedback.",
            "Exit: the team can explain the product clearly in under two minutes, plus a one-page product summary.",
          ],
        },
        {
          title: "Launch: present publicly at Demo Day",
          step: "Stage 4 of 4",
          meta: "Public Demo Day",
          topics: [
            "Narrative craft",
            "Presentation build",
            "Dry runs",
            "Live demo",
            "Demo Day",
          ],
          body: "A narrative workshop, a presentation build and two dry runs lead into Demo Day itself: a full school event in the auditorium with students, parents, mentors and external guests in the audience. Each team gets eight minutes to present with a live demo, then five minutes of questions. Every team that reaches this stage receives a certificate — there are no rankings and no prizes, because the work is the achievement.",
        },
      ],
    },
    sections: [
      {
        heading: "The Anandian Way of Innovation",
        lead: "Every project is anchored in four pillars. Financial returns are a legitimate goal, but entrepreneurship must begin with the common good and the welfare of society at its core.",
        numbered: true,
        items: [
          {
            title: "කරුණා — Compassion and empathy",
            body: "Innovation must start with empathy: solving a genuine problem for someone else.",
          },
          {
            title: "ශීල — Ethics",
            body: "Integrity in business, data privacy and fair trade.",
          },
          {
            title: "දාන — Generosity",
            body: "Entrepreneurship as service to society, not only profit.",
          },
          {
            title: "උපේක්ඛා — Balance",
            body: "Resilience in the face of failure, and humility in success.",
          },
        ],
      },
      {
        heading: "Open to the whole school",
        lead: "Alongside the selected cohort, the Centre is designed to serve every Ananda student — and, as a national model, students beyond it.",
        items: [
          {
            title: "Open workshops",
            body: "Open to all students and recorded to the learning management system.",
          },
          {
            title: "Problem of the Quarter",
            body: "A specific local social issue put to the whole school, with the best idea recognised.",
          },
          {
            title: "Content library",
            body: "All recordings, templates and the reading list, always accessible.",
          },
          {
            title: "Startup internships",
            body: "Tentative — subject to legal and administrative feasibility.",
          },
          {
            title: "Inter-school challenge",
            body: "From year two onwards, hosted by Ananda with other Colombo schools invited.",
          },
        ],
      },
    ],
    admission: {
      heading: "Selection",
      tabs: [
        {
          label: "Who should apply",
          items: [
            {
              title: "Curiosity over credentials",
              body: "The draft programme prioritises curiosity, honesty and commitment rather than academic rank.",
            },
            {
              title: "Grade range",
              body: "The draft indicates a cohort drawn from Grades 6–13, with the programme mission written around Grades 8–13. The final range is being confirmed.",
            },
            {
              title: "Commitment",
              body: "Students should be able to attend one after-school session every two weeks across the full year, and to work with their team between sessions.",
            },
            {
              title: "Teams",
              body: "Teams can be formed after selection, so students do not need to arrive with a group or an idea.",
            },
          ],
        },
        {
          label: "How selection works",
          items: [
            {
              title: "Competitive selection",
              body: "Cohorts of 20–30 students are selected competitively on curiosity, honesty and commitment.",
            },
            {
              title: "Register interest",
              body: "Register for updates about the approved audience, selection process and first intake.",
            },
            {
              title: "Final process to be confirmed",
              body: "The audience, grade range and selection method are being finalised and will be announced to registered families first.",
            },
          ],
        },
      ],
    },
    policy: {
      title: "Designed as a national model",
      body: [
        "While housed at Ananda, the Entrepreneurship Centre is intended to serve youth across Sri Lanka through open competitions and shared curricula, positioning the College as a benevolent leader in national education.",
        "The vision is to inspire young Sri Lankans to become ethical innovators and compassionate entrepreneurs who build solutions that uplift communities — transforming students from test-takers into changemakers who use technology to solve real problems.",
      ],
    },
    finder: {
      categoryLabel: "Entrepreneurship",
      ages: "Grades 6–13 (to be confirmed)",
      level: "Intermediate",
      duration: "One year",
      format: "After-school sessions",
      status: "In development",
    },
    cta: {
      heading: "Think like a careful founder.",
      body: "Register for updates about the approved audience, selection process and first intake.",
      label: "Register interest",
    },
  },

  /* ------------------------------------------------ Media and Communication */
  {
    slug: "media-communication",
    kind: "category",
    title: "Media and Communication",
    shortTitle: "Media & Communication",
    eyebrow: "Sumathi Convergence Media Centre",
    tagline:
      "One stackable pathway from a first podcast at twelve to a live convergence newsroom at eighteen — built towards a national vocational qualification.",
    intro: [
      "The Sumathi Convergence Media Centre (SCMC) teaches media as a single continuous pathway rather than a set of separate classes. Five stacked modules carry students from capturing one clean source of sound through field production, post-production, live multi-camera broadcasting and finally a working newsroom — 117 hours in all, mapped to clear age milestones.",
      "Every module runs on two tracks at once: an academic path covering the theory beneath the craft — acoustic physics, optics, signal processing, media law — and a vocational path in the industry skills and software that employers actually use. The centre deliberately avoids expensive fixed television hardware in favour of a lean, software-defined studio sized for a 30-student footprint.",
      "The framework harmonises the strategic project proposal by Prof. Dr. Rangamini Werawatta with the Advisory Board Electronics Media Curriculum (COE V3.1) and the hands-on STEAM Media operational track.",
    ],
    seoTitle: "Media Courses for Students in Sri Lanka | Ananda COE",
    metaDescription:
      "A stackable 117-hour media pathway for ages 12-18 in podcasting, mobile journalism, post-production, AI workflows, live broadcasting and news production, leading towards NVQ Level 4.",
    keywords: [
      "media production courses for students Sri Lanka",
      "podcasting course Sri Lanka",
      "video production for students",
      "broadcasting course Colombo",
      "digital journalism course",
      "NVQ media production Sri Lanka",
      "mobile journalism course Sri Lanka",
    ],
    image: "/images/centre-media.jpg",
    imageAlt: "Broadcast camera in the Media Studio",
    status: "Register your interest",
    sidebar: [
      {
        label: "Target qualification",
        primary: "National Certificate in Dual-Platform Media Production & AI Integration",
        secondary: "NVQ Level 4 — planned, subject to TVEC accreditation",
      },
      {
        label: "Structure",
        primary: "Five stacked modules · 117 hours",
        secondary: "Ages 12–18 · Grades 7–13 · three hours per week per module",
      },
      {
        label: "Studio",
        primary: "A 30-student software-defined studio",
        secondary: "Agile and software-led rather than hardware-bound",
      },
      {
        label: "Final assessment",
        primary: "Portfolio capstone, not a written exam",
        secondary: "Real production logs from signature school events, vetted by external TVEC auditors",
      },
    ],
    objectives: {
      heading: "What the pathway develops",
      intro:
        "Students progress through three cognitive tiers — Foundation Media Producer, Intermediate Media Producer and Advanced Media Producer — building technical capability alongside the editorial judgement that responsible media work requires.",
      items: [
        "Capture clean single sources: sound, image and field audio, understood from the physics upward.",
        "Manipulate and finish raw material through editing, colour, audio mastering and motion design.",
        "Use AI-assisted workflows deliberately — for noise repair, transcription, subtitling and packaging.",
        "Operate multi-source live systems: switchers, signal routing, lighting grids and stream encoding.",
        "Research, verify and write news for digital audiences, and present it on camera.",
        "Work to professional crew roles, communicating clearly under real-time pressure.",
        "Apply media law, copyright, aviation clearance and ethical judgement before publishing.",
        "Build an assessable portfolio of real production work rather than classroom exercises.",
      ],
    },
    outline: {
      heading: "The five stacked modules",
      badges: ["117 hours", "Ages 12–18", "Each module complete in itself"],
      items: [
        {
          title: "Digital Podcasting, Audio Engineering and Acoustic Dynamics",
          step: "Module 1 of 5",
          meta: "Ages 12–14 · 15 hours",
          topics: [
            "Acoustics",
            "Microphones",
            "Studio recording",
            "Audio editing",
            "Mastering",
            "Podcast publishing",
          ],
          body: "Five weeks, three hours a week. Foundation tier. Students learn how sound behaves and how it is captured, then script, record, master and publish an original multi-episode podcast pilot.",
          points: [
            "Sound engineering principles: characteristics of sound, wave parameters such as amplitude and velocity, audible frequency ranges, and electricity and analog signal blocks.",
            "Transducer and capture mechanics: dynamic versus condenser microphone designs, directional polar patterns (cardioid, omnidirectional) and hardware cable tracking.",
            "Studio operations and environment preparation: setting up recording spaces, sound-check protocols, audio balancing, gain-structure management and hardware safety.",
            "Post-production and digital mastering: multi-track timeline mixing in Audacity and Pro Tools, noise-reduction filters, spectral audio repair and export matrices.",
            "Project output and publishing pipelines: producing an original multi-episode podcast pilot and deploying RSS distribution feeds to Spotify, Apple Podcasts and YouTube.",
          ],
        },
        {
          title: "Mobile Journalism, Drone Operations and Field Production",
          step: "Module 2 of 5",
          meta: "Ages 12–15 · 18 hours",
          topics: [
            "Camera optics",
            "Composition",
            "Gimbal work",
            "Field audio",
            "Lighting",
            "Drone basics",
          ],
          body: "Six weeks, three hours a week. Foundation to intermediate tier. Students take a story out of the classroom and into the field with a smartphone-first kit, finishing with a structured short feature.",
          points: [
            "Mobile camera system optics: video camera principles, hardware imaging sensors and lens functions including focus, electronic iris, shutter speed and variable ND filters.",
            "Spatial composition and shot geometry: shot definitions (wide, medium, close-up), framing mechanics and rule-of-thirds geometry.",
            "Stabilised motion engineering: setup and calibration of electronic three-axis smartphone gimbals, manual pan-tilt-zoom tracking and follow-mode tracking.",
            "Field audio and illumination: rigging dual-channel wireless USB-C clip-on microphone arrays, monitoring signal, and indoor and outdoor single-camera lighting grids and reflectors.",
            "Drone aviation and aerial data acquisition: aviation camera mechanics, remote telemetry operation, basic multi-axis flight paths, low-altitude tracking and landscape framing.",
            "Field package assembly: deploying smartphone field kits on location to plan and break down scripts, log B-roll and produce a structured mobile journalism short feature.",
          ],
        },
        {
          title: "Post-Production, Motion Graphics and AI Prompt Engineering",
          step: "Module 3 of 5",
          meta: "Ages 15–16 · 24 hours",
          topics: [
            "DaVinci Resolve",
            "Colour grading",
            "Audio finishing",
            "Motion graphics",
            "AI workflows",
          ],
          body: "Eight weeks, three hours a week. Intermediate tier — the bridge of the pathway, where raw field material becomes finished work and AI enters the workflow as a tool under editorial control.",
          points: [
            "Digital video signal processing: analog-to-digital conversion, digital video formats, colour spaces, and luminance, chrominance, saturation and hue.",
            "NLE timeline workflows and asset organisation: file system management, media asset workflows, ingest pipelines and offline/online editing models in DaVinci Resolve.",
            "Colour grading dynamics: primary and secondary colour correction, balance adjustment, LUT processing and colour-scope analysis on calibrated monitors.",
            "Audio optimisation inside the DAW: processing within non-linear timelines, sound-effect overlays, dialogue synchronisation, dynamic compression and mastering levels.",
            "Motion design and 2D vector animation: vector layouts and motion paths in Blender, automated lower thirds, typography integration and subtitle rendering.",
            "AI prompt engineering for audio: prompting models for background-noise extraction, dialogue repair, multi-track gain self-balancing and spectral repair automation.",
            "AI prompt engineering for video packaging: speech-to-text transcription, localised multi-language subtitle generation and dynamic frame scaling.",
            "Asset packaging and portfolio mastering: distribution formats, metadata optimisation, thumbnail design and cloud backup procedures.",
          ],
        },
        {
          title: "Live Multi-Camera Studio Broadcasting",
          step: "Module 4 of 5",
          meta: "Ages 16–18 · 30 hours",
          topics: [
            "Signal flow",
            "Crew roles",
            "Vision switching",
            "Studio lighting",
            "Live audio",
            "Stream encoding",
          ],
          body: "Ten weeks, three hours a week. Advanced tier. A live broadcast only works when many people make clear decisions at the right moment; students rotate through every gallery crew position before the capstone.",
          points: [
            "Broadcast infrastructure and signal flows: multi-camera configuration, SDI and HDMI cable lines, signal conversion and Network Device Interface (NDI) routing.",
            "Studio gallery crew architectures: the roles and command hierarchy of director, technical director, audio engineer, floor manager and camera operators.",
            "Vision switcher surface controls: input configuration, scene management, cross-dissolves, downstream keyers and source routing in vMix or Blackmagic ATEM panels.",
            "Studio light grid deployment: hanging and positioning overhead DMX-controlled LED softboxes on ceiling-anchored rails to keep the studio floor agile.",
            "Live audio integration: routing multi-source studio microphones into the digital mixing console, monitoring feedback and balancing a live mix.",
            "Multi-camera direction mechanics: live tracking, camera blocking, pacing, talkback communication and real-time switching.",
            "Broadcast graphics and lower-thirds automation: live overlays, alpha-channel loops and dynamic scoreboard graphics in the stream.",
            "Stream encoding and network engineering: RTMP and HLS parameters, bitrates, frame rates, bandwidth balancing and streaming to YouTube and Facebook Live.",
            "Gallery troubleshooting protocols: real-time fault finding for bandwidth drops, signal failures, camera drops and audio feedback mid-stream.",
            "Live capstone: students take gallery crew positions to broadcast a signature annual school event in full.",
          ],
        },
        {
          title: "Digital Journalism and News Production Technology",
          step: "Module 5 of 5",
          meta: "Ages 16–18 · 30 hours",
          topics: [
            "Media law & ethics",
            "Verification",
            "News writing",
            "Anchoring",
            "Teleprompter",
            "Newsroom production",
          ],
          body: "Ten weeks, three hours a week. Advanced tier. Principles first — history, ethics and law — then the production practice of a working convergence newsroom.",
          points: [
            "Introduction to convergence journalism: the history of broadcasting, the evolution of digital newsrooms and multi-platform delivery.",
            "Journalistic ethics and media law: media regulation, intellectual property, copyright protection, fair use and social media reporting responsibilities.",
            "News research and investigative sourcing: verified data sourcing, background research, location surveys and legal clearances.",
            "Text script writing and news formats: writing for the ear and the eye — news outlines, flash alerts, introductory hooks and short-form reporting copy.",
            "Professional teleprompter and technical script formulation: building structured technical scripts and translating copy into scrolling teleprompter applications.",
            "Vocal presentation and news anchoring: pronunciation, voice projection, breathing, presentation confidence and studio etiquette.",
            "Investigative field newsgathering: deploying MoJo field kits to capture breaking visuals, track interviews and build stories under time constraints.",
            "Drone regulatory compliance and spatial news: navigating Civil Aviation Authority of Sri Lanka (CAASL) parameters, Ministry of Defence clearances and aerial mapping for data stories.",
            "Micro-content adaptation: converting a full news broadcast into text flashes, interactive threads and vertical micro-content.",
            "Simulated newsroom launch: a live convergence newsroom simulation with students rotating across anchoring, prompters, gallery switching and real-time graphics.",
          ],
        },
      ],
    },
    sections: [
      {
        heading: "Two tracks, one module",
        lead: "Every module teaches the theory beneath the craft alongside the industry skill itself.",
        items: [
          {
            title: "Module 1 — Podcasting and audio",
            body: "Academic: acoustic physics, sound wave parameters, frequency spectrum subdivisions and transducer science. Vocational: multi-track microphone placement, voice tracking, digital mixing console gains and RSS podcast engine deployment.",
          },
          {
            title: "Module 2 — Mobile journalism and field production",
            body: "Academic: optics mechanics, camera sensor physics, focal lengths, lighting principles and the visible light colour spectrum. Vocational: agile smartphone filming, three-axis gimbal calibration, USB-C wireless microphone arrays and low-altitude drone telemetry.",
          },
          {
            title: "Module 3 — Post-production and AI",
            body: "Academic: analog-to-digital matrix mathematics, chroma and luma signal blocks, video formats and cloud AI architecture. Vocational: DaVinci Resolve non-linear editing, primary colour scopes, AI noise reduction, automated transcription and thumbnail asset design.",
          },
          {
            title: "Module 4 — Live studio broadcasting",
            body: "Academic: IP video data encapsulation, Network Device Interface signals, streaming network topologies and bitrates. Vocational: real-time vision switching, live scene mix effects, overhead DMX light rigging and RTMP/HLS live encoding.",
          },
          {
            title: "Module 5 — Digital journalism and news production",
            body: "Academic: media ethics, intellectual property and copyright guidelines, CAASL and Ministry of Defence aviation parameters, and script structural formats. Vocational: news anchoring, teleprompter operation, live bulletin mixing, investigative reporting and micro-content social packaging.",
          },
        ],
      },
      {
        heading: "The course trail",
        lead: "A continuous pipeline that captures interest at middle school and systematically upgrades technical capacity — a micro-credential model rather than compartmentalised classrooms.",
        numbered: true,
        items: [
          {
            title: "Ingress and single-source acquisition",
            body: "Ages 12–15 · Grades 7–10. Fundamental capture mechanics. Students master individual sources through Module 1 — audio waves, acoustic properties and vocal microphone inputs — and Module 2 — camera field optics, three-axis stabilisation and remote micro-drone telemetry.",
          },
          {
            title: "Mid-tier manipulation and AI synergy",
            body: "Ages 15–16 · Grades 10–11. Post-production refinement. Module 3 is the critical bridge, where students manipulate, organise, colour grade and master raw field assets inside NLE timelines while using AI for background cleaning and automated transcript workflows.",
          },
          {
            title: "Advanced real-time studio convergence",
            body: "Ages 16–18 · Grades 11–13. Multi-source systems engineering. Students operate complex network ecosystems in Module 4 — NDI routing, gallery control boards, switcher matrices and RTMP encoders — and Module 5 — newsroom anchoring, copyright architecture, aviation clearances and social adaptation.",
          },
          {
            title: "The portfolio capstone and accreditation",
            body: "Rather than a traditional written examination, the student's real-world media logs from managing signature annual events — Colours Night, Prize Giving, the Sports Meet — are vetted by external TVEC auditors towards the National Certificate in Dual-Platform Media Production & AI Integration at NVQ Level 4.",
          },
        ],
      },
      {
        heading: "Where the pathway leads",
        lead: "The stacked credentials map into three specialised industry streams, each with its own course trail and portfolio evidence.",
        items: [
          {
            title: "Audio engineering and acoustic tracks",
            body: "Trail: Module 1 → Module 3 → Module 4. Portfolio evidence: multi-track vocal mix files, corporate ad-read deliverables and a clean multi-episode podcast master. Placement options include digital podcast producer, studio sound engineer, audio mastering technician and acoustic media consultant.",
          },
          {
            title: "Digital field production and cinematography",
            body: "Trail: Module 2 → Module 3 → Module 5. Portfolio evidence: run-and-gun field short documentaries, colour-graded commercial showreels and low-altitude drone aerial logs. Placement options include professional NLE video editor, commercial drone pilot, digital colorist and multimedia content creator.",
          },
          {
            title: "Live broadcasting and newsroom technology",
            body: "Trail: Module 3 → Module 4 → Module 5. Portfolio evidence: verified gallery crew technical logs covering vision switchers, DMX arrays and teleprompters during major school events. Placement options include live broadcast director, convergence news anchor, technical director and social media news strategist.",
          },
        ],
      },
    ],
    admission: {
      heading: "Entry, assessment and certification",
      tabs: [
        {
          label: "Who it is for",
          intro:
            "Each module has its own age milestone, and students may enter the pathway at the point that matches their year group.",
          items: [
            {
              title: "Ages 12–14 · Grades 7–9",
              body: "Entry at Module 1. No prior experience is required — the pathway begins with how sound behaves and how to record it well.",
            },
            {
              title: "Ages 12–15 · Grades 7–10",
              body: "Module 2 runs alongside the foundation tier for students drawn to camera work and field reporting rather than the studio.",
            },
            {
              title: "Ages 15–16 · Grades 10–11",
              body: "Module 3 assumes basic capture skill and moves into editing, colour, audio finishing and AI-assisted workflows.",
            },
            {
              title: "Ages 16–18 · Grades 11–13",
              body: "Modules 4 and 5 are advanced, crew-based and newsroom-based. Students work to professional roles under live conditions.",
            },
          ],
        },
        {
          label: "Assessment & certification",
          items: [
            {
              title: "Portfolio over examination",
              body: "Assessment is triggered by portfolio evidence — real production deliverables and verified crew logs — rather than a written paper.",
            },
            {
              title: "External audit",
              body: "Media logs from managing signature annual school events are vetted by external TVEC auditors.",
            },
            {
              title: "Target qualification",
              body: "The pathway is designed to unlock a National Certificate in Dual-Platform Media Production & AI Integration at NVQ Level 4. Accreditation is planned and subject to confirmation.",
            },
            {
              title: "Cognitive tiers",
              body: "Students progress from Level 1 Foundation Media Producer through Level 2 Intermediate Media Producer to Level 3 Advanced Media Producer.",
            },
          ],
        },
      ],
    },
    policy: {
      title: "Drone operations are regulated and supervised",
      body: [
        "The drone components of Modules 2 and 5 begin with regulation, risk, permissions and supervised production planning. Students study Civil Aviation Authority of Sri Lanka (CAASL) parameters and Ministry of Defence clearance requirements as part of the curriculum.",
        "Any flight activity depends on the required approvals and qualified supervision.",
      ],
    },
    finder: {
      categoryLabel: "Media & Communication",
      ages: "Ages 12–18",
      level: "All levels",
      duration: "117 hours across five modules",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Five modules. One pathway. One qualification.",
      body: "Register to receive confirmed dates, studio details, module entry points and enrolment information as they are approved.",
      label: "Register for course updates",
    },
  },

  /* ------------------------------------------------ Fine and Digital Arts */
  {
    slug: "fine-digital-arts",
    kind: "category",
    title: "Fine and Digital Arts",
    shortTitle: "Fine & Digital Arts",
    eyebrow: "Fine and Digital Arts Programme",
    tagline: "Create. Innovate. Inspire. Your canvas, your code, your future.",
    intro: [
      "The proposed Fine Arts and Digital Arts Programme combines observation and studio practice with contemporary tools for illustration, animation, 3D design, photography, video and user experience. Students progress through age-appropriate levels while building a body of original work.",
      "The aim is to develop artistic proficiency across traditional and digital media, foster visual literacy and aesthetic judgement, and prepare students for higher education and careers in the creative industries — while building confidence in both artistic voice and technical mastery.",
    ],
    seoTitle: "Fine Art and Digital Art Courses for Students | Ananda COE",
    metaDescription:
      "Explore drawing, painting, sculpture, digital illustration, animation, 3D design, photography, video and UI/UX.",
    keywords: [
      "art courses for students Colombo",
      "digital art course Sri Lanka",
      "fine art classes for school students",
      "3D design course students",
      "animation course students",
    ],
    image: "/images/centre-finearts.jpg",
    imageAlt: "Easel and studio materials in the Fine Arts Centre",
    status: "Register your interest",
    sidebar: [
      {
        label: "Levels",
        primary: "Foundation · Intermediate · Advanced",
        secondary: "Grades 6–8 · Grades 9–10 · Post-O/L and A/L",
      },
      {
        label: "Streams",
        primary: "Fine Arts · Digital Arts · Integrated",
        secondary: "Choose a stream, or move between them",
      },
      {
        label: "Assessment",
        primary: "Portfolio-centred",
        secondary: "Practical work, theory, process, participation and a final capstone",
      },
      {
        label: "Weekly commitment",
        primary: "6–9 hours of taught time",
        secondary:
          "2–3 hours of theory plus 4–6 hours of supervised studio work, with 3–5 hours of independent practice expected",
      },
    ],
    outline: {
      heading: "Three levels",
      badges: ["Age-appropriate progression", "A growing body of original work"],
      items: [
        {
          title: "Observation, materials and visual storytelling",
          step: "Level 1 of 3 — Foundation",
          meta: "Grades 6–8",
          topics: [
            "Drawing & self-portraits",
            "Colour theory",
            "Clay & sculpture",
            "Comics",
            "Photography",
            "Digital illustration",
            "Calligraphy",
          ],
          body: "Students build confidence in observation, materials, colour and visual storytelling through self-portraits, nature sketchbooks, digital doodles, comics, clay work, photography, collaborative murals, paper structures and calligraphy.",
        },
        {
          title: "Technique, identity and animation",
          step: "Level 2 of 3 — Intermediate",
          meta: "Grades 9–10",
          topics: [
            "Portraiture",
            "Mixed media",
            "Brand identity",
            "Stop-motion",
            "Printmaking",
            "3D modelling",
            "UI/UX design",
          ],
          body: "Students deepen technical control through portraiture, mixed media, brand identity, stop-motion, outdoor drawing, printmaking, 3D characters, user-interface design and work responding to a social idea.",
        },
        {
          title: "Portfolio, exhibition and AI-assisted practice",
          step: "Level 3 of 3 — Advanced",
          meta: "Post-O/L and A/L",
          topics: [
            "Senior portfolio",
            "Exhibition curation",
            "Motion graphics & VFX",
            "3D environments",
            "Installation",
            "AI-assisted creation",
          ],
          body: "Students develop a coherent portfolio and undertake more independent work in exhibition curation, motion and visual effects, installation, photography, 3D environments and integrated creative campaigns. Several advanced projects introduce AI tools deliberately — for texture generation, motion prediction, post-processing and ideation — with emphasis on human-AI collaboration and the ethics of image manipulation.",
        },
      ],
    },
    admission: {
      heading: "Assessment, certification and progression",
      tabs: [
        {
          label: "How work is assessed",
          intro:
            "Assessment is continuous, formative and portfolio-based, reflecting the developmental nature of artistic skill-building.",
          items: [
            {
              title: "Practical assessments — 60%",
              body: "Evaluation of completed artworks on technical skill, creativity and concept.",
            },
            {
              title: "Portfolio reviews — 20%",
              body: "Quarterly assessment of work progression and artistic development.",
            },
            {
              title: "Theory assessments — 10%",
              body: "Quizzes and written assignments on art history, criticism and theory.",
            },
            {
              title: "Process documentation — 5%",
              body: "Sketchbooks, research journals and project planning materials.",
            },
            {
              title: "Capstone projects — 5%",
              body: "Major final works demonstrating mastery and a personal artistic voice, alongside contribution to school exhibitions and public showcases.",
            },
          ],
        },
        {
          label: "Certification",
          items: [
            {
              title: "Module and level certificates",
              body: "Issued on completion of each specialised area, and for the Foundation, Intermediate and Advanced levels.",
            },
            {
              title: "Digital badges",
              body: "Awarded for specific skill achievements, such as digital illustration or portrait drawing.",
            },
            {
              title: "Final programme certificate",
              body: "Recognising comprehensive completion, together with professionally photographed portfolio documentation.",
            },
            {
              title: "Recognition and alignment",
              body: "Certificates are intended to align with national vocational qualifications frameworks where applicable, and to be recognised for higher education applications.",
            },
          ],
        },
        {
          label: "Where it leads",
          items: [
            {
              title: "Internships",
              body: "Opportunities with design firms, advertising agencies, animation studios and art galleries.",
            },
            {
              title: "Career counselling",
              body: "Pathways into fine arts, graphic design, animation, game design, architecture, art education and creative entrepreneurship.",
            },
            {
              title: "Professional practice",
              body: "Workshops covering portfolio preparation, freelancing, branding and networking.",
            },
            {
              title: "Industry mentorship",
              body: "A mentorship programme connecting students with working artists and designers.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        heading: "Three streams",
        lead: "Students may specialise in either stream, or pursue an integrated pathway combining both.",
        items: [
          {
            title: "Fine Arts stream",
            body: "Develop drawing, life drawing, colour, composition, painting, sculpture, printmaking, mixed media, art history and aesthetic judgement through sustained studio practice.",
          },
          {
            title: "Digital Arts stream",
            body: "Explore digital illustration, graphic design, photo editing, animation, motion graphics, 3D modelling, rendering, UI/UX, photography, video and design for digital platforms.",
          },
          {
            title: "Integrated stream",
            body: "Move between physical and digital processes, selecting the medium that best serves the idea and learning how one practice can expand another.",
          },
        ],
      },
      {
        heading: "How the centre runs",
        lead: "A blended approach combining instructor-led studio sessions with self-paced modules and independent practice.",
        items: [
          {
            title: "Practical training",
            body: "Studio work in well-equipped fine arts studios with proper lighting and materials, digital labs with industry-standard hardware and software, outdoor sketching and plein air painting, darkroom facilities for traditional photography, and exhibition space for student showcases.",
          },
          {
            title: "Theoretical sessions",
            body: "Classroom instruction in art history, theory and critique, supported by online lectures, video tutorials and virtual gallery tours.",
          },
          {
            title: "Learning methodology",
            body: "Every module carries clear learning outcomes and skill benchmarks, guided demonstrations, peer critique, individual mentoring and both formative and summative assessment.",
          },
          {
            title: "Enrichment",
            body: "Guest lectures from professional artists, designers and curators; masterclasses with visiting artists; gallery and museum visits; artist-in-residence programmes; and participation in art fairs and creative festivals.",
          },
          {
            title: "Community engagement",
            body: "Public art projects, workshops for feeder schools, partnerships with local galleries and cultural organisations, and social responsibility projects using art for community development.",
          },
          {
            title: "Sustainability and ethics",
            body: "Education in sustainable art practice and eco-friendly materials, ethical use of digital resources, copyright awareness, and cultural sensitivity in representation.",
          },
        ],
      },
    ],
    finder: {
      categoryLabel: "Fine & Digital Arts",
      ages: "Grades 6 to A/L",
      level: "All levels",
      duration: "Multi-level pathway",
      format: "Studio practice",
      status: "Register interest",
    },
    cta: {
      heading: "Build a portfolio that shows how you think.",
      body: "Register for information about levels, stream choices, schedules, materials and portfolio requirements.",
      label: "Register interest",
    },
  },

  /* ------------------------------------------------ Languages */
  {
    slug: "language-lab",
    kind: "category",
    title: "Language Lab",
    shortTitle: "Language Lab",
    eyebrow: "Languages and communication",
    tagline: "Language opens worlds — eleven of them.",
    intro: [
      "The Language Lab at the Centre of Excellence is envisioned as a space for listening, speaking, reading, writing and intercultural understanding across eleven languages: Sinhala, Tamil, English, Pali, Sanskrit, Hindi, French, German, Chinese, Korean and Japanese.",
      "The first programme under discussion is an English Language Enrichment Centre — a structured pathway that treats language not as a subject to memorise but as a capability to practise: in conversation, in debate, in writing and on stage.",
    ],
    seoTitle: "Language Lab and English Enrichment | Ananda COE",
    metaDescription:
      "A language laboratory for eleven languages, beginning with an English enrichment pathway in speech, reading, writing and public communication.",
    keywords: [
      "language lab school Sri Lanka",
      "English enrichment for students Colombo",
      "spoken English course for school students",
      "multilingual learning Sri Lanka",
    ],
    image: "/images/centre-language.jpg",
    imageAlt: "Student listening at a carrel in the Language Lab",
    status: "Draft programme — under discussion",
    sidebar: [
      {
        label: "Languages",
        primary: "Eleven languages",
        secondary: "Sinhala · Tamil · English · Pali · Sanskrit · Hindi · French · German · Chinese · Korean · Japanese",
      },
      {
        label: "First pathway",
        primary: "English Language Enrichment",
        secondary: "Remedial writing, reading and speech",
      },
      {
        label: "Selection",
        primary: "By instructors",
        secondary: "In keeping with Department of Education guidelines, with the Principal as ex-officio head of the Centre",
      },
    ],
    objectives: {
      heading: "What the English pathway develops",
      intro:
        "Scholars arrive with a basic knowledge of English. The Lab is designed to turn that knowledge into confident, accurate, expressive use.",
      items: [
        "Speak with confidence — many experts suggest writing improves naturally once scholars speak good English, and the fear of speaking falls away.",
        "Build conversation skill through dialogue-rich reading — colloquial and refined — and practice with fluent speakers.",
        "Use literary devices and English idioms naturally, with grammar taught when necessary rather than as an obstacle.",
        "Read widely and build a rich vocabulary, guided by recommended books.",
        "Pronounce accurately — addressing sounds absent from the Sinhala alphabet, diphthongs and commonly mispronounced words.",
        "Analyse current social and legal issues: brainstorm, take positions, warrant and refute them.",
        "Face interviews with confidence, deliver speeches with proper diction, and conduct meetings or compère formal and informal gatherings.",
      ],
    },
    outline: {
      heading: "How the pathway is structured",
      badges: ["Self-study material", "Instructor guidance", "Live practice"],
      items: [
        {
          title: "The introductory lecture",
          step: "Part 1 of 4",
          meta: "Where English comes from",
          topics: [
            "History of English",
            "Zeylanicisms",
            "Elocution",
            "Diphthongs",
            "Vocabulary",
          ],
          body: "The historical formation of Old, Middle and Modern English and its place beside Sinhala in the Indo-European family of languages; Zeylanicisms and common errors in Sri Lankan English; speech and elocution; words mispronounced because certain letters are absent from the Sinhala alphabet; diphthong sounds; the island's fondly collected malapropisms; and the value of reading and a rich vocabulary.",
        },
        {
          title: "Conversation and confidence",
          step: "Part 2 of 4",
          meta: "Speak first",
          topics: [
            "Dialogue reading",
            "Speaking practice",
            "Idiom",
            "Grammar in context",
          ],
          body: "Reading books rich in dialogue — colloquial and refined — and conversing with fluent speakers builds self-confidence and natural skill. Grammar rules are taught when necessary rather than as a separate hurdle.",
        },
        {
          title: "Language and literature",
          step: "Part 3 of 4",
          meta: "The formal syllabus",
          topics: [
            "Formal syllabus",
            "Films & CDs",
            "Self-study",
            "Examinations",
          ],
          body: "A syllabus for English language and literature prepared by the instructors and qualified individuals in due course, based on standard methods — supported by films, CDs and literature for self-study, with instructors always available to guide, and material covering examinations and practice tests.",
        },
        {
          title: "Personality and public communication",
          step: "Part 4 of 4",
          meta: "Beyond the classroom",
          topics: [
            "Current affairs",
            "Debate & moot",
            "Interviews",
            "Public speaking",
            "Compèring",
          ],
          body: "The Lab integrates personality development with communication: discussing current social and legal issues, training in analysis, brainstorming and defending or refuting positions — with live debates and moot events. The scholar leaves able to face interviews, speak publicly with proper diction and act as compère or master of ceremonies at any gathering.",
        },
      ],
    },
    finder: {
      categoryLabel: "Languages",
      ages: "Selected scholars",
      level: "All levels",
      duration: "Ongoing enrichment",
      format: "Laboratory sessions",
      status: "In development",
    },
    cta: {
      heading: "Eleven languages. One laboratory.",
      body: "Register to follow the Language Lab as its programmes move from draft to intake.",
      label: "Follow the Language Lab",
    },
  },

  /* ------------------------------------------------ Science and Sustainability */
  {
    slug: "science-sustainability",
    kind: "category",
    title: "Science and Sustainability",
    shortTitle: "Science & Sustainability",
    eyebrow: "Science and sustainability",
    tagline: "Study living systems by asking, testing and applying.",
    intro: [
      "The Science Centre is being designed to connect curriculum knowledge with investigation, design and public purpose. Proposed pathways bring biology, health, agriculture, food systems and environmental responsibility into practical projects that show how evidence informs decisions.",
      "The proposed curriculum integrates biological science with STEAM to build ethics, empathy and social entrepreneurship from Year 6 onwards, framing every project as a solution for an actual person rather than an exercise. Empathy is treated as the first step of the design process, not an afterthought.",
    ],
    seoTitle: "Science and Sustainability for Students | Ananda COE",
    metaDescription:
      "Discover project-based pathways connecting biology, health, agriculture, food science, biotechnology and sustainability.",
    keywords: [
      "practical science programmes for students Sri Lanka",
      "biology workshops for students",
      "food science course students",
      "agriculture STEM programme",
      "sustainability education Sri Lanka",
    ],
    image: "/images/centre-science.jpg",
    imageAlt: "Microscope work in the Centre for Science",
    status: "In development",
    sections: [
      {
        heading: "How science is taught here",
        lead: "Four approaches run through every proposed pathway.",
        items: [
          {
            title: "Problem-based learning",
            body: "Students tackle real issues such as ocean acidification or oil spill clean-up, integrating chemistry, biology and ethics rather than treating them separately.",
          },
          {
            title: "Inquiry-based learning",
            body: "Open-ended exploration that rewards curiosity and critical thinking over recall.",
          },
          {
            title: "Design thinking",
            body: "The engineering design cycle applied to biological problems, beginning with empathy mapping — what a person affected by the problem says, thinks, does and feels.",
          },
          {
            title: "Real-world application",
            body: "Connecting classroom concepts to sports medicine, zoology, agriculture and public health, with community interviews so students hear directly from those affected.",
          },
        ],
      },
      {
        heading: "Three strands",
        lead: "The proposed curriculum spirals across three strands from junior concepts through to professional integrity.",
        numbered: true,
        items: [
          {
            title: "Ethical perspectives",
            body: "From early ethical argumentation and civic commitment through to navigating the implications of globalisation and large-scale social policy.",
          },
          {
            title: "Social innovation",
            body: "Hands-on project work focused on creating socially oriented ventures that address community health and environmental issues.",
          },
          {
            title: "Community development",
            body: "Investing in human capital through education and capacity building, understanding how health and education spending drives long-term community outcomes.",
          },
        ],
      },
    ],
    cta: {
      heading: "Follow programme development.",
      body: "Register to hear as the science pathways move from proposal to intake.",
      label: "Follow programme development",
    },
    children: ["life-sciences-health-sustainability", "agriculture-food-science"],
  },
  {
    slug: "life-sciences-health-sustainability",
    kind: "programme",
    parent: "science-sustainability",
    title: "Life Sciences, Health and Sustainability",
    shortTitle: "Life Sciences, Health & Sustainability",
    eyebrow: "Science and sustainability",
    tagline: "From cells and systems to questions that matter in everyday life.",
    intro: [
      "The proposed pathway begins with classification, cells and human body systems; progresses through microbiology, genetics, ecosystems and biomimicry; and later introduces 3D anatomy, molecular biology, biotechnology, sustainability and biomedical communication.",
      "Projects may connect scientific evidence to a community health map, a supervised bio-enterprise concept or a public explanation of a biological issue.",
    ],
    seoTitle: "Life Sciences, Health and Sustainability | Ananda COE",
    metaDescription:
      "A proposed biology pathway for school students spanning cells, genetics, ecosystems, biotechnology and biomedical communication.",
    keywords: [
      "biology programme for school students Sri Lanka",
      "life sciences",
      "health and sustainability education",
    ],
    image: "/images/course-lifesciences.jpg",
    imageAlt: "Petri dishes and botanical specimens in soft light",
    status: "In development",
    sidebar: [
      {
        label: "Approach",
        primary: "Staged by grade level",
        secondary: "Foundations first, specialisation later",
      },
      {
        label: "Format",
        primary: "Laboratory and project work",
        secondary: "Evidence connected to public purpose",
      },
    ],
    outline: {
      heading: "The staged pathway",
      badges: ["Foundations → specialisation", "Projects with public purpose"],
      items: [
        {
          title: "Foundations of life and systems",
          step: "Stage 1 of 3",
          meta: "Year 6",
          topics: [
            "Classification",
            "Cells",
            "Body systems",
            "Bio-ethics",
            "Community Health Map",
          ],
          body: "Classification of organisms, cell structures and how physical conditions affect survival, alongside human biology through the circulatory and respiratory systems. Students learn to observe closely and record honestly.",
          points: [
            "Empathy through interaction: role-play to understand diverse perspectives and active listening that respects dissenting views.",
            "Bio-ethics and citizenship: an introduction to ethical argumentation, viewing biology through the lens of social transformation.",
            "Foundational entrepreneurship: how simple business models and innovation can address local poverty or health.",
            "Project — The Community Health Map: students identify a local health issue such as nutrition and use art to visualise its impact across different groups.",
          ],
        },
        {
          title: "Middle school exploration",
          step: "Stage 2 of 3",
          meta: "Years 7–9",
          topics: [
            "Microbiology",
            "Genetics",
            "Ecosystems",
            "Biomimicry",
            "Bio-Start-Up Lab",
          ],
          body: "Microbiology, genetics, ecosystems and biomimicry — the design approach that emulates nature's tested patterns and strategies to solve human problems, drawing on billions of years of biological research.",
          points: [
            "Transdisciplinary biology: integrating technology and engineering to solve environmental and biological challenges such as clean water access.",
            "Social value creation: problem-based learning that bridges the knowing-doing gap by researching and pitching a social enterprise.",
            "Human capital basics: how investment in health and education acts as a long-term economic driver for communities.",
            "Project — The Bio-Start-Up Lab: teams design a project plan addressing a community waste issue using biological principles such as composting.",
          ],
        },
        {
          title: "Advanced specialisation",
          step: "Stage 3 of 3",
          meta: "Years 10–13",
          topics: [
            "3D anatomy",
            "Molecular biology",
            "Biotechnology",
            "Sustainability",
            "Bio-entrepreneurship",
          ],
          body: "Human anatomy in 3D digital visualisation, molecular biology and the molecular pathways of disease, biotechnology, environmental sustainability, and communicating biomedical science so complex concepts become accessible.",
          points: [
            "Human resource development in STEM: how it acts as a mechanism for poverty alleviation and community modernisation.",
            "Demography and economics: the interplay between human capital, urbanisation and investment in sustainable growth.",
            "Bio-entrepreneurship: identifying revenue streams, market feasibility for life science products, and financial management.",
            "Professional ethics: mastering the three Cs — curiosity, creativity and competence.",
            "Project — The Community Investment Pitch: propose a social enterprise employing local talent to produce affordable health products, calculating both financial feasibility and social return.",
          ],
        },
        {
          title: "STEAM integration",
          meta: "Across all years",
          topics: [
            "3D printing",
            "Smart greenhouses",
            "Sensors & data",
            "Group roles",
          ],
          body: "Biology is deliberately connected to the other disciplines: 3D printing used to create bionic prosthetics and anatomical models; smart greenhouses built with sensors to track data, then supported by digital or physical campaigns for sustainable farming. Structured group work uses rotating roles — leader, builder, recorder, sharer — so every student practises each.",
        },
      ],
    },
    finder: {
      categoryLabel: "Science & Sustainability",
      ages: "Staged by grade level",
      level: "All levels",
      duration: "Staged pathway",
      format: "Laboratory and project work",
      status: "In development",
    },
    cta: {
      heading: "Follow the pathway as it develops.",
      body: "Register to receive updates as the life sciences pathway is confirmed.",
      label: "Follow programme development",
    },
  },
  {
    slug: "agriculture-food-science",
    kind: "programme",
    parent: "science-sustainability",
    title: "Agriculture and Food Science",
    shortTitle: "Agriculture & Food Science",
    eyebrow: "Science and sustainability",
    tagline: "Follow the journey from farm to table — then improve it.",
    intro: [
      "For younger learners, the proposed pathway explores the journey from farm to table through growing, nutrition, food processing and practical preparation. Older students move towards precision agriculture, food chemistry, engineering, policy and ethics.",
    ],
    seoTitle: "Agriculture and Food Science for Students | Ananda COE",
    metaDescription:
      "A proposed pathway from growing and nutrition to precision agriculture, food chemistry, policy and ethics.",
    keywords: [
      "agriculture and food science course for students Sri Lanka",
      "food science students",
      "agriculture STEM programme",
    ],
    image: "/images/course-agriculture.jpg",
    imageAlt: "Seedlings growing in a bright greenhouse",
    status: "In development",
    sidebar: [
      {
        label: "Younger learners",
        primary: "Farm to table",
        secondary: "Growing, nutrition, food processing and practical preparation",
      },
      {
        label: "Older students",
        primary: "Precision and policy",
        secondary: "Precision agriculture, food chemistry, engineering, policy and ethics",
      },
    ],
    objectives: {
      heading: "Possible investigations",
      intro:
        "Investigations are chosen to show how evidence informs everyday decisions about food and farming.",
      items: [
        "Smart irrigation — designing a drip system that delivers precise water amounts to crops.",
        "Yeast — finding optimal fermentation rates by experimenting with sugar and temperature.",
        "Solar cooking — building a functional solar oven and studying heat conduction and renewable energy.",
        "Hydroponics — growing without soil in a nutrient-rich water system.",
        "Food labels — reading, questioning and verifying claims, and seeing how processing affects nutritional value.",
        "Cereal magnetism — using magnets to extract and visualise the iron added to fortified breakfast cereals.",
        "Preservation — comparing dehydration, pickling and fermentation for shelf life, taste and texture.",
        "Molecular gastronomy — spherification and the reaction between sodium alginate and calcium.",
        "Sustainable meal design — transforming high-fat, high-salt recipes into nutrient-dense alternatives.",
        "A farm-to-table enterprise plan — brand, packaging and marketing strategy for a sustainable food product.",
      ],
    },
    sections: [
      {
        heading: "Five core strands",
        lead: "A field-to-fork learning pathway running from Grade 6 through to A/L.",
        numbered: true,
        items: [
          {
            title: "Agriculture and production",
            body: "Plant life cycles, soil health and nutrient needs, and irrigation models — progressing to precision agriculture with sensors and drones, sustainable industrial farming, and climate change impact.",
          },
          {
            title: "Nutrition and wellness",
            body: "The major nutrient groups, reading food labels and adolescent caloric needs — progressing to macronutrients and micronutrients, dietary requirements across the life cycle, and the link between food and disease prevention.",
          },
          {
            title: "Food science and chemistry",
            body: "Physical versus chemical changes in cooking and preservation — progressing to molecular gastronomy, fermentation chemistry and the role of microbiology in food safety.",
          },
          {
            title: "Food processing and technology",
            body: "Drying, canning and freezing to prevent spoilage — progressing to industrial production methods, food safety and hygiene, labelling and sustainable packaging.",
          },
          {
            title: "Culinary arts",
            body: "Kitchen safety, precise measurement and basic methods such as stewing and baking, integrating mathematical concepts of measurement and portioning.",
          },
        ],
      },
      {
        heading: "Engineering and policy",
        lead: "For older students, the pathway moves towards design and the decisions that shape food systems.",
        items: [
          {
            title: "Engineering",
            body: "Designing hydrogels for water retention, or automated harvesting robots.",
          },
          {
            title: "Policy and ethics",
            body: "Food insecurity, global population challenges, and the influence of marketing on diet.",
          },
        ],
      },
    ],
    finder: {
      categoryLabel: "Science & Sustainability",
      ages: "Staged by grade level",
      level: "All levels",
      duration: "Staged pathway",
      format: "Field and laboratory work",
      status: "In development",
    },
    cta: {
      heading: "Follow the pathway as it develops.",
      body: "Register to receive updates as the agriculture and food science pathway is confirmed.",
      label: "Follow programme development",
    },
  },

  /* ------------------------------------------------ Mathematics */
  {
    slug: "mathematics-olympiad",
    kind: "category",
    title: "Mathematics and Olympiad Learning",
    shortTitle: "Mathematics & Olympiad",
    eyebrow: "Mathematics and Olympiad learning",
    tagline: "Make mathematical thinking visible.",
    intro: [
      "The proposed mathematics laboratories help students handle ideas, not only symbols. Manipulatives, diagrams, models, digital tools, experiments and discussion can reveal patterns and support the persistence required for unfamiliar problems.",
    ],
    seoTitle: "Mathematics Enrichment and Olympiad Learning | Ananda COE",
    metaDescription:
      "Explore hands-on mathematics, mathematical modelling, visualisation and Olympiad problem-solving at the Centre of Excellence.",
    keywords: [
      "mathematics enrichment Sri Lanka",
      "Olympiad mathematics training Sri Lanka",
      "maths problem-solving for students",
      "mathematics lab school",
      "competitive mathematics course",
    ],
    image: "/images/centre-math.jpg",
    imageAlt: "Geometric models in the Mathematics Centre",
    status: "Learning spaces in development",
    sections: [
      {
        heading: "Culture before contests",
        lead: "The spirit of the laboratory matters more than its equipment.",
        items: [
          { title: "Persistence and curiosity are valued over speed." },
          { title: "Creative approaches are rewarded, not only correct answers." },
          { title: "A Problem of the Month is displayed alongside student solutions." },
          { title: "Art and mathematics meet — designing with symmetry, exploring fractals." },
          {
            title: "Teachers are trained in Olympiad-style pedagogy",
            body: "Following Pólya's problem-solving principles: understand, plan, solve, reflect.",
          },
          {
            title: "Research projects bridge Olympiad thinking with STEAM exploration",
            body: "Investigating patterns in Pascal's triangle using code, exploring minimal surfaces, studying prime distributions, and designing fractals to explore recursive relations.",
          },
        ],
      },
    ],
    sidebar: [
      {
        label: "Two laboratories",
        primary: "Hands-on Mathematics · Olympiad Mathematics",
        secondary: "Across grade levels",
      },
      {
        label: "Learning sequence",
        primary: "Foundation → exploration → advanced preparation",
        secondary: "Monthly mock examinations proposed for the Olympiad laboratory",
      },
    ],
    outline: {
      heading: "Two laboratories",
      badges: ["Ideas, not only symbols"],
      items: [
        {
          title: "Hands-on Mathematics Laboratory",
          meta: "Enrichment and modelling",
          topics: [
            "Manipulatives",
            "GeoGebra & Desmos",
            "Coding patterns",
            "3D printing",
            "Modelling",
          ],
          body: "Physical manipulatives, visualisation, art and design, experiment kits, technology, coding and robotics — supporting classroom concepts, mathematical modelling and collaborative investigations across grade levels.",
          points: [
            "Geometry and measurement: geoboards, 2D and 3D shape models, isometric drawing kits, mirrors for symmetry, tangrams and pattern blocks, angle finders and clinometers.",
            "Algebra and arithmetic: algebra tiles for visualising equations and polynomials, number lines, fraction kits, base-ten blocks, Cuisenaire rods and the abacus.",
            "Technology: GeoGebra, Desmos and PhET simulations; Scratch and Python for coding mathematical patterns; spreadsheets; graphing tools; Arduino and micro:bit kits; and a 3D printer for solids, fractals and tessellations.",
            "Art and design integration: origami, string art boards, mosaic and tessellation tiles, and Tinkercad for 3D modelling.",
            "Experimentation: balance scales, measuring cylinders, probability spinners and dice, pendulums and stopwatches, and construction sets for geometric and algebraic reasoning.",
            "Example activities: tessellation murals, drawing geometric figures in code, paper bridges tested for load, sensor data collection for statistics, and folding polyhedra to study surface area and volume.",
          ],
        },
        {
          title: "Olympiad Mathematics Laboratory",
          meta: "Non-routine problem-solving",
          topics: [
            "Number theory",
            "Combinatorics",
            "Geometry",
            "Algebra",
            "Logic & games",
            "Mock contests",
          ],
          body: "Non-routine problem-solving, mathematical discussion, research, mentoring and regular practice. The laboratory shifts focus from tools to thinking: a Problem Solving Zone posts new challenges weekly, and open-ended exploration is valued over simply reaching an answer — students are asked to find multiple methods.",
          points: [
            "Number theory corner: modular arithmetic, primes and Diophantine equations, using counters to simulate remainders and patterns.",
            "Combinatorics corner: counting, probability and arrangements, with blocks, cards, spinners and coded simulations.",
            "Geometry corner: constructions, transformations and loci, using GeoGebra, compass sets, transparent grids and mirrors.",
            "Algebra corner: functional equations and inequalities, with algebra tiles, graphing tools and symbolic manipulators.",
            "Logic and games corner: strategy and reasoning through tangrams, logic puzzles, chessboards and games such as Nim and the Tower of Hanoi.",
            "A reference library of Olympiad training texts and past papers from the IMO, APMO and Sri Lankan national olympiads.",
            "Technology for advanced exploration: GeoGebra, Desmos, WolframAlpha and simple Python or C++ workstations for testing conjectures.",
            "Weekly problem-solving circles, small-group discussion pods with whiteboards, monthly mock contests, and workshops led by former national Olympiad participants.",
          ],
        },
      ],
    },
    finder: {
      categoryLabel: "Mathematics",
      ages: "Across grade levels",
      level: "All levels",
      duration: "Ongoing enrichment",
      format: "Laboratory sessions",
      status: "In development",
    },
    cta: {
      heading: "Follow the Mathematics Centre.",
      body: "Register to hear when the mathematics laboratories open for enrolment.",
      label: "Follow the Mathematics Centre",
    },
  },

  /* ------------------------------------------------ Good Ambassadors */
  {
    slug: "good-ambassadors-programme",
    kind: "category",
    title: "Good Ambassadors Programme",
    shortTitle: "Good Ambassadors Programme",
    eyebrow: "Character, leadership and citizenship",
    tagline: "Represent yourself and your community with purpose.",
    intro: [
      "The Good Ambassadors Auditorium is not an auditorium in the usual sense. Its purpose is to propagate learning by doing things differently — nurturing character and inner greatness so that a student's journey moves from educated to enlightened, then empowered, then extraordinary.",
      "The proposed programme gives students a structured space to reflect on character, emotional maturity, citizenship and service. It asks not only what students can achieve, but how they respond to pressure, difference, responsibility and the freedom of digital life.",
    ],
    seoTitle: "Good Ambassadors Character and Citizenship Programme",
    metaDescription:
      "A student programme in purpose, character, emotional strength, digital citizenship, civility, service and personal standards, measured by Gross Individual Happiness.",
    keywords: [
      "character development programme for students Sri Lanka",
      "student leadership programme Colombo",
      "digital citizenship for students",
      "values education programme",
      "emotional resilience students",
    ],
    image: "/images/course-ambassadors.jpg",
    imageAlt: "Students walking together along a heritage corridor",
    status: "Register your interest",
    sidebar: [
      {
        label: "The measure of success",
        primary: "Gross Individual Happiness",
        secondary:
          "The programme's ultimate indicator — success measured not only by achievement, but by goodness, wellbeing, purpose and contribution",
      },
      {
        label: "Format",
        primary: "Weekly auditorium engagements",
        secondary: "A 45–60 minute values talk plus about 30 minutes of questions, discussion and reflection",
      },
      {
        label: "Reflection & action",
        primary: "Journals, participation and action projects",
        secondary: "Every session closes with reflection journaling and an action habit for the week",
      },
      {
        label: "Recognition",
        primary: "Good Ambassador of the Year",
        secondary:
          "Annual recognition, with certification signed by the Centre of Excellence, the Principal and an external panel",
      },
    ],
    objectives: {
      heading: "What the programme develops",
      intro:
        "The curriculum combines content, experience, reflection, storytelling and the examples of people who have overcome real adversity. Character multiplied by capability is the equation the programme works towards.",
      items: [
        "Strengthen moral identity and a clear sense of personal purpose.",
        "Develop emotional mastery: handling setbacks, rejection and fear without giving up.",
        "Practise gratitude, mindfulness, empathy and humility as daily habits.",
        "Understand civility, discipline, respect and collective responsibility.",
        "Exercise responsible freedom and considered digital citizenship.",
        "Hold patriotism together with a genuinely global perspective.",
        "Lead through kindness and become a confident, positive influence on others.",
        "Represent Ananda — and Sri Lanka — honourably wherever they go.",
      ],
    },
    outline: {
      heading: "Ten modules",
      badges: ["Values talk + discussion", "Journals and action projects"],
      items: [
        { title: "Goodness and purpose", step: "Module 1 of 10" },
        { title: "Character beyond intelligence", step: "Module 2 of 10" },
        { title: "Emotional strength and handling pressure", step: "Module 3 of 10" },
        { title: "Global ambassadorship", step: "Module 4 of 10" },
        { title: "Digital citizenship and responsible freedom", step: "Module 5 of 10" },
        { title: "The power of giving", step: "Module 6 of 10" },
        { title: "Civility and etiquette", step: "Module 7 of 10" },
        { title: "Gratitude, forgiveness and inner calm", step: "Module 8 of 10" },
        { title: "Identity, discipline and personal standards", step: "Module 9 of 10" },
        {
          title: "The greatness journey",
          step: "Module 10 of 10",
          body: "The closing module returns to Gross Individual Happiness as a personal compass, with measurement and reflection on how far each student has travelled.",
        },
      ],
    },
    sections: [
      {
        heading: "How sessions run",
        lead: "Learning happens through reflection, dialogue and questioning rather than instruction.",
        items: [
          { title: "Inspirational talks and interactive conversations" },
          { title: "Case studies and real-world examples" },
          { title: "Motivational films and dramas" },
          { title: "Guest speakers — local and international role models" },
          { title: "Live sharing of adversity-to-breakthrough journeys" },
          { title: "Reflection journaling and a weekly action habit" },
        ],
      },
      {
        heading: "Beyond the sessions",
        lead: "Opportunities for students who want to carry the work further.",
        items: [
          {
            title: "Goodness Ambassador mentoring track",
            body: "Students who sustain the practice can mentor others coming through the programme.",
          },
          {
            title: "Volunteerism and community service",
            body: "Goodness action projects that put values to work outside the school gates.",
          },
          {
            title: "National and global exposure",
            body: "Opportunities including international exchange pathways.",
          },
          {
            title: "Alumni mentorship",
            body: "Post-school mentorship so inner development continues beyond the programme.",
          },
        ],
      },
    ],
    admission: {
      heading: "Assessment and certification",
      tabs: [
        {
          label: "How progress is assessed",
          items: [
            {
              title: "Reflection journals",
              body: "The primary record of how a student is thinking, not only what they have attended.",
            },
            {
              title: "Personal GIH growth scale",
              body: "A personal Gross Individual Happiness scale tracked across the cycle.",
            },
            {
              title: "Goodness action projects",
              body: "Practical contributions to the school or wider community.",
            },
            {
              title: "Participation and consistency",
              body: "Sustained engagement is treated as evidence in its own right.",
            },
          ],
        },
        {
          label: "Certification",
          items: [
            {
              title: "End-of-cycle certification",
              body: "Certificates are signed by the Centre of Excellence, the Principal and a special external panel.",
            },
            {
              title: "Good Ambassador of the Year",
              body: "Annual recognition celebrating sustained contribution to the school and the wider community.",
            },
          ],
        },
      ],
    },
    policy: {
      title: "Character × Capability = Greatness",
      body: [
        "The programme is built on values-based education with real-world relevance, treating Gross Individual Happiness as a personal compass rather than a score. Growth mindset and goodness mindset are developed at the same time.",
        "The intention is that this becomes a national benchmark for values-based global ambassadorship — reminding every Anandian that being a good ambassador enhances the image of the nation while helping the individual grow and flourish.",
      ],
    },
    finder: {
      categoryLabel: "Character & Citizenship",
      ages: "Open to school students",
      level: "All levels",
      duration: "Ten modules",
      format: "Face-to-face sessions",
      status: "Register interest",
    },
    cta: {
      heading: "Lead by example.",
      body: "Register for programme updates as sessions and intakes are confirmed.",
      label: "Register for programme updates",
    },
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const getChildren = (course: Course): Course[] =>
  (course.children ?? []).map((slug) => getCourse(slug)!).filter(Boolean);

/** Everything that appears in the course finder (programmes + standalone categories). */
export const finderCourses = courses.filter((c) => c.finder);

export const categories = courses.filter((c) => c.kind === "category");
