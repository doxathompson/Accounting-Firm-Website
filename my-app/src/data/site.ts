export const firm = {
  name: "QPA Accountants",
  location: "London, United Kingdom",
  phone: "+44 20 0000 0000",
  email: "hello@qpaaccountants.co.uk",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const trustSignals = [
  {
    title: "London-based practice",
    description: "Local accounting support for small businesses, freelancers, consultants, and company directors.",
  },
  {
    title: "Small business specialists",
    description: "Focused on sole traders and limited companies with turnover under £500k.",
  },
  {
    title: "Qualified accountants",
    description: "Professional support for accounts, tax returns, bookkeeping, payroll, VAT, and business advice.",
  },
  {
    title: "Responsive support",
    description: "Clear communication from a small team that knows your business and answers properly.",
  },
];

export type Service = {
  title: string;
  short: string;
  who: string;
  how: string;
};

export const services: Service[] = [
  {
    title: "Sole trader accounting",
    short: "Simple, reliable accounting support for self-employed professionals and small business owners.",
    who: "Sole traders, freelancers, consultants, and independent business owners.",
    how: "We help you keep records organised, prepare accounts, understand tax deadlines, and avoid last-minute stress.",
  },
  {
    title: "Limited company accounts",
    short: "Year-end accounts and practical support for small limited companies.",
    who: "Limited companies with turnover under £500k.",
    how: "We prepare company accounts, explain what needs to be filed, and help directors stay on top of responsibilities.",
  },
  {
    title: "Self-assessment tax returns",
    short: "Clear support with preparing and filing personal tax returns.",
    who: "Sole traders, directors, landlords, freelancers, and people with additional income.",
    how: "We review your records, prepare your return, explain your tax position, and help you meet the deadline.",
  },
  {
    title: "Corporation tax",
    short: "Corporation tax preparation and filing for small limited companies.",
    who: "Company directors who want their tax handled correctly and explained clearly.",
    how: "We calculate corporation tax, prepare the return, and help you understand what is due and when.",
  },
  {
    title: "VAT support",
    short: "Practical VAT guidance, registration support, and return preparation.",
    who: "Small businesses approaching or already registered for VAT.",
    how: "We help you understand VAT obligations, prepare returns, and keep your VAT records in order.",
  },
  {
    title: "Payroll",
    short: "Reliable payroll support for small teams and company directors.",
    who: "Small employers, owner-managed companies, and director payroll setups.",
    how: "We help process payroll, payslips, payroll submissions, and routine employer obligations.",
  },
  {
    title: "Bookkeeping",
    short: "Ongoing bookkeeping support so your records stay clean and useful.",
    who: "Small businesses that want organised records without doing everything themselves.",
    how: "We help keep income, expenses, receipts, and bank activity properly recorded and ready for accounts or tax work.",
  },
  {
    title: "Business advice",
    short: "Practical accounting advice for everyday small business decisions.",
    who: "Business owners who want a clearer view of their numbers and responsibilities.",
    how: "We explain things plainly, answer questions, and help you make better decisions without drowning you in jargon.",
  },
];

export const teamMembers = [
  {
    name: "Team Member One",
    role: "Accountant",
    initials: "TM",
    bio: "Supports small businesses with accounts, tax returns, and clear day-to-day accounting advice.",
  },
  {
    name: "Team Member Two",
    role: "Client Support",
    initials: "CS",
    bio: "Helps clients stay organised, understand deadlines, and get timely responses from the team.",
  },
  {
    name: "Team Member Three",
    role: "Payroll & Bookkeeping",
    initials: "PB",
    bio: "Works with clients on bookkeeping, payroll, records, and practical business administration.",
  },
];

export const resources = [
  {
    title: "Sole Trader vs Limited Company: What Should You Consider?",
    excerpt:
      "A simple guide to the main differences between working as a sole trader and running a limited company.",
    tag: "Business structure",
  },
  {
    title: "What Records Should a Small Business Keep?",
    excerpt:
      "A practical overview of the records sole traders and limited companies should keep organised.",
    tag: "Record keeping",
  },
  {
    title: "When Should You Register for VAT?",
    excerpt:
      "A plain-English introduction to VAT registration and why timing matters for growing businesses.",
    tag: "VAT",
  },
  {
    title: "What Happens Before a Tax Return Deadline?",
    excerpt:
      "What to prepare, what your accountant may ask for, and how to avoid last-minute panic.",
    tag: "Tax returns",
  },
  {
    title: "Why Responsive Accounting Support Matters",
    excerpt:
      "Why small businesses benefit from accountants who explain things clearly and respond quickly.",
    tag: "Client support",
  },
];

export const values = [
  {
    title: "Responsive communication",
    description: "Clients should not feel ignored, confused, or passed around.",
  },
  {
    title: "Clear advice",
    description: "Accounting should be explained in plain English, not hidden behind jargon.",
  },
  {
    title: "Reliable deadlines",
    description: "Accounts, returns, payroll, and filings need calm, organised handling.",
  },
  {
    title: "Long-term relationships",
    description: "The best support comes from understanding the client’s business over time.",
  },
];

export const faqs = [
  {
    question: "Who does QPA Accountants work with?",
    answer:
      "We work with sole traders, freelancers, consultants, small limited companies, and owner-managed businesses, especially those with turnover under £500k.",
  },
  {
    question: "Do you publish fixed prices on the website?",
    answer:
      "No. The first step is a free consultation so we can understand your business and the support you actually need.",
  },
  {
    question: "Can I speak to a real person?",
    answer:
      "Yes. The firm is intentionally small, so clients can build a direct relationship with the team instead of being passed around a large organisation.",
  },
];