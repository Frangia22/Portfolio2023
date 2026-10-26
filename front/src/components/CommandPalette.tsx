import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { showToast } from "../lib/toast";

export interface CommandAction {
  id: string;
  label: string;
  group: string;
  keywords?: string;
  run: () => void;
}

interface Props {
  openLabel: string;
  actions: Omit<CommandAction, "run">[];
  email?: string;
  emailCopiedLabel: string;
  locale: "en" | "es";
  cvUrl?: string;
  github: string;
  linkedin: string;
  sectionHrefs: { id: string; label: string; href: string }[];
  switchLocaleHref: string;
  switchLocaleLabel: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function CommandPalette(props: Props) {
  const {
    openLabel,
    email,
    emailCopiedLabel,
    cvUrl,
    github,
    linkedin,
    sectionHrefs,
    switchLocaleHref,
    switchLocaleLabel,
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const listId = useId();

  const actions: CommandAction[] = useMemo(() => {
    const list: CommandAction[] = [
      ...sectionHrefs.map((s) => ({
        id: `nav-${s.id}`,
        label: s.label,
        group: "Navigate",
        keywords: s.id,
        run: () => {
          window.location.href = s.href;
        },
      })),
      {
        id: "lang",
        label: switchLocaleLabel,
        group: "Language",
        run: () => {
          window.location.href = switchLocaleHref;
        },
      },
      {
        id: "github",
        label: "GitHub",
        group: "Links",
        run: () => window.open(github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        group: "Links",
        run: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "linkedin_click" });
          window.open(linkedin, "_blank", "noopener,noreferrer");
        },
      },
    ];
    if (email) {
      list.push({
        id: "email",
        label: `Copy email (${email})`,
        group: "Actions",
        keywords: "copy email",
        run: async () => {
          await navigator.clipboard.writeText(email);
          showToast(emailCopiedLabel);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "email_copy" });
        },
      });
    }
    if (cvUrl) {
      list.push({
        id: "cv",
        label: "Download CV",
        group: "Actions",
        run: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "cv_download" });
          window.open(cvUrl, "_blank", "noopener,noreferrer");
        },
      });
    }
    return list;
  }, [
    sectionHrefs,
    switchLocaleHref,
    switchLocaleLabel,
    github,
    linkedin,
    email,
    emailCopiedLabel,
    cvUrl,
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.group.toLowerCase().includes(q) ||
        (a.keywords?.toLowerCase().includes(q) ?? false),
    );
  }, [actions, query]);

  useEffect(() => setActiveIndex(0), [query]);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setQuery("");
  }, []);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "command_palette_open" });
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const runActive = () => {
    const item = filtered[activeIndex];
    if (!item) return;
    close();
    item.run();
  };

  const activeId = filtered[activeIndex]
    ? `${listId}-${filtered[activeIndex].id}`
    : undefined;

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="hidden md:inline-flex items-center gap-1.5 font-jetbrains-mono text-xs text-secondary border border-tertiary rounded-md px-2 py-1.5 hover:text-white hover:border-primary transition-colors"
        aria-label={openLabel}
      >
        <span aria-hidden="true">⌘K</span>
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto max-w-lg w-[min(100%,28rem)] rounded-xl border border-tertiary bg-quinary p-0 text-white shadow-2xl backdrop:bg-black/60"
        onClose={() => setQuery("")}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="p-3 border-b border-tertiary">
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            placeholder={openLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                runActive();
              } else if (e.key === "Escape") {
                close();
              }
            }}
            className="w-full bg-background border border-border-strong rounded-lg px-3 py-2 font-space-grotesk text-sm text-white focus:border-primary focus-visible:outline-2 focus-visible:outline-primary"
          />
        </div>
        <ul
          id={listId}
          role="listbox"
          className="max-h-72 overflow-y-auto py-2"
        >
          {filtered.length === 0 && (
            <li className="px-4 py-3 text-sm text-secondary">No results</li>
          )}
          {filtered.map((item, i) => (
            <li
              key={item.id}
              id={`${listId}-${item.id}`}
              role="option"
              aria-selected={i === activeIndex}
              className={`px-4 py-2.5 cursor-pointer flex justify-between gap-3 ${
                i === activeIndex ? "bg-primary/15 text-primary" : "text-secondary"
              }`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => {
                close();
                item.run();
              }}
            >
              <span className="font-space-grotesk text-sm">{item.label}</span>
              <span className="font-jetbrains-mono text-[10px] opacity-60">
                {item.group}
              </span>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
