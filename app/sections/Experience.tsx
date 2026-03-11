"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "高级产品经理",
    company: "DellEMC",
    location: "中国 · 成都（全球角色）",
    period: "2022年10月 – 至今",
    description:
      "负责数据保护与存储产品的全球路线图规划，管理 PPDM、PPDD 和 DM5500 集成解决方案的端到端交付。通过数据驱动决策优化产品组合，释放25%年度研发带宽用于高增长项目。",
    achievements: [
      "主导 Dell AIOps 平台深度集成",
      "领导 OpenTelemetry 标准化改造",
      "推动生成式 AI 对话助手产品化",
      "实现 AI/ML 异常检测能力",
      "优化网络恢复解决方案",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    role: "数据保护专家",
    company: "华为",
    location: "中国 · 成都",
    period: "2021年12月 – 2022年10月",
    description:
      "作为数据保护专家，主导 OceanProtect 产品核心功能设计与开发，包括源端重删客户端、文件级复制和优化全合成等功能，显著提升金融和政府行业的恢复点目标/恢复时间目标指标。",
    achievements: [
      "设计源端重删客户端架构",
      "实现文件级复制功能",
      "优化全合成性能",
      "完成 OST 插件集成",
      "支持国产信创适配",
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    role: "首席架构师 / 主管工程师",
    company: "DellEMC",
    location: "中国 · 成都",
    period: "2015年12月 – 2021年12月",
    description:
      "作为首席架构师和核心成员，参与 Avamar 中国研发团队启动，负责从总部到成都站点的完整技术和流程交接。主导多个关键版本的架构设计与交付，获得11项美国发明专利。",
    achievements: [
      "获得 11 项美国发明专利",
      "主导 VMware 加速性能优化",
      "设计 DDVSO 集成方案",
      "实现云分层与灾难恢复",
      "推动 Token & 证书认证安全现代化",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    role: "高级软件工程师",
    company: "欧特克 / 通用电气 / 摩托罗拉",
    location: "中国",
    period: "2007年 – 2015年",
    description:
      "在国际研发环境中交付可扩展的 C++/Java 应用程序，专注于可扩展系统架构和敏捷测试驱动开发实践，积累了扎实的技术基础和工程经验。",
    achievements: [
      "掌握 C++/Java 企业级开发",
      "实践敏捷测试驱动开发方法论",
      "设计可扩展系统架构",
      "参与国际团队协作",
      "积累 8 年工程经验",
    ],
    color: "from-emerald-500 to-teal-500",
  },
];

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
    >
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent" />
      )}

      <div
        className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${experience.color} p-0.5`}
      >
        <div className="w-full h-full rounded-full bg-black border-2 border-white/50" />
      </div>

      <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-white/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <p className="text-[#a1a1a6] font-medium">{experience.company}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#a1a1a6]">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {experience.location}
            </span>
          </div>
        </div>

        <p className="text-[#a1a1a6] leading-relaxed mb-4">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.achievements.map((achievement) => (
            <span
              key={achievement}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full"
            >
              <Briefcase size={12} />
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#a1a1a6] text-sm tracking-widest uppercase mb-4">
            职业历程
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            工作经历
          </h2>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">
            18年IT/软件行业经验，从软件工程师到首席架构师，再到资深产品经理，
            在数据保护和企业存储领域积累了丰富的技术和管理经验。
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
