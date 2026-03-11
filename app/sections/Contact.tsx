"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, CheckCircle, Award } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "linmatrix@outlook.com",
    href: "mailto:linmatrix@outlook.com",
  },
  {
    icon: Phone,
    label: "电话",
    value: "+86 18349215983",
    href: "tel:+8618349215983",
  },
  {
    icon: MapPin,
    label: "位置",
    value: "中国 · 成都",
    href: null,
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0a0a0a]">
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
            保持联系
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            联系我
          </h2>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">
            有合作机会或技术交流？欢迎随时与我联系，我会尽快回复您。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <item.icon className="w-5 h-5 text-[#a1a1a6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a1a1a6]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-[#a1a1a6] mb-4">社交媒体</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#a1a1a6] hover:text-white hover:border-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Patents Highlight */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">11 项美国发明专利</span>
              </div>
              <p className="text-[#a1a1a6] text-sm">
                在云长期保留、重复数据删除和网络安全增强保护等核心领域拥有专利技术。
              </p>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-medium">开放合作机会</span>
              </div>
              <p className="text-[#a1a1a6] text-sm">
                目前对数据保护、AI/ML、产品管理领域的咨询和合作机会持开放态度。
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">发送成功！</h3>
                  <p className="text-[#a1a1a6]">感谢您的留言，我会尽快回复您。</p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#a1a1a6] mb-2"
                      >
                        姓名
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#a1a1a6] focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="您的姓名"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#a1a1a6] mb-2"
                      >
                        邮箱
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#a1a1a6] focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#a1a1a6] mb-2"
                      >
                        消息
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#a1a1a6] focus:outline-none focus:border-white/30 transition-colors resize-none"
                        placeholder="请描述您的合作想法或问题..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-[#f5f5f7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        发送中...
                      </>
                    ) : (
                      <>
                        发送消息
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
