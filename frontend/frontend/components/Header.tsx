"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  {
    label: "Groupe Lemoine",
    href: "/groupe-lemoine",
    dropdown: [
      { label: "Notre histoire", href: "/groupe-lemoine/notre-histoire" },
      { label: "Valeurs", href: "/groupe-lemoine/valeurs" },
      { label: "Métier", href: "/groupe-lemoine/metier" },
      { label: "Développement durable", href: "/groupe-lemoine/developpement-durable" },
    ],
  },
  {
    label: "Customer's Partner",
    href: "/customers-partner",
    dropdown: [
      { label: "Nos Marques", href: "/customers-partner/nos-marques" },
      { label: "Spécialiste des MDD", href: "/customers-partner/specialiste-mdd" },
    ],
  },
  { label: "Nos Produits", href: "/nos-produits", dropdown: [] },
  { label: "Carrières", href: "/carrieres", dropdown: [] },
  { label: "Contact", href: "/contact", dropdown: [] },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function handleMouseEnter(label: string) {
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    setOpenDropdown(null);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo Groupe Lemoine"
            width={120}
            height={52}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() =>
                item.dropdown.length > 0 && handleMouseEnter(item.label)
              }
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href} className={styles.link}>
                {item.label}
                {item.dropdown.length > 0 && (
                  <svg
                    className={`${styles.chevron} ${
                      openDropdown === item.label ? styles.chevronOpen : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>

              {item.dropdown.length > 0 && openDropdown === item.label && (
                <div className={styles.dropdown}>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className={styles.dropdownLink}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className={styles.actions}>
            <button className={styles.lang} aria-label="Changer la langue">
              FR
            </button>
            <button className={styles.search} aria-label="Rechercher">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.searchIcon}
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}