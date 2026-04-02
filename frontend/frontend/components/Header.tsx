"use client";

import Link from "next/link";

const imgVector = "https://www.figma.com/api/mcp/asset/b42e11ed-fc49-46de-b34f-124867767bbf";
const imgArrowDown = "https://www.figma.com/api/mcp/asset/4bd804c3-f86d-4711-9423-3198d7f38ff2";

function SearchIcon() {
  return (
    <div className="relative w-5 h-5">
      <img src={imgVector} alt="Recherche" className="w-full h-full object-contain" />
    </div>
  );
}

function ArrowDownIcon() {
  return <img src={imgArrowDown} alt="" className="w-[15px] h-[8px] object-contain" />;
}

function NavItem({
  label,
  hasArrow = false,
  highlighted = false,
}: {
  label: string;
  hasArrow?: boolean;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 h-[46px] px-3 rounded-[7px] cursor-pointer whitespace-nowrap transition-all ${
        highlighted
          ? "bg-[#ecedf0] shadow-[0px_4px_32px_rgba(0,0,0,0.09)]"
          : "hover:bg-white/80 hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]"
      }`}
    >
      <span className="font-bold text-sm text-black tracking-[-0.01em]">{label}</span>
      {hasArrow && <ArrowDownIcon />}
    </div>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 h-[46px] px-3 rounded-[7px] cursor-pointer whitespace-nowrap transition-all hover:bg-white/80 hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]">
        <span className="font-bold text-sm text-black tracking-[-0.01em]">{label}</span>
        <ArrowDownIcon />
      </div>

      <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
        <div className="min-w-[240px] rounded-[12px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.12)] py-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block w-full px-5 py-3 text-[14px] font-semibold text-[#005DAA] hover:bg-[#EEF2F1] transition-colors"
              style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[118px] bg-white shadow-sm overflow-visible">
      <div className="max-w-[1440px] mx-auto h-full px-[200px] flex items-center justify-between overflow-visible">
        <Link href="/" className="w-[183px] h-[74px] shrink-0 block">
          <img src="/images/logo.png" alt="Groupe Lemoine" className="w-full h-full object-contain" />
        </Link>

        <div className="bg-[#eeeff2] rounded-[7px] shadow-[0px_4px_32px_rgba(0,0,0,0.25)] flex items-center gap-2 px-3 h-[74px] overflow-visible">
          <NavDropdown
            label="Groupe Lemoine"
            items={[
              { label: "Notre Histoire", href: "/Histoire" },
              { label: "Nos Valeurs", href: "/Valeurs" },
              { label: "Nos Métiers", href: "/metiers" },
              { label: "Développement durable", href: "/dev" },
            ]}
          />

         <NavDropdown
  label="Customer's Partner"
  items={[
    { label: "Nos Marques", href: "/customers-partner/nos-marques" },
    { label: "Spécialiste des MDD", href: "/customers-partner/specialiste-mdd" },
  ]}
/>
          <NavDropdown
  label="Nos Produits"
  items={[
    { label: "Disques", href: "/nos-produits/disques" },
    { label: "Bâtonnets", href: "/nos-produits/batonnets" },
    { label: "Coton hydrophile", href: "/nos-produits/coton-hydrophile" },
  ]}
/>
          <Link href="/carrieres">
  <NavItem label="Carrières" />
</Link>
          <Link href="/contact">
  <NavItem label="Contact" />
</Link>

          <div className="flex items-center gap-2 h-[46px] px-3 rounded-[7px] cursor-pointer transition-all hover:bg-[#cacaca] hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]">
            <span className="font-bold text-sm text-black">FR</span>
            <ArrowDownIcon />
          </div>

          <div className="flex items-center justify-center h-[46px] w-[46px] rounded-[7px] cursor-pointer transition-all hover:bg-[#ecedf0] hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]">
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
}