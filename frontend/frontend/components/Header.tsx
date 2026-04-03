"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const imgVector = "https://www.figma.com/api/mcp/asset/b42e11ed-fc49-46de-b34f-124867767bbf";
const imgArrowDown = "https://www.figma.com/api/mcp/asset/4bd804c3-f86d-4711-9423-3198d7f38ff2";

type Lang = "fr" | "en" | "nl" | "de" | "es" | "it";

function SearchIcon() {
  return (
    <div className="relative w-5 h-5">
      <img src={imgVector} alt="Recherche" className="w-full h-full object-contain" />
    </div>
  );
}

function ArrowDownIcon({ className = "", color }: { className?: string; color?: string }) {
  return (
    <img
      src={imgArrowDown}
      alt=""
      className={`w-[15px] h-[8px] object-contain ${className}`}
      style={color ? { filter: colorToFilter(color) } : undefined}
    />
  );
}

function colorToFilter(hex: string): string {
  if (hex === "#005DAA") return "invert(22%) sepia(87%) saturate(1200%) hue-rotate(196deg) brightness(85%) contrast(105%)";
  if (hex === "#DA6879") return "invert(45%) sepia(60%) saturate(600%) hue-rotate(310deg) brightness(100%) contrast(95%)";
  return "none";
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function NavItem({
  label,
  hasArrow = false,
  highlighted = false,
  color,
  onClick,
}: {
  label: string;
  hasArrow?: boolean;
  highlighted?: boolean;
  color?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 h-[46px] px-3 rounded-[7px] cursor-pointer whitespace-nowrap transition-all ${
        highlighted
          ? "bg-[#ecedf0] shadow-[0px_4px_32px_rgba(0,0,0,0.09)]"
          : "hover:bg-white/80 hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]"
      }`}
    >
      <span
        className="font-bold text-sm tracking-[-0.01em]"
        style={{ color: color ?? "black" }}
      >
        {label}
      </span>
      {hasArrow && <ArrowDownIcon color={color} />}
    </div>
  );
}

function NavDropdown({
  label,
  items,
  isMobile = false,
  color,
  onItemClick,
}: {
  label: string;
  items: { label: string; href: string }[];
  isMobile?: boolean;
  color?: string;
  onItemClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="border-b border-gray-100">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-4 px-4 text-left"
        >
          <span className="font-bold text-base" style={{ color: color ?? "black" }}>
            {label}
          </span>
          <ArrowDownIcon
            className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            color={color}
          />
        </button>

        {isOpen && (
          <div className="pl-6 pb-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onItemClick}
                className="block py-3 text-sm font-semibold text-[#005DAA] hover:bg-[#EEF2F1] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="flex items-center gap-2 h-[46px] px-3 rounded-[7px] cursor-pointer whitespace-nowrap transition-all hover:bg-white/80 hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]">
        <span
          className="font-bold text-sm tracking-[-0.01em]"
          style={{ color: color ?? "black" }}
        >
          {label}
        </span>
        <ArrowDownIcon color={color} />
      </div>

      <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
        <div className="min-w-[240px] rounded-[12px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.12)] py-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block w-full px-5 py-3 text-[14px] font-semibold text-[#005DAA] hover:bg-[#EEF2F1] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

async function translateText(text: string, lang: Lang) {
  if (lang === "fr") return text;

  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, target: lang }),
    });

    const data = await res.json();
    return data.translatedText || text;
  } catch {
    return text;
  }
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Lang>("fr");

  const [labels, setLabels] = useState({
    groupeLemoine: "Groupe Lemoine",
    notreHistoire: "Notre Histoire",
    nosValeurs: "Nos Valeurs",
    nosMetiers: "Nos Métiers",
    developpementDurable: "Développement durable",
    customersPartner: "Customer's Partner",
    nosMarques: "Nos Marques",
    specialisteMdd: "Spécialiste des MDD",
    nosProduits: "Nos Produits",
    disques: "Disques",
    batonnets: "Bâtonnets",
    cotonHydrophile: "Coton hydrophile",
    carrieres: "Carrières",
    contact: "Contact",
    recherche: "Recherche",
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const changeLanguage = async (lang: Lang) => {
    setCurrentLang(lang);
    setIsLangOpen(false);

    if (lang === "fr") {
      setLabels({
        groupeLemoine: "Groupe Lemoine",
        notreHistoire: "Notre Histoire",
        nosValeurs: "Nos Valeurs",
        nosMetiers: "Nos Métiers",
        developpementDurable: "Développement durable",
        customersPartner: "Customer's Partner",
        nosMarques: "Nos Marques",
        specialisteMdd: "Spécialiste des MDD",
        nosProduits: "Nos Produits",
        disques: "Disques",
        batonnets: "Bâtonnets",
        cotonHydrophile: "Coton hydrophile",
        carrieres: "Carrières",
        contact: "Contact",
        recherche: "Recherche",
      });
      return;
    }

    const translated = await Promise.all([
      translateText("Groupe Lemoine", lang),
      translateText("Notre Histoire", lang),
      translateText("Nos Valeurs", lang),
      translateText("Nos Métiers", lang),
      translateText("Développement durable", lang),
      translateText("Customer's Partner", lang),
      translateText("Nos Marques", lang),
      translateText("Spécialiste des MDD", lang),
      translateText("Nos Produits", lang),
      translateText("Disques", lang),
      translateText("Bâtonnets", lang),
      translateText("Coton hydrophile", lang),
      translateText("Carrières", lang),
      translateText("Contact", lang),
      translateText("Recherche", lang),
    ]);

    setLabels({
      groupeLemoine: translated[0],
      notreHistoire: translated[1],
      nosValeurs: translated[2],
      nosMetiers: translated[3],
      developpementDurable: translated[4],
      customersPartner: translated[5],
      nosMarques: translated[6],
      specialisteMdd: translated[7],
      nosProduits: translated[8],
      disques: translated[9],
      batonnets: translated[10],
      cotonHydrophile: translated[11],
      carrieres: translated[12],
      contact: translated[13],
      recherche: translated[14],
    });
  };

  const navItems = [
    {
      label: labels.groupeLemoine,
      color: "#005DAA",
      items: [
        { label: labels.notreHistoire, href: "/Histoire" },
        { label: labels.nosValeurs, href: "/Valeurs" },
        { label: labels.nosMetiers, href: "/metiers" },
        { label: labels.developpementDurable, href: "/dev" },
      ],
    },
    {
      label: labels.customersPartner,
      color: undefined,
      items: [
        { label: labels.nosMarques, href: "/customers-partner/nos-marques" },
        { label: labels.specialisteMdd, href: "/customers-partner/specialiste-mdd" },
      ],
    },
    {
      label: labels.nosProduits,
      color: "#DA6879",
      items: [
        { label: labels.disques, href: "/nos-produits/disques" },
        { label: labels.batonnets, href: "/nos-produits/batonnets" },
        { label: labels.cotonHydrophile, href: "/nos-produits/coton-hydrophile" },
      ],
    },
  ];

  const langOptions: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "nl", label: "NL" },
    { code: "de", label: "DE" },
    { code: "es", label: "ES" },
    { code: "it", label: "IT" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm overflow-visible">
        <div className="max-w-[1440px] mx-auto h-[74px] lg:h-[118px] px-4 sm:px-6 lg:px-[200px] flex items-center justify-between">
          <Link href="/" className="w-[140px] sm:w-[160px] lg:w-[183px] h-[56px] lg:h-[74px] shrink-0 block">
            <img src="/images/logo.png" alt="Groupe Lemoine" className="w-full h-full object-contain" />
          </Link>

          {!isMobile && (
            <div className="bg-[#eeeff2] rounded-[7px] shadow-[0px_4px_32px_rgba(0,0,0,0.25)] flex items-center gap-2 px-3 h-[74px] overflow-visible">
              {navItems.map((item) => (
                <NavDropdown key={item.label} label={item.label} items={item.items} color={item.color} />
              ))}

              <Link href="/carrieres">
                <NavItem label={labels.carrieres} />
              </Link>

              <Link href="/contact">
                <NavItem label={labels.contact} />
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 h-[46px] px-3 rounded-[7px] cursor-pointer transition-all hover:bg-[#cacaca] hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]"
                >
                  <span className="font-bold text-sm text-black">{currentLang.toUpperCase()}</span>
                  <ArrowDownIcon className={isLangOpen ? "rotate-180" : ""} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-3 min-w-[100px] rounded-[12px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.12)] py-2 z-[200]">
                    {langOptions.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => changeLanguage(lang.code)}
                        className="block w-full text-left px-4 py-3 text-[14px] font-semibold text-[#005DAA] hover:bg-[#EEF2F1] transition-colors"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center h-[46px] w-[46px] rounded-[7px] cursor-pointer transition-all hover:bg-[#ecedf0] hover:shadow-[0px_4px_32px_rgba(0,0,0,0.09)]">
                <SearchIcon />
              </div>
            </div>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          )}
        </div>
      </header>

      {isMobile && isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-[74px] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto animate-slide-down">
            <div className="py-4">
              {navItems.map((item) => (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  items={item.items}
                  color={item.color}
                  isMobile={true}
                  onItemClick={closeMobileMenu}
                />
              ))}

              <Link href="/carrieres" onClick={closeMobileMenu}>
                <div className="py-4 px-4 border-b border-gray-100">
                  <span className="font-bold text-base text-black">{labels.carrieres}</span>
                </div>
              </Link>

              <Link href="/contact" onClick={closeMobileMenu}>
                <div className="py-4 px-4 border-b border-gray-100">
                  <span className="font-bold text-base text-black">{labels.contact}</span>
                </div>
              </Link>

              <div className="py-4 px-4 border-b border-gray-100">
                <div className="flex flex-col gap-2">
                  {langOptions.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => changeLanguage(lang.code)}
                      className="text-left font-bold text-base text-black"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="py-4 px-4 flex items-center gap-3">
                <SearchIcon />
                <span className="font-bold text-base text-black">{labels.recherche}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}