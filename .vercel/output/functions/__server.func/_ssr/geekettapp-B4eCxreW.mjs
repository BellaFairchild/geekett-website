import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as shopItems, a as LIVE_HOME, c as ViewSwitch, d as faqs, f as labProjects, g as proofCards, i as LIVE_BRIEF, l as beats, m as paths, n as Brand, o as STUDIO_EMAIL, p as packages, r as Button, s as TAGLINE, t as Badge, u as cn } from "./content-DY8rKRIF.mjs";
import { a as ShoppingBag, c as Map, d as Check, f as Bot, i as Smartphone, l as Mail, o as Rocket, p as ArrowRight, r as Sparkles, s as Menu, t as X, u as Globe } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/geekettapp-B4eCxreW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-sm border border-line bg-cream px-3.5 text-sm text-ink placeholder:text-muted shadow-none transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heart/40 focus-visible:border-heart", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function Section({ id, alt, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("px-5 py-16 sm:px-8 sm:py-20 lg:py-24", alt ? "bg-paper-2/60" : "bg-transparent", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heart",
		children
	});
}
function SectionTitle({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "max-w-3xl text-[1.85rem] font-semibold leading-[1.15] text-ink sm:text-[2.15rem]",
		children
	});
}
function SectionIntro({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft",
		children
	});
}
var nav = [
	{
		href: "#packages",
		label: "Packages"
	},
	{
		href: "#applab",
		label: "App Lab"
	},
	{
		href: "#shop",
		label: "Shop"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var pathIcons = {
	smartphone: Smartphone,
	globe: Globe,
	sparkles: Sparkles,
	bag: ShoppingBag
};
var shopIcons = {
	rocket: Rocket,
	map: Map,
	bot: Bot
};
function mailTo(subject) {
	return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
function PrototypePage() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [joined, setJoined] = (0, import_react.useState)(false);
	const [briefed, setBriefed] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	function onJoin(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const record = {
			name: String(data.get("first_name") || ""),
			email: String(data.get("email") || ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("geekett-build-list") || "[]");
			localStorage.setItem("geekett-build-list", JSON.stringify([...prev, record]));
		} catch {}
		setJoined(true);
	}
	function onBrief(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const record = {
			name: String(data.get("name") || ""),
			email: String(data.get("email") || ""),
			path: String(data.get("path") || ""),
			note: String(data.get("note") || ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("geekett-briefs") || "[]");
			localStorage.setItem("geekett-briefs", JSON.stringify([...prev, record]));
		} catch {}
		setBriefed(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line bg-sand/80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[0.75rem] text-ink-soft",
						children: [
							"Proposed ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "geekett.com/geekettapp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: " · sibling to the WordPress cash-plan home"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, { current: "prototype" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
							to: "/geekettapp",
							subtitle: "App Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 lg:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "text-sm text-ink-soft hover:text-ink",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-2 lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Start a brief"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#packages",
									children: "See packages"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-sm border border-line bg-cream lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen((v) => !v),
							children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Menu"
							})]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					id: "mobile-nav",
					className: "border-t border-line bg-cream px-5 py-4 lg:hidden",
					"aria-label": "Mobile",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-1",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "rounded-sm px-2 py-3 text-sm font-medium",
							onClick: () => setOpen(false),
							children: item.label
						}, item.href))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "flex-1",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#shop",
								onClick: () => setOpen(false),
								children: "Shop"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#packages",
								onClick: () => setOpen(false),
								children: "See packages"
							})
						})]
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:pt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bobby",
								children: "One-woman studio · Powered with Builder Bot Bobby"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-[2.35rem] font-semibold leading-[1.08] text-ink sm:text-[3.15rem] lg:text-[3.4rem]",
								children: TAGLINE
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft",
								children: "Geekett is Bella Fairchild’s App Studio — packages for AI apps, mobile-first WordPress, and marketing systems, plus a shop of grab-and-go tools. Clear packages. Real deliverables. No jargon fog."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#packages",
										children: "See packages"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "ghost",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#shop",
										children: "Browse the shop"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex flex-wrap gap-2",
								children: [
									"100% solo-built",
									"Strategy to launch",
									"Beginner-friendly"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium text-ink-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-bobby" }), item]
								}, item))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "overflow-hidden rounded-2xl border border-line bg-cream shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/characters/geekett.jpg",
								alt: "Geekett character — friendly 3D mascot for the studio",
								className: "aspect-square w-full object-cover object-top",
								width: 640,
								height: 640
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-sm text-muted",
							children: "Bella builds. Bobby assists. You launch."
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "packages",
					alt: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Packages" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Four ways to build with Geekett" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "Whether you need a full package or a ready-made digital product, pick the path that matches where you are — idea stage, need-a-website stage, or “please just give me the system” stage." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
							children: paths.map((path) => {
								const Icon = pathIcons[path.icon];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: path.href,
									className: "group flex flex-col rounded-xl border border-line bg-cream p-5 shadow-lift transition-transform duration-150 hover:-translate-y-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-11 items-center justify-center rounded-md bg-sand text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 font-display text-[0.68rem] uppercase tracking-[0.16em] text-muted",
											children: path.kicker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-lg font-semibold leading-snug",
											children: path.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 flex-1 text-sm leading-relaxed text-ink-soft",
											children: path.blurb
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-heart",
											children: [path.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
										})
									]
								}, path.id);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "deep-dives",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Deep dives" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "What’s inside each path" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "Every package is scoped for clarity: who it’s for, what’s included, how we work, and a transparent starting price. WordPress prices are live. App and marketing prices are the recommended starting lines." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 space-y-8",
							children: packages.map((pack) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								id: pack.id,
								className: "rounded-2xl border border-line bg-cream p-6 shadow-soft sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl font-semibold",
											children: pack.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-ink-soft",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-ink",
													children: "Best for:"
												}),
												" ",
												pack.bestFor
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-xl font-semibold tabular-nums",
												children: pack.price
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: pack.priceStatus === "live" ? "live" : "plan",
												className: "mt-1",
												children: pack.priceStatus === "live" ? "Live" : "Proposed"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted",
										children: pack.priceNote
									}),
									"liveTiers" in pack && pack.liveTiers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid gap-3 sm:grid-cols-3",
										children: pack.liveTiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-line bg-paper p-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-sm font-semibold",
													children: tier.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-0.5 font-display text-lg tabular-nums",
													children: [tier.price, " CAD"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-ink-soft",
													children: tier.line
												})
											]
										}, tier.name))
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid gap-5 md:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg bg-paper p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-sm font-semibold",
													children: "Who it’s for"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm leading-relaxed text-ink-soft",
													children: pack.who
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg bg-paper p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-sm font-semibold",
													children: "What’s included"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-2 space-y-1.5 text-sm text-ink-soft",
													children: pack.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-bobby" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
													}, item))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg bg-paper p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-sm font-semibold",
													children: "How it works"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm leading-relaxed text-ink-soft",
													children: pack.how
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg bg-paper p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-sm font-semibold",
													children: "Outcome"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm leading-relaxed text-ink-soft",
													children: pack.outcome
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex gap-3 rounded-lg border border-bobby/20 bg-bobby-mist/60 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "mt-0.5 size-5 shrink-0 text-bobby" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm leading-relaxed text-bobby-deep",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "Bobby tip."
												}),
												" ",
												pack.bobby
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: pack.id === "wordpress" ? LIVE_BRIEF : mailTo(pack.mailSubject),
												children: pack.cta
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact",
												children: "Contact Bella"
											})
										})]
									})
								]
							}, pack.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "about",
					alt: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we work" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "One woman. One builder bot. Real results." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "Geekett is Bella Fairchild’s one-woman studio. Builder Bot Bobby assists with research, checklists, and keeping builds tidy — so you get personalized attention with extra robot horsepower." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-xl border border-line bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/characters/geekett.jpg",
									alt: "Geekett character representing Bella’s studio brand",
									className: "aspect-square w-full object-cover object-top"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "px-4 py-3 text-sm text-muted",
									children: "Geekett character"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-xl border border-line bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/characters/bobby.jpg",
									alt: "Builder Bot Bobby — helpful robot sidekick",
									className: "aspect-square w-full object-cover object-top"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "px-4 py-3 text-sm text-muted",
									children: "Builder Bot Bobby"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-3",
							children: beats.map((beat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-line bg-cream p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-cream",
										children: beat.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-4 font-display text-lg font-semibold",
										children: beat.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-ink-soft",
										children: beat.body
									})
								]
							}, beat.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#packages",
									children: "See packages"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: mailTo("Hello from the App Studio"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
										"Email ",
										STUDIO_EMAIL
									]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "applab",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "App Lab" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Ideas cooking in the Geekett lab" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "A honest look at products and concepts Bella is building — proof that the studio ships friendly tech, not just plans. Eight ventures from the September 2026 briefs, with real status — not a fake portfolio." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
							children: labProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col rounded-xl border border-line bg-cream p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg font-semibold",
											children: project.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: project.status === "In build" ? "bobby" : "paper",
											children: project.status
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-muted",
										children: project.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 flex-1 text-sm leading-relaxed text-ink-soft",
										children: project.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 border-t border-line pt-3 text-xs text-muted",
										children: ["Next: ", project.priority]
									})
								]
							}, project.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "shop",
					alt: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Shop" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Digital products you can use today" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "A starter shop — three SKUs, not a catalogue. Instant access when you’re not ready for a full package, or you want a head start." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-3",
							children: shopItems.map((item) => {
								const Icon = shopIcons[item.icon];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-xl border border-line bg-cream p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-11 items-center justify-center rounded-md bg-sand text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "paper",
											className: "mt-4 w-fit",
											children: item.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-xl font-semibold",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 flex-1 text-sm leading-relaxed text-ink-soft",
											children: item.blurb
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-lg font-semibold tabular-nums",
												children: item.price
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ink",
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: mailTo(`Shop: ${item.title}`),
													children: "Request"
												})
											})]
										})
									]
								}, item.id);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "love",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Studio proof" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Show the work. Don’t invent the love." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "The reference mock used placeholder quotes. This plan replaces a wall of love with proof the studio can actually stand behind until three documented client examples exist." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-3",
							children: proofCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl border border-line bg-cream p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "plan",
										children: card.meta
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-lg font-semibold",
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-ink-soft",
										children: card.body
									})
								]
							}, card.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					id: "faq",
					alt: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Questions, answered clearly" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 divide-y divide-line rounded-xl border border-line bg-cream",
								children: faqs.map((item, i) => {
									const isOpen = openFaq === i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
										"aria-expanded": isOpen,
										onClick: () => setOpenFaq(isOpen ? null : i),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-[0.98rem] font-semibold",
											children: item.q
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("grid size-8 shrink-0 place-items-center rounded-full border border-line text-sm", isOpen ? "bg-ink text-cream" : "bg-paper text-ink"),
											children: isOpen ? "–" : "+"
										})]
									}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-5 pb-5 text-sm leading-relaxed text-ink-soft",
										children: item.a
									}) : null] }, item.q);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					id: "build-list",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-line bg-ink px-6 py-10 text-cream sm:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heart-fg/70",
								children: "Build List"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-xl font-display text-3xl font-semibold leading-tight",
								children: "Join the Geekett Build List"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-[1.02rem] leading-relaxed text-cream/75",
								children: "Build notes, product drops, and friendly updates from Bella (and occasional wisdom from Builder Bot Bobby). No spam — just useful shipping energy."
							}),
							joined ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl rounded-md bg-cream/10 px-4 py-3 text-sm",
								role: "status",
								children: "You’re on the demo list. In production this feeds the welcome sequence from the Geekett business brief."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: onJoin,
								className: "mt-6 flex max-w-xl flex-col gap-3 sm:flex-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "bl-name",
										children: "First name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "bl-name",
										name: "first_name",
										placeholder: "First name",
										required: true,
										className: "bg-cream text-ink"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "bl-email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "bl-email",
										name: "email",
										type: "email",
										placeholder: "Email",
										required: true,
										className: "bg-cream text-ink"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "primary",
										className: "shrink-0",
										children: "Join the list"
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					id: "contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Studio Brief" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Ready to pick your path?" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, { children: "Tell Bella what you’re building — an app idea, a WordPress site, a marketing system, or a shop question. Canadian studio energy, clear next steps." }),
							briefed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 rounded-xl border border-line bg-cream p-6 text-sm leading-relaxed",
								role: "status",
								children: [
									"Brief saved on this device. In production this would email Bella and land in the same written-process queue as the WordPress Project Brief. Prefer email?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "font-medium text-heart underline",
										href: mailTo("Studio Brief"),
										children: STUDIO_EMAIL
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: onBrief,
								className: "mt-8 space-y-4 rounded-2xl border border-line bg-cream p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1.5 block text-xs font-medium text-ink-soft",
											htmlFor: "br-name",
											children: "Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "br-name",
											name: "name",
											required: true,
											placeholder: "First name"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1.5 block text-xs font-medium text-ink-soft",
											htmlFor: "br-email",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "br-email",
											name: "email",
											type: "email",
											required: true,
											placeholder: "you@studio.com"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 text-xs font-medium text-ink-soft",
										children: "Path"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-2 sm:grid-cols-2",
										children: [
											"AI App Package",
											"WordPress site",
											"AI Marketing System",
											"Shop / not sure yet"
										].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex min-h-11 items-center gap-2 rounded-sm border border-line bg-paper px-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "radio",
												name: "path",
												value: label,
												required: true,
												className: "accent-heart"
											}), label]
										}, label))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block text-xs font-medium text-ink-soft",
										htmlFor: "br-note",
										children: "What are you building?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "br-note",
										name: "note",
										required: true,
										rows: 4,
										className: "w-full rounded-sm border border-line bg-paper px-3.5 py-3 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heart/40",
										placeholder: "A few sentences in plain words."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											children: "Send Studio Brief"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											type: "button",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: LIVE_HOME,
												children: "WordPress cash-plan home"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Prototype form — saves locally. Production should share the written queue with geekett.com/project-brief."
									})
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line bg-ink text-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold",
							children: "Geekett"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-xs text-sm leading-relaxed text-cream/70",
							children: ["One-woman studio + Builder Bot Bobby. ", TAGLINE]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-cream/75",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "hover:text-cream",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-cream/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LIVE_HOME,
									className: "hover:text-cream",
									children: "WordPress cash-plan home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: mailTo("Hello"),
									className: "hover:text-cream",
									children: STUDIO_EMAIL
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Privacy · Terms" })
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-cream/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/55 sm:flex-row sm:justify-between sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["© 2026 Geekett. ", TAGLINE] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proposed /geekettapp · not a replacement for the cash-plan Home" })]
					})
				})]
			})
		]
	});
}
function GeekettApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypePage, {});
}
//#endregion
export { GeekettApp as component };
