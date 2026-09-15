<?php
/**
 * Template Name: Project Brief
 */
get_header();
$sent = isset($_GET['brief']) && $_GET['brief'] === 'sent';
$error = isset($_GET['brief']) && $_GET['brief'] === 'error';
?>
<main class="gk-section">
  <div class="gk-wrap" style="max-width:42rem">
    <p class="gk-kicker">Project Brief</p>
    <h1 class="gk-h1" style="font-size:clamp(1.8rem,3vw,2.4rem)">Start a Project Brief</h1>
    <p class="gk-lead">Three quick steps — I’ll reply within one business day with fit, next step, and a clear package if it’s a match.</p>

    <?php if ($sent) : ?>
      <div class="gk-notice" style="margin-top:2rem" role="status">
        <h2 class="gk-h2" style="font-size:1.25rem">Brief received</h2>
        <p class="gk-lead">Bella will reply within one business day. We work by message and shared docs — not calls.</p>
        <a class="gk-btn" style="margin-top:1.5rem" href="<?php echo esc_url(home_url('/')); ?>">Back to Geekett</a>
      </div>
    <?php else : ?>
      <?php if ($error) : ?>
        <p class="gk-lead" style="color:var(--heart)">Something went wrong sending the email. You can also write bella@geekett.com.</p>
      <?php endif; ?>
      <form class="gk-form" style="margin-top:2rem" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" data-gk-brief novalidate>
        <?php wp_nonce_field('geekett_brief', 'geekett_brief_nonce'); ?>
        <input type="hidden" name="action" value="geekett_brief">
        <div class="gk-progress"><span data-gk-bar style="width:33%"></span></div>
        <div class="gk-steps-ui">
          <span data-gk-step class="is-on">1 About you</span>
          <span data-gk-step>2 Your project</span>
          <span data-gk-step>3 Timing & send</span>
        </div>

        <div class="gk-pane is-on">
          <div class="gk-field"><label for="name">Name <span class="gk-req">*</span></label><input class="gk-input" id="name" name="name" required autocomplete="name"></div>
          <div class="gk-field"><label for="email">Email <span class="gk-req">*</span></label><input class="gk-input" id="email" name="email" type="email" required autocomplete="email" placeholder="you@example.com"></div>
          <div class="gk-field"><label for="business">Business or project name <span class="gk-req">*</span></label><input class="gk-input" id="business" name="business" required></div>
          <div class="gk-field"><label for="website">Website (if you have one)</label><input class="gk-input" id="website" name="website" placeholder="URL or none yet"></div>
        </div>

        <div class="gk-pane">
          <div class="gk-field"><label for="need">What do you need? <span class="gk-req">*</span></label>
            <select id="need" name="need" required>
              <option value="">Select...</option>
              <option>Refresh existing site</option>
              <option>New Starter site</option>
              <option>Business site</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div class="gk-field"><label for="goal">One-sentence goal <span class="gk-req">*</span></label><textarea id="goal" name="goal" required placeholder="What should this site help someone do?"></textarea></div>
          <div class="gk-field"><label for="who">Who is it for? <span class="gk-req">*</span></label><textarea id="who" name="who" required placeholder="Your main customer in plain words"></textarea></div>
          <div class="gk-field"><label for="mustHaves">Must-haves <span class="gk-req">*</span></label><textarea id="mustHaves" name="mustHaves" required placeholder="pages, booking, blog, shop, forms, etc."></textarea></div>
          <div class="gk-field"><label for="niceToHaves">Nice-to-haves</label><textarea id="niceToHaves" name="niceToHaves"></textarea></div>
          <div class="gk-field"><label for="content">Content ready? <span class="gk-req">*</span></label>
            <select id="content" name="content" required>
              <option value="">Select...</option>
              <option>Ready</option>
              <option>Partly ready</option>
              <option>Need help structuring</option>
            </select>
          </div>
        </div>

        <div class="gk-pane">
          <div class="gk-field"><label for="budget">Budget range <span class="gk-req">*</span></label>
            <select id="budget" name="budget" required>
              <option value="">Select...</option>
              <option>Under $2,000</option>
              <option>$2,000–$3,500</option>
              <option>$3,500–$6,000</option>
              <option>$6,000+</option>
              <option>Not sure</option>
            </select>
          </div>
          <div class="gk-field"><label for="timeline">Ideal timeline <span class="gk-req">*</span></label>
            <select id="timeline" name="timeline" required>
              <option value="">Select...</option>
              <option>ASAP</option>
              <option>2–4 weeks</option>
              <option>1–2 months</option>
              <option>Flexible</option>
            </select>
          </div>
          <div class="gk-field"><label for="found">How did you find Geekett?</label><input class="gk-input" id="found" name="found"></div>
          <div class="gk-field"><label for="extra">Anything else I should know?</label><textarea id="extra" name="extra"></textarea></div>
        </div>

        <div class="gk-form-nav">
          <button class="gk-btn gk-btn-ghost" type="button" data-gk-back>Back</button>
          <button class="gk-btn" type="submit" data-gk-next>Continue</button>
        </div>
      </form>
      <img src="<?php echo esc_url(geekett_asset('characters/bobby.webp')); ?>" alt="Builder Bot Bobby" style="height:6rem;width:auto;margin:1.5rem auto 0;object-fit:contain">
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
