
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const logs = [
  {
    time: "2026.PRESENT",
    org: "Mphasis",
    role: "Software Development Engineer in Test (SDET) Intern",
    location: "Bengaluru & Chennai, India",

    description:
      "Worked on enterprise-level Trade File Processing and Management System involving backend development, automation testing, API validation, and batch processing. Contributed to both development and quality assurance activities in Agile environments.",

    notes: [
      "Developed and tested RESTful APIs using Spring Boot and PostgreSQL.",
      "Implemented automation testing using Selenium WebDriver, TestNG, and Cucumber.",
      "Worked on batch processing workflows using Spring Batch for large CSV transaction files.",
      "Designed validation logic, duplicate transaction detection, and error-handling mechanisms.",
      "Implemented secure JWT-based authentication and API protection using Spring Security.",
      "Performed unit testing using JUnit and Mockito with JaCoCo code coverage analysis.",
      "Worked with Jasmine and Karma for frontend testing and validation.",
      "Conducted API testing, debugging, and response validation using Postman.",
      "Collaborated in Agile workflows focused on software quality and performance optimization.",
    ],

    technologies: [
      "Spring Boot",
      "Spring Batch",
      "PostgreSQL",
      "Angular",
      "Selenium",
      "TestNG",
      "Cucumber",
      "JUnit",
      "Mockito",
      "JaCoCo",
      "Jasmine",
      "Karma",
      "JWT",
      "Spring Security",
      "Maven",
      "Postman",
      "Git",
    ],

    skillsGained: [
      "Automation Testing",
      "API Testing",
      "Backend Development",
      "Batch Processing",
      "Secure Authentication",
      "Debugging",
      "Test Coverage Analysis",
      "Enterprise Application Development",
      "Agile Methodology",
    ],

    color: "primary",
  },

{
  time: "2025.FEB – 2026.MAR",
  org: "Sisail Pvt Ltd",
  role: "Software Development Intern",
  location: "Bengaluru, India",

  description:
    "Worked on the backend development of a healthcare regulatory platform under the Materiovigilance Programme of India (MvPI). Contributed to secure REST API development, database management, and scalable backend workflows for medical device adverse event reporting and monitoring systems in collaboration with NIMHANS engineers.",

  notes: [
    "Developed RESTful APIs using Django and Django REST Framework for healthcare reporting workflows.",
    "Designed and managed PostgreSQL database schemas for storing medical device vigilance and adverse event data.",
    "Implemented secure authentication and role-based access mechanisms for system users.",
    "Worked on backend validation logic, API response handling, and error management for reporting modules.",
    "Collaborated with engineers and domain experts from NIMHANS during development and testing phases.",
    "Participated in debugging, API testing, and backend optimization to improve system reliability and performance.",
    "Contributed to scalable backend architecture and modular API design for enterprise healthcare applications.",
    "Worked in Agile development workflows with version control and collaborative backend development practices.",
    "Received an 'Excellent' performance evaluation for technical contribution and collaboration."
  ],

  technologies: [
    "Django",
    "Django REST Framework (DRF)",
    "Python",
    "PostgreSQL",
    "REST APIs",
    "JWT Authentication",
    "Postman",
    "Git",
    "GitHub"
  ],

  skillsGained: [
    "Backend Development",
    "REST API Development",
    "Database Design",
    "Healthcare Software Systems",
    "Authentication & Security",
    "API Testing",
    "Debugging",
    "Agile Methodology",
    "Collaborative Software Development",
    "Enterprise Application Development"
  ],

  color: "accent",
},
{
  time: "2025.APR – 2025.JUN",
  org: "Bobler",
  role: "Software Engineer Intern",
  location: "Bengaluru, India",

  description:
    "Worked on backend engineering and API integration for Bobler’s Gen Z-focused social audio platform. Contributed to scalable backend workflows, REST API integration, and SEO-focused digital content initiatives.",

  notes: [
    "Engineered backend features using Python and Django, improving API efficiency and platform scalability.",
    "Integrated REST APIs to enhance functionality and improve communication between backend services.",
    "Worked on scalable backend workflows and contributed to overall platform performance optimization.",
    "Developed SEO-friendly content using WordPress, increasing platform visibility by approximately 30%.",
    "Collaborated within Agile development workflows and participated in iterative feature delivery.",
    "Contributed to backend debugging, API validation, and integration testing activities."
  ],

  technologies: [
    "Python",
    "Django",
    "REST APIs",
    "Postman",
    "WordPress",
    "Git",
    "GitHub"
  ],

  skillsGained: [
    "Backend Development",
    "REST API Integration",
    "Scalable System Design",
    "SEO Optimization",
    "API Testing",
    "Debugging",
    "Agile Methodology",
    "Collaborative Software Development"
  ],

  color: "primary",
}
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          index="03"
          id="journal.tail()"
          title="Activity log."
          kicker="A live tail of where the engineering happened — internships and hands-on production missions."
        />

        <div className="glass rounded-2xl p-6 md:p-8 font-mono text-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-destructive/80" />
            <span className="size-2 rounded-full bg-yellow-400/70" />
            <span className="size-2 rounded-full bg-primary" />

            <span className="ml-3 text-[11px] tracking-[0.3em] text-muted-foreground">
              samhita@cortex:~/journal $ tail -f
            </span>
          </div>

          <ol className="relative pl-6 border-l border-primary/30 space-y-12">
            {logs.map((l, i) => (
              <motion.li
                key={l.org}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[31px] top-1 size-3 rounded-full ${
                    l.color === "accent" ? "bg-accent" : "bg-primary"
                  } ring-4 ring-background animate-pulse`}
                />

                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                    [{l.time}]
                  </span>

                  <span className="text-primary text-base font-display tracking-wide">
                    {l.org}
                  </span>

                  <span className="text-foreground/60 text-xs">
                    › {l.role}
                  </span>
                </div>

                {l.location && (
                  <div className="mt-1 text-[11px] tracking-[0.2em] text-cyan-400/70 uppercase">
                    {l.location}
                  </div>
                )}

                {l.description && (
                  <p className="mt-3 text-[13px] leading-relaxed text-foreground/70 max-w-4xl">
                    {l.description}
                  </p>
                )}

                <ul className="mt-4 space-y-2 text-foreground/75 text-[13px]">
                  {l.notes.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="text-primary">›</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>

                {l.technologies && (
                  <div className="mt-5">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-primary/70 mb-3">
                      Technologies Used
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {l.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[11px] text-primary/90 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {l.skillsGained && (
                  <div className="mt-5">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-cyan-400/70 mb-3">
                      Skills Gained
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {l.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-[11px] text-cyan-300 backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 text-primary/80 text-[12px] cursor-blink">
            awaiting next mission
          </div>
        </div>
      </div>
    </section>
  );
}

