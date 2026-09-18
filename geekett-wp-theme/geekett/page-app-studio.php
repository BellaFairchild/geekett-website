<?php
/**
 * Template Name: App Studio
 */
get_header();
$check = geekett_icon_check();
$paths = [
    ['01', 'AI App Packages', 'Turn a fuzzy app idea into a clear MVP path, feature map, and launch structure — with Bobby keeping the checklist tidy.', geekett_page_url('geekettapp') . '#ai-apps', 'Explore AI apps'],
    ['02', 'WordPress Website Packages', 'Mobile-first WordPress sites with a clear offer, clean structure, and a written build process. No meeting marathon.', home_url('/#packages'), 'Explore WordPress'],
    ['03', 'AI Marketing Systems', 'Friendly AI workflows that help you create, schedule, and ship marketing without drowning in tools.', geekett_page_url('geekettapp') . '#marketing', 'Explore marketing'],
    ['04', 'Digital Product Shop', 'Grab-and-go guides, templates, and systems you can use today — progress before a full package.', geekett_page_url('shop'), 'Browse the shop'],
];
$packs = [
    [
        'id' => 'ai-apps',
        'title' => 'AI App Packages',
        'price' => 'From $1,800 CAD',
        'status' => 'Proposed',
        'note' => 'Recommended starting line — confirm before launch',
        'best' => 'Founders and creators with an app idea who need a clear MVP path',
        'who' => 'Solo founders, creators, and idea people who have an app concept and want a friendly path from “what if” to “here’s what we build first.”',
        'includes' => ['Idea clarity and positioning workshop (async-friendly)', 'MVP scope map and feature priorities', 'User flow outlines and launch checklist', 'Tech recommendations in plain language', 'Written handoff you can actually follow'],
        'how' => 'You share your idea → Bella (with Builder Bot Bobby) shapes a clear package → we work in a shared space with written updates → you leave with a plan.',
        'outcome' => 'A beginner-friendly MVP plan and next steps — you’ll know what to build first, what to skip, and how to talk about your app.',
        'bobby' => 'Start with the smallest version that proves your idea. Bobby loves a tight MVP — fewer features, clearer story, faster launch.',
        'cta' => 'Ask about AI apps',
        'href' => 'mailto:' . GEEKETT_EMAIL . '?subject=' . rawurlencode('AI App Package enquiry'),
    ],
    [
        'id' => 'wordpress',
        'title' => 'WordPress Website Packages',
        'price' => 'From $1,800 CAD',
        'status' => 'Live',
        'note' => 'Live on geekett.com — Refresh $1,800 · Starter $2,800 · Business $5,500',
        'best' => 'Independent businesses who need a mobile-first site that sells clearly',
        'who' => 'Solo founders and service providers who want a responsive WordPress site with a clear offer — without a meeting-heavy agency process.',
        'includes' => ['Strategy + site structure for phones first', 'Design / build on WordPress', 'Content layout and basic SEO foundations', 'Written updates and short screen recordings', 'Launch guide and clear handoff'],
        'how' => 'You send a brief → Bella replies with a clear package → we build with shared updates → you get a launch guide.',
        'outcome' => 'A site that feels like you, works on mobile, and makes the next step obvious for visitors.',
        'bobby' => 'A clear homepage promise beats ten clever sections. Lead with what you help people do.',
        'cta' => 'Open the WordPress brief',
        'href' => geekett_page_url('project-brief'),
        'tiers' => true,
    ],
    [
        'id' => 'marketing',
        'title' => 'AI Marketing Systems',
        'price' => 'From $1,800 CAD',
        'status' => 'Proposed',
        'note' => 'Recommended starting line — confirm before launch',
        'best' => 'Creators who want smart systems, not another tool pile',
        'who' => 'Digital creators and founders who want AI-assisted marketing workflows without a degree in prompt engineering.',
        'includes' => ['Workflow map tailored to your offers', 'AI prompt packs and process templates', 'Tool stack recommendations (keep it simple)', 'Setup support and a reusable playbook', 'Tips for staying human while automating the busywork'],
        'how' => 'We learn how you market today → design a lean AI system → Bella and Bobby help you install and test it.',
        'outcome' => 'Marketing that feels like magic but is really just smart systems — consistent and shaped around your voice.',
        'bobby' => 'Automate the repetitive bits; keep the personality. Bobby’s favourite systems still sound like you.',
        'cta' => 'Ask about marketing systems',
        'href' => 'mailto:' . GEEKETT_EMAIL . '?subject=' . rawurlencode('AI Marketing Systems enquiry'),
    ],
];
?>
<main>
  <section class="gk-hero">
    <div class="gk-wrap gk-hero-grid">
      <div>
        <p class="gk-kicker">One-woman studio · Powered with Builder Bot Bobby</p>
        <h1 class="gk-h1">Smart apps. Bright ideas. Built with heart.</h1>
        <p class="gk-intro">Geekett is Bella’s App Studio — packages for AI apps, mobile-first WordPress, and marketing systems, plus a shop of grab-and-go tools. Clear packages. Real deliverables. No jargon fog.</p>
        <div class="gk-actions">
          <a class="gk-btn gk-btn-lg" href="#packages">See packages</a>
          <a class="gk-btn gk-btn-lg gk-btn-ghost" href="<?php echo esc_url(geekett_page_url('shop')); ?>">Browse the shop</a>
        </div>
      </div>
      <div>
        <div class="gk-video">
          <video autoplay muted loop playsinline poster="<?php echo esc_url(geekett_asset('characters/geekett-bobby-work.webp')); ?>">
            <source src="<?php echo esc_url(geekett_asset('characters/working-together.mp4')); ?>" type="video/mp4">
          </video>
        </div>
        <p class="gk-caption">Bella builds. Bobby assists. You launch.</p>
      </div>
    </div>
  </section>

  <section id="packages" class="gk-section gk-section-alt">
    <div class="gk-wrap">
      <p class="gk-eyebrow">Packages</p>
      <h2 class="gk-h2">Four ways to build with Geekett</h2>
      <p class="gk-lead">Whether you need a full package or a ready-made digital product, pick the path that matches where you are.</p>
      <div class="gk-grid-3" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
        <?php foreach ($paths as $path) : ?>
          <a class="gk-card hover-lift" href="<?php echo esc_url($path[3]); ?>" style="display:flex;flex-direction:column">
            <p class="gk-muted" style="letter-spacing:0.16em;text-transform:uppercase"><?php echo esc_html($path[0]); ?></p>
            <h3 style="margin-top:0.35rem;font-size:1.1rem"><?php echo esc_html($path[1]); ?></h3>
            <p style="margin-top:0.5rem;flex:1;font-size:0.9rem;color:var(--ink-soft)"><?php echo esc_html($path[2]); ?></p>
            <span style="margin-top:1rem;font-size:0.9rem;font-weight:600;color:var(--heart)"><?php echo esc_html($path[4]); ?> →</span>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="gk-section">
    <div class="gk-wrap">
      <p class="gk-eyebrow">Deep dives</p>
      <h2 class="gk-h2">What’s inside each path</h2>
      <div style="display:grid;gap:2rem;margin-top:2.5rem">
        <?php foreach ($packs as $pack) : ?>
          <article class="gk-card" id="<?php echo esc_attr($pack['id']); ?>" style="padding:2rem">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem">
              <div>
                <h3 style="font-size:1.5rem"><?php echo esc_html($pack['title']); ?></h3>
                <p style="margin-top:0.35rem;font-size:0.9rem;color:var(--ink-soft)"><strong>Best for:</strong> <?php echo esc_html($pack['best']); ?></p>
              </div>
              <div style="text-align:right">
                <p class="gk-price"><?php echo esc_html($pack['price']); ?></p>
                <span class="gk-badge<?php echo $pack['status'] === 'Live' ? '' : ' gk-badge-paper'; ?>"><?php echo esc_html($pack['status']); ?></span>
              </div>
            </div>
            <p class="gk-muted" style="margin-top:0.5rem"><?php echo esc_html($pack['note']); ?></p>
            <?php if (!empty($pack['tiers'])) : ?>
              <div class="gk-grid-3 md-3" style="margin-top:1.5rem">
                <div class="gk-card" style="background:var(--paper)"><p style="font-weight:600">Refresh</p><p class="gk-price">$1,800 CAD</p></div>
                <div class="gk-card" style="background:var(--paper)"><p style="font-weight:600">Starter</p><p class="gk-price">$2,800 CAD</p></div>
                <div class="gk-card" style="background:var(--paper)"><p style="font-weight:600">Business</p><p class="gk-price">$5,500 CAD</p></div>
              </div>
            <?php endif; ?>
            <div class="gk-grid-2" style="margin-top:1.5rem;align-items:stretch">
              <div class="gk-card" style="background:var(--paper)"><h4>Who it’s for</h4><p style="margin-top:0.5rem;font-size:0.9rem;color:var(--ink-soft)"><?php echo esc_html($pack['who']); ?></p></div>
              <div class="gk-card" style="background:var(--paper)"><h4>What’s included</h4>
                <ul class="gk-list"><?php foreach ($pack['includes'] as $line) : ?><li class="gk-check"><?php echo $check; ?><span><?php echo esc_html($line); ?></span></li><?php endforeach; ?></ul>
              </div>
            </div>
            <div class="gk-bobby-tip" style="margin-top:1.25rem"><strong>Bobby tip.</strong> <?php echo esc_html($pack['bobby']); ?></div>
            <div class="gk-actions">
              <a class="gk-btn" href="<?php echo esc_url($pack['href']); ?>"><?php echo esc_html($pack['cta']); ?></a>
            </div>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
