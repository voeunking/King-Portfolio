/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Palette,
  Users,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  ChevronRight,
  Menu,
  X,
  Globe,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight"> KING VOEUN.DEV</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
           <a
             href="/KING VOEUN CV Resume.pdf"
             download="KING VOEUN CV Resume.pdf"
             className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all shadow-md shadow-primary/20"
           >
             Download Resume
           </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
               href="/KING VOEUN CV Resume.pdf"
               download="KING VOEUN CV Resume.pdf"
               className="bg-primary text-white w-full py-3 rounded-lg font-semibold text-center"
             >
               Resume
             </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const fullName = 'KING VOEUN';
  const [displayedName, setDisplayedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutMs = isDeleting ? 120 : 170;

    if (!isDeleting && displayedName === fullName) {
      timeoutMs = 1800;
    } else if (isDeleting && displayedName === '') {
      timeoutMs = 700;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && displayedName === fullName) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedName === '') {
        setIsDeleting(false);
        return;
      }

      const nextText = isDeleting
        ? fullName.slice(0, displayedName.length - 1)
        : fullName.slice(0, displayedName.length + 1);

      setDisplayedName(nextText);
    }, timeoutMs);

    return () => window.clearTimeout(timeoutId);
  }, [displayedName, isDeleting, fullName]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          animate={{
            rotateY: [0, 5, 0, -5, 0],
            y: [0, -10, 0]
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative inline-block mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-60 h-60 rounded-full border-4 border-primary p-1"
          >
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
              animate={{
                scale: [1, 1.1, 1],
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
              }}
              transition={{
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 3, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="absolute -top-2 -right-12 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-sm flex items-center gap-1 py-3"
          >
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-2 h-2 bg-emerald-500 rounded-full"
            />
            <motion.span
              animate={{
                x: [0, 1, 0],
                fontWeight: ["normal", "bold", "normal"]
              }}
              transition={{
                x: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
                fontWeight: { duration: 2, repeat: Infinity }
              }}
              className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
            >
              Open for internship
            </motion.span>
          </motion.div>
          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [-5, 5, -5],
              scale: [1, 1.05, 1]
            }}
            transition={{
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.15, rotate: -10 }}
            className="absolute -bottom-2 -left-12 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-sm flex items-center gap-1 py-3"
          >
            <motion.span
              animate={{
                rotate: [0, -180, 360, -180, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-amber-500 text-xs"
            >
              ⚡
            </motion.span>
            <motion.span
              animate={{
                x: [0, -1, 0],
                color: ["#f59e0b", "#f97316", "#f59e0b"]
              }}
              transition={{
                x: { duration: 0.7, repeat: Infinity, ease: "easeInOut" },
                color: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
            >
              Quick Learner
            </motion.span>
          </motion.div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Hi! I'm{' '}
          <span className="text-primary inline-flex items-baseline">
            <span className="inline-block text-left whitespace-pre">{displayedName}</span>
            <span className="typing-caret" aria-hidden="true"></span>
          </span>
        </h1>

        <motion.p
          animate={{
            opacity: [0.8, 1, 0.8],
            x: [0, 2, 0]
          }}
          transition={{
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm a junior Web Developer specialized in building robust Backend and Frontend systems, data-driven applications, and automation solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View My Work
          </a>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/king-voeun-01595b3a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 hover:border-primary hover:text-primary transition-all"
              aria-label="Visit my LinkedIn profile"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/king-voeun-01595b3a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 hover:border-primary hover:text-primary transition-all"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src="/about.jpg"
              alt="Workspace"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl text-white"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl font-bold"
              >
                2+
              </motion.div>
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">Years Exp.</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary font-bold text-1xl uppercase tracking-[0.2em] mb-4 block"
          >
            About Me
          </motion.span>
          <motion.h2
            animate={{ x: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl font-bold text-slate-900 mb-6 leading-tight"
          >
            A Python Developer Passionate About Clean Code & Scalable Solutions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 text-slate-600 leading-relaxed mb-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I am King Voeun, born on Aguest 07, 2005, in Kompot province, Cambodia. I am a second-year Web Programming student at Passerelles Numériques Cambodia, pursuing an Associate Degree. Web Developer with hands-on experience in both front-end and back-end development. . Proficient in HTML, CSS, JavaScript, PHP, and frameworks like Bootstrap, Laravel, and Vue.js. Skilled in MySQL, and OOP in TypeScript. Focused on user experience, teamwork, and delivering quality results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I believe in clean code, test-driven development, and continuous learning. When I'm not coding, you can find me exploring new Python frameworks or contributing to open-source projects.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ y: -10, rotate: 2 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="p-6 rounded-xl bg-slate-50 border border-slate-100"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4"
              >
                <Code2 className="text-primary w-5 h-5" />
              </motion.div>
              <h4 className="font-bold text-slate-900 mb-1">PNC. Web Development</h4>
              <p className="text-xs text-slate-500">Passerellesnumeriques University</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10, rotate: -2 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="p-6 rounded-xl bg-slate-50 border border-slate-100"
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4"
              >
                <Palette className="text-primary w-5 h-5" />
              </motion.div>
              <h4 className="font-bold text-slate-900 mb-1">Associate decree</h4>
              <p className="text-xs text-slate-500">Web Developer Associate</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const getToolLogo = (tool: string) => {
  const logos: Record<string, string> = {
    'React': 'https://cdn.simpleicons.org/react/61DAFB',
    'Next.js': 'https://cdn.simpleicons.org/nextdotjs/111827',
    'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
    'CSS': 'https://cdn.simpleicons.org/css/1572B6',
    'Sass': 'https://cdn.simpleicons.org/sass/CC6699',
    'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
    'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'Framer Motion': 'https://cdn.simpleicons.org/framer/0055FF',
    'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
    'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
    'GraphQL': 'https://cdn.simpleicons.org/graphql/E10098',
    'Redis': 'https://cdn.simpleicons.org/redis/DC382D',
    'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
    'Adobe XD': 'https://cdn.simpleicons.org/adobexd/FF61F6',
    'Git': 'https://cdn.simpleicons.org/git/F05032',
    'GitHub': 'https://cdn.simpleicons.org/github/181717',
    'Jira': 'https://cdn.simpleicons.org/jira/0052CC',
    'Vercel': 'https://cdn.simpleicons.org/vercel/000000',
    'Natify': 'https://cdn.simpleicons.org/netlify/00C7B7',
    'Canva': 'https://cdn.simpleicons.org/canva/00C4CC',
    'AWS': 'https://cdn.simpleicons.org/amazonwebservices/FF9900',
    'CI/CD': 'https://cdn.simpleicons.org/githubactions/2088FF',
    'ChatGPT': 'https://cdn.simpleicons.org/openai/412991',
    'Grok': 'https://cdn.simpleicons.org/x/000000',
    'Gemini': 'https://cdn.simpleicons.org/googlegemini/1A73E8',
    'Windsuf': 'https://cdn.simpleicons.org/windicss/48B0F1',
    'Sticth': 'https://cdn.simpleicons.org/stitcher/000000',
    'AI Studio': 'https://cdn.simpleicons.org/google/4285F4',
    'Antigravity': 'https://cdn.simpleicons.org/rocket/0F172A',
    'Clude': 'https://cdn.simpleicons.org/claude/CC785C',
    'Codex': 'https://cdn.simpleicons.org/openai/412991',
    'Kilo code': 'https://cdn.simpleicons.org/codeforces/1F8ACB',
    'Deepseek': 'https://cdn.simpleicons.org/deepseek/4F46E5',
    'Python': 'https://cdn.simpleicons.org/python/3776AB',
    'Django': 'https://cdn.simpleicons.org/django/092E1F',
    'Flask': 'https://cdn.simpleicons.org/flask/000000',
    'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688'
  };

  const logoSrc = logos[tool] || 'https://cdn.simpleicons.org/simpleicons/64748B';
  return (
    <img
      src={logoSrc}
      alt={`${tool} logo`}
      className="h-4 w-4"
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
};
const Education = () => {
   const education = [
     {
       degree: 'PNC. Web Development',
       school: 'Passerellesnumeriques University',
       period: '2025 - 2026',
       description: 'Currently advancing my technical expertise through intensive full-stack web development training, focusing on modern frameworks, database systems, and API development to build a strong foundation for my professional career.',
       achievements: ['Full-Stack Development', 'Modern Frameworks', 'Database Design', 'API Development']
     },
     {
       degree: 'Associate Degree',
       school: 'Web Developer Associate',
       period: '2025 - 2026',
       description: 'Expanding my knowledge in cloud technologies and deployment strategies, gaining hands-on experience with AWS services and cloud architecture patterns to complement my web development skills.',
       achievements: []
     },
     {
       degree: 'High School Diploma',
       school: 'Hun Sen Trosekong High School',
       period: '2022 - 2024',
       description: '',
       achievements: []
     },
     {
       degree: 'Secondary',
       school: 'Mean Rith Secondary',
       period: '2019 - 2022',
       description: '',
       achievements: []
     }
   ];

  return (
    <section id="education" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block"
          >
            Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Academic Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            My educational background has provided me with a strong foundation in both theoretical knowledge and practical skills.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                    >
                      {index === 0 ? <Code2 className="text-primary w-6 h-6" /> :
                        index === 1 ? <Database className="text-primary w-6 h-6" /> :
                          <Globe className="text-primary w-6 h-6" />}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-primary font-semibold">{edu.school}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{edu.period}</span>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <motion.span
                        key={achievement}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="w-2/12 flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"
                ></motion.div>
              </div>

              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-7 h-7 text-primary" />,
      tags: ['React', 'TypeScript', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'Framer Motion'],
      summary: 'Building fast, accessible interfaces with modern component architecture.',
      gradient: ''
    },
    {
      title: 'Backend',
      icon: <Database className="w-7 h-7 text-primary" />,
      tags: ['Python', 'Django', 'Flask', 'FastAPI', 'Docker'],
      summary: 'Building powerful RESTful APIs, data models, and server-side logic.',
      gradient: ''
    },
    {
      title: 'Design & Tools',
      icon: <Palette className="w-7 h-7 text-primary" />,
      tags: ['Figma', 'Git', 'GitHub', 'Jira', 'Vercel', 'Natify', 'Canva', 'AWS',],
      summary: 'Crafting polished workflows from visual systems to reliable delivery.',
      gradient: ''
    },
    {
      title: 'AI Tools',
      icon: <Globe className="w-7 h-7 text-primary" />,
      tags: ['ChatGPT', 'Grok', 'Gemini', 'Windsuf', 'Sticth', 'AI Studio', 'Antigravity', 'Clude', 'Codex', 'Kilo code', 'Deepseek'],
      summary: 'Using modern AI copilots and studios to speed up ideation, coding, and content workflows.',
      gradient: ''
    }
  ];

  const softSkills = [
    {
      title: 'Team Collaboration',
      icon: <Users className="w-6 h-6" />,
      desc: 'Thriving in cross-functional teams by fostering an environment of shared knowledge and mutual growth.'
    },
    {
      title: 'Creative Problem Solving',
      icon: <Lightbulb className="w-6 h-6" />,
      desc: 'Approaching complex technical challenges with innovative thinking to find efficient and scalable solutions.'
    },
    {
      title: 'Effective Communication',
      icon: <MessageSquare className="w-6 h-6" />,
      desc: 'Bridging the gap between technical details and business requirements through clear and concise dialogue.'
    },
    {
      title: 'Adaptability',
      icon: <RefreshCw className="w-6 h-6" />,
      desc: 'Quickly pivoting to new technologies and methodologies to stay ahead in the fast-evolving tech landscape.'
    }
  ];

  return (
    <section id="skills" className="bg-slate-50/50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900">Python Development Stack</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Core technologies I use to ship reliable products end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-10 md:p-11 min-h-[380px] shadow-[0_16px_45px_-30px_rgba(15,23,42,0.55)] transition-all duration-300 hover:shadow-[0_22px_60px_-28px_rgba(2,132,199,0.38)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20" />
              <div className="relative w-16 h-16 bg-white rounded-2xl border border-slate-200/70 shadow-sm flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform">
                {skill.icon}
              </div>
              <h3 className="relative text-3xl font-bold text-slate-900 mb-3 text-center">{skill.title}</h3>
              <p className="relative text-base text-slate-600 leading-relaxed mb-7 text-center">{skill.summary}</p>
              <div className="relative flex flex-wrap gap-3 justify-center">
                {skill.tags.map(tag => (
                  <div
                    key={tag}
                    className="tech-pill"
                  >
                    <span className="tech-pill-logo">{getToolLogo(tag)}</span>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 md:px-10">
          <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl pointer-events-none" />

          <div className="relative text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Human Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Professional Soft Skills</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Beyond the code, I focus on collaboration, communication, and adaptability to keep projects moving and teams aligned.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {softSkills.map((skill) => (
              <motion.div
                key={skill.title}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="mb-5 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 text-center mb-3">{skill.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed text-center">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

    const projects = [
      {
        title: 'Figma Project',
        category: 'UX/UI Design Project',
        image: '/image.png',
        desc: 'UX/UI design project created in Figma showcasing modern interface design principles and user experience concepts.',
        tags: ['figma']
      },
      {
        title: 'Web Design Project',
        category: 'Ecommerce Website',
        image: '/image copy.png',
        desc: 'Responsive e-commerce website design with modern UI/UX principles, product catalog, and shopping cart functionality.',
        tags: ['HTML', 'CSS', 'SASS','figma']
      },
      {
        title: 'Algorithem Project',
        category: 'Algorithm Implementation',
        image: '/image copy 2.png',
        desc: 'Collection of algorithm implementations and data structures demonstrating problem-solving techniques and computational thinking.',
        tags: ['Python', 'Flask framwork', 'javascript', 'mysql','HTML','CSS','git hub']
      },
      {
        title: 'Javascript Project',
        category: 'Interactive Web Application',
        image: '/image copy 3.png',
        desc: 'Dynamic JavaScript project featuring interactive elements, DOM manipulation, and modern ES6+ functionality.',
        tags: ['HTML', 'CSS', 'Javascript','mysql','github']
      },
      {
        title: ' Virtual Company-I Project',
        category: 'POS System- Prey Lang Coffee',
        image: '/image copy 4.png',
        desc: 'Point of Sale system for Prey Lang Coffee business with inventory management, sales tracking, and customer management features.',
        tags: ['React', 'Laravel', 'mysql','git hub','figma','Jira']
      }
    ];

  return (
    <section id="projects" className="section-padding">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Portfolio</span>
          <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
        </div>
        <button
          onClick={() => setVisibleCount(visibleCount === 3 ? projects.length : 3)}
          className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
        >
          {visibleCount === 3 ? 'Show More Projects' : 'Show Less'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-2 rounded-full mb-3 inline-block"
              >
                {project.category}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors"
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed"
              >
                {project.desc}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
               <div className="flex gap-3">
                 {project.title !== 'Algorithem Project' && (
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg"
                      onClick={() => window.open(project.title === 'Figma Project' ? 'https://www.figma.com/design/qWCORJMDtixWeHRwNJ9ozD/UX-UI-design-project?node-id=0-1&p=f&t=Veod8BbIfnCAhY7A-0' : project.title.trim() === 'Virtual Company-I Project' ? 'https://www.youtube.com/watch?v=nJtTL7Fs7X8&authuser=0' : project.title === 'Javascript Project' ? 'https://javascript-project-task.vercel.app/' : 'https://project-website-jade-xi.vercel.app/', '_blank')}
                   >
                      <ExternalLink className="w-4 h-4" />
                      {project.title.trim() === 'Virtual Company-I Project' ? 'View Demoration' : 'View Project'}
                    </motion.button>
                 )}
                  {project.title !== 'Figma Project' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg"
                      onClick={() => window.open(project.title === 'Algorithem Project' ? 'https://github.com/voeunking/Algorithem-Project' : project.title === 'Javascript Project' ? 'https://github.com/voeunking/Javascript-Project' : project.title.trim() === 'Virtual Company-I Project' ? 'https://github.com/panhakoeun142007-creator/PREY-LANG-COFFEE-POS-SYSTEM.git' : 'https://github.com/voeunking/Project-Website.git', '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </motion.button>
                  )}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50/50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Contact</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-slate-500 mb-10 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</div>
                  <div className="font-bold text-slate-900">king.voeun@student.passerellesnumeriques.org</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</div>
                  <div className="font-bold text-slate-900">BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Send, Linkedin, Github].map((Icon, i) => {
                const href =
                  i === 0
                    ? 'https://t.me/KING_VOEUN'
                    : i === 1
                      ? 'https://www.linkedin.com/in/king-voeun-01595b3a0/'
                      : i === 2
                        ? 'https://github.com/voeunking?tab=repositories'
                        : '#';
                return (
                  <a
                    key={i}
                    href={href}
                    target={i === 0 || i === 1 || i === 2 ? "_blank" : undefined}
                    rel={i === 0 || i === 1 || i === 2 ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    aria-label={
                      i === 0
                        ? "Visit my Telegram profile"
                        : i === 1
                          ? "Visit my LinkedIn profile"
                          : i === 2
                            ? "Visit my GitHub profile"
                            : "Social link"
                    }
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <Code2 className="text-white w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight">KING VOUEN. DEV</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

