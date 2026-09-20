import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BrandTagline } from "@/components/brand";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section, SectionTitle } from "@/components/section";

const passions = [
  "📱 Creating mobile apps",
  "🌐 Building responsive WordPress websites",
  "🤖 Exploring AI agents and automation",
  "🎨 Designing digital experiences",
  "📣 Experimenting with modern mobile marketing",
  "💡 Turning ideas into online businesses",
] as const;

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-[1.05rem] leading-relaxed text-ink-soft">
      {children}
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/about" />
      <main>
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>About Me</Eyebrow>
            <SectionTitle>Hi, I’m Bella 👋</SectionTitle>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[1.15rem] font-semibold leading-relaxed text-ink">
              But around the internet, you can call me Geekett.
            </p>
          </div>
          <Prose>
            <p>
              I’m a Canadian tech creator from the beautiful Okanagan Valley,
              home of vineyards, lakes, mountains and, of course, the legendary
              Ogopogo. 🐉🇨🇦
            </p>
            <p>
              My love affair with technology started long before AI agents, apps
              and smartphones were part of everyday life.
            </p>
            <p>
              I was just 14 years old during the age of dial-up internet when I
              bought my first desktop computer.
            </p>
            <p>You remember dial-up, right?</p>
            <p>
              That wonderfully chaotic little soundtrack of beeps, squeals and
              static that somehow meant you were about to enter the internet. 😄
            </p>
            <p>From the moment I got that first computer, I was hooked.</p>
            <p>I wanted to know how everything worked.</p>
            <p>I explored. I experimented. I clicked things I probably shouldn’t have clicked.</p>
            <p>And yes… I may have broken a computer or two along the way.</p>
            <p>But every mistake taught me something.</p>
          </Prose>
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[1.75rem] shadow-soft">
            <video
              className="block w-full"
              autoPlay
              muted
              loop
              playsInline
              poster="/characters/ogopogo-poster.jpg"
              aria-label="Bella riding Ogopogo across a mountain lake"
            >
              <source src="/characters/ogopogo.mp4" type="video/mp4" />
            </video>
          </div>
        </Section>

        <Section alt>
          <SectionTitle>Technology Changed The Way I Saw Myself</SectionTitle>
          <Prose>
            <p>
              There’s another reason technology became such an important part of
              my life.
            </p>
            <p>
              Growing up, I struggled with learning disabilities. Traditional
              ways of learning didn’t always work well for me, and for a long
              time that made me wonder whether I simply wasn’t smart enough.
            </p>
            <p>Technology helped change that.</p>
            <p>Suddenly there were different ways to learn.</p>
            <p>Infographics helped me understand things visually.</p>
            <p>Audiobooks let me learn by listening.</p>
            <p>
              Video tutorials allowed me to pause, rewind and follow along at my
              own pace.
            </p>
            <p>
              Interactive tools gave me the freedom to experiment without
              worrying about doing everything perfectly the first time.
            </p>
            <p>Technology helped me realize something incredibly important:</p>
            <p className="font-display text-[1.15rem] font-extrabold tracking-tight text-ink">
              I wasn’t incapable of learning. I simply learned differently.
            </p>
            <p>That realization changed everything.</p>
          </Prose>
        </Section>

        <Section>
          <SectionTitle>From Curious Kid To Lifelong Tech Geek</SectionTitle>
          <Prose>
            <p>
              Since that first desktop computer, I’ve never really stopped
              learning.
            </p>
            <p>
              I’ve taken college courses and online classes over the years, but
              much of what I know has come from something much less glamorous:
              trial, error, curiosity and a whole lot of Googling.
            </p>
            <p>
              I’ve taught myself by building things, breaking things, fixing
              things and then wondering:
            </p>
            <p className="font-display text-[1.15rem] font-extrabold tracking-tight text-ink">
              “What else can I make this do?”
            </p>
            <p>That curiosity eventually grew into a passion for:</p>
          </Prose>
          <ul className="mx-auto mt-6 grid max-w-xl gap-2 text-center">
            {passions.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-line bg-cream px-4 py-3 text-[1.02rem] font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[1.05rem] leading-relaxed text-ink-soft">
            And that’s where Geekett comes in.
          </p>
        </Section>

        <Section alt>
          <SectionTitle>What Geekett Means To Me</SectionTitle>
          <Prose>
            <p>
              Geekett is my little corner of the internet where creativity and
              technology get to hang out together.
            </p>
            <p>
              I’m a solo app creator, web business builder and AI explorer who
              loves discovering ways technology can help one person accomplish
              things that once required an entire team.
            </p>
            <p>
              I’m especially interested in tools that make creating, learning
              and building more accessible to everyday people.
            </p>
            <p>
              Because I remember what it felt like when technology opened those
              doors for me.
            </p>
            <p>
              Today, I get just as excited experimenting with AI agents and
              building apps as I did sitting in front of that first desktop
              computer waiting for the dial-up connection to finally work.
            </p>
            <p>The technology has changed.</p>
            <p>The curiosity hasn’t.</p>
          </Prose>
        </Section>

        <Section>
          <SectionTitle>Still Learning. Still Building. Still Geekett. 💗</SectionTitle>
          <Prose>
            <p>I don’t pretend to know everything.</p>
            <p>Technology moves far too quickly for that.</p>
            <p>
              Instead, I’ve built my career around something I’ve been doing
              since I was fourteen: learning, experimenting, creating and
              figuring things out.
            </p>
            <p>Sometimes the best ideas begin with a simple question:</p>
            <p className="font-display text-[1.15rem] font-extrabold tracking-tight text-ink">
              “I wonder if I can build that?”
            </p>
            <p>Around here, I usually try.</p>
            <p>Welcome to Geekett.</p>
          </Prose>
          <BrandTagline className="mx-auto mt-8 text-center text-[1.85rem] sm:text-[2.4rem]" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link to="/project-brief">Start a brief</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/geekettapp">Contact Geekett</Link>
            </Button>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
