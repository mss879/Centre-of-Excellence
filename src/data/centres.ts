export interface Centre {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  topics: string[];
  image: string;
  imageAlt: string;
  courseSlug?: string;
}

export const centres: Centre[] = [
  {
    id: "artificial-intelligence-centre",
    index: "01",
    name: "Artificial Intelligence Centre",
    tagline: "Understand intelligent systems. Design for people.",
    description:
      "Students build foundations in coding, data, machine learning and responsible AI before applying those skills through projects. The emphasis is on understanding how systems work, where they fail and how technical choices affect people.",
    topics: ["Artificial intelligence", "Python", "Machine learning", "Data", "Responsible AI"],
    image: "/images/centre-ai.jpg",
    imageAlt: "Student studying a data visualisation in the Artificial Intelligence Centre",
    courseSlug: "artificial-intelligence",
  },
  {
    id: "centre-for-science",
    index: "02",
    name: "Centre for Science",
    tagline: "Observe closely. Test carefully. Think scientifically.",
    description:
      "The Science Centre supports investigation across living systems, health, agriculture, food, sustainability and related fields. Students connect scientific knowledge with experiments, evidence and real questions.",
    topics: ["Practical science", "Biology", "Sustainability", "Agriculture", "Food science"],
    image: "/images/centre-science.jpg",
    imageAlt: "Microscope work in the Centre for Science",
    courseSlug: "science-sustainability",
  },
  {
    id: "language-lab",
    index: "03",
    name: "Language Lab",
    tagline: "Language opens worlds.",
    description:
      "The Language Lab is envisioned as a space for listening, speaking, reading, writing and intercultural understanding across eleven languages: Sinhala, Tamil, English, Pali, Sanskrit, Hindi, French, German, Chinese, Korean and Japanese. It helps students develop the confidence to communicate ideas across audiences and contexts.",
    topics: ["Language learning", "Communication", "Listening and speaking", "Multilingual learning"],
    image: "/images/centre-language.jpg",
    imageAlt: "Student listening at a carrel in the Language Lab",
    courseSlug: "language-lab",
  },
  {
    id: "mathematics-centre",
    index: "04",
    name: "Mathematics Centre",
    tagline: "Find patterns. Build arguments. Make sense of data.",
    description:
      "The Mathematics Centre makes abstract ideas more visible through models, manipulatives, diagrams, technology, experiments and discussion. It supports curriculum enrichment, mathematical modelling and Olympiad problem-solving.",
    topics: ["Mathematics enrichment", "Problem-solving", "Olympiad mathematics", "Modelling", "Data"],
    image: "/images/centre-math.jpg",
    imageAlt: "Geometric models in the Mathematics Centre",
    courseSlug: "mathematics-olympiad",
  },
  {
    id: "steam-hub",
    index: "05",
    name: "STEAM Hub",
    tagline: "Imagine it. Build it. Make it work.",
    description:
      "The STEAM Hub brings coding, electronics, Arduino, sensors, physical computing and 3D design into one practical environment. Students move from identifying a need to developing, testing and presenting a working project.",
    topics: ["STEAM", "Coding", "Arduino", "Electronics", "Sensors", "3D design"],
    image: "/images/centre-steam.jpg",
    imageAlt: "Hands connecting wires to a microcontroller in the STEAM Hub",
    courseSlug: "steam-coding-making",
  },
  {
    id: "performing-arts-centre",
    index: "06",
    name: "Performing Arts Centre",
    tagline: "Find your voice. Work as an ensemble.",
    description:
      "The Performing Arts Centre creates space for disciplined practice, creative expression and collaborative performance. It can support learning across music, drama, movement, production and stagecraft.",
    topics: ["Performing arts", "Music", "Drama", "Performance", "Stagecraft"],
    image: "/images/centre-performing.jpg",
    imageAlt: "Stage bathed in warm theatrical light",
  },
  {
    id: "media-studio",
    index: "07",
    name: "Sumathi Convergence Media Centre",
    tagline: "Create with purpose. Communicate with care.",
    description:
      "A lean, software-defined studio where students move through sound, field production, editing, live multi-camera broadcasting and journalism as one stacked pathway. Students learn both production technique and the responsibility that comes with recording, representing and publishing — working towards a national vocational qualification.",
    topics: ["Podcasting", "Mobile journalism", "Post-production", "Live broadcasting", "Journalism", "AI workflows"],
    image: "/images/centre-media.jpg",
    imageAlt: "Broadcast camera in the Media Studio",
    courseSlug: "media-communication",
  },
  {
    id: "entrepreneur-business-skills-centre",
    index: "08",
    name: "Entrepreneur Business Skills Centre",
    tagline: "Turn ideas into responsible action.",
    description:
      "Students investigate real needs, test assumptions, develop early solutions and learn to communicate evidence. Enterprise is taught as a process of careful discovery, improvement and ethical value creation.",
    topics: ["Student entrepreneurship", "Innovation", "Prototyping", "Business skills", "Social impact"],
    image: "/images/course-entrepreneurship.jpg",
    imageAlt: "Students mapping ideas in the Entrepreneur Business Skills Centre",
    courseSlug: "entrepreneurship",
  },
  {
    id: "fine-arts-centre",
    index: "09",
    name: "Fine Arts Centre",
    tagline: "Look differently. Make deliberately.",
    description:
      "The Fine Arts Centre connects drawing, painting, sculpture and visual culture with digital illustration, animation, photography, video, 3D design and user experience.",
    topics: ["Fine art", "Digital art", "Illustration", "Animation", "3D design", "Photography"],
    image: "/images/centre-finearts.jpg",
    imageAlt: "Easel and studio materials in the Fine Arts Centre",
    courseSlug: "fine-digital-arts",
  },
  {
    id: "auditorium",
    index: "10",
    name: "Auditorium",
    tagline: "A forum for ideas, leadership and community.",
    description:
      "The Auditorium brings the Centre's work into a shared public space. It can host talks, presentations, debate, performance, exhibitions and values-based learning, giving students opportunities to speak, listen and contribute.",
    topics: ["Student leadership", "Public speaking", "Educational events", "Character and citizenship"],
    image: "/images/centre-auditorium.jpg",
    imageAlt: "Rows of seats in the Auditorium under soft light",
    courseSlug: "good-ambassadors-programme",
  },
];
