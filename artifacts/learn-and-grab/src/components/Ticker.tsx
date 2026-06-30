import {
  SiAccenture,
  SiWipro,
  SiInfosys,
  SiFlipkart,
  SiCognizant,
  SiTcs,
  SiHcl,
  SiAxisbank,
  SiHdfcbank,
  SiMahindra,
} from "react-icons/si";
import { IconType } from "react-icons";

type WithIcon = { name: string; icon: IconType; iconColor: string; bg: string; monogram?: never };
type WithMonogram = { name: string; monogram: string; textColor: string; bg: string; icon?: never };
type CompanyEntry = WithIcon | WithMonogram;

const COMPANIES: CompanyEntry[] = [
  {
    name: "Markatlas",
    monogram: "MA",
    textColor: "#ffffff",
    bg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
  },
  {
    name: "Infosys",
    icon: SiInfosys,
    iconColor: "#007cc3",
    bg: "#dbeeff",
  },
  {
    name: "Wipro",
    icon: SiWipro,
    iconColor: "#341f6e",
    bg: "#ede9f9",
  },
  {
    name: "TCS",
    icon: SiTcs,
    iconColor: "#0057a8",
    bg: "#ddeeff",
  },
  {
    name: "HCL",
    icon: SiHcl,
    iconColor: "#0078d4",
    bg: "#daeeff",
  },
  {
    name: "Accenture",
    icon: SiAccenture,
    iconColor: "#a100ff",
    bg: "#f0e0ff",
  },
  {
    name: "Deloitte",
    monogram: "D.",
    textColor: "#86bc25",
    bg: "#edf6d6",
  },
  {
    name: "HDFC Bank",
    icon: SiHdfcbank,
    iconColor: "#004c97",
    bg: "#dde8f8",
  },
  {
    name: "Axis Bank",
    icon: SiAxisbank,
    iconColor: "#97144d",
    bg: "#faddec",
  },
  {
    name: "Amazon",
    monogram: "A",
    textColor: "#ff9900",
    bg: "#fff3d6",
  },
  {
    name: "Flipkart",
    icon: SiFlipkart,
    iconColor: "#2874f0",
    bg: "#dce8fe",
  },
  {
    name: "Cognizant",
    icon: SiCognizant,
    iconColor: "#0033a0",
    bg: "#dde3f5",
  },
  {
    name: "Capgemini",
    monogram: "CAP",
    textColor: "#0070ad",
    bg: "#d9eef9",
  },
  {
    name: "Tech Mahindra",
    icon: SiMahindra,
    iconColor: "#c8102e",
    bg: "#fddde1",
  },
  {
    name: "Reliance",
    monogram: "RIL",
    textColor: "#ffffff",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e)",
  },
  {
    name: "IBM",
    monogram: "IBM",
    textColor: "#1f70c1",
    bg: "#d9eaf9",
  },
];

function LogoBadge({ company }: { company: CompanyEntry }) {
  if (company.icon) {
    const Icon = company.icon;
    return (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: company.bg }}
      >
        <Icon size={22} color={company.iconColor} />
      </div>
    );
  }
  const fontSize =
    company.monogram.length >= 3 ? "10px" : company.monogram.length === 2 ? "13px" : "18px";
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ background: company.bg }}
    >
      <span
        className="font-black tracking-tight leading-none"
        style={{ color: company.textColor, fontSize }}
      >
        {company.monogram}
      </span>
    </div>
  );
}

function CompanyCard({ company }: { company: CompanyEntry }) {
  return (
    <div
      className="mx-3 flex-none flex items-center gap-3 px-5 py-3 rounded-2xl shadow-sm border border-border/40 bg-card hover:shadow-md hover:border-primary/30 transition-all duration-200 min-w-[190px]"
      data-testid={`ticker-company-${company.name.toLowerCase().replace(/\s/g, "-")}`}
    >
      <LogoBadge company={company} />
      <span className="text-sm font-semibold text-foreground whitespace-nowrap">
        {company.name}
      </span>
    </div>
  );
}

export default function Ticker() {
  const repeated = [...COMPANIES, ...COMPANIES, ...COMPANIES];

  return (
    <div className="w-full overflow-hidden bg-primary/5 py-10 relative border-y border-primary/10">
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex w-max animate-marquee">
        {repeated.map((company, i) => (
          <CompanyCard key={i} company={company} />
        ))}
      </div>
    </div>
  );
}
