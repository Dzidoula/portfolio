import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useScroll, useSpring, type Variants } from 'framer-motion'
import { ArrowUpRight, Award, Download, GraduationCap, Lock, Mail, Moon, Sun } from 'lucide-react'
import { education, experience, links, projects, skills, t, type Lang } from './content'

const Github = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A11.500 11.500 0 0 0 12 .5z"/></svg>
)
const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.4 20.4h-3.6v-5.6c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.300V9h3.400v1.600h.1c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.100zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.400H3.600V9h3.500v11.400zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.8 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z"/></svg>
)

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
}

function Reveal({ children, i = 0, className }: { children: React.ReactNode; i?: number; className?: string }) {
  return (
    <motion.div className={className} variants={reveal} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
      {children}
    </motion.div>
  )
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const c = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: (v) => (node.textContent = String(Math.round(v))) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>0</span>
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">{title}</span>
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || (navigator.language.startsWith('fr') ? 'fr' : 'en'))
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')
  const tx = t[lang]
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.lang = lang
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
      localStorage.setItem('lang', lang)
    } catch { /* storage unavailable */ }
  }, [dark, lang])

  const stats = [
    { n: experience.length, l: tx.stats[0] },
    { n: projects.length + 2, l: tx.stats[1] },
    { n: 1, l: tx.stats[2] },
    { n: 3, l: tx.stats[3] },
  ]

  return (
    <div className="relative overflow-x-hidden">
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent to-heat" />

      {/* ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="blob absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-heat/15 blur-3xl [animation-delay:-6s]" />
      </div>

      <header className="glass fixed inset-x-0 top-0 z-40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="font-bold tracking-tight">
            D<span className="text-accent">.</span>Makie
          </a>
          <ul className="hidden gap-6 text-sm md:flex" style={{ color: 'var(--muted)' }}>
            {Object.entries(tx.nav).map(([k, v]) => (
              <li key={k}>
                <a className="transition-colors hover:text-accent" href={`#${k}`}>{v}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label="Switch language" className="glass cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition-colors hover:border-accent">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className="glass cursor-pointer rounded-full p-2 transition-colors hover:border-accent">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href={links.cv} download className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 sm:inline-flex">
              <Download size={14} /> {tx.cv}
            </a>
          </div>
        </nav>
      </header>

      {/* hero */}
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-12 pt-36 sm:px-8 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /></span>
            {tx.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {tx.h1a}<br /><span className="text-gradient">{tx.h1b}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-6 max-w-xl text-lg" style={{ color: 'var(--muted)' }}>
            {tx.sub}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition-transform hover:scale-105">
              {tx.viewProjects} <ArrowUpRight size={16} />
            </a>
            <a href={links.cv} download className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors hover:border-accent">
              <Download size={16} /> {tx.cv}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} whileHover={{ rotate: -1.5, scale: 1.02 }} className="relative mx-auto w-64 sm:w-80">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent via-transparent to-heat opacity-70 blur-xl" />
          <img src={`${import.meta.env.BASE_URL}daniel.jpeg`} alt="Daniel Makie" width={640} height={853} className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover object-[50%_28%]" />
        </motion.div>
      </section>

      {/* stats */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} i={i}>
            <div className="glass rounded-2xl p-5 text-center">
              <div className="text-gradient text-4xl font-extrabold"><Counter to={s.n} /></div>
              <div className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Section id="about" title={tx.aboutT}>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal><p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>{tx.about}</p></Reveal>
          <ol className="space-y-4 border-l pl-6" style={{ borderColor: 'var(--line)' }}>
            {education.map((e, i) => (
              <Reveal key={e.year} i={i}>
                <li className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/20" />
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent"><GraduationCap size={14} />{e.year}</div>
                  <div className="mt-0.5">{e[lang]}</div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="projects" title={tx.projectsT}>
        <Reveal>
          <div className="glass relative mb-6 overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-heat/25 blur-3xl" />
            <span className="text-xs font-semibold uppercase tracking-widest text-heat">{tx.featuredT} · 2026</span>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{tx.oven}</h3>
            <p className="mt-3 max-w-3xl" style={{ color: 'var(--muted)' }}>{tx.ovenD}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['COMSOL Multiphysics', 'Thermal design', 'PAH reduction', 'Activated charcoal'].map((g) => (
                <span key={g} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: 'var(--line)' }}>{g}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} i={i}>
              <motion.article whileHover={{ y: -6 }} className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-accent/60">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((g) => (
                    <span key={g} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">{g}</span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-heat hover:underline">
                      {tx.demo} <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                      {tx.code} <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1" style={{ color: 'var(--muted)' }}><Lock size={13} /> {tx.private}</span>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="experience" title={tx.expT}>
        <ol className="space-y-6 border-l pl-6" style={{ borderColor: 'var(--line)' }}>
          {experience.map((e, i) => (
            <Reveal key={e.role.en} i={i}>
              <li className="glass relative rounded-2xl p-6">
                <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full bg-heat ring-4 ring-heat/20" />
                <div className="text-sm font-semibold text-heat">{e.period}</div>
                <h3 className="mt-1 text-lg font-semibold">{e.role[lang]}</h3>
                <div className="text-sm" style={{ color: 'var(--muted)' }}>{typeof e.org === 'string' ? e.org : e.org[lang]}</div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: 'var(--muted)' }}>
                  {e.points[lang].map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="skills" title={tx.skillsT}>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills[lang].map((g, i) => (
            <Reveal key={g.title} i={i}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="mb-4 font-semibold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <motion.span key={s} whileHover={{ scale: 1.08, y: -2 }} className="cursor-default rounded-full border px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent" style={{ borderColor: 'var(--line)' }}>
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal i={2}>
          <div className="glass mt-6 flex items-center gap-4 rounded-2xl p-6">
            <Award className="shrink-0 text-heat" size={28} />
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-heat">{tx.awardT}</div>
              <div className="font-medium">{tx.award}</div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="contact" title={tx.contactT}>
        <Reveal>
          <div className="glass rounded-3xl p-8 text-center sm:p-12">
            <p className="mx-auto max-w-xl text-lg" style={{ color: 'var(--muted)' }}>{tx.contactD}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition-transform hover:scale-105"><Mail size={16} /> {links.email}</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors hover:border-accent"><Linkedin size={16} /> LinkedIn</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors hover:border-accent"><Github size={16} /> GitHub</a>
            </div>
            <p className="mt-8 text-sm" style={{ color: 'var(--muted)' }}>{tx.langs}</p>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t py-8 text-center text-sm" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Elizam Dzidoula Daniel MAKIE · {tx.rights}
      </footer>
    </div>
  )
}
