"use client";

import ExperienceTimeline from "@/components/ExperienceTimeline";
import OrgChart from "@/components/OrgChart";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container border-t border-slate-200">
      <ExperienceTimeline />
      <OrgChart />
    </section>
  );
}
