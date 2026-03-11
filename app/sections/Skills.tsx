"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Wrench,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "前端开发",
    icon: Code2,
    description: "构建现代化、响应式的用户界面",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vue.js",
      "HTML5/CSS3",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    name: "后端开发",
    icon: Terminal,
    description: "设计和实现高性能的服务端架构",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST API",
      "Redis",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "design",
    name: "UI/UX 设计",
    icon: Palette,
    description: "创造直观、美观的用户体验",
    skills: [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Wireframing",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "cloud",
    name: "云服务",
    icon: Cloud,
    description: "部署和运维可扩展的云基础设施",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Vercel",
      "Terraform",
      "Linux",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "database",
    name: "数据库",
    icon: Database,
    description: "设计高效、可靠的数据存储方案",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Prisma",
      "Redis",
      "Elasticsearch",
    ],
    color: "from-red-500 to-rose-500",
  },
  {
    id: "tools",
    name: "开发工具",
    icon: Wrench,
    description: "使用现代工具提升开发效率",
    skills: [
      "Git",
      "VS Code",
      "Jest",
      "Cypress",
      "Webpack",
      "Vite",
      "Storybook",
    ],
    color: "from-violet-500 to-purple-500",
  },
];

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:border-white/20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{category.name}</h3>
            <p className="text-sm text-[#a1a1a6]">{category.description}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + skillIndex * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-sm font-medium text-[#a1a1a6] bg-white/5 rounded-lg border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#a1a1a6] text-sm tracking-widest uppercase mb-4">
            技术栈
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            专业技能
          </h2>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">
            我熟练掌握多种现代技术栈，能够根据项目需求选择最合适的技术方案。
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
