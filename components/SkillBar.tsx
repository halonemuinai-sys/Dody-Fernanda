"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  percentage: number;
  category: "core" | "business" | "infra";
}

export default function SkillBar() {
  const skills: Skill[] = [
    { name: "IT Budgeting & Cost Governance", percentage: 88, category: "business" },
    { name: "Software Development (React, Next.js, Flutter)", percentage: 82, category: "core" },
    { name: "Artificial Intelligence & LLM Integration", percentage: 75, category: "core" },
    { name: "Hardware Systems & Maintenance", percentage: 90, category: "infra" },
    { name: "System Operations & Software Solutions", percentage: 88, category: "infra" },
    { name: "Network Infrastructure (Mikrotik, Fortinet)", percentage: 82, category: "infra" },
    { name: "IT Security & Vulnerability Testing", percentage: 78, category: "infra" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col gap-2">
          {/* Skill Title & Percentage */}
          <div className="flex justify-between items-center text-sm font-medium text-slate-300">
            <span className="font-outfit">{skill.name}</span>
            <span className="text-amber-400 font-bold font-outfit">{skill.percentage}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/40">
            {/* Animated Fill */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${
                skill.category === "business" 
                  ? "bg-gradient-to-r from-amber-600 to-amber-400" 
                  : skill.category === "core"
                  ? "bg-gradient-to-r from-emerald-600 to-emerald-400"
                  : "bg-gradient-to-r from-slate-600 to-slate-400"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
