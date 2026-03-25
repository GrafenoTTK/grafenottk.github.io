
// ══════════════════════════════════════════
// TRANSLATIONS — todas as páginas
// ══════════════════════════════════════════
const i18n = {
  en: {
    // NAV
    'nav-about':'ABOUT','nav-projects':'PROJECTS','nav-community':'COMMUNITY',
    'nav-privacy':'PRIVACY','nav-terms':'TERMS','nav-github':'GITHUB',
    // HERO
    'hero-eyebrow':'Since 2019 — Optimization Collective',
    'hero-title':'GrafenoTTK<br>Tech Creators Collective',
    'hero-sub':'We build optimization software and performance tools for low-end PCs and third-party clients. Pushing technology without limits.',
    'hero-btn1':'EXPLORE PROJECTS','hero-btn2':'JOIN DISCORD',
    // ABOUT
    'about-title':'ABOUT US',
    'c1-title':'Founded in 2019','c1-text':'GrafenoTTK was born in 2019 with a clear mission: help the low-end PC community squeeze every bit of performance out of their hardware. Community-first since day one.',
    'c2-title':'Optimization Software','c2-text':'We develop and distribute optimization tools designed specifically for low-end machines — reducing latency, improving FPS, and making older hardware feel brand new.',
    'c3-title':'Community-Driven','c3-text':'Our Discord is the hub where users, devs and contributors exchange knowledge, test builds, and shape our projects together. Always open, always growing.',
    'c4-title':'Third-Party Dev','c4-text':'Beyond our own tools, we develop custom optimization software for third-party clients — tailored solutions for specific hardware or use-case requirements.',
    'c5-title':'Diverse Products','c5-text':'Our catalog includes system optimizers, performance tweaks, and utility tools. Real, measurable improvements — no bloatware, ever.',
    'c6-title':'Focused & Honest','c6-text':'GrafenoTTK focuses exclusively on optimization software. Transparent, straightforward, no fluff, no false promises.',
    // REPOS
    'repos-title':'REPOSITORIES','repos-loading':'LOADING REPOSITORIES...',
    'repo-code':'Code','repo-download':'Download',
    // COMMUNITY
    'comm-title':'COMMUNITY','comm-h3':'Join Our Community 🌐',
    'comm-p':'Become part of a vibrant group of tech enthusiasts and optimization experts. Share knowledge, test new builds, and contribute to tools transforming the low-end PC experience.',
    'comm-btn1':'JOIN DISCORD','comm-btn2':'GITHUB',
    // FOOTER
    'ft-about':'ABOUT','ft-privacy':'PRIVACY POLICY','ft-terms':'TERMS OF USE',
    'copyright':'© 2019-2026 GrafenoTTK. All rights reserved.',
    // PRIVACY PAGE
    'priv-title':'Privacy Policy','priv-updated':'Last updated: March 2026',
    'priv-1-h':'1. Introduction','priv-1-p':'GrafenoTTK is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our software. By using our services, you agree to this Privacy Policy.',
    'priv-2-h':'2. Information We Collect','priv-2-p':'We do <strong>not</strong> collect personally identifiable information without explicit consent.',
    'priv-2-l':'<li><strong>Usage Data:</strong> Anonymous technical data to improve product quality.</li><li><strong>Hardware Info:</strong> Non-identifiable specs (CPU, RAM, OS) for diagnostics only.</li><li><strong>Contact Info:</strong> Username and voluntarily shared info via Discord or GitHub.</li><li><strong>GitHub Data:</strong> Public repo data via API — no private data accessed.</li>',
    'priv-3-h':'3. How We Use Your Information','priv-3-p':'We never sell or trade your data to third parties.',
    'priv-3-l':'<li>Improve and optimize our software and services.</li><li>Diagnose and fix technical issues.</li><li>Communicate when you contact us directly.</li><li>Understand general usage trends (anonymized).</li>',
    'priv-4-h':'4. Cookies & Tracking','priv-4-p':'Minimal cookies for functionality only. No advertising trackers or individual user profiling.',
    'priv-5-h':'5. Third-Party Services',
    'priv-5-l':'<li><strong>GitHub:</strong> Public API for repository data.</li><li><strong>Discord:</strong> Subject to Discord\'s Privacy Policy.</li><li><strong>CDN:</strong> Font Awesome for icons.</li>',
    'priv-6-h':'6. Data Security','priv-6-p':'We implement reasonable technical measures to protect data. No internet transmission is 100% secure.',
    'priv-7-h':'7. Children\'s Privacy','priv-7-p':'Services not directed at children under 13. We do not knowingly collect data from minors.',
    'priv-8-h':'8. Changes','priv-8-p':'We may update this policy periodically. Continued use after changes constitutes acceptance.',
    'priv-9-h':'9. Contact',
    'priv-back':'Back to Home','priv-next':'Terms of Use',
    // TERMS PAGE
    'terms-title':'Terms of Use','terms-updated':'Last updated: March 2026',
    'terms-1-h':'1. Acceptance','terms-1-p':'By accessing or using any GrafenoTTK website, software, or service, you agree to these Terms. If you disagree, discontinue use immediately.',
    'terms-2-h':'2. Services',
    'terms-2-l':'<li>Free and paid downloadable optimization software.</li><li>Custom optimization for third-party clients.</li><li>Community resources via Discord and GitHub.</li><li>Documentation and tutorials.</li>',
    'terms-3-h':'3. User Responsibilities',
    'terms-3-l':'<li>Use software only for lawful purposes on hardware you own or are permitted to modify.</li><li>Do not reverse-engineer or decompile proprietary software.</li><li>Do not redistribute GrafenoTTK products without written consent.</li><li>Do not use our tools to harm third-party systems.</li>',
    'terms-4-h':'4. Licensing','terms-4-p':'Some repos are open-source (MIT, GPL, etc.). Always check the license file. Proprietary products may not be redistributed.',
    'terms-5-h':'5. Disclaimer','terms-5-p':'Products provided <strong>"as is"</strong>. Always back up your system before applying optimizations.',
    'terms-6-h':'6. Liability','terms-6-p':'GrafenoTTK is not liable for indirect or consequential damages including data loss or system instability.',
    'terms-7-h':'7. Intellectual Property','terms-7-p':'All content — logos, graphics, text, software — is property of GrafenoTTK unless otherwise noted.',
    'terms-8-h':'8. Changes','terms-8-p':'We may modify these Terms at any time. Continued use constitutes acceptance.',
    'terms-9-h':'9. Governing Law','terms-9-p':'Governed by applicable local and international laws. Disputes resolved through good-faith negotiation.',
    'terms-10-h':'10. Contact',
    'terms-back':'Back to Home','terms-prev':'Privacy Policy',
    'contact-p':'Reach us via <a href="https://discord.gg/gBGjd7ry2w" target="_blank" rel="noopener">Discord</a> or <a href="https://github.com/GrafenoTTK" target="_blank" rel="noopener">GitHub</a>.',
  },
  pt: {
    'nav-about':'SOBRE','nav-projects':'PROJETOS','nav-community':'COMUNIDADE',
    'nav-privacy':'PRIVACIDADE','nav-terms':'TERMOS','nav-github':'GITHUB',
    'hero-eyebrow':'Desde 2019 — Coletivo de Otimização',
    'hero-title':'GrafenoTTK<br>Coletivo de Criadores Tech',
    'hero-sub':'Desenvolvemos softwares de otimização e ferramentas de performance para PCs fracos e clientes externos. Empurrando a tecnologia sem limites.',
    'hero-btn1':'VER PROJETOS','hero-btn2':'ENTRAR NO DISCORD',
    'about-title':'SOBRE NÓS',
    'c1-title':'Fundada em 2019','c1-text':'A GrafenoTTK nasceu em 2019 com uma missão clara: ajudar a comunidade de PCs fracos a extrair o máximo de performance do hardware. Comunidade em primeiro lugar desde o início.',
    'c2-title':'Software de Otimização','c2-text':'Desenvolvemos e distribuímos ferramentas de otimização projetadas especialmente para máquinas fracas — reduzindo latência, melhorando FPS e fazendo hardware antigo parecer novo.',
    'c3-title':'Guiado pela Comunidade','c3-text':'Nosso Discord é o hub onde usuários, devs e colaboradores trocam conhecimento, testam builds e moldam nossos projetos juntos. Sempre aberto, sempre crescendo.',
    'c4-title':'Dev para Terceiros','c4-text':'Além das nossas próprias ferramentas, desenvolvemos software de otimização customizado para clientes externos — soluções sob medida para hardware ou necessidades específicas.',
    'c5-title':'Produtos Variados','c5-text':'Nosso catálogo inclui otimizadores de sistema, tweaks de performance e ferramentas utilitárias. Melhorias reais e mensuráveis — sem bloatware, jamais.',
    'c6-title':'Focado e Honesto','c6-text':'A GrafenoTTK foca exclusivamente em software de otimização. Transparente, direto ao ponto, sem enrolação nem falsas promessas.',
    'repos-title':'REPOSITÓRIOS','repos-loading':'CARREGANDO REPOSITÓRIOS...',
    'repo-code':'Código','repo-download':'Baixar',
    'comm-title':'COMUNIDADE','comm-h3':'Entre na Nossa Comunidade 🌐',
    'comm-p':'Faça parte de um grupo vibrante de entusiastas de tecnologia e especialistas em otimização. Compartilhe conhecimento, teste novas builds e contribua com ferramentas que transformam a experiência de quem tem PC fraco.',
    'comm-btn1':'ENTRAR NO DISCORD','comm-btn2':'GITHUB',
    'ft-about':'SOBRE','ft-privacy':'POLÍTICA DE PRIVACIDADE','ft-terms':'TERMOS DE USO',
    'copyright':'© 2019-2026 GrafenoTTK. Todos os direitos reservados.',
    'priv-title':'Política de Privacidade','priv-updated':'Última atualização: Março 2026',
    'priv-1-h':'1. Introdução','priv-1-p':'A GrafenoTTK se compromete a proteger sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações ao visitar nosso site ou usar nosso software. Ao usar nossos serviços, você concorda com esta Política.',
    'priv-2-h':'2. Informações que Coletamos','priv-2-p':'Nós <strong>não</strong> coletamos informações pessoais identificáveis sem consentimento explícito.',
    'priv-2-l':'<li><strong>Dados de Uso:</strong> Dados técnicos anônimos para melhorar a qualidade do produto.</li><li><strong>Info de Hardware:</strong> Especificações não identificáveis (CPU, RAM, SO) apenas para diagnóstico.</li><li><strong>Info de Contato:</strong> Nome de usuário e informações compartilhadas voluntariamente via Discord ou GitHub.</li><li><strong>Dados do GitHub:</strong> Dados públicos de repositórios via API — sem acesso a dados privados.</li>',
    'priv-3-h':'3. Como Usamos suas Informações','priv-3-p':'Nunca vendemos ou negociamos seus dados com terceiros.',
    'priv-3-l':'<li>Melhorar e otimizar nosso software e serviços.</li><li>Diagnosticar e corrigir problemas técnicos.</li><li>Comunicar quando você nos contata diretamente.</li><li>Entender tendências gerais de uso (anonimizadas).</li>',
    'priv-4-h':'4. Cookies e Rastreamento','priv-4-p':'Cookies mínimos apenas para funcionalidade. Sem rastreadores de publicidade ou perfis individuais.',
    'priv-5-h':'5. Serviços de Terceiros',
    'priv-5-l':'<li><strong>GitHub:</strong> API pública para dados de repositórios.</li><li><strong>Discord:</strong> Sujeito à Política de Privacidade do Discord.</li><li><strong>CDN:</strong> Font Awesome para ícones.</li>',
    'priv-6-h':'6. Segurança de Dados','priv-6-p':'Implementamos medidas técnicas razoáveis para proteger os dados. Nenhuma transmissão pela internet é 100% segura.',
    'priv-7-h':'7. Privacidade de Menores','priv-7-p':'Serviços não direcionados a menores de 13 anos. Não coletamos dados de menores intencionalmente.',
    'priv-8-h':'8. Alterações','priv-8-p':'Podemos atualizar esta política periodicamente. O uso contínuo após as alterações constitui aceitação.',
    'priv-9-h':'9. Contato',
    'priv-back':'Voltar ao Início','priv-next':'Termos de Uso',
    'terms-title':'Termos de Uso','terms-updated':'Última atualização: Março 2026',
    'terms-1-h':'1. Aceitação','terms-1-p':'Ao acessar ou usar qualquer site, software ou serviço da GrafenoTTK, você concorda com estes Termos. Se discordar, descontinue o uso imediatamente.',
    'terms-2-h':'2. Serviços',
    'terms-2-l':'<li>Software de otimização gratuito e pago para download.</li><li>Otimização customizada para clientes externos.</li><li>Recursos da comunidade via Discord e GitHub.</li><li>Documentação e tutoriais.</li>',
    'terms-3-h':'3. Responsabilidades do Usuário',
    'terms-3-l':'<li>Use o software apenas para fins legais em hardware que você possui ou tem permissão para modificar.</li><li>Não faça engenharia reversa ou descompile software proprietário.</li><li>Não redistribua produtos GrafenoTTK sem consentimento por escrito.</li><li>Não use nossas ferramentas para prejudicar sistemas de terceiros.</li>',
    'terms-4-h':'4. Licenciamento','terms-4-p':'Alguns repositórios são open-source (MIT, GPL, etc.). Sempre verifique o arquivo de licença. Produtos proprietários não podem ser redistribuídos.',
    'terms-5-h':'5. Isenção de Responsabilidade','terms-5-p':'Produtos fornecidos <strong>"como estão"</strong>. Sempre faça backup do seu sistema antes de aplicar otimizações.',
    'terms-6-h':'6. Limitação de Responsabilidade','terms-6-p':'A GrafenoTTK não é responsável por danos indiretos ou consequentes, incluindo perda de dados ou instabilidade do sistema.',
    'terms-7-h':'7. Propriedade Intelectual','terms-7-p':'Todo conteúdo — logos, gráficos, textos, software — é propriedade da GrafenoTTK, salvo indicação em contrário.',
    'terms-8-h':'8. Alterações','terms-8-p':'Podemos modificar estes Termos a qualquer momento. O uso contínuo constitui aceitação.',
    'terms-9-h':'9. Lei Aplicável','terms-9-p':'Regido pelas leis locais e internacionais aplicáveis. Disputas resolvidas por negociação de boa fé.',
    'terms-10-h':'10. Contato',
    'terms-back':'Voltar ao Início','terms-prev':'Política de Privacidade',
    'contact-p':'Fale conosco via <a href="https://discord.gg/gBGjd7ry2w" target="_blank" rel="noopener">Discord</a> ou <a href="https://github.com/GrafenoTTK" target="_blank" rel="noopener">GitHub</a>.',
  },
  es: {
    'nav-about':'ACERCA','nav-projects':'PROYECTOS','nav-community':'COMUNIDAD',
    'nav-privacy':'PRIVACIDAD','nav-terms':'TÉRMINOS','nav-github':'GITHUB',
    'hero-eyebrow':'Desde 2019 — Colectivo de Optimización',
    'hero-title':'GrafenoTTK<br>Colectivo de Creadores Tech',
    'hero-sub':'Desarrollamos software de optimización y herramientas de rendimiento para PCs de gama baja y clientes externos. Empujando la tecnología sin límites.',
    'hero-btn1':'VER PROYECTOS','hero-btn2':'UNIRSE AL DISCORD',
    'about-title':'ACERCA DE NOSOTROS',
    'c1-title':'Fundada en 2019','c1-text':'GrafenoTTK nació en 2019 con una misión clara: ayudar a la comunidad de PCs de gama baja a sacar el máximo rendimiento de su hardware. La comunidad primero, desde el primer día.',
    'c2-title':'Software de Optimización','c2-text':'Desarrollamos y distribuimos herramientas de optimización diseñadas específicamente para máquinas de gama baja — reduciendo latencia, mejorando FPS y haciendo que el hardware antiguo se sienta nuevo.',
    'c3-title':'Impulsado por la Comunidad','c3-text':'Nuestro Discord es el centro donde usuarios, devs y colaboradores intercambian conocimiento, prueban builds y dan forma a nuestros proyectos. Siempre abierto, siempre creciendo.',
    'c4-title':'Dev para Terceros','c4-text':'Además de nuestras propias herramientas, desarrollamos software de optimización personalizado para clientes externos — soluciones a medida para hardware o casos de uso específicos.',
    'c5-title':'Productos Variados','c5-text':'Nuestro catálogo incluye optimizadores de sistema, ajustes de rendimiento y herramientas utilitarias. Mejoras reales y medibles — sin bloatware, nunca.',
    'c6-title':'Enfocado y Honesto','c6-text':'GrafenoTTK se enfoca exclusivamente en software de optimización. Transparente, directo al grano, sin rodeos ni falsas promesas.',
    'repos-title':'REPOSITORIOS','repos-loading':'CARGANDO REPOSITORIOS...',
    'repo-code':'Código','repo-download':'Descargar',
    'comm-title':'COMUNIDAD','comm-h3':'Únete a Nuestra Comunidad 🌐',
    'comm-p':'Sé parte de un vibrante grupo de entusiastas de la tecnología y expertos en optimización. Comparte conocimiento, prueba nuevas builds y contribuye a herramientas que transforman la experiencia de los PCs de gama baja.',
    'comm-btn1':'UNIRSE AL DISCORD','comm-btn2':'GITHUB',
    'ft-about':'ACERCA','ft-privacy':'POLÍTICA DE PRIVACIDAD','ft-terms':'TÉRMINOS DE USO',
    'copyright':'© 2019-2026 GrafenoTTK. Todos los derechos reservados.',
    'priv-title':'Política de Privacidad','priv-updated':'Última actualización: Marzo 2026',
    'priv-1-h':'1. Introducción','priv-1-p':'GrafenoTTK se compromete a proteger su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información al visitar nuestro sitio web o usar nuestro software.',
    'priv-2-h':'2. Información que Recopilamos','priv-2-p':'No recopilamos información de identificación personal sin consentimiento explícito.',
    'priv-2-l':'<li><strong>Datos de Uso:</strong> Datos técnicos anónimos para mejorar la calidad del producto.</li><li><strong>Info de Hardware:</strong> Especificaciones no identificables (CPU, RAM, SO) solo para diagnóstico.</li><li><strong>Info de Contacto:</strong> Nombre de usuario e información compartida voluntariamente vía Discord o GitHub.</li><li><strong>Datos de GitHub:</strong> Datos públicos de repositorios vía API — sin acceso a datos privados.</li>',
    'priv-3-h':'3. Cómo Usamos su Información','priv-3-p':'Nunca vendemos ni intercambiamos sus datos con terceros.',
    'priv-3-l':'<li>Mejorar y optimizar nuestro software y servicios.</li><li>Diagnosticar y solucionar problemas técnicos.</li><li>Comunicar cuando nos contacta directamente.</li><li>Comprender tendencias generales de uso (anonimizadas).</li>',
    'priv-4-h':'4. Cookies y Rastreo','priv-4-p':'Cookies mínimas solo para funcionalidad. Sin rastreadores publicitarios ni perfiles individuales.',
    'priv-5-h':'5. Servicios de Terceros',
    'priv-5-l':'<li><strong>GitHub:</strong> API pública para datos de repositorios.</li><li><strong>Discord:</strong> Sujeto a la Política de Privacidad de Discord.</li><li><strong>CDN:</strong> Font Awesome para iconos.</li>',
    'priv-6-h':'6. Seguridad de Datos','priv-6-p':'Implementamos medidas técnicas razonables para proteger los datos.',
    'priv-7-h':'7. Privacidad de Menores','priv-7-p':'Servicios no dirigidos a menores de 13 años. No recopilamos datos de menores intencionalmente.',
    'priv-8-h':'8. Cambios','priv-8-p':'Podemos actualizar esta política periódicamente. El uso continuo tras los cambios constituye aceptación.',
    'priv-9-h':'9. Contacto',
    'priv-back':'Volver al Inicio','priv-next':'Términos de Uso',
    'terms-title':'Términos de Uso','terms-updated':'Última actualización: Marzo 2026',
    'terms-1-h':'1. Aceptación','terms-1-p':'Al acceder o usar cualquier sitio web, software o servicio de GrafenoTTK, aceptas estos Términos.',
    'terms-2-h':'2. Servicios',
    'terms-2-l':'<li>Software de optimización gratuito y de pago para descargar.</li><li>Optimización personalizada para clientes externos.</li><li>Recursos comunitarios vía Discord y GitHub.</li><li>Documentación y tutoriales.</li>',
    'terms-3-h':'3. Responsabilidades del Usuario',
    'terms-3-l':'<li>Usa el software solo para fines legales en hardware que posees o tienes permiso para modificar.</li><li>No hagas ingeniería inversa de software propietario.</li><li>No redistribuyas productos GrafenoTTK sin consentimiento escrito.</li><li>No uses nuestras herramientas para dañar sistemas de terceros.</li>',
    'terms-4-h':'4. Licencias','terms-4-p':'Algunos repositorios son open-source (MIT, GPL, etc.). Revisa siempre el archivo de licencia.',
    'terms-5-h':'5. Descargo de Responsabilidad','terms-5-p':'Productos proporcionados <strong>"tal cual"</strong>. Siempre haz copia de seguridad antes de aplicar optimizaciones.',
    'terms-6-h':'6. Limitación de Responsabilidad','terms-6-p':'GrafenoTTK no es responsable de daños indirectos o consecuentes incluyendo pérdida de datos.',
    'terms-7-h':'7. Propiedad Intelectual','terms-7-p':'Todo el contenido — logos, gráficos, textos, software — es propiedad de GrafenoTTK salvo indicación contraria.',
    'terms-8-h':'8. Cambios','terms-8-p':'Podemos modificar estos Términos en cualquier momento. El uso continuo constituye aceptación.',
    'terms-9-h':'9. Ley Aplicable','terms-9-p':'Regido por las leyes locales e internacionales aplicables.',
    'terms-10-h':'10. Contacto',
    'terms-back':'Volver al Inicio','terms-prev':'Política de Privacidad',
    'contact-p':'Contáctanos vía <a href="https://discord.gg/gBGjd7ry2w" target="_blank" rel="noopener">Discord</a> o <a href="https://github.com/GrafenoTTK" target="_blank" rel="noopener">GitHub</a>.',
  }
};

const FLAGS = { en:'🇺🇸', pt:'🇧🇷', es:'🇪🇸' };
const LNAMES = { en:'EN', pt:'PT', es:'ES' };
let currentLang = localStorage.getItem('grafeno-lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('grafeno-lang', lang);
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  // update combobox display
  const selFlag = document.getElementById('sel-flag');
  const selName = document.getElementById('sel-name');
  if (selFlag) selFlag.textContent = FLAGS[lang];
  if (selName) selName.textContent = LNAMES[lang];
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  // LOADER
  window.addEventListener('load', () => {
    setTimeout(() => {
      const l = document.getElementById('loader');
      if (l) { l.classList.add('hide'); setTimeout(() => l.remove(), 900); }
    }, 2500);
  });

  // COMBOBOX
  const wrap  = document.querySelector('.lang-wrap');
  const selEl = document.getElementById('lang-selected');
  const drop  = document.getElementById('lang-dropdown');
  if (wrap && selEl && drop) {
    selEl.addEventListener('click', e => { e.stopPropagation(); wrap.classList.toggle('open'); });
    document.addEventListener('click', () => wrap.classList.remove('open'));
    drop.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        applyLang(opt.getAttribute('data-lang'));
        wrap.classList.remove('open');
      });
    });
  }

  // MOBILE NAV
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.innerHTML = nav.classList.contains('open')
        ? `<svg class="svg-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>` : `<svg class="svg-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></svg>`;
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.innerHTML = `<svg class="svg-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></svg>`;
    }));
  }

  // ACTIVE NAV
  const secs = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    document.querySelectorAll('nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${cur}`);
    });
  }, { passive: true });

  // SCROLL REVEAL
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.animation = 'fadeUp .5s ease both'; obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.about-card,.repo-card').forEach(el => { el.style.opacity='0'; obs.observe(el); });

  // PARTICLES
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles:{number:{value:65,density:{enable:true,value_area:850}},color:{value:'#ff0044'},shape:{type:'polygon',polygon:{nb_sides:6}},opacity:{value:.18,random:true,anim:{enable:true,speed:.6,opacity_min:.05}},size:{value:3,random:true},line_linked:{enable:true,distance:145,color:'#ff0044',opacity:.11,width:1},move:{enable:true,speed:1.2,direction:'none',out_mode:'out'}},
      interactivity:{detect_on:'canvas',events:{onhover:{enable:true,mode:'grab'},onclick:{enable:true,mode:'push'},resize:true},modes:{grab:{distance:140,line_linked:{opacity:.4}},push:{particles_nb:3}}},
      retina_detect:true
    });
  }

  // APPLY SAVED LANG
  applyLang(currentLang);

  // REPOS
  const rc = document.getElementById('repos-container');
  if (!rc) return;
  const EX = ['GrafenoTTK','grafenottk.github.io','DuSete','D7Updates','D7ChangerLogger','DuSete7.github.io','KeyGen-Secure-System','Roulette','Roulette-Changerlogger'];

  async function loadRepos() {
    const t = i18n[currentLang];
    rc.innerHTML = `<div class="loading-msg"><svg class="svg-icon icon-spin" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" class="icon-spin"><path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"/></svg>&nbsp;${t['repos-loading']}</div>`;
    try {
      const all = await (await fetch('https://api.github.com/users/GrafenoTTK/repos?per_page=100')).json();
      const repos = all.filter(r => !EX.includes(r.name));
      if (!repos.length) { rc.innerHTML = '<div class="loading-msg">No repositories found.</div>'; return; }
      const det = await Promise.all(repos.map(async r => {
        try {
          const c = await (await fetch(`https://api.github.com/repos/GrafenoTTK/${r.name}/contents`)).json();
          const img = Array.isArray(c) && c.find(f=>f.type==='file'&&['View','View.png','View.jpg','View.jpeg','View.gif'].includes(f.name));
          return {...r, imgUrl: img ? img.download_url : `https://opengraph.githubassets.com/1/GrafenoTTK/${r.name}`};
        } catch { return {...r, imgUrl:`https://opengraph.githubassets.com/1/GrafenoTTK/${r.name}`}; }
      }));
      rc.innerHTML = det.map(r=>`
        <div class="repo-card glass">
          <img class="repo-image" src="${r.imgUrl}" alt="${r.name}" loading="lazy"
               onerror="this.src='https://opengraph.githubassets.com/1/GrafenoTTK/${r.name}'">
          <div class="repo-body">
            <h3 class="repo-name">${r.name}</h3>
            <p class="repo-desc">${r.description||'No description available.'}</p>
            <div class="repo-meta">
              <span><svg class="svg-icon" width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M243.31,90.31l-64.6-9.4L150.65,19.26a18,18,0,0,0-32.3,0L90.29,80.91l-64.6,9.4a18,18,0,0,0-10,30.71l46.76,45.59L51.66,231a18,18,0,0,0,26.14,19L128,222.61l50.2,27.41A18,18,0,0,0,204.34,231l-10.76-64.41,46.76-45.59a18,18,0,0,0-10-30.71Z"/></svg> ${r.stargazers_count}</span>
              <span><svg class="svg-icon" width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M232,64a40,40,0,1,0-48,39.12V112a24,24,0,0,1-24,24H96a40.07,40.07,0,0,0-40,40v-.88A40,40,0,1,0,80,216v-.88A24,24,0,0,1,56,192V136a40.07,40.07,0,0,0-40-40V96A40,40,0,1,0,72,56.88V96a40,40,0,0,0,12,28.64V175.36A40,40,0,0,0,72,204v.88A40,40,0,1,0,176,215.12V103.12A40,40,0,0,0,232,64Z"/></svg> ${r.forks_count}</span>
              <span><svg class="svg-icon" width="10" height="10" viewBox="0 0 256 256" fill="currentColor"><circle cx="128" cy="128" r="96"/></svg> ${r.language||'N/A'}</span>
            </div>
            <div class="repo-actions">
              <a href="${r.html_url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
                <svg class="svg-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM161.48,40.37a8,8,0,0,0-10.26,4.85l-64,176a8,8,0,0,0,15.11,5.56l64-176A8,8,0,0,0,161.48,40.37Z"/></svg>&nbsp;<span data-i18n="repo-code">${i18n[currentLang]['repo-code']}</span>
              </a>
              ${r.homepage?`<a href="${r.homepage}" target="_blank" rel="noopener" class="btn btn-sm"><svg class="svg-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"/></svg>&nbsp;<span data-i18n="repo-download">${i18n[currentLang]['repo-download']}</span></a>`:''}
            </div>
          </div>
        </div>`).join('');
    } catch {
      rc.innerHTML = '<div class="loading-msg"><svg class="svg-icon" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"/></svg>&nbsp;Failed to load repositories.</div>';
    }
  }
  loadRepos();
});
