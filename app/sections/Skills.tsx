"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Cpu,
  Award,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    id: "product",
    name: "产品管理",
    icon: Lightbulb,
    description: "产品生命周期管理与战略规划",
    skills: [
      "产品生命周期管理",
      "市场进入策略",
      "数据驱动决策",
      "路线图规划",
      "敏捷开发管理",
      "跨职能领导力",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "storage",
    name: "数据保护与存储",
    icon: Database,
    description: "企业级存储与数据保护技术",
    skills: [
      "数据保护",
      "重复数据删除",
      "云长期保留",
      "分布式存储",
      "备份与恢复",
      "存储引擎",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "security",
    name: "网络安全",
    icon: Shield,
    description: "网络弹性与数据安全",
    skills: [
      "网络弹性",
      "勒索软件检测",
      "网络恢复",
      "数据不可变保护",
      "安全架构",
      "合规管理",
    ],
    color: "from-red-500 to-rose-500",
  },
  {
    id: "ai",
    name: "人工智能与机器学习",
    icon: Cpu,
    description: "人工智能与机器学习应用",
    skills: [
      "智能运维",
      "异常检测",
      "生成式AI",
      "大语言模型集成",
      "机器学习模型训练",
      "AI助手",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "observability",
    name: "可观测性",
    icon: BarChart3,
    description: "系统监控与数据分析",
    skills: [
      "OpenTelemetry",
      "Grafana",
      "PowerBI",
      "遥测数据分析",
      "健康评分",
      "碳足迹监控",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "cloud",
    name: "云原生",
    icon: Cloud,
    description: "云计算与容器化技术",
    skills: [
      "云原生架构",
      "Kubernetes",
      "容器存储接口",
      "微服务",
      "云分层",
      "混合云",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "patents",
    name: "专利与认证",
    icon: Award,
    description: "知识产权与专业认证",
    skills: [
      "11项美国发明专利",
      "云长期保留专利",
      "重复数据删除专利",
      "网络安全专利",
      "认证 Scrum 主管",
      "英语流利",
    ],
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "leadership",
    name: "领导力",
    icon: Users,
    description: "团队管理与全球协作",
    skills: [
      "全球团队领导",
      "跨职能协调",
      "研发效率提升",
      "技术战略规划",
      "利益相关者管理",
      "财富500强客户",
    ],
    color: "from-teal-500 to-cyan-500",
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
            专业能力
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            核心技能
          </h2>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">
            涵盖产品管理、数据保护、人工智能、云原生等领域的专业技能，持有11项美国发明专利。
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
