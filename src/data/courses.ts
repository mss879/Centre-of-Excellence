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
  meta?: string;
  body?: string;
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
        primary: "Selective cohort",
        secondary: "Based on a standardised aptitude assessment; final process to be confirmed",
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
      badges: ["Four phases", "Project-based learning", "Facilitation over lecturing"],
      items: [
        {
          title: "Phase 1: Spark, exploration & foundations",
          meta: "Year 1, Term 1",
          body: "The first term establishes the language of AI through AI foundations, Python, mathematics for machine learning, design thinking and communication. Practical laboratories introduce prompting, application programming interfaces and small experiments.",
        },
        {
          title: "Phase 2: Build, core skills & data science",
          meta: "Year 1, Term 2",
          body: "Students deepen their work in Python, data science, probability and statistics. Laboratories move through structured data practice and the first machine-learning models, building the habits of careful experimentation.",
        },
        {
          title: "Phase 2: Build, advanced deep learning & AI workflows",
          meta: "Year 2, Term 1",
          body: "Work advances into machine learning, neural networks and deep learning. Laboratories progress through model development, computer vision, natural-language processing and organised AI workflows.",
        },
        {
          title: "Phase 3: Launch, specialisation & impact",
          meta: "Year 2, Term 2",
          body: "Students select an application pathway and work in teams of three or four. Over a planned twelve-week capstone, each team develops and tests a prototype, records how its model should be used, examines ethical effects and presents the work.",
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
        lead: "In Phase 3, each team selects one industry pathway for its capstone.",
        items: [
          { title: "Healthcare" },
          { title: "Finance and insurance" },
          { title: "Smart manufacturing and tourism" },
          { title: "Logistics and supply chains" },
          { title: "Cybersecurity" },
          { title: "Retail and marketing" },
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
          ],
        },
      ],
    },
    policy: {
      title: "Academic continuity & exam freeze",
      body: [
        "To protect performance in national examinations, the proposed curriculum features a blackout period before G.C.E. A/L examinations in which no new modules are introduced. Students may defer capstone defences until after their A/Ls.",
        "All intellectual property created in the programme remains the property of the student creator.",
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
      "This twelve-session workshop introduces students to the journey from identifying a useful problem to presenting an improved physical-computing project. Participants explore programming, electronics, Arduino, sensors, actuators and 3D design before bringing the pieces together in a final showcase.",
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
        primary: "Teaching may be offered in a preferred language",
        secondary: "Materials are planned in English",
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
          meta: "Session 1",
          body: "How science, technology, engineering, the arts and mathematics combine around real problems — and what the workshop will build towards.",
        },
        {
          title: "Creativity, observation and needs-finding",
          meta: "Session 2",
          body: "Noticing needs, patterns and possibilities, and framing a problem worth solving.",
        },
        {
          title: "Programming fundamentals",
          meta: "Session 3",
          body: "First programs: instructions, sequences, variables and logic.",
        },
        {
          title: "Problem-solving and debugging",
          meta: "Session 4",
          body: "Reading errors, isolating causes and fixing code methodically.",
        },
        {
          title: "Electronics fundamentals",
          meta: "Session 5",
          body: "Circuits, components and safe prototyping practice.",
        },
        {
          title: "Arduino and coding",
          meta: "Session 6",
          body: "Bringing code and electronics together on a microcontroller.",
        },
        {
          title: "Sensors and actuators",
          meta: "Session 7",
          body: "Reading the world through sensors and responding through motors, lights and sound.",
        },
        {
          title: "3D design",
          meta: "Session 8",
          body: "Designing simple parts and enclosures in Tinkercad.",
        },
        {
          title: "Project development and presentation",
          meta: "Session 9",
          body: "Assembling the project and learning to explain the problem, process and result.",
        },
        {
          title: "Testing, feedback and improvement",
          meta: "Session 10",
          body: "Observing what happens, collecting feedback and identifying limitations.",
        },
        {
          title: "3D printing and fabrication",
          meta: "Session 11",
          body: "Printing designed parts and finishing the physical build.",
        },
        {
          title: "Final showcase",
          meta: "Session 12",
          body: "Presenting the developed project — problem, process and result — to an audience.",
        },
      ],
    },
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
    eyebrow: "Student Entrepreneurship Accelerator",
    tagline: "Start with a problem worth understanding.",
    intro: [
      "The proposed Student Entrepreneurship Accelerator is a year-long, project-based programme in which students investigate a real need, test their assumptions, build a useful first solution and present what they have learned. Progress is judged by evidence, honesty and improvement.",
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
        primary: "Proposed 20–30 students",
        secondary: "Final grade range to be confirmed",
      },
      {
        label: "Approach",
        primary: "Project-based accelerator",
        secondary: "Progress judged by evidence, honesty and improvement",
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
          title: "Stage 1 — Discover",
          meta: "Problem discovery",
          body: "Students define an area of interest, speak with approved potential users and use tools such as the Five Whys to move from symptoms to underlying needs. They examine existing solutions before proposing another one. Stage evidence: at least six documented interviews and a clear problem statement.",
        },
        {
          title: "Stage 2 — Define",
          meta: "Assumptions & first prototype",
          body: "Students generate possible responses, identify critical assumptions, create a low-fidelity prototype and gather structured feedback. Stage evidence: feedback from at least three approved users and a reasoned decision about what to change.",
        },
        {
          title: "Stage 3 — Build",
          meta: "Minimum viable product",
          body: "Students develop a minimum viable product, test it with a small approved user group and iterate. The aim is evidence that the team can turn learning into a more useful solution. Stage evidence: a working first version, feedback from five approved users and a concise explanation of the product and learning.",
        },
        {
          title: "Stage 4 — Launch",
          meta: "Demo Day",
          body: "Teams prepare a focused demonstration explaining the need, evidence, solution, limitations and next step. The proposed Demo Day format gives each team eight minutes to present and five minutes for questions — without rankings or prizes.",
        },
      ],
    },
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
              title: "Commitment",
              body: "Students should be able to attend one after-school session every two weeks across the full year, and to work with their team between sessions.",
            },
          ],
        },
        {
          label: "How selection works",
          items: [
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
    finder: {
      categoryLabel: "Entrepreneurship",
      ages: "Grade range to be confirmed",
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
    tagline: "Learn to make media with technical skill and editorial care.",
    intro: [
      "The proposed media pathway introduces students to creating, refining and publishing responsible work across sound, video, live production and journalism. Five stackable short courses are designed for different age and grade groups, from a first podcast to a simulated newsroom.",
      "Media literacy grows when students understand both how content is produced and why production choices matter. These programmes combine technical workflow, teamwork, storytelling, ethics, rights and audience awareness.",
    ],
    seoTitle: "Media Courses for Students in Sri Lanka | Ananda COE",
    metaDescription:
      "Explore student courses in podcasting, mobile journalism, post-production, motion graphics, live broadcasting and news production.",
    keywords: [
      "media production courses for students Sri Lanka",
      "podcasting course Sri Lanka",
      "video production for students",
      "broadcasting course Colombo",
      "digital journalism course",
    ],
    image: "/images/centre-media.jpg",
    imageAlt: "Broadcast camera in the Media Studio",
    sections: [
      {
        heading: "A stackable pathway",
        lead: "Each course is complete in itself — and each builds towards the next.",
        numbered: true,
        items: [
          {
            title: "Digital Podcasting, Audio Engineering and Acoustic Dynamics",
            body: "Ages 12–14 · 15 hours — from basic audio principles to an original podcast pilot.",
          },
          {
            title: "Mobile Journalism, Drone Operations and Field Production",
            body: "Ages 12–15 · 18 hours — a supervised, mobile-first field story from planning to capture.",
          },
          {
            title: "Post-Production, Motion Graphics and AI Prompt Engineering",
            body: "Ages 15–16 · 24 hours — editing, colour, audio finishing and motion graphics.",
          },
          {
            title: "Live Multi-Camera Studio Broadcasting",
            body: "Ages 16–18 · 30 hours — a live broadcast made to work as one system.",
          },
          {
            title: "Digital Journalism and News Production Technology",
            body: "Ages 16–18 · 30 hours — ethics, verification and a simulated newsroom.",
          },
        ],
      },
    ],
    cta: {
      heading: "Five stackable courses. One pathway.",
      body: "From a first podcast at twelve to a simulated newsroom at eighteen — each course builds on the last.",
      label: "Register for course updates",
    },
    children: [
      "digital-podcasting-audio-engineering",
      "mobile-journalism-field-production",
      "post-production-motion-graphics-ai",
      "live-studio-broadcasting",
      "digital-journalism-news-production",
    ],
  },
  {
    slug: "digital-podcasting-audio-engineering",
    kind: "programme",
    parent: "media-communication",
    title: "Digital Podcasting, Audio Engineering and Acoustic Dynamics",
    shortTitle: "Digital Podcasting & Audio Engineering",
    eyebrow: "Media and communication",
    tagline: "Turn an idea into a podcast people can hear clearly.",
    intro: [
      "This introductory course helps students understand how sound behaves, how microphones capture it and how careful recording and editing shape the listener's experience. Across five planned three-hour sessions, participants move from basic audio principles to an original podcast pilot.",
    ],
    seoTitle: "Podcasting and Audio Course for Students | Ananda COE",
    metaDescription:
      "A 15-hour course for ages 12-14 covering sound, microphones, studio practice, audio editing and an original podcast pilot.",
    keywords: [
      "podcasting course for students Sri Lanka",
      "audio engineering for school students",
      "podcast workshop Colombo",
      "student podcast production",
    ],
    image: "/images/course-podcast.jpg",
    imageAlt: "Studio microphone in soft light",
    status: "Register your interest",
    sidebar: [
      {
        label: "Audience",
        primary: "Ages 12–14 · Grades 7–9",
        secondary: "Introductory — no experience required",
      },
      {
        label: "Duration",
        primary: "15 hours across five sessions",
        secondary: "Three hours per session",
      },
      {
        label: "Final work",
        primary: "Original podcast pilot",
        secondary: "Recorded, edited and ready to share",
      },
    ],
    objectives: {
      heading: "What the course covers",
      items: [
        "How sound behaves — acoustics, rooms and the basics of hearing well.",
        "How microphones capture sound, and which microphone suits which task.",
        "Studio recording practice: levels, technique and working quietly as a team.",
        "Audio editing: cutting, cleaning and shaping a listener's experience.",
        "Planning, recording and finishing an original podcast pilot.",
      ],
    },
    finder: {
      categoryLabel: "Media & Communication",
      ages: "Ages 12–14",
      level: "Introductory",
      duration: "15 hours",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Find your voice on air.",
      body: "Register to receive dates, studio details and enrolment information as they are confirmed.",
      label: "Register interest",
    },
  },
  {
    slug: "mobile-journalism-field-production",
    kind: "programme",
    parent: "media-communication",
    title: "Mobile Journalism, Drone Operations and Field Production",
    shortTitle: "Mobile Journalism & Field Production",
    eyebrow: "Media and communication",
    tagline: "Report from the field with purpose, safety and control.",
    intro: [
      "This practical course introduces the planning and production skills behind a short mobile-first field story. Students learn optics and framing, stable camera movement, location sound, portable lighting and the preparation required before a crew begins recording.",
    ],
    seoTitle: "Mobile Journalism and Field Production for Students",
    metaDescription:
      "An 18-hour student course in mobile video, framing, stabilisation, field audio, lighting and responsible drone-production basics.",
    keywords: [
      "mobile journalism course Sri Lanka",
      "field video production course",
      "smartphone filmmaking students",
      "drone media course Sri Lanka",
    ],
    image: "/images/course-mojo.jpg",
    imageAlt: "Student filming with a stabilised smartphone rig",
    status: "Register your interest",
    sidebar: [
      {
        label: "Audience",
        primary: "Ages 12–15 · Grades 7–10",
        secondary: "Introductory — smartphone-first",
      },
      {
        label: "Duration",
        primary: "18 hours across six sessions",
        secondary: "Classroom preparation plus supervised field work",
      },
      {
        label: "Final work",
        primary: "Supervised short field production",
        secondary: "A complete mobile-first field story",
      },
    ],
    objectives: {
      heading: "What the course covers",
      items: [
        "Optics and framing — composing shots that tell the story.",
        "Stable camera movement with handheld and gimbal technique.",
        "Location sound: capturing clean audio outside the studio.",
        "Portable lighting for real-world conditions.",
        "Production planning — the preparation before a crew records.",
        "Responsible drone basics: regulation, risk, permissions and supervised planning.",
      ],
    },
    policy: {
      title: "Drone operations are supervised",
      body: [
        "The drone component begins with regulation, risk, permissions and supervised production planning. Any flight activity depends on the required approvals and qualified supervision.",
      ],
    },
    finder: {
      categoryLabel: "Media & Communication",
      ages: "Ages 12–15",
      level: "Introductory",
      duration: "18 hours",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Tell stories from the field.",
      body: "Register to receive confirmed dates, equipment details and enrolment information.",
      label: "Register for updates",
    },
  },
  {
    slug: "post-production-motion-graphics-ai",
    kind: "programme",
    parent: "media-communication",
    title: "Post-Production, Motion Graphics and AI Prompt Engineering",
    shortTitle: "Post-Production & Motion Graphics",
    eyebrow: "Media and communication",
    tagline: "Shape raw material into a coherent story.",
    intro: [
      "Post-production is where technical accuracy and creative judgement meet. This eight-session course introduces students to video signals and media organisation before moving through editing, colour, audio finishing, motion graphics and selected AI-assisted workflows.",
    ],
    seoTitle: "Video Editing, Motion Graphics and AI Course for Students",
    metaDescription:
      "A 24-hour course for ages 15-16 in editing, colour, audio, motion graphics and responsible AI-assisted production.",
    keywords: [
      "video editing course for students Sri Lanka",
      "motion graphics course Colombo",
      "DaVinci Resolve course students",
      "AI media course Sri Lanka",
    ],
    image: "/images/course-postprod.jpg",
    imageAlt: "Colour-grading suite with editing controls",
    status: "Register your interest",
    sidebar: [
      {
        label: "Audience",
        primary: "Ages 15–16 · Grades 10–11",
        secondary: "Intermediate — builds on basic camera skills",
      },
      {
        label: "Duration",
        primary: "24 hours across eight sessions",
        secondary: "Suite-based practical work",
      },
      {
        label: "Final work",
        primary: "A small post-production portfolio",
        secondary: "Edited, graded and finished pieces",
      },
    ],
    objectives: {
      heading: "What the course covers",
      items: [
        "Video signals and media organisation — the technical foundation of every edit.",
        "Editing: structure, rhythm and storytelling decisions.",
        "Colour: correction and grading for mood and consistency.",
        "Audio finishing: dialogue, music and mix.",
        "Motion graphics: titles and animated elements.",
        "Selected AI-assisted workflows — used deliberately and responsibly.",
      ],
    },
    finder: {
      categoryLabel: "Media & Communication",
      ages: "Ages 15–16",
      level: "Intermediate",
      duration: "24 hours",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Master the edit.",
      body: "Register to receive course dates, software details and enrolment information as they are confirmed.",
      label: "Register interest",
    },
  },
  {
    slug: "live-studio-broadcasting",
    kind: "programme",
    parent: "media-communication",
    title: "Live Multi-Camera Studio Broadcasting",
    shortTitle: "Live Studio Broadcasting",
    eyebrow: "Media and communication",
    tagline: "Learn what it takes to make live production work as one system.",
    intro: [
      "A live broadcast depends on many people making clear decisions at the right moment. Across ten planned sessions, students explore studio signal flow, crew roles, camera and switcher operation, lighting, live sound, directing, graphics, streaming and fault-finding.",
    ],
    seoTitle: "Live Studio Broadcasting Course for School Students",
    metaDescription:
      "A 30-hour course for ages 16-18 covering signal flow, production roles, switching, lighting, live audio, directing and streaming.",
    keywords: [
      "broadcasting course for students Sri Lanka",
      "live studio production course",
      "multi-camera course Colombo",
      "television production for students",
    ],
    image: "/images/course-broadcast.jpg",
    imageAlt: "Broadcast control room in low light",
    status: "Register your interest",
    sidebar: [
      {
        label: "Audience",
        primary: "Ages 16–18 · Grades 11–13",
        secondary: "Advanced — crew-based studio work",
      },
      {
        label: "Duration",
        primary: "30 hours across ten sessions",
        secondary: "Every student rotates through the crew roles",
      },
      {
        label: "Final work",
        primary: "Supervised multi-camera capstone event",
        secondary: "Broadcast live as one crew",
      },
    ],
    objectives: {
      heading: "What the course covers",
      items: [
        "Studio signal flow — how every source reaches the programme output.",
        "Crew roles and communication: who decides what, and when.",
        "Camera and switcher operation under live conditions.",
        "Lighting and live sound for the studio floor.",
        "Directing, graphics and streaming.",
        "Fault-finding — keeping the broadcast alive when something breaks.",
      ],
    },
    finder: {
      categoryLabel: "Media & Communication",
      ages: "Ages 16–18",
      level: "Advanced",
      duration: "30 hours",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Take the director's chair.",
      body: "Register to receive studio dates, crew-role details and enrolment information.",
      label: "Register interest",
    },
  },
  {
    slug: "digital-journalism-news-production",
    kind: "programme",
    parent: "media-communication",
    title: "Digital Journalism and News Production Technology",
    shortTitle: "Digital Journalism & News Production",
    eyebrow: "Media and communication",
    tagline: "Ask better questions. Verify before you publish.",
    intro: [
      "This ten-session course introduces the principles and production practices behind trustworthy digital journalism. Students examine journalism history, ethics and relevant law before practising research, verification, news writing, teleprompter presentation, field gathering and short-form production.",
    ],
    seoTitle: "Digital Journalism Course for School Students in Sri Lanka",
    metaDescription:
      "A 30-hour course for ages 16-18 in journalism ethics, research, news writing, presentation and newsroom production.",
    keywords: [
      "digital journalism course Sri Lanka",
      "journalism course for school students",
      "news production course Colombo",
      "student newsroom programme",
    ],
    image: "/images/course-journalism.jpg",
    imageAlt: "Student presenting at a news desk",
    status: "Register your interest",
    sidebar: [
      {
        label: "Audience",
        primary: "Ages 16–18 · Grades 11–13",
        secondary: "Advanced — newsroom-style teamwork",
      },
      {
        label: "Duration",
        primary: "30 hours across ten sessions",
        secondary: "Principles first, then production practice",
      },
      {
        label: "Final work",
        primary: "A simulated newsroom production",
        secondary: "Researched, verified, written and presented",
      },
    ],
    objectives: {
      heading: "What the course covers",
      items: [
        "Journalism history, ethics and relevant law — before anything is published.",
        "Research and verification: checking before claiming.",
        "News writing for digital audiences.",
        "Teleprompter presentation and on-camera delivery.",
        "Field gathering and short-form production.",
        "Working as a newsroom: editorial decisions under deadline.",
      ],
    },
    finder: {
      categoryLabel: "Media & Communication",
      ages: "Ages 16–18",
      level: "Advanced",
      duration: "30 hours",
      format: "In person",
      status: "Register interest",
    },
    cta: {
      heading: "Report what matters.",
      body: "Register to receive confirmed dates, newsroom details and enrolment information.",
      label: "Register for updates",
    },
  },

  /* ------------------------------------------------ Fine and Digital Arts */
  {
    slug: "fine-digital-arts",
    kind: "category",
    title: "Fine and Digital Arts",
    shortTitle: "Fine & Digital Arts",
    eyebrow: "Fine and Digital Arts Programme",
    tagline: "Develop a visual language across physical and digital media.",
    intro: [
      "The proposed Fine Arts and Digital Arts Programme combines observation and studio practice with contemporary tools for illustration, animation, 3D design, photography, video and user experience. Students progress through age-appropriate levels while building a body of original work.",
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
    ],
    sections: [
      {
        heading: "Three streams",
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
    ],
    outline: {
      heading: "Three levels",
      badges: ["Age-appropriate progression", "A growing body of original work"],
      items: [
        {
          title: "Foundation",
          meta: "Grades 6–8",
          body: "Students build confidence in observation, materials, colour and visual storytelling through self-portraits, nature sketchbooks, digital doodles, comics, clay work, photography, collaborative murals, paper structures and calligraphy.",
        },
        {
          title: "Intermediate",
          meta: "Grades 9–10",
          body: "Students deepen technical control through portraiture, mixed media, brand identity, stop-motion, outdoor drawing, printmaking, 3D characters, user-interface design and work responding to a social idea.",
        },
        {
          title: "Advanced",
          meta: "Post-O/L and A/L",
          body: "Students develop a coherent portfolio and undertake more independent work in exhibition curation, motion and visual effects, installation, photography, 3D environments and integrated creative campaigns.",
        },
      ],
    },
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
          meta: "Where English comes from",
          body: "The historical formation of Old, Middle and Modern English and its place beside Sinhala in the Indo-European family of languages; Zeylanicisms and common errors in Sri Lankan English; speech and elocution; words mispronounced because certain letters are absent from the Sinhala alphabet; diphthong sounds; the island's fondly collected malapropisms; and the value of reading and a rich vocabulary.",
        },
        {
          title: "Conversation and confidence",
          meta: "Speak first",
          body: "Reading books rich in dialogue — colloquial and refined — and conversing with fluent speakers builds self-confidence and natural skill. Grammar rules are taught when necessary rather than as a separate hurdle.",
        },
        {
          title: "Language and literature",
          meta: "The formal syllabus",
          body: "A syllabus for English language and literature prepared by the instructors and qualified individuals in due course, based on standard methods — supported by films, CDs and literature for self-study, with instructors always available to guide, and material covering examinations and practice tests.",
        },
        {
          title: "Personality and public communication",
          meta: "Beyond the classroom",
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
          title: "Beginnings",
          meta: "Foundations",
          body: "Classification, cells and human body systems — learning to observe closely and record honestly.",
        },
        {
          title: "Progression",
          meta: "Investigation",
          body: "Microbiology, genetics, ecosystems and biomimicry — investigation across living systems.",
        },
        {
          title: "Later stages",
          meta: "Specialisation",
          body: "3D anatomy, molecular biology, biotechnology, sustainability and biomedical communication.",
        },
        {
          title: "Projects",
          meta: "Public purpose",
          body: "A community health map, a supervised bio-enterprise concept, or a public explanation of a biological issue — scientific evidence applied where it matters.",
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
        "Smart irrigation — sensing and responding to what plants actually need.",
        "Yeast — the living chemistry behind everyday food.",
        "Solar cooking — energy, design and practical preparation.",
        "Hydroponics — growing without soil.",
        "Food labels — reading, questioning and verifying claims.",
        "Preservation — keeping food safe and useful for longer.",
        "Sustainable meal design — nutrition, cost and footprint together.",
        "A farm-to-table enterprise plan — from evidence to a responsible proposal.",
      ],
    },
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
          body: "Physical manipulatives, visualisation, art and design, experiment kits, technology, coding and robotics — supporting classroom concepts, mathematical modelling and collaborative investigations across grade levels.",
        },
        {
          title: "Olympiad Mathematics Laboratory",
          meta: "Non-routine problem-solving",
          body: "Non-routine problem-solving, mathematical discussion, research, mentoring and regular practice. Proposed features include themed problem areas, a resource library, technology for visualisation and monthly mock examinations. The learning sequence moves from foundation and exploration towards more advanced Olympiad preparation.",
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
      "The proposed Good Ambassadors Programme gives students a structured space to reflect on character, emotional maturity, citizenship and service. It asks not only what students can achieve, but how they respond to pressure, difference, responsibility and the freedom of digital life.",
    ],
    seoTitle: "Good Ambassadors Character and Citizenship Programme",
    metaDescription:
      "A student programme in purpose, character, emotional strength, digital citizenship, civility, service and personal standards.",
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
        label: "Format",
        primary: "Face-to-face sessions",
        secondary: "A 45–60 minute values talk plus about 30 minutes of questions, discussion and reflection",
      },
      {
        label: "Reflection & action",
        primary: "Journals, participation and action projects",
        secondary: "Reflection on personal growth throughout",
      },
      {
        label: "Recognition",
        primary: "Annual ambassador recognition",
        secondary: "May celebrate sustained contribution to school and community",
      },
    ],
    outline: {
      heading: "Ten modules",
      badges: ["Values talk + discussion", "Journals and action projects"],
      items: [
        { title: "Goodness and purpose", meta: "Module 1" },
        { title: "Character beyond intelligence", meta: "Module 2" },
        { title: "Emotional strength and handling pressure", meta: "Module 3" },
        { title: "Global ambassadorship", meta: "Module 4" },
        { title: "Digital citizenship and responsible freedom", meta: "Module 5" },
        { title: "The power of giving", meta: "Module 6" },
        { title: "Civility and etiquette", meta: "Module 7" },
        { title: "Gratitude, forgiveness and inner calm", meta: "Module 8" },
        { title: "Identity, discipline and personal standards", meta: "Module 9" },
        { title: "The journey towards greatness", meta: "Module 10" },
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
