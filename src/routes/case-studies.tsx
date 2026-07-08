import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { School, Building2, Landmark, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Projects" },
      { name: "description", content: "Customer success stories from schools, corporates, and government." },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    icon: School, sector: "Education",
    title: "E-Waste Infrastructure & Systems Feasibility Study — Uganda (UDAP-GOVNET)",
    challenge: "Consultancy Services for the Feasibility Study and Design of E-Waste Infrastructure and Systems for Sustainable Management of Waste from Electrical and Electronic Equipment (WEEE) in Uganda Under the Uganda Digital Acceleration Project Government Network (UDAP-GOVNET)",
    solution: "WEEE Centre led a feasibility and design study for Uganda’s national e-waste management infrastructure ",
    results: [
      "A situational analysis of Uganda's existing e-waste practices, policies, and institutions",
      "A feasibility study covering the technical, financial, and institutional dimensions of the proposed system",
      "An Environmental and Social Impact Assessment (ESIA) across all four regions of Uganda",
      "Draft designs for a national e-waste processing facility and regional processing facilities, including collection mechanisms and treatment technologies",
      "Stakeholder validation workshops to align the designs with national priorities and community needs",
      "A final consolidated report with actionable recommendations for implementation"
    ],
    impact: "186 t CO₂ avoided",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    icon: Building2, sector: "Corporate",
    title: "Youth Empowerment through E-Waste Management - Kakuma & Kalobeyei, Kenya",
    challenge: "Kakuma Kalobeyei Challenge Fund (KKCF), supported by the Africa Enterprise Challenge Fund (AECF) in partnership with the International Finance Corporation (IFC)",
    solution: "A three-year program that turned e-waste into opportunity for refugee and host communities building skills, jobs, and a collection network from the ground up.",
    results: [
      "2,080 young people trained in hands-on e-waste management skills",
      "An extensive e-waste collection network established across the camps and host community",
      "New green jobs created locally through the resulting e-waste value chain"
    ],
    impact: "640 t CO₂ avoided",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    icon: Landmark, sector: "Government",
    title: "Human Capacity Development: Demand-Driven Skills Training for Youth in E-Waste Management - GIZ E4D Project",
    challenge: "In partnership with GIZ VET Toolbox 2 and Kenya's National Industrial Training Authority (NITA)",
    solution: "WEEE Centre worked with NITA and other key stakeholders to design a demand-driven vocational training curriculum, institutionalizing e-waste management as a recognized skills pathway in Kenya.",
    results: [
      "A national curriculum for vocational e-waste management training",
      "A framework to formally institutionalize the skill within Kenya's vocational training system",
      "New job opportunities for youth across both informal and formal e-waste sectors"
    ],
    impact: "98 t materials recovered",
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513258496099-48168024addd?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    icon: Landmark, sector: "Government",
    title: "E-Waste Market Assessment & Youth Green Jobs -IKEA Foundation Power Up Consortium, Kenya",
    challenge: "A federal agency needed compliant disposal of legacy storage with classified data.",
    solution: "WEEE Centre assessed the viability of youth engagement in e-waste value chains and translated the findings into real infrastructure, training, and jobs.",
    results: [
      "A market assessment on the viability of youth engagement across e-waste value chains",
      "A scoping study mapping e-waste concentration and potential sites for management facilities",
      "1 e-waste pre-processing facility and 3 e-waste collection centres constructed",
      "Training for 600 young people in e-waste management and business development, opening the door to green jobs"
    ],
    impact: "98 t materials recovered",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    icon: Landmark, sector: "Government",
    title: "Scoping Study on E-Waste in Kakuma & Kalobeyei Refugee Camps, Kenya",
    challenge: "GIZ-funded, with WEEE Centre as technical lead alongside SNV",
    solution: "WEEE Centre led the technical assessment of e-waste management conditions across the Kakuma and Kalobeyei refugee camps, laying the groundwork for safer, more sustainable practices in a complex humanitarian setting.",
    results: [
      "A situation analysis of e-waste flows, disposal practices, and related health and environmental risks",
      "A mapping of institutional and technical capacity gaps",
      "A community awareness assessment on e-waste handling",
      "Action-oriented recommendations for sustainable collection, safe disposal, and resource recovery in refugee settings"
    ],
    impact: "98 t materials recovered",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    ]
  },
];

// Reusable Image Carousel Component
function ImageCarousel({ images }: { images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-full min-h-[300px] items-center justify-center rounded-2xl bg-muted text-xs text-muted-foreground">
        No images available
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl bg-muted">
      {/* Current Slide */}
      <img
        src={images[currentIndex]}
        alt={`Project preview ${currentIndex + 1}`}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
      />

      {/* Navigation Arrow Controls (Only show if multiple images exist) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition hover:bg-background opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition hover:bg-background opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-primary/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Projects" title="Outcomes that prove the model" subtitle="Real projects, measured results, transparent reporting." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {cases.map((c) => (
            <article key={c.title} className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:p-12">
              {/* Top Meta Info */}
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{c.sector}</span>
              </div>
              
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{c.title}</h2>

              {/* Master Layout Grid (Split Content / Carousel) */}
              <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
                
                {/* Left Side: Dynamic Text Columns (Span 8 out of 12) */}
                <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Overview</h3>
                    <p className="mt-2 text-sm text-foreground/90">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Solution</h3>
                    <p className="mt-2 text-sm text-foreground/90">{c.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Results</h3>
                    <ul className="mt-2 space-y-1 text-sm text-foreground/90">
                      {c.results.map((r) => (
                        <li key={r}>• {r.replace(/^•\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Image Carousel Component (Span 4 out of 12) */}
                <div className="w-full lg:col-span-4 lg:h-full">
                  <ImageCarousel images={c.images} />
                </div>
              </div>

              {/* Bottom Badge Info */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Environmental impact: {c.impact}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}