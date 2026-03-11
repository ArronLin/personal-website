"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "电商平台",
    description: "全功能电商平台，支持商品管理、购物车、支付集成和订单追踪。",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "任务管理应用",
    description: "协作式任务管理工具，支持实时同步、团队工作区和进度追踪。",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "数据可视化仪表盘",
    description: "实时数据监控仪表盘，支持多种图表类型和自定义报表。",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "社交媒体应用",
    description: "移动端优先的社交平台，支持发布、评论、点赞和私信功能。",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    title: "AI 内容生成器",
    description: "基于 GPT 的智能内容生成工具，支持多种内容类型和风格定制。",
    tags: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 6,
    title: "在线教育平台",
    description: "互动式学习平台，支持视频课程、实时测验和学习进度追踪。",
    tags: ["React", "GraphQL", "AWS", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-amber-500/20 to-yellow-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl glass p-6 h-full transition-all duration-300 group-hover:border-white/20">
        {/* Gradient background on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#a1a1a6] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View GitHub repository"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#a1a1a6] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live demo"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#a1a1a6] text-sm leading-relaxed mb-6 group-hover:text-[#d1d1d6] transition-colors">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-[#a1a1a6] bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-black">
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
            精选作品
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            项目展示
          </h2>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">
            以下是我近期完成的一些项目，涵盖了 Web 应用、移动端开发和数据可视化等多个领域。
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
