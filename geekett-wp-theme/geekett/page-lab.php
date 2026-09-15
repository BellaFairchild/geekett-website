<?php
/**
 * Template Name: App Lab
 */
get_header();
$projects = [
    ['SubDeck', 'Cooking', 'SaaS', 'A calm software subscription manager. Lead with the AI Subscription Auditor — receipts in, savings decisions out.', 'Creators, freelancers, solo founders', 'Audit, annual spend, renewal alerts, cancel support.'],
    ['LaunchDeckAI', 'In build', 'SaaS', 'A calm guided route from app idea to launch. Missions + Astro copilot — not a generic project manager.', 'First-time mobile app creators', 'Auth, persistent projects, Missions, core shell, Astro.'],
    ['Soul Kindred', 'Concept', 'Consumer app', 'An AI companion for adults 30–55. Best friend first, wellness second — connection and calm, not a clinic.', 'Adults seeking connection and calm', 'Prove the daily loop: Friend, mood, journal, calm exercise.'],
    ['AppFlowDeck', 'Cooking', 'SaaS', 'AI-guided planning workspace. Makes the app visible through an App Map, linked tasks, and starter screens.', 'First-time app creators', 'App Map, tasks, screen uploads. Defer collaboration.'],
    ['BuildCanvas', 'Beta planned', 'SaaS', 'A multi-project command center for indie builders: planning, build tracking, SEO/ASO, domains, resources.', 'Indie builders with several properties', '20–30 person private beta with HQ, Blueprint, Kanban.'],
    ['VideoBumpers', 'Cooking', 'Creator tool', 'Mobile-first 15–60s intros and outros so non-pro creators sound like a show and look like a brand.', 'Podcasters, coaches, educators, streamers', 'High-quality templates + dependable voice/export flow.'],
    ['WebinarWorkshops', 'Concept', 'Media', 'Evergreen webinar business: replay libraries, affiliate funnels, and mobile-first viewing infrastructure.', 'Experts, affiliates, webinar sellers', 'One vertical, one curated replay set, one proven funnel.'],
    ['WpDesignerMag', 'Content brand', 'Media', 'Multimedia publication for the design side of WordPress — mobile-first responsive design, taught with confidence.', 'WordPress designers and business owners', 'Connect hub, weekly email, resource shop, first document packs.'],
];
$filters = ['All', 'In build', 'Cooking', 'Beta planned', 'Concept', 'Content brand'];
?>
<main>
  <section class="gk-section">
    <div class="gk-wrap">
      <div class="gk-grid-2">
        <div>
          <p class="gk-eyebrow">App Lab</p>
          <h1 class="gk-h1" style="font-size:clamp(1.9rem,3vw,2.6rem)">Ideas cooking in the Geekett lab</h1>
          <p class="gk-lead">An honest look at products and concepts Bella is building — proof the studio ships friendly tech, not just plans. Eight ventures from the September 2026 briefs, with real status.</p>
          <a class="gk-btn" style="margin-top:1.5rem" href="<?php echo esc_url(geekett_page_url('geekettapp')); ?>">Back to App Studio</a>
        </div>
        <img class="gk-char" src="<?php echo esc_url(geekett_asset('characters/geekett-desk.webp')); ?>" alt="Geekett at her desk">
      </div>
      <div class="gk-filters">
        <?php foreach ($filters as $i => $f) : ?>
          <button type="button" data-gk-filter="<?php echo esc_attr($f); ?>" class="<?php echo $i === 0 ? 'is-on' : ''; ?>"><?php echo esc_html($f); ?></button>
        <?php endforeach; ?>
      </div>
      <div class="gk-grid-3" style="margin-top:2rem">
        <?php foreach ($projects as $p) : ?>
          <article class="gk-card" data-gk-project="<?php echo esc_attr($p[1]); ?>" style="display:flex;flex-direction:column">
            <div style="display:flex;justify-content:space-between;gap:0.5rem">
              <h2 style="font-size:1.1rem"><?php echo esc_html($p[0]); ?></h2>
              <span class="gk-badge<?php echo $p[1] === 'In build' ? '' : ' gk-badge-paper'; ?>"><?php echo esc_html($p[1]); ?></span>
            </div>
            <p class="gk-muted" style="margin-top:0.25rem;letter-spacing:0.14em;text-transform:uppercase"><?php echo esc_html($p[2]); ?></p>
            <p style="margin-top:0.75rem;flex:1;font-size:0.9rem;color:var(--ink-soft)"><?php echo esc_html($p[3]); ?></p>
            <p style="margin-top:0.75rem;font-size:0.75rem;color:var(--ink-soft)">For: <?php echo esc_html($p[4]); ?></p>
            <p class="gk-muted" style="margin-top:0.75rem;border-top:1px solid var(--line);padding-top:0.75rem">Next: <?php echo esc_html($p[5]); ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
