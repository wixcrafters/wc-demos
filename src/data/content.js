import { IMG, BLOG_COVERS } from './images.js'

export const SITE = {
  name: 'Wix Crafters',
  url: 'https://wixcrafters.com',
  email: 'contact@wixcrafters.com',
  instagram: 'https://www.instagram.com/wixcrafters/',
  tagline:
    'We help businesses build powerful, scalable, and fully customized websites using Wix & Velo',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/ai-chatbot', label: 'AI Chatbot' },
  { to: '/filters-on-repeater', label: 'Filters on Repeater' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact-us', label: 'Contact Us' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Projects completed' },
  { value: 30, suffix: '+', label: 'Happy clients' },
  { value: 50, suffix: '+', label: 'Integrations built' },
  { value: 5.0, suffix: '', label: 'Fiverr rating', decimals: 1 },
]

export const TECH_MARQUEE = [
  'Stripe', 'Adyen', 'GoCardless', 'Ingram Micro', 'OpenAI', 'Anthropic', 'OpenRouter',
  'Custom CRMs', 'REST APIs', 'Webhooks', 'Payment gateways', 'Wix Data', 'Velo backend',
]

export const SERVICES = [
  {
    id: 'api',
    title: 'API Integrations',
    blurb:
      'Stripe, CRMs, payment gateways, and custom third-party APIs connected to your Wix site, with the secrets and logic kept on the backend where they belong.',
    points: ['Stripe, Adyen and GoCardless', 'CRM and ERP sync', 'Webhooks and scheduled jobs'],
    image: IMG.serviceApi,
  },
  {
    id: 'velo',
    title: 'Advanced Velo Development',
    blurb:
      'Custom sites built with Velo: subscription platforms, booking systems and complex business logic that the standard editor cannot reach.',
    points: ['Subscription platforms', 'Custom booking systems', 'Multi-step forms and configurators'],
    image: IMG.serviceVelo,
  },
  {
    id: 'portal',
    title: 'Member Portals & Dashboards',
    blurb:
      'Admin dashboards, client portals and membership systems with role-based access and real-time data.',
    points: ['Role-based access', 'Admin and client portals', 'Live data and reporting'],
    image: IMG.servicePortal,
  },
]

export const CAPABILITIES = [
  { title: 'Secure Databases', text: 'Structured Wix Data collections with permissions designed around who is allowed to read, write and export.' },
  { title: 'Business Logic', text: 'Pricing rules, eligibility checks and workflows implemented in backend web modules instead of page code.' },
  { title: 'Advanced Automations', text: 'Triggered emails, scheduled jobs and event-driven flows that remove manual work from your week.' },
  { title: 'Dynamic Content', text: 'Dynamic pages, repeaters and filters that stay fast as your content grows.' },
  { title: 'Custom Forms', text: 'Multi-step forms with validation, file handling and hand-off to your CRM or inbox.' },
]

export const EXPERTISE = [
  'API Integration',
  'Custom Bookings',
  'Payment Gateway Integration',
  'Admin Client Portal',
  'Custom Configurator',
  'and much more',
]

export const WHY = [
  { title: 'Fast delivery', text: 'Most projects are delivered within 3 to 5 days.' },
  { title: 'On time, every time', text: 'We respect your deadlines and tell you early if anything changes.' },
  { title: 'We do not disappear after launch', text: 'Fixes and updates are covered after delivery. No project is closed until you approve the final result.' },
  { title: 'API and payment depth', text: 'Hands-on integration experience including Adyen and GoCardless.' },
  { title: 'Certified specialists', text: 'Wix and Velo expertise from people who write Velo every day.' },
]

export const PROCESS = [
  { step: '01', title: 'Share your idea', text: 'Tell us what you need to build. A rough brief is enough; the more detail you share, the better we can help.' },
  { step: '02', title: 'We design, build and test', text: 'We design the data model and the experience, develop the solution in Velo, and test it against real scenarios.' },
  { step: '03', title: 'Deliver, launch, support', text: 'We hand over a working solution, help you launch, and stay available for fixes and updates.' },
]

export const PROJECTS = [
  { title: 'Virtual Mailbox', tags: ['velo'], href: 'https://www.wixcrafters.com/view-portfolio/virtual-mailbox' },
  { title: 'Petal & Doe', tags: ['velo', 'design'], href: 'https://www.wixcrafters.com/view-portfolio/petal-%26-doe', image: IMG.petalDoe },
  { title: 'ASC Gerüstbau GmbH', tags: ['design'], href: 'https://www.wixcrafters.com/view-portfolio/asc-ger%C3%BCstbau-gmbh', image: IMG.asc },
  { title: 'Parke-n', tags: ['velo', 'design'], href: 'https://www.wixcrafters.com/view-portfolio/parke-n' },
  { title: 'Ingram Micro API Integration', tags: ['velo'], href: 'https://www.wixcrafters.com/view-portfolio/ingram-micro-api-integration' },
  { title: 'Svenskin Samling', tags: ['velo', 'design'], href: 'https://www.wixcrafters.com/view-portfolio/svenskin-samling' },
  { title: 'Amy Coach', tags: ['design'], href: 'https://www.wixcrafters.com/view-portfolio/amy-coach' },
  { title: 'Lionshare Cowork', tags: ['velo'], image: IMG.lionshare },
  { title: 'Sunni Matrimony', tags: ['velo', 'design'], image: IMG.sunni },
]

export const FEATURED_PROJECTS = ['Lionshare Cowork', 'Petal & Doe', 'ASC Gerüstbau GmbH', 'Sunni Matrimony']

export const PLANS = [
  {
    name: 'Starter',
    price: '$299',
    note: 'For simple sites that need a little Velo.',
    features: ['Basic Wix setup', 'Simple Velo customizations', 'Contact forms and basic logic', 'Mobile responsive design', '1 to 2 revisions'],
  },
  {
    name: 'Professional',
    price: '$799',
    featured: true,
    note: 'For custom builds with real business logic.',
    features: ['Custom Wix development', 'Advanced Velo logic', 'API integration', 'Dynamic pages and databases', 'Custom dashboards and workflows', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'For platforms that have to scale.',
    features: ['Complex Velo backend logic', 'Multi-user systems', 'Payment gateway integration', 'Automation and AI chatbots', 'Scalable architecture', 'Ongoing support'],
  },
]

export const FAQS = [
  {
    q: 'What services does Wix Crafters provide?',
    a: 'Custom Wix development using Velo, including API integrations, payment gateways, custom dashboards, automation, eCommerce solutions and multi-user systems.',
  },
  {
    q: 'How fast can you deliver?',
    a: 'Most projects are delivered within 3 to 5 days.',
  },
  {
    q: 'What happens after launch?',
    a: 'We do not disappear after launch. Fixes and updates are covered, and no project is closed until you approve the final result.',
  },
  {
    q: 'Are there hidden charges?',
    a: 'No hidden charges. No surprises.',
  },
  {
    q: 'Can Wix really handle something this custom?',
    a: 'Almost everything is possible on Wix: secure databases, business logic, advanced automations, dynamic content and custom forms, all built with Velo.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Anthony J',
    role: 'Fiverr client',
    quote: 'Wix Crafters provided a great service at a great rate. I had been stuck dealing with a problem for weeks…',
  },
  {
    name: 'Natalie M',
    role: 'Fiverr client',
    quote: 'Thank you again! We needed to make an adjustment to our site and WixCrafters got it done so quickly…',
  },
  {
    name: 'Kate',
    role: 'Fiverr client',
    quote: 'Great communication and understanding of my needs. Will use again on any future projects. Thank you!',
  },
  {
    name: 'Aura',
    role: 'Fiverr client',
    quote: 'Excellent API Integration Work! Working with Wix Crafters was a great experience.',
  },
  {
    name: 'Serhad Marasli',
    role: 'Founder, CEO',
    company: 'Parke-N',
    logo: IMG.parkeLogo,
    quote: 'Good work takes time. And that\'s exactly what he delivered here. He has an incredible amount of knowledge.',
  },
  {
    name: 'Flynn Blackie',
    role: 'Founder, CEO',
    company: 'MOD Digital',
    avatar: IMG.flynnAvatar,
    quote: 'I love working with Wix Crafters. Always on the ball and cooperative to work with.',
  },
  {
    name: 'Michael Januzzi',
    role: 'Founder, CEO',
    company: 'Lion Share Co-work',
    avatar: IMG.mikeAvatar,
    logo: IMG.lionshareLogo,
    quote: 'Outstanding work. All deliverables were completed ahead of schedule with clear, consistent communication at every stage.',
  },
]

const POST_BASE = 'https://www.wixcrafters.com/post/'
export const POSTS = [
  { title: 'How to Build a Before and After Showcase on Wix', date: 'Apr 28', read: 3, slug: 'wix-velo-before-after-showcase', cover: BLOG_COVERS.beforeAfter, excerpt: 'Side-by-side comparisons build trust and show the value of your work.' },
  { title: 'How to Add Email Automation on Wix Using Velo', date: 'Apr 28', read: 4, slug: 'wix-velo-email-automation', cover: BLOG_COVERS.emailAutomation, excerpt: 'Automate welcome messages, order confirmations, reminders and follow-ups to save time and boost engagement.' },
  { title: 'How to Build a Custom Booking System on Wix Using Velo', date: 'Apr 28', read: 3, slug: 'wix-velo-custom-booking-system', cover: BLOG_COVERS.booking, excerpt: 'An alternative to the default Wix Bookings app for custom slots, pricing, booking rules and confirmation emails.' },
  { title: 'How to Add Custom Filters on Wix Repeater Using Velo', date: 'Apr 28', read: 4, slug: 'wix-velo-repeater-filters', cover: BLOG_COVERS.repeaterFilters, excerpt: 'Build dynamic filters so visitors can narrow results for flights, products, jobs or listings.' },
  { title: 'How to Build an Analytics Dashboard on Wix Using Velo', date: 'Apr 28', read: 4, slug: 'wix-velo-analytics-dashboard', cover: BLOG_COVERS.dashboard, excerpt: 'A custom dashboard with charts, stat cards and filters to track sales, orders and user activity.' },
  { title: 'How to Integrate a Payment Gateway on Wix Using Velo', date: 'Apr 28', read: 4, slug: 'wix-velo-payment-gateway', cover: BLOG_COVERS.payment, excerpt: 'A secure, custom payment flow for subscriptions, invoicing and international transactions.' },
  { title: 'How to Build a Project Cost Estimator on Wix Using Velo', date: 'Apr 28', read: 3, slug: 'wix-velo-project-cost-estimator', cover: BLOG_COVERS.estimator, excerpt: 'An on-site estimator that gives visitors instant cost and timeline figures and helps qualify leads.' },
  { title: 'How to Integrate a QR Code Generator in Wix Using Velo', date: 'Apr 26', read: 3, slug: 'wix-velo-qr-code-generator', cover: BLOG_COVERS.qr, excerpt: 'QR codes for digital menus, product links, business cards and event tickets.' },
  { title: 'How to Build an AI Chatbot on Wix Using Velo', date: 'Apr 26', read: 4, slug: 'wix-velo-ai-chatbot', cover: BLOG_COVERS.chatbot, excerpt: 'A chatbot powered by the free OpenRouter API, with chat history.' },
  { title: 'How to Build a Distance Calculator on Wix Using Velo', date: 'Apr 26', read: 4, slug: 'how-to-build-a-distance-calculator-on-wix-using-velo', cover: BLOG_COVERS.distance, excerpt: 'Show distance, travel time and routes for logistics, travel and delivery sites.' },
  { title: 'How to Add Dynamic Filters to a Wix Repeater Using Velo', date: 'Apr 26', read: 3, slug: 'wix-velo-filters-repeater', cover: BLOG_COVERS.dynamicFilters, excerpt: 'Help users find content faster, with examples from flight search, catalogs and job listings.' },
  { title: 'How to Convert Image to Base64 in Wix Velo', date: 'Jun 29, 2025', read: 1, slug: 'how-to-convert-image-to-base64-in-wix-velo', cover: BLOG_COVERS.base64, excerpt: 'Encode images as text for embedding in HTML, storing in databases or sending via APIs.' },
  { title: 'Convert Wix Image to URL', date: 'Jun 29, 2025', read: 1, slug: 'convert-wix-image-to-url', cover: BLOG_COVERS.imageToUrl, excerpt: 'How to get a usable URL for images stored on your Wix site.' },
  { title: 'Wix Velo Code to Generate a QR Code for a Text, URL or Image', date: 'Jun 8, 2025', read: 2, slug: 'wix-velo-code-to-generate-qr-code-for-a-text-url-image', cover: BLOG_COVERS.qrCode, excerpt: 'QR code generation in Velo, from the Wix Crafters team.' },
].map((p) => ({ ...p, href: POST_BASE + p.slug }))
