import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import heroImg from "@/assets/hero-recycling.jpg";
import conference6 from "@/assets/conference_6_1.jpeg";
import conference5 from "@/assets/5th-Africa-International-E-Waste-Conference.jpeg";
import conference4 from "@/assets/4th-CONFERENCE-2024.png";
import conference3 from "@/assets/3rd-CONFERENCE-2024.jpg";
import Kilycycle from "@/assets/Kilicycle.jpeg";
import Church from "@/assets/Church.jpg";
import Corporate from "@/assets/Corporatedrive.jpg";
import Estate from "@/assets/Edenville.jpeg";
import International from "@/assets/International.jpg";
import Rotary from "@/assets/Rotary.jpeg";
import Schooldrive from "@/assets/Schooldrive.jpg";

export type EventItem = {
  slug: string;
  title: string;
  type: "Conference" | "Drives" | "Environmental" | "Treeplanting";
  date: string;
  time: string;
  location: string;
  audience: string;
  description: string;
  image: string;
  highlights?: string[];
};

export const events: EventItem[] = [
  {
    slug: "the-6th-africa-international-e-waste-conference",
    title: "The 6th Africa International E-Waste Conference",
    type: "Conference",
    date: "Oct 15 – 16, 2026",
    time: "9:00 AM – 5:00 PM",
    location: "Diani Reef Beach Resort, Kwale, Kenya",
    audience: "Enterprise & Government",
    description:
      "The 6th Africa International E-Waste Conference is Africa's premier platform for advancing sustainable electronics management and the circular economy. Bringing together policymakers, regulators, industry leaders, development partners, academia, innovators, investors, and youth, the conference will showcase practical solutions that transform e-waste into opportunities for green industrialization, investment, job creation, and climate action.",
    image: conference6,
    highlights: [
      "From Compliance to Competitiveness",
      "Regional Harmonization and Alignment in Extended Producer Responsibility (EPR)",
      "Circularity in the ICT & Telecommunications Sector",
      "Climate-Smart Logistics",
      "Digital Circularity",
      "Youth Futures",
      "Financing the Transition",
      "Urban Mining, Metal Recycling & Circular Manufacturing",

    ],
  },
  {
    slug: "5th-edition-of-the-africa-international-e-waste-conference",
    title: "The 5th Edition of the Africa International E-Waste Conference",
    type: "Conference",
    date: "Oct 16 - 17 2025",
    time: "10:00 AM – 6:00 PM",
    location: "PrideInn Paradise, Mombasa, Kenya",
    audience: "CISOs, IT & Compliance Leaders",
    description:
      "The 5th International E-Waste Conference, taking place on October 16th and 17th, will focus on the theme Adapting to Global E-Waste Trends: Challenges and Opportunities. This conference aims to address the growing global e-waste crisis, particularly in regions like Africa, where the need for sustainable e-waste management solutions is becoming urgent. As e-waste generation escalates worldwide, Africa faces unique challenges, including the rise of off-grid solar and battery waste linked to the continent's renewable energy growth, as well as the global shift towards stricter e-waste regulations through Basel Convention amendments. The conference will provide a platform for discussing these issues and exploring innovative solutions to mitigate the environmental and social impacts of e-waste.",
    image: conference5,
    highlights: [
      "Global e-waste trends",
      "The impact of technological advancements on recycling",
      "Special focus will be given to the role of government, the private sector, and international collaborations in building scalable, sustainable e-waste solutions",
    ],
  },
  {
    slug: "the-4th-africa-international-e-waste-conference",
    title: "The 4th Africa International E-Waste Conference",
    type: "Conference",
    date: "Oct 16, 2024",
    time: "9:00 AM – 4:00 PM",
    location: "Shamba Events, Loresho, Nairobi, Kenya",
    audience: "Households & Small Businesses",
    description:
      "We are thrilled to extend a warm invitation to the 4th Africa International E-Waste Conference, scheduled to take place on October 16th 2024. This prestigious hybrid event will bring together key stakeholders, experts, policymakers, and industry leaders from across the globe to address the critical issues surrounding electronic waste management and sustainable solutions.",
    image: conference4,
    highlights: [
      "Foster Inter-African Collaboration",
      "Bridge Africa with Global Efforts",
      "Strengthen E-Waste Legislation",
      "Promote Extended Producer Responsibility (EPR)",
      "Enhance Intersectoral Collaboration",
      "Unlock Financing for E-Waste Management",
    ],
  },
  {
    slug: "the-third-africa-international-e-waste-conference",
    title: "The Third Africa International E-Waste Conference",
    type: "Conference",
    date: "Nov 29, 2023",
    time: "Half-day sessions",
    location: "Hybrid",
    audience: "K-12 & Universities",
    description:
      "Join us for the 3rd Africa International E-waste Conference where industry experts and thought leaders will convene in the fourth panel to deliberate on The Role of Digital Technology and Innovation in Accelerating the Transition to a Circular Economy. Get insights from prominent panelists",
    image: conference3,
    highlights: [
      "Curriculum-ready educator toolkit",
      "Device donation matching program",
      "Student ambassador certifications",
    ],
  },
  {
    slug: "tree-planting",
    title: "Tree Planting Event",
    type: "Treeplanting",
    date: "Sept, 26",
    time: "Half-day sessions",
    location: "The Weee Centre HQ",
    audience: "Community, Partners, and Schools",
    description:
      "Be part of the Tree Planting Ceremony at WEEE Centre, Embakasi Utawala, from 8:00 AM, in collaboration with PACJA.This initiative is more than planting trees — it’s about:",
    image: conference3,
    highlights: [
      "Contributing to Kenya’s 15 billion trees by 2032 target",
      "Launching the countdown to the 5th Africa International E-Waste Conference",
      "Driving climate justice and circular economy solutions for Africa",
    ],
  },
  {
    slug: "rotary-event",
    title: "The Rotary Event",
    type: "Environmental",
    date: "June 6, 2025",
    time: "Full day session",
    location: "Hybrid",
    audience: "Stakeholders",
    description:
      "We work with different Rotary clubs during World Environmental Day to raise awareness about the importance of responsible e-waste disposal and recycling. The event includes activities such as:",
    image: Rotary,
    highlights: [
      "Greenstep Run",
      "E-Waste Training",
      "E-Waste Collection Drive",
    ],
  },
  {
    slug: "international-school-of-kenya",
    title: "The International School of Kenya Event",
    type: "Environmental",
    date: "Apri 24, 2023",
    time: "Full Day session",
    location: "Hybrid",
    audience: "K-12 & Universities",
    description:
      "We were celebrating World Environmental Day. The students and staff took part in training of E-waste managament and destruction of IT Equipment to have a feel on how E-waste dismantiling is done. Some of the activities they took part in are:",
    image: International,
    highlights: [
      "Dismantling of obsolete laptops and desktops",
      "Segregation of e-waste into different categories",
      "Safe disposal of e-waste in an environmentally friendly manner",
    ],
  },
  {
    slug: "kilicycle",
    title: "Kilicycle",
    type: "Drives",
    date: "3rd Saturday of every month",
    time: "11am - 3pm",
    location: "Kiota School",
    audience: "All",
    description:
      "Every 3rd Saturday of the month, we organize a Kilicycle event where we collect e-waste from the community. This initiative aims to raise awareness about the importance of responsible e-waste disposal and recycling. Here’s a quick refresher on what we collect:",
    image: Kilycycle,
    highlights: [
      "Paper",
      "E-Waste",
      "Plastics",
      "Glass Bottles",
      "Sunglasses",
      "Used Textiles",
    ],
  },
  {
    slug: "church-drive",
    title: "Church Drives",
    type: "Drives",
    date: "TBD",
    time: "Half-day sessions",
    location: "On Location",
    audience: "All",
    description:
      "We conduct church drives to collect e-waste from congregations. This initiative aims to raise awareness about the importance of responsible e-waste disposal and recycling.",
    image: Church,
    highlights: [
      "Collection of E-waste",
      "Training on E-waste management",
      "Safe disposal of E-waste",
    ],
  },
  {
    slug: "corporate-drive",
    title: "Corporate Drives",
    type: "Drives",
    date: "TBD",
    time: "Half-day sessions",
    location: "On Location",
    audience: "Corporate Organizations",
    description:
      "We conduct corporate drives to collect e-waste from businesses. This initiative aims to raise awareness about the importance of responsible e-waste disposal and recycling.",
    image: Corporate,
    highlights: [
      "E-waste collection and recycling",
      "E-waste management training for employees",
    ],
  },
  {
    slug: "school-drive",
    title: "School Drives",
    type: "Drives",
    date: "TBD",
    time: "Half-day sessions",
    location: "On Site",
    audience: "Schools",
    description:
      "We put up bins in schools to collect e-waste from students and staff. This initiative aims to raise awareness about the importance of responsible e-waste disposal and recycling.",
    image: Schooldrive,
    highlights: [
      "Curriculum-ready educator toolkit",
      "Device donation matching program",
      "Student ambassador certifications",
    ],
  },
  {
    slug: "estate-drive",
    title: "Estate Drives",
    type: "Drives",
    date: "TBA",
    time: "Half-day sessions",
    location: "On Site",
    audience: "Residents",
    description:
      "We set up temporary collection points to collect e-waste from residents. This initiative aims to raise awareness about the importance of responsible e-waste disposal and recycling.",
    image: Estate,
    highlights: [
      "E-waste collection and recycling",
      "E-Waste management training for residents",
      "Put up Permanent E-waste collection points in estates",
    ],
  },
];
