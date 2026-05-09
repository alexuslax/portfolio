import Section from "@/components/Section";

const responsibilityGroups = [
  {
    title: "Technical Support",
    badgeClass: "text-cyan-800 dark:text-cyan-100",
    items: [
      "Provided daily IT support by resolving hardware, software, and system-related issues, reducing employee downtime and ensuring smooth office operations.",
      "Installed, configured, and maintained Windows-based systems and productivity tools (e.g., Microsoft Office Suite).",
      "Diagnosed technical issues and implemented timely solutions to ensure uninterrupted workflow and system reliability."
    ],
  },
  {
    title: "Documentation & Records Management",
    badgeClass: "text-sky-800 dark:text-sky-100",
    items: [
      "Managed end-to-end document processing including scanning, formatting, editing, and secure PDF conversion of official records.",
      "Maintained well-organized digital and physical filing systems, improving document retrieval efficiency and accuracy.",
      "Ensured confidentiality and compliance in handling sensitive information in accordance with data privacy and office protocols."
    ],
  },
  {
    title: "Operations Coordination",
    badgeClass: "text-teal-800 dark:text-teal-100",
    items: [
      "Coordinated inter-office document routing, tracking, and approval processes across multiple departments.",
      "Collaborated with staff to resolve documentation inconsistencies and clarify requirements, reducing workflow delays.",
      "Supported daily administrative operations including document updates, filing systems, and process coordination.",
      "Assisted in handling urgent revisions and time-sensitive approvals in fast-paced office environments."
    ],
  },
];

const keyContributions = [
  {
    metric: "10-20+ / week",
    title: "IT Support Cases",
    description:
      "Handled 10-20+ IT support cases per week, reducing downtime and helping maintain consistent operational efficiency.",
  },
  {
    metric: "100+",
    title: "Documents Processed",
    description:
      "Managed 100+ documents end-to-end with high accuracy, strengthening data integrity and record-keeping systems.",
  },
  {
    metric: "Multi-Dept",
    title: "Workflow Coordination",
    description:
      "Assisted in multi-department workflow coordination, improving processing speed and reducing administrative delays.",
  },
];

export default function OperationsSection() {
  return (
    <Section
      id="operations"
      title="Experience"
      subtitle="Professional experience in technical support, documentation, and office workflow coordination."
    >
      <article className="rounded-3xl border border-zinc-200/70 bg-white/75 p-6 shadow-xl shadow-cyan-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-7">
        <div className="space-y-6">
          <div className="space-y-3 border-b border-zinc-200/70 pb-5 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                IT Support & Administrative Intern
              </h3>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                February 2026 - June 2026
              </p>
            </div>

            <p className="max-w-4xl text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
              Provided hands-on IT support and administrative coordination in a fast-paced office environment, improving system reliability and document workflow efficiency across departments.
            </p>
          </div>

          <section className="space-y-3">
            <h4 className="text-sm font-semibold tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
              Key Contributions
            </h4>

            <div className="grid gap-3 sm:grid-cols-3">
              {keyContributions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase dark:text-zinc-400">
                    {item.title}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {item.metric}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-3">
            {responsibilityGroups.map((group) => (
              <section key={group.title} className="space-y-3">
                <h4 className={`text-sm font-semibold tracking-[0.14em] uppercase ${group.badgeClass}`}>{group.title}</h4>
                <ul className="space-y-2.5 border-l border-zinc-200/80 pl-4 dark:border-white/10">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </article>
    </Section>
  );
}
