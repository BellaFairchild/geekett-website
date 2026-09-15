<?php
get_header();
$brief = geekett_page_url('project-brief');
$studio = geekett_page_url('geekettapp');
$lab = geekett_page_url('lab');
$shop = geekett_page_url('shop');
$check = geekett_icon_check();
$tiers = [
    ['Refresh', '$1,800', 'Tighten an existing site: offer, structure, phone experience, handoff.', 'When the bones are there and the presentation isn’t helping you sell.', ['Mobile-first pass', 'Offer / nav clarity', 'Polish pass', 'Launch notes'], '50% to start, 50% before handoff.'],
    ['Starter', '$2,800', 'New 5–7 page WordPress site, basic SEO, launch guide.', 'A new site, phones first, with a clear homepage promise.', ['Strategy + structure', 'Design / build', 'Content layout', 'Basic SEO', 'Launch guide'], '50% to start, 50% before launch.'],
    ['Business', '$5,500', 'Custom sections, stronger SEO map, two revision rounds, fuller handoff.', 'When the site is a real growth tool, not just a brochure.', ['Custom layout work', 'Expanded pages / features', 'Stronger SEO / content map', 'Two revision rounds', 'Fuller launch + handoff'], '50% to start, 50% before launch.'],
];
$process = [
    ['1', 'Send a brief', 'Tell me what you’re building in writing. No intro call required.', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8'],
    ['2', 'Clear package + price', 'Fit + fixed CAD package (Refresh, Starter, or Business).', 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01'],
    ['3', 'Shared updates', 'Shared workspace with written updates and short screen recordings.', 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
    ['4', 'Launch guide + handoff', 'Launch guide and you know exactly what changed.', 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6v4H9z'],
];
$shop_items = [
    ['App launch', 'App Launch Guide', 'A first-time builder’s path from idea notes to launch checklist. Practical, friendly, no jargon.', '$47 CAD'],
    ['WordPress', 'Offer & site clarity templates', 'Homepage promise worksheets and page maps so your WordPress site sells before you polish pixels.', '$37 CAD'],
    ['AI workflows', 'AI workflow starter pack', 'Prompt packs and process cards Bobby would approve — save hours without losing your voice.', '$57 CAD'],
];
?>
<main>
  <section class="gk-hero">
    <div class="gk-wrap gk-hero-grid">
      <div>
        <p class="gk-kicker">One-woman studio · Mobile-first WordPress</p>
        <h1 class="gk-h1">Mobile-first WordPress sites for independent business builders.</h1>
        <p class="gk-intro">Clear offers, clean structure, and a simple written process. No meeting marathon — just a brief, a fixed package, and a site that works on phones first.</p>
        <div class="gk-actions">
          <a class="gk-btn gk-btn-lg" href="<?php echo esc_url($brief); ?>">Start a Project Brief</a>
          <a class="gk-btn gk-btn-lg gk-btn-ghost" href="#packages">See packages</a>
        </div>
        <div class="gk-chip-row">
          <?php foreach (['Fixed CAD packages', 'Written process', 'No meeting marathon', 'Phones first'] as $chip) : ?>
            <span class="gk-chip hover-pop"><?php echo $check; ?> <?php echo esc_html($chip); ?></span>
          <?php endforeach; ?>
        </div>
        <p class="gk-tagline">Smart apps. Bright ideas. Built with heart.</p>
      </div>
      <div>
        <div class="gk-video">
          <video autoplay muted loop playsinline poster="<?php echo esc_url(geekett_asset('characters/geekett-bobby-work.webp')); ?>" aria-label="Geekett on her laptop while Builder Bot Bobby plans the calendar">
            <source src="<?php echo esc_url(geekett_asset('characters/working-together.mp4')); ?>" type="video/mp4">
          </video>
        </div>
        <p class="gk-caption">Bella builds. Bobby assists. You launch.</p>
      </div>
    </div>
  </section>

  <section id="process" class="gk-process">
    <div class="gk-wrap">
      <h2 class="gk-h2">Our Process</h2>
      <p class="gk-lead">We know your time is valuable — written updates, not a meeting stack.</p>
      <div class="gk-steps">
        <?php foreach ($process as $i => $step) : ?>
          <div class="gk-step-wrap">
            <article class="gk-step hover-lift">
              <span class="gk-step-tab" aria-hidden="true"></span>
              <span class="gk-step-n"><?php echo esc_html($step[0]); ?></span>
              <span class="gk-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="<?php echo esc_attr($step[3]); ?>"/></svg>
              </span>
              <h3><?php echo esc_html($step[1]); ?></h3>
              <p><?php echo esc_html($step[2]); ?></p>
            </article>
            <?php if ($i < 3) : ?>
              <svg class="gk-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
      <div class="gk-bobby-tip"><strong style="color:var(--bobby)">Bobby tip:</strong> Prefer a written brief over a call stack — Bella replies with fit, package, and next steps in writing.</div>
    </div>
  </section>

  <section id="packages" class="gk-section">
    <div class="gk-wrap">
      <p class="gk-eyebrow">Packages</p>
      <h2 class="gk-h2">WordPress website packages</h2>
      <p class="gk-lead">Fixed CAD prices. 50% to start, 50% before launch. Written updates and short screen recordings by default — not a meeting schedule.</p>
      <div class="gk-grid-3">
        <?php foreach ($tiers as $tier) : ?>
          <article class="gk-card hover-lift" style="display:flex;flex-direction:column">
            <div style="display:flex;justify-content:space-between;gap:0.75rem">
              <h3 style="font-size:1.5rem"><?php echo esc_html($tier[0]); ?></h3>
              <span class="gk-badge">Live</span>
            </div>
            <p class="gk-price"><?php echo esc_html($tier[1]); ?> <span class="gk-muted">CAD</span></p>
            <p style="margin-top:0.75rem;font-size:0.9rem;color:var(--ink-soft)"><?php echo esc_html($tier[2]); ?></p>
            <p class="gk-muted" style="margin-top:0.5rem"><?php echo esc_html($tier[3]); ?></p>
            <ul class="gk-list" style="flex:1">
              <?php foreach ($tier[4] as $line) : ?>
                <li class="gk-check"><?php echo $check; ?><span><?php echo esc_html($line); ?></span></li>
              <?php endforeach; ?>
            </ul>
            <p class="gk-muted" style="margin-top:1.25rem"><?php echo esc_html($tier[5]); ?></p>
            <a class="gk-btn gk-btn-full" style="margin-top:1.25rem" href="<?php echo esc_url($brief); ?>">Start a Project Brief</a>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section id="bobby" class="gk-bobby">
    <div class="gk-wrap">
      <div class="gk-bobby-card hover-lift">
        <div class="gk-bobby-grid">
          <div class="gk-bobby-frame">
            <img src="<?php echo esc_url(geekett_asset('characters/bobby.webp')); ?>" alt="Builder Bot Bobby — studio sidekick" width="952" height="1400">
          </div>
          <div>
            <p class="gk-kicker" style="color:var(--muted)">Studio sidekick</p>
            <h2 class="gk-h2">Meet Builder Bot Bobby</h2>
            <p class="gk-lead" style="max-width:42rem">Bobby is Bella’s studio sidekick — the cheerful helper who keeps checklists tidy, written updates rolling, and the build organized. He’s not a replacement for Bella; he’s the bot who helps her one-woman studio stay clear, warm, and on track.</p>
            <ul class="gk-dot-pills">
              <?php foreach (['Checklists tidy', 'Written updates', 'Build organized'] as $pill) : ?>
                <li><span class="gk-dot"></span><span class="gk-pill hover-pop"><?php echo esc_html($pill); ?></span></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="gk-section">
    <div class="gk-wrap">
      <p class="gk-eyebrow">Who it’s for</p>
      <h2 class="gk-h2">Independent builders who want clarity, not a committee.</h2>
      <p class="gk-lead">Solo founders and service providers who want a mobile-first WordPress site without a meeting-heavy agency process.</p>
      <div class="gk-chip-row">
        <?php foreach (['Solo founders', 'Service providers', 'Async / written', 'Phones first'] as $chip) : ?>
          <span class="gk-chip hover-pop" style="padding:0.5rem 1rem;font-size:0.9rem"><?php echo esc_html($chip); ?></span>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="gk-section gk-section-alt">
    <div class="gk-wrap gk-grid-2">
      <div>
        <p class="gk-eyebrow">App Studio</p>
        <h2 class="gk-h2">Apps, systems, and a shop.</h2>
        <p class="gk-lead">Same studio, same Bella. AI apps, marketing systems, the App Lab, and grab-and-go digital products live here on Geekett — not on a side street.</p>
        <div class="gk-actions">
          <a class="gk-btn" href="<?php echo esc_url($studio); ?>">Open App Studio</a>
          <a class="gk-btn gk-btn-ghost" href="<?php echo esc_url($lab); ?>">See the App Lab</a>
        </div>
      </div>
      <img class="gk-char" src="<?php echo esc_url(geekett_asset('characters/geekett-desk.webp')); ?>" alt="Geekett at her desk with app and WordPress orbs" width="750" height="772">
    </div>
  </section>

  <section class="gk-section">
    <div class="gk-wrap">
      <p class="gk-eyebrow">Shop</p>
      <h2 class="gk-h2">Start before a full package</h2>
      <p class="gk-lead">Instant guides and templates when you want progress this week.</p>
      <div class="gk-grid-3 md-3">
        <?php foreach ($shop_items as $item) : ?>
          <article class="gk-card hover-lift" style="display:flex;flex-direction:column">
            <span class="gk-badge gk-badge-paper"><?php echo esc_html($item[0]); ?></span>
            <h3 style="margin-top:0.75rem;font-size:1.25rem"><?php echo esc_html($item[1]); ?></h3>
            <p style="margin-top:0.5rem;flex:1;font-size:0.9rem;color:var(--ink-soft)"><?php echo esc_html($item[2]); ?></p>
            <p class="gk-price" style="margin-top:1rem"><?php echo esc_html($item[3]); ?></p>
          </article>
        <?php endforeach; ?>
      </div>
      <div style="margin-top:2rem"><a class="gk-btn" href="<?php echo esc_url($shop); ?>">Browse the shop</a></div>
    </div>
  </section>

  <section id="brief" class="gk-brief-cta">
    <div class="gk-wrap">
      <div class="gk-brief-card">
        <div class="gk-clip">
          <img src="<?php echo esc_url(geekett_asset('characters/brief-clipboard.webp')); ?>" alt="" width="640" height="640">
        </div>
        <p class="gk-kicker" style="margin-top:2rem;color:var(--muted)">Next step</p>
        <h2 class="gk-h2">Start a Project Brief</h2>
        <p class="gk-lead" style="margin-inline:auto">Tell me what you’re building. I’ll reply within one business day with fit, next step, and a clear package if it’s a match. We work by message and shared docs — not calls.</p>
        <ul class="gk-dot-pills" style="justify-content:center">
          <?php foreach (['Reply in one business day', 'Message + docs, not calls'] as $pill) : ?>
            <li><span class="gk-dot"></span><span class="gk-pill hover-pop"><?php echo esc_html($pill); ?></span></li>
          <?php endforeach; ?>
        </ul>
        <div style="margin-top:2.25rem">
          <a class="gk-btn gk-btn-pill hover-pop" href="<?php echo esc_url($brief); ?>">Open Project Brief</a>
        </div>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
