"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "高级前端工程师",
    company: "科技创新公司",
    location: "北京",
    period: "2022 - 至今",
    description:
      "负责公司核心产品的前端架构设计和开发，带领 5 人团队完成多个重要项目。优化了应用性能，将首屏加载时间减少了 40%。",
    achievements: [
      "设计并实现微前端架构",
      "建立组件库和设计系统",
      "推动 CI/CD 流程优化",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    role: "全栈开发工程师",
    company: "互联网创业公司",
    location: "上海",
    period: "2020 - 2022",
    description:
      "参与电商平台的全栈开发，负责前后端功能实现和数据库设计。与产品、设计团队紧密协作，快速迭代产品功能。",
    achievements: [
      "开发高并发的订单系统",
      "实现实时数据可视化",
      "优化数据库查询性能",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    role: "前端开发工程师",
    company: "数字营销 agency",
    location: "深圳",
    period: "2019 - 2020",
    description:
      "为多个客户开发响应式网站和 Web 应用，确保跨浏览器兼容性和优秀的用户体验。",
    achievements: [
      "完成 20+ 客户项目",
      "建立前端开发规范",
      "获得客户满意度 98%",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    role: "初级 Web 开发者",
    company: "软件开发公司",
    location: "杭州",
    period: "2018 - 2019",
    description:
      "参与企业级管理系统的开发，学习并实践现代前端技术栈，快速成长为独立开发者。",
    achievements: [
      "掌握 React 和 Vue 框架",
      "参与开源项目贡献",
      "获得优秀新人奖",
    ],
    color: "from-orange-500 to-amber-500",
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
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent" />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${experience.color} p-0.5`}
      >
        <div className="w-full h-full rounded-full bg-black border-2 border-white/50" />
      </div>

      {/* Content */}
      <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-white/20">
        {/* Header */}
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

        {/* Description */}
        <p className="text-[#a1a1a6] leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Achievements */}
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
        {/* Section Header */}
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
            我的职业成长之路，从初级开发者到技术负责人，每一步都充满挑战与收获。
          </p>
        </motion.div>

        {/* Timeline */}
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
