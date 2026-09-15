import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const STEPS = [
  { id: 0, label: "About you" },
  { id: 1, label: "Your project" },
  { id: 2, label: "Timing & send" },
] as const;

type Fields = {
  name: string;
  email: string;
  business: string;
  website: string;
  need: string;
  goal: string;
  who: string;
  mustHaves: string;
  niceToHaves: string;
  content: string;
  budget: string;
  timeline: string;
  found: string;
  extra: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  business: "",
  website: "",
  need: "",
  goal: "",
  who: "",
  mustHaves: "",
  niceToHaves: "",
  content: "",
  budget: "",
  timeline: "",
  found: "",
  extra: "",
};

const REQUIRED: Record<number, (keyof Fields)[]> = {
  0: ["name", "email", "business"],
  1: ["need", "goal", "who", "mustHaves", "content"],
  2: ["budget", "timeline"],
};

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-brief-text"
      >
        {label}
        {required ? (
          <span className="text-bobby" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-heart" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "flex h-12 w-full rounded-md border border-brief-border bg-brief-fg px-3.5 text-base text-brief-text placeholder:text-brief-muted shadow-none transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bobby/25 focus-visible:border-bobby";

function SelectField({
  id,
  value,
  onChange,
  placeholder,
  options,
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
  invalid?: boolean;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={invalid || undefined}
      className={cn(inputClass, "appearance-none bg-no-repeat pr-10")}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231500FD' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
        backgroundPosition: "right 14px center",
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export function BriefPage() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  const pct = useMemo(() => Math.round(((step + 1) / STEPS.length) * 100), [step]);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateStep(n: number) {
    const next: Partial<Record<keyof Fields, string>> = {};
    for (const key of REQUIRED[n]) {
      const val = values[key].trim();
      if (!val) next[key] = "This field is required.";
      if (key === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        next[key] = "Email is invalid";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 2));
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (step < 2) {
      goNext();
      return;
    }
    if (!validateStep(2)) return;
    try {
      const prev = JSON.parse(localStorage.getItem("geekett-project-briefs") || "[]");
      localStorage.setItem(
        "geekett-project-briefs",
        JSON.stringify([...prev, { ...values, at: new Date().toISOString() }]),
      );
    } catch {
      /* demo only */
    }
    setSent(true);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-brief-bg text-brief-text">
      <SiteHeader current="/project-brief" />
      <main className="mx-auto w-full max-w-[560px] px-4 pb-10 pt-8 sm:pt-10">
        <h1 className="text-center font-display text-[1.65rem] font-semibold leading-tight sm:text-[1.85rem]">
          Start a Project Brief
        </h1>
        <p className="mx-auto mt-2 max-w-md text-center text-[0.98rem] leading-relaxed text-brief-muted">
          Three quick steps — about 2 minutes.
        </p>

        <div className="relative mx-auto mt-6 max-w-[560px] pt-24 sm:pt-28">
          <img
            src="/characters/geekett-rest.webp"
            alt="Geekett resting on the project brief"
            width={484}
            height={476}
            className="pointer-events-none absolute top-0 left-1/2 z-20 h-32 w-auto -translate-x-1/2 select-none sm:h-36"
          />

        {sent ? (
          <div
            className="mt-8 rounded-xl border border-brief-border bg-brief-fg p-8 pt-10 text-center shadow-soft"
            role="status"
          >
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-ok text-brief-fg">
              <Check className="size-6" />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold">
              Brief received
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brief-muted">
              Bella will reply within one business day with fit, next step, and
              a clear package if it’s a match. We work by message and shared
              docs — not calls.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-bobby px-5 text-sm font-semibold text-cream hover:bg-bobby-deep"
            >
              Back to Geekett
            </Link>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-0 rounded-xl border border-brief-border bg-brief-fg p-5 pt-8 shadow-soft sm:p-8 sm:pt-10"
            noValidate
          >
            <div className="mb-6">
              <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-bobby-mist">
                <div
                  className="h-full rounded-full bg-bobby transition-[width] duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div
                className="relative flex justify-between"
                role="tablist"
                aria-label="Brief steps"
              >
                <span
                  className="absolute top-[17px] right-[12%] left-[12%] h-0.5 bg-brief-border"
                  aria-hidden="true"
                />
                {STEPS.map((item) => {
                  const active = step === item.id;
                  const done = step > item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        if (item.id < step || (item.id > step && validateStep(step))) {
                          setErrors({});
                          setStep(item.id);
                        }
                      }}
                      className={cn(
                        "relative z-10 flex flex-1 flex-col items-center gap-2 bg-transparent px-1",
                        active
                          ? "text-bobby"
                          : done
                            ? "text-ok"
                            : "text-brief-muted",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-9 place-items-center rounded-full border-2 text-sm font-bold",
                          active
                            ? "border-bobby bg-bobby text-brief-fg"
                            : done
                              ? "border-ok bg-ok text-brief-fg"
                              : "border-brief-border bg-brief-fg text-brief-muted",
                        )}
                      >
                        {done ? <Check className="size-4" /> : item.id + 1}
                      </span>
                      <span className="max-w-[6.5rem] text-center text-[0.72rem] font-semibold leading-tight sm:text-[0.8rem]">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <h2 className="mt-5 text-center font-display text-[1.12rem] font-semibold">
                {STEPS[step].label}
              </h2>
              <p className="mt-1 text-center text-[0.88rem] text-brief-muted">
                {step + 1} of 3 · {pct}%
              </p>
            </div>

            <div className="space-y-4">
              {step === 0 ? (
                <>
                  <Field label="Name" htmlFor="name" required error={errors.name}>
                    <input
                      id="name"
                      className={inputClass}
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoComplete="name"
                      required
                    />
                  </Field>
                  <Field label="Email" htmlFor="email" required error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      className={inputClass}
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </Field>
                  <Field
                    label="Business or project name"
                    htmlFor="business"
                    required
                    error={errors.business}
                  >
                    <input
                      id="business"
                      className={inputClass}
                      value={values.business}
                      onChange={(e) => set("business", e.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Website (if you have one)" htmlFor="website">
                    <input
                      id="website"
                      className={inputClass}
                      placeholder="URL or none yet"
                      value={values.website}
                      onChange={(e) => set("website", e.target.value)}
                    />
                  </Field>
                </>
              ) : null}

              {step === 1 ? (
                <>
                  <Field
                    label="What do you need?"
                    htmlFor="need"
                    required
                    error={errors.need}
                  >
                    <SelectField
                      id="need"
                      value={values.need}
                      onChange={(v) => set("need", v)}
                      placeholder="Select..."
                      invalid={Boolean(errors.need)}
                      options={[
                        "Refresh existing site",
                        "New Starter site",
                        "Business site",
                        "Not sure yet",
                      ]}
                    />
                  </Field>
                  <Field
                    label="One-sentence goal"
                    htmlFor="goal"
                    required
                    error={errors.goal}
                  >
                    <Textarea
                      id="goal"
                      placeholder="What should this site help someone do?"
                      value={values.goal}
                      onChange={(e) => set("goal", e.target.value)}
                      required
                    />
                  </Field>
                  <Field
                    label="Who is it for?"
                    htmlFor="who"
                    required
                    error={errors.who}
                  >
                    <Textarea
                      id="who"
                      placeholder="Your main customer in plain words"
                      value={values.who}
                      onChange={(e) => set("who", e.target.value)}
                      required
                    />
                  </Field>
                  <Field
                    label="Must-haves"
                    htmlFor="mustHaves"
                    required
                    error={errors.mustHaves}
                  >
                    <Textarea
                      id="mustHaves"
                      placeholder="pages, booking, blog, shop, forms, etc."
                      value={values.mustHaves}
                      onChange={(e) => set("mustHaves", e.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Nice-to-haves" htmlFor="niceToHaves">
                    <Textarea
                      id="niceToHaves"
                      value={values.niceToHaves}
                      onChange={(e) => set("niceToHaves", e.target.value)}
                    />
                  </Field>
                  <Field
                    label="Content ready?"
                    htmlFor="content"
                    required
                    error={errors.content}
                  >
                    <SelectField
                      id="content"
                      value={values.content}
                      onChange={(v) => set("content", v)}
                      placeholder="Select..."
                      invalid={Boolean(errors.content)}
                      options={[
                        "Ready",
                        "Partly ready",
                        "Need help structuring",
                      ]}
                    />
                  </Field>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <Field
                    label="Budget range"
                    htmlFor="budget"
                    required
                    error={errors.budget}
                  >
                    <SelectField
                      id="budget"
                      value={values.budget}
                      onChange={(v) => set("budget", v)}
                      placeholder="Select..."
                      invalid={Boolean(errors.budget)}
                      options={[
                        "Under $2,000",
                        "$2,000–$3,500",
                        "$3,500–$6,000",
                        "$6,000+",
                        "Not sure",
                      ]}
                    />
                  </Field>
                  <Field
                    label="Ideal timeline"
                    htmlFor="timeline"
                    required
                    error={errors.timeline}
                  >
                    <SelectField
                      id="timeline"
                      value={values.timeline}
                      onChange={(v) => set("timeline", v)}
                      placeholder="Select..."
                      invalid={Boolean(errors.timeline)}
                      options={[
                        "ASAP",
                        "2–4 weeks",
                        "1–2 months",
                        "Flexible",
                      ]}
                    />
                  </Field>
                  <Field label="How did you find Geekett?" htmlFor="found">
                    <input
                      id="found"
                      className={inputClass}
                      value={values.found}
                      onChange={(e) => set("found", e.target.value)}
                    />
                  </Field>
                  <Field label="Anything else I should know?" htmlFor="extra">
                    <Textarea
                      id="extra"
                      value={values.extra}
                      onChange={(e) => set("extra", e.target.value)}
                    />
                  </Field>
                </>
              ) : null}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="h-12 flex-1 rounded-md border border-brief-border bg-brief-fg text-base font-semibold text-brief-text disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>
              <button
                type="submit"
                className="h-12 flex-1 rounded-md bg-bobby text-base font-semibold text-cream shadow-[0_10px_28px_-18px_rgb(15_184_176_/_0.35)] hover:bg-bobby-deep"
              >
                {step === 2 ? "Send my brief" : "Continue"}
              </button>
            </div>
          </form>
        )}
        </div>

        <img
          src="/characters/bobby.webp"
          alt="Builder Bot Bobby"
          width={952}
          height={1400}
          className="mx-auto mt-6 h-24 w-auto object-contain sm:h-28"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
