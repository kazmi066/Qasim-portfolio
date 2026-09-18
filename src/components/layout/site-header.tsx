"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "@/components/icons/menu";
import { XIcon } from "@/components/icons/x";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/content/site";

function typesFor(href: string, pathname: string) {
  if (href === "/work" && pathname.startsWith("/work/")) return ["nav-back"];
  if (href === "/work" && !pathname.startsWith("/work")) return ["nav-forward"];
  if (href === "/" && pathname !== "/") return ["nav-back"];
  if (href === "/#contact" && pathname !== "/") return ["nav-back"];
  return undefined;
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header" style={{ viewTransitionName: "site-header" }}>
      <div className="site-header__bar wrap">
        <Link
          href="/"
          transitionTypes={typesFor("/", pathname)}
          className="site-header__brand"
          aria-label={`${site.name} home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="site-header__nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} transitionTypes={typesFor(item.href, pathname)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger aria-label="Open menu" className="site-header__menu md:hidden">
            <MenuIcon size={22} />
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="border-rule bg-ink p-0 text-paper sm:max-w-sm"
          >
            <SheetHeader className="flex-row items-center justify-between p-[var(--gutter)]">
              <SheetTitle className="font-display text-2xl">{site.name}</SheetTitle>
              <SheetClose aria-label="Close menu" className="size-11">
                <XIcon size={22} />
              </SheetClose>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-[var(--gutter)] pb-16">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={item.href}
                      transitionTypes={typesFor(item.href, pathname)}
                      className="font-display py-3 text-step-3 text-paper no-underline"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
