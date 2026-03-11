"use client";

import { motion } from "framer-motion";
import { Shield, Database, Cloud, Cpu, LineChart, Bot } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Dell AIOps 平台集成",
    description: "领导 PPDM 和 PPDD 与 Dell AIOps 平台的深度集成，实现碳足迹实时监控、健康评分模型优化，显著提升产品在可持续运营和AI驱动运维方面的价值。",
    tags: ["智能运维", "碳足迹监控", "健康评分", "平台集成"],
    icon: Cpu,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "OpenTelemetry 标准化",
    description: "主导 PPDD/PPDM/DM5500 的 OpenTelemetry 标准化改造，统一遥测数据格式，支持后端机器学习挖掘和本地 PowerBI/Grafana 自助监控。",
    tags: ["可观测性", "遥测分析", "机器学习", "Grafana"],
    icon: LineChart,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "AI/ML 异常检测",
    description: "基于 DPA/PPDM 数据保护产品的丰富经验，为异常检测能力提供关键建议和实际支持，建立用户反馈循环，显著降低误报率，提升勒索软件检测可靠性。",
    tags: ["人工智能", "异常检测", "网络安全", "勒索软件防护"],
    icon: Shield,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "生成式 AI 对话助手",
    description: "作为核心团队成员参与 PPDM 生成式 AI 对话助手的产品化，提供智能自然语言指导，简化网络弹性目标实现，提升运营效率和服务等级协议合规性。",
    tags: ["生成式AI", "大语言模型", "网络弹性", "服务等级协议"],
    icon: Bot,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 5,
    title: "数据不可变保护",
    description: "与网络恢复团队合作，在 PPDM 中实现数据不可变保护功能，完善企业网络弹性闭环，加速网络恢复解决方案销售。",
    tags: ["网络恢复", "数据保护", "企业安全"],
    icon: Database,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 6,
    title: "云长期保留",
    description: "设计并实现云长期保留解决方案，拥有多项相关美国发明专利，优化存储成本，支持企业级数据生命周期管理。",
    tags: ["云存储", "专利技术", "成本优化", "数据生命周期"],
    icon: Cloud,
    color: "from-amber-500/20 to-yellow-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = project.icon;
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
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                {project.title}
              </h3>
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
            核心项目
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            产品与技术成果
          </h2>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">
            在数据保护、企业存储和人工智能领域的核心项目成果，涵盖平台集成、可观测性、网络安全和生成式AI等前沿技术。
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
