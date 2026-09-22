import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Download,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Oportunidades", href: "#oportunidades" },
  { label: "Método", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const capabilities = [
  { number: "01", icon: Cpu, title: "IA aplicada", description: "Agentes, RAG, OpenAI e desenvolvimento assistido por IA para transformar tarefas complexas em fluxos operáveis.", tags: ["Agentes", "RAG", "OpenAI"] },
  { number: "02", icon: Workflow, title: "Automação", description: "Processos end-to-end, integrações e workflows que conectam dados, pessoas e decisões com menos fricção.", tags: ["n8n", "APIs", "Dados"] },
  { number: "03", icon: Boxes, title: "Produto & SaaS", description: "Da descoberta ao lançamento: PRD, priorização, validação e evolução de produtos digitais orientados a uso real.", tags: ["Discovery", "PRD", "MVP"] },
  { number: "04", icon: Network, title: "Negócio & comunicação", description: "Visão de negócio, oratória e capacidade de traduzir decisões técnicas em clareza para equipes e stakeholders.", tags: ["Dados", "Copy", "Oratória"] },
];

const projects = [
  { id: "01", type: "Produto principal", title: "Ponto School", subtitle: "EdTech de IA para a rotina docente", description: "Produto criado para automatizar a criação, organização e comunicação de recursos educacionais. Uma experiência real de descoberta, construção e implementação em escolas.", result: "15+ escolas · 500+ professores", detail: "Liderança de produto, operação e go-to-market de uma plataforma aplicada à rotina de professores, com uso real em escolas e aprendizado direto com usuários.", accent: "project-featured" },
  { id: "02", type: "Experiência B2B", title: "Sites & Apps", subtitle: "Soluções digitais para negócios", description: "Criação de sites e aplicativos para imobiliárias, construtoras, clínicas, escolas e empresas que precisavam transformar presença digital em operação.", result: "Discovery · Produto · Entrega", detail: "Atuação consultiva do briefing à entrega: entender o contexto do negócio, traduzir necessidades em produto e coordenar a execução com clientes B2B.", accent: "project-sand" },
  { id: "03", type: "Go-to-market", title: "Produtos digitais", subtitle: "Oferta, aquisição e monetização", description: "Infoprodutos e cursos na área de marketing digital, conectando copy, tráfego e vendas consultivas a uma operação comercial própria.", result: "R$ 300 mil+ em vendas", detail: "Experiência prática em posicionamento, copy, tráfego, vendas e monetização — repertório que ajuda a conectar produto com adoção e receita.", accent: "project-slate" },
];

const targetRoles = [
  { title: "AI Solutions Engineer", description: "Projetar e implementar soluções com agentes, RAG, APIs e automações que resolvem problemas operacionais reais." },
  { title: "Analista de Automação", description: "Mapear processos, encontrar gargalos e construir workflows end-to-end com dados, integrações e IA." },
  { title: "AI Product Manager", description: "Conectar descoberta, PRD, priorização, experimentação e execução para transformar tecnologia em produto utilizado." },
];

const processSteps = [
  ["01", "Encontrar o gap", "Escuto usuários, observo a operação e traduzo ruído em um problema concreto."],
  ["02", "Desenhar o sistema", "Estruturo hipótese, PRD, workflow e critérios de sucesso antes de acelerar."],
  ["03", "Construir com IA", "Uso código, APIs, dados e ferramentas assistidas para colocar a solução em movimento."],
  ["04", "Medir e melhorar", "Acompanho adoção, feedback e fricções para transformar o primeiro lançamento em produto."],
];

function jumpTo(href: string, close?: () => void) {
  close?.();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <header className="site-header">
        <div className="container flex h-20 items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label="Voltar ao início">
            <span className="brand-mark"><span>JF</span></span>
            <span className="hidden text-sm font-semibold tracking-tight text-paper sm:block">João Fortes</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          </nav>
          <a href="#contato" className="hidden items-center gap-2 rounded-full border border-sand/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-paper transition hover:bg-sand hover:text-ink sm:flex">
            Disponível <span className="status-dot" aria-hidden="true" />
          </a>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <div className="border-t border-paper/15 bg-ink px-4 pb-6 md:hidden"><nav className="container flex flex-col pt-4" aria-label="Navegação móvel">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => jumpTo(item.href, () => setMenuOpen(false))} className="border-b border-paper/10 py-4 text-lg text-paper">{item.label}</a>)}</nav></div>}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="eyebrow animate-rise"><span className="eyebrow-line" /> Disponível para oportunidades em IA aplicada</div>
              <h1 className="display-title animate-rise delay-1">Transformo problemas complexos em <em>sistemas que funcionam.</em></h1>
              <p className="hero-copy animate-rise delay-2">Sou João Fortes, profissional híbrido de IA aplicada, automação e produto. Construo soluções digitais que conectam tecnologia, operação e resultado.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4 animate-rise delay-3">
                <a href="#projetos" className="button-primary">Ver projetos <ArrowRight size={17} /></a>
                <a href="mailto:joaomarcelfortempresa@gmail.com?subject=Oportunidade profissional" className="button-ghost">Conversar sobre contratação <ArrowUpRight size={16} /></a>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-paper/55 animate-rise delay-4"><span>Founder & product builder</span><span className="text-sand">/</span><span>Goiânia, GO · Brasil</span></div>
            </div>

            <div className="hero-visual animate-fade delay-2" aria-label="Diagrama visual de um sistema de automação">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="system-grid" />
              <div className="connector connector-a" /><div className="connector connector-b" /><div className="connector connector-c" /><div className="connector connector-d" />
              <div className="system-node node-core"><Sparkles size={24} /><span>IA</span></div>
              <div className="system-node node-data"><CircleDot size={18} /><span>dados</span></div>
              <div className="system-node node-flow"><Workflow size={18} /><span>fluxo</span></div>
              <div className="system-node node-impact"><Check size={18} /><span>impacto</span></div>
              <div className="visual-caption"><span className="caption-label">MY WORKFLOW</span><span>Problema → Sistema → Resultado</span></div>
            </div>
          </div>
          <a href="#projetos" className="scroll-cue" aria-label="Ir para projetos"><span>Scroll para explorar</span><ArrowDown size={16} /></a>
        </section>

        <section className="proof-strip" aria-label="Provas profissionais">
          <div className="container grid gap-8 py-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div className="proof-intro"><span className="section-kicker">A evidência</span><p>Construção real, não apenas discurso sobre tecnologia.</p></div>
            <div className="proof-item"><strong>15<span>+</span></strong><span>escolas alcançadas<br />pela Ponto School</span></div>
            <div className="proof-item"><strong>500<span>+</span></strong><span>professores<br />cadastrados</span></div>
            <div className="proof-item"><strong>R$300k<span>+</span></strong><span>em vendas<br />de produtos digitais</span></div>
          </div>
        </section>

        <section id="capacidades" className="section-light py-24 lg:py-32">
          <div className="container">
            <div className="section-heading mb-16"><div><span className="section-kicker">01 / Capacidades</span><h2 className="section-title">A ponte entre<br /><em>ideia e execução.</em></h2></div><p className="section-lead">Meu trabalho acontece na interseção entre negócio, produto e tecnologia — onde um gap vira uma solução utilizada.</p></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2">{capabilities.map((item) => { const Icon = item.icon; return <article key={item.number} className="capability-card group"><div className="flex items-start justify-between"><span className="card-number">{item.number}</span><Icon size={22} strokeWidth={1.5} className="text-slate transition duration-300 group-hover:text-sand" /></div><h3>{item.title}</h3><p>{item.description}</p><div className="mt-8 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="tag-light">{tag}</span>)}</div></article>; })}</div>
          </div>
        </section>

        <section id="oportunidades" className="opportunities-section py-24 lg:py-28">
          <div className="container">
            <div className="opportunities-heading">
              <div><span className="section-kicker">01.5 / Onde posso gerar valor</span><h2 className="section-title">Três frentes.<br /><em>Um mesmo fio condutor.</em></h2></div>
              <p className="section-lead">Procuro contextos em que visão de negócio, IA aplicada e capacidade de execução precisem trabalhar juntas — em startups, SaaS, consultorias, EdTechs ou times de inovação.</p>
            </div>
            <div className="role-grid">
              {targetRoles.map((role, index) => <article key={role.title} className="role-card"><span className="role-index">0{index + 1}</span><h3>{role.title}</h3><p>{role.description}</p><a href="#contato" className="role-link">Conversar sobre esta frente <ArrowUpRight size={15} /></a></article>)}
            </div>
          </div>
        </section>

        <section id="projetos" className="projects-section py-24 lg:py-32">
          <div className="container">
            <div className="section-heading mb-14"><div><span className="section-kicker section-kicker-dark">02 / Projetos selecionados</span><h2 className="section-title text-paper">Soluções com<br /><em>contexto e impacto.</em></h2></div><p className="section-lead text-paper/60">Três recortes de uma trajetória construída entre produto, operação, tecnologia e crescimento.</p></div>
            <div className="grid gap-5 lg:grid-cols-3">{projects.map((project, index) => <article key={project.id} className={`project-card ${project.accent} ${index === 0 ? "lg:col-span-2" : ""}`}><div className="project-top"><span className="project-id">{project.id}</span><span className="project-type">{project.type}</span></div><div className="project-graphic" aria-hidden="true">{index === 0 ? <><div className="mini-window window-main"><div className="window-bar"><span /><span /><span /></div><div className="window-lines"><i /><i /><i /><i /></div><div className="window-chart"><b /><b /><b /><b /><b /></div></div><div className="mini-pill">Ponto<br />School</div><div className="mini-spark">✦</div></> : index === 1 ? <><div className="flow-chip chip-one">brief</div><ArrowRight className="flow-arrow" size={20} /><div className="flow-chip chip-two">build</div><ArrowRight className="flow-arrow second" size={20} /><div className="flow-chip chip-three">launch</div></> : <><div className="sales-circle"><span>R$</span><strong>300k</strong></div><div className="sales-line line-one" /><div className="sales-line line-two" /><div className="sales-dot dot-one" /><div className="sales-dot dot-two" /></>}</div><div className="project-content"><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="project-result"><Check size={15} /> <span>{project.result}</span></div></div><details className="project-details"><summary>Ver resumo do case <ArrowUpRight size={16} /></summary><p>{project.detail}</p></details></article>)}</div>
          </div>
        </section>

        <section id="metodo" className="section-light py-24 lg:py-32">
          <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><span className="section-kicker">03 / Método de trabalho</span><h2 className="section-title mt-5">Pensar bem.<br /><em>Construir melhor.</em></h2><p className="section-lead mt-7">A velocidade vem depois da clareza. Cada solução começa com uma pergunta melhor formulada.</p><a href="#contato" className="inline-flex items-center gap-2 pt-8 text-sm font-bold text-ink underline decoration-sand decoration-2 underline-offset-8 transition hover:text-slate">Vamos conversar <ArrowRight size={16} /></a></div><div className="process-list">{processSteps.map(([number, title, description]) => <div key={number} className="process-step"><span className="process-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ChevronRight className="process-arrow" size={20} /></div>)}</div></div>
        </section>

        <section id="sobre" className="about-section py-24 lg:py-32"><div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-28"><div><span className="section-kicker section-kicker-dark">04 / Sobre</span><h2 className="section-title text-paper">Founder por<br /><em>necessidade.</em></h2><div className="about-note mt-12"><span className="status-dot" /><span>Agora aberto a novas oportunidades</span></div></div><div className="about-copy"><p className="about-lead">Minha atuação está na interseção entre negócio, produto e tecnologia.</p><p>Identifico gargalos, estruturo soluções, transformo necessidades em requisitos e coordeno a construção de produtos e automações com Inteligência Artificial.</p><p>Como fundador da Ponto School, aprendi a olhar para o ciclo completo: usuário, operação, produto, marketing, vendas, monetização e evolução. É essa visão de ponta a ponta que levo para cada novo desafio.</p><div className="about-meta"><div><span>Base</span><strong>Goiânia, GO</strong></div><div><span>Idiomas</span><strong>Português · Inglês intermediário</strong></div><div><span>Formato</span><strong>Remoto · PJ · Global</strong></div></div></div></div></section>

        <section id="contato" className="contact-section py-24 lg:py-32"><div className="container"><div className="contact-card"><div><span className="section-kicker">05 / Próximo passo</span><h2 className="contact-title">Tem um problema<br /><em>interessante?</em></h2><p className="contact-copy">Estou buscando uma empresa onde possa combinar IA aplicada, automação e visão de produto para construir algo que realmente mova a operação.</p></div><div className="contact-actions"><a href="mailto:joaomarcelfortempresa@gmail.com?subject=Oportunidade profissional" className="button-primary button-light">Falar sobre uma oportunidade <ArrowUpRight size={17} /></a><a href="/manus-storage/curriculo-joao-fortes_2998e173.pdf" download="curriculo-joao-fortes.pdf" className="contact-link"><Download size={17} /> Baixar currículo em PDF</a><span className="contact-email">joaomarcelfortempresa@gmail.com</span></div></div></div></section>
      </main>

      <footer className="footer"><div className="container flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between"><div><span className="font-display text-xl font-bold text-paper">João Fortes</span><span className="ml-4 text-xs text-paper/40">IA aplicada · automação · produto</span></div><div className="flex items-center gap-5"><a href="https://www.linkedin.com/in/jo%C3%A3o-fortes-ba937537b/" target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://www.instagram.com/joaofortesbs/" target="_blank" rel="noreferrer" className="footer-link" aria-label="Instagram"><Instagram size={17} /></a><a href="mailto:joaomarcelfortempresa@gmail.com" className="footer-link" aria-label="E-mail"><Mail size={17} /></a><span className="footer-year">© 2026</span></div></div></footer>
    </div>
  );
}
