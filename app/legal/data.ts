export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  intro: string;
  updated: string;
};

export const legalMeta: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    intro:
      "How Devcuts Media collects, uses, and protects your personal information.",
    updated: "January 1, 2026",
  },
  {
    slug: "terms",
    title: "Terms of Service",
    intro:
      "The rules that govern your access to and use of our website and services.",
    updated: "January 1, 2026",
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    intro:
      "What cookies we use, why we use them, and how you can control them.",
    updated: "January 1, 2026",
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "Devcuts Media (\"Devcuts\", \"we\", \"us\", or \"our\") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have.",
      "By using our website or engaging our services, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    paragraphs: [
      "We collect information that you provide directly to us, as well as limited technical information gathered automatically when you visit our website.",
    ],
    list: [
      "Contact details such as your name, email address, phone/WhatsApp number, and company name.",
      "Project information you submit through our brief form, including goals, budget range, and timeline.",
      "Communications you send us by email, WhatsApp, or other channels.",
      "Technical data such as IP address, browser type, device information, and pages visited.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    list: [
      "To respond to enquiries and prepare quotes, proposals, or scopes of work.",
      "To deliver, maintain, and support the services you request.",
      "To send administrative messages related to an active project.",
      "To improve our website, services, and user experience.",
      "To comply with legal and accounting obligations.",
    ],
  },
  {
    heading: "4. Legal Basis for Processing",
    paragraphs: [
      "Where required, we process personal data on the basis of your consent, the performance of a contract with you, our legitimate business interests, or compliance with legal obligations.",
    ],
  },
  {
    heading: "5. Cookies and Tracking",
    paragraphs: [
      "We use cookies and similar technologies to operate our website and understand how it is used. For full details, including how to disable cookies, please see our Cookie Policy.",
    ],
  },
  {
    heading: "6. Sharing and Disclosure",
    paragraphs: [
      "We do not sell your personal data. We may share it with trusted service providers who help us operate our business (such as hosting, analytics, and communication tools), and only to the extent necessary. We may also disclose information where required by law.",
    ],
  },
  {
    heading: "7. Data Retention",
    paragraphs: [
      "We retain personal data only for as long as necessary to fulfil the purposes described in this policy, to maintain business records, or to comply with legal obligations. When data is no longer needed, we delete or anonymise it.",
    ],
  },
  {
    heading: "8. Security",
    paragraphs: [
      "We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "9. International Transfers",
    paragraphs: [
      "Some of our service providers may store or process data outside your country. Where this happens, we take steps to ensure your data remains protected to a standard consistent with applicable law.",
    ],
  },
  {
    heading: "10. Your Rights",
    paragraphs: [
      "Depending on where you live, you may have the right to access, correct, delete, restrict, or object to the processing of your personal data, and to request a portable copy. To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    heading: "11. Children's Privacy",
    paragraphs: [
      "Our services are intended for businesses and are not directed at children under 16. We do not knowingly collect personal data from children.",
    ],
  },
  {
    heading: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated date.",
    ],
  },
  {
    heading: "13. Contact Us",
    paragraphs: [
      "If you have questions about this policy or your personal data, contact us at hello@devcuts.com.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your access to and use of the Devcuts Media website and any services we provide. By accessing our website or engaging us, you agree to be bound by these Terms.",
    ],
  },
  {
    heading: "2. Our Services",
    paragraphs: [
      "Devcuts Media provides software design and development services, including web applications, mobile apps, ERP/CRM systems, AI automation, SEO and growth, and cloud/DevOps engineering. The exact scope of any engagement is defined in a written proposal, statement of work, or contract.",
    ],
  },
  {
    heading: "3. Quotes, Payments and Billing",
    list: [
      "Quotes and estimates are valid for 30 days unless stated otherwise.",
      "Projects typically begin with a deposit, with the balance invoiced against agreed milestones.",
      "Invoices are payable within the period stated on the invoice.",
      "Late payments may result in paused work and, where applicable, interest or recovery costs.",
    ],
  },
  {
    heading: "4. Client Responsibilities",
    paragraphs: [
      "Timely delivery depends on your cooperation. You agree to provide accurate information, feedback, content, and access to systems as reasonably required, and to respond to requests within agreed timeframes.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: [
      "Upon full payment, you own the deliverables created specifically for you, excluding pre-existing materials, third-party components, and our general know-how and internal tools. We retain the right to showcase completed work in our portfolio unless we agree otherwise in writing.",
    ],
  },
  {
    heading: "6. Confidentiality",
    paragraphs: [
      "Each party will keep the other's confidential information private and use it only for the purposes of the engagement. We are happy to sign a mutual Non-Disclosure Agreement (NDA) on request.",
    ],
  },
  {
    heading: "7. Third-Party Services",
    paragraphs: [
      "Our work may rely on third-party platforms, libraries, and hosting providers. Their availability and terms are outside our control, and we are not responsible for outages or changes on their side.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Devcuts Media is not liable for indirect, incidental, or consequential damages, or for lost profits or data. Our total liability is limited to the fees paid for the specific services giving rise to the claim.",
    ],
  },
  {
    heading: "9. Termination",
    paragraphs: [
      "Either party may terminate an engagement in accordance with the agreed contract. On termination, you remain responsible for payment for work performed up to that point.",
    ],
  },
  {
    heading: "10. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of Pakistan. Any disputes will be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan, unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "11. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "12. Contact",
    paragraphs: [
      "Questions about these Terms? Reach us at hello@devcuts.com.",
    ],
  },
];

export const cookiesSections: LegalSection[] = [
  {
    heading: "1. What Are Cookies",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help the site function, remember your preferences, and provide information to the site owners.",
    ],
  },
  {
    heading: "2. How We Use Cookies",
    paragraphs: [
      "We use cookies and similar technologies to keep our website working reliably, understand how visitors use it, and improve performance and content.",
    ],
  },
  {
    heading: "3. Types of Cookies We Use",
    list: [
      "Essential cookies — required for the website to function, such as security and load-balancing.",
      "Preference cookies — remember choices you make, such as language or region.",
      "Analytics cookies — help us understand traffic and usage patterns in aggregate.",
    ],
  },
  {
    heading: "4. Third-Party Cookies",
    paragraphs: [
      "Some cookies are set by third-party services we use, such as analytics or embedded content providers. These providers have their own privacy and cookie policies.",
    ],
  },
  {
    heading: "5. Managing Cookies",
    paragraphs: [
      "You can control or delete cookies through your browser settings. Most browsers allow you to block or remove cookies. Note that disabling essential cookies may affect how the website works.",
    ],
  },
  {
    heading: "6. Changes to This Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date.",
    ],
  },
  {
    heading: "7. Contact",
    paragraphs: [
      "If you have questions about our use of cookies, contact us at hello@devcuts.com.",
    ],
  },
];
