<?php
/**
 * Template Name: About
 */
get_header();
$beats = [
    ['1', 'Share where you are', 'Idea stage, need-a-website stage, or “please just give me the system” — tell Bella in plain words. A written brief. No intro call required.'],
    ['2', 'Get a clear package', 'Scoped deliverables, a From $ price line, and a written process. Bobby helps keep the plan neat. Fit first — then we start.'],
    ['3', 'Build and launch', 'Shared updates, short screen recordings, friendly handoff, and beginner-friendly guidance so you can ship with confidence.'],
];
$faqs = [
    ['What’s the difference between a package and a digital product?', 'Packages are custom or guided builds with Bella (AI apps, WordPress, or marketing systems). Digital products are grab-and-go — guides, templates, and kits you can use today from the shop.'],
    ['Do I need to know how to code?', 'No. Geekett is built for beginners and non-technical founders. You’ll get plain-language plans, WordPress builds, and systems you can run without writing code.'],
    ['Who’s Builder Bot Bobby?', 'Builder Bot Bobby is Bella’s helpful robot sidekick. He assists with research, checklists, drafts, and keeping builds organized so Bella can focus on strategy, design, and the human touch.'],
    ['Can I get WordPress or marketing help without an app idea?', 'Absolutely. WordPress Website Packages and AI Marketing Systems stand on their own. You don’t need an app idea — pick the path that matches where you are.'],
    ['How long do packages take?', 'Most packages land in about 2–6 weeks depending on scope and how quickly content comes back. Shop digital products are instant after purchase.'],
    ['How do I start?', 'Send a Project Brief for WordPress, open App Studio for apps and marketing, or grab something from the shop. Or email bella@geekett.com.'],
];
?>
<main>
  <section class="gk-section">
    <div class="gk-wrap gk-grid-2">
      <div>
        <p class="gk-eyebrow">About</p>
        <h1 class="gk-h1" style="font-size:clamp(1.9rem,3vw,2.6rem)">One woman. One builder bot. Real handoff.</h1>
        <p class="gk-lead">Geekett is Bella Fairchild’s one-woman studio. She builds mobile-first WordPress sites, AI app packages, and marketing systems for independent founders — with Builder Bot Bobby keeping the checklists tidy.</p>
        <p class="gk-lead">The work is async on purpose. You write a brief. Bella replies within a business day. Shared docs and short screen recordings replace a meeting marathon. Smart apps. Bright ideas. Built with heart.</p>
        <div class="gk-actions">
          <a class="gk-btn" href="<?php echo esc_url(geekett_page_url('project-brief')); ?>">Start a brief</a>
          <a class="gk-btn gk-btn-ghost" href="<?php echo esc_url(geekett_page_url('geekettapp')); ?>">App Studio</a>
        </div>
      </div>
      <div style="display:flex;align-items:flex-end;justify-content:center;gap:1rem">
        <img src="<?php echo esc_url(geekett_asset('characters/geekett-full.webp')); ?>" alt="Geekett" style="height:280px;width:auto;object-fit:contain">
        <img src="<?php echo esc_url(geekett_asset('characters/bobby.webp')); ?>" alt="Bobby" style="height:240px;width:auto;object-fit:contain">
      </div>
    </div>
  </section>
  <section class="gk-section gk-section-alt">
    <div class="gk-wrap">
      <p class="gk-eyebrow">How we work</p>
      <h2 class="gk-h2">Three beats, then you ship.</h2>
      <div class="gk-grid-3 md-3">
        <?php foreach ($beats as $beat) : ?>
          <div class="gk-card">
            <span class="gk-step-n" style="margin:0;background:var(--ink);color:#fff;box-shadow:none"><?php echo esc_html($beat[0]); ?></span>
            <h3 style="margin-top:1rem;font-size:1.1rem"><?php echo esc_html($beat[1]); ?></h3>
            <p style="margin-top:0.5rem;font-size:0.9rem;color:var(--ink-soft)"><?php echo esc_html($beat[2]); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
  <section class="gk-section">
    <div class="gk-wrap">
      <p class="gk-eyebrow">FAQ</p>
      <h2 class="gk-h2">Straight answers</h2>
      <div class="gk-faq">
        <?php foreach ($faqs as $i => $faq) : ?>
          <div class="gk-faq-item<?php echo $i === 0 ? ' is-open' : ''; ?>">
            <button type="button" aria-expanded="<?php echo $i === 0 ? 'true' : 'false'; ?>">
              <?php echo esc_html($faq[0]); ?>
              <span aria-hidden="true">+</span>
            </button>
            <div class="gk-faq-body"><?php echo esc_html($faq[1]); ?></div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
