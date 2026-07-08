export const firm = {
  name: "London Accounting Firm",
  location: "London, United Kingdom",
  phone: "+44 20 0000 0000",
  email: "hello@londonaccountingfirm.co.uk",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

export const trustSignals = [
  {
    title: "London-based practice",
    description:
      "Personal accounting support for sole traders, freelancers, consultants, and small limited companies.",
  },
  {
    title: "Small business specialists",
    description:
      "Focused on businesses with turnover under £500k who want reliable advice and clear communication.",
  },
  {
    title: "Qualified accounting support",
    description:
      "Support with accounts, tax returns, bookkeeping, payroll, VAT, and everyday accounting questions.",
  },
  {
    title: "Responsive communication",
    description:
      "A small team that aims to explain things clearly and respond like real humans. Shocking concept.",
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
    image: "/team-member-1.jpg",
    bio: "Supports small businesses with accounts, tax returns, and clear day-to-day accounting advice.",
  },
  {
    name: "Team Member Two",
    role: "Client Support",
    initials: "CS",
    image: "/team-member-2.jpg",
    bio: "Helps clients stay organised, understand deadlines, and get timely responses from the team.",
  },
  {
    name: "Team Member Three",
    role: "Payroll & Bookkeeping",
    initials: "PB",
    image: "/team-member-3.jpg",
    bio: "Works with clients on bookkeeping, payroll, records, and practical business administration.",
  },
];

export const resources = [
  {
    title: "Sole Trader vs Limited Company: What Should You Consider?",
    excerpt:
      "A simple guide to the main differences between working as a sole trader and running a limited company.",
    tag: "Business structure",
    image: "/resource-sole-trader-vs-limited-company.jpg",
  },
  {
    title: "What Records Should a Small Business Keep?",
    excerpt:
      "A practical overview of the records sole traders and limited companies should keep organised.",
    tag: "Record keeping",
    image: "/resource-small-business-records.jpg",
  },
  {
    title: "When Should You Register for VAT?",
    excerpt:
      "A plain-English introduction to VAT registration and why timing matters for growing businesses.",
    tag: "VAT",
    image: "/resource-vat-registration.jpg",
  },
  {
    title: "What Happens Before a Tax Return Deadline?",
    excerpt:
      "What to prepare, what your accountant may ask for, and how to avoid last-minute panic.",
    tag: "Tax returns",
    image: "/resource-tax-deadline.jpg",
  },
  {
    title: "Why Responsive Accounting Support Matters",
    excerpt:
      "Why small businesses benefit from accountants who explain things clearly and respond quickly.",
    tag: "Client support",
    image: "/resource-responsive-accounting.jpg",
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
    question: "Who does London Accounting Firm work with?",
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