import React from "react";
import "../styles/blog.css"; 

/**
 * Blog / Tips page
 * - Renders several fully-written posts optimized for SEO and engagement
 * - Uses semantic HTML (article, header, time, figure, section)
 * - Internal links point to /services, /pricing, /contact
 *
 * Replace featured image paths with your own images in public/assets/
 */

const posts = [
  {
    id: "lighting-portrait-tips",
    title: "5 Essential Lighting Tips for Stunning Portraits",
    featuredImage: "/assets/blog-lighting-portrait.jpg",
    description:
      "Understand and control light to create flattering portraits that highlight personality and mood.",
    date: "2025-07-14",
    content: function Post() {
      return (
        <>
          <h2>Why lighting matters</h2>
          <p>
            Light is the single most important tool a photographer has. It sculpts features, sets mood and
            communicates intent. Even small adjustments to direction, quality and color can transform a portrait.
          </p>

          <h3>1. Use soft, directional light for flattering portraits</h3>
          <p>
            Soft light reduces harsh shadows and skin contrast. Use large light sources (softboxes, umbrellas, or
            window light) placed slightly to the side and above the subject for classic, flattering results.
          </p>
          <ul>
            <li>Example: Place a 2x3 softbox 4–6 feet from the subject and 20° above eye level.</li>
            <li>Result: Gentle falloff, soft catchlights and smooth skin tones.</li>
          </ul>

          <h3>2. Control your background and separation</h3>
          <p>
            A well-lit subject against a thoughtfully lit background improves depth. Add a hair/rim light or
            increase subject-to-background distance to create separation.
          </p>
          <ul>
            <li>Tip: Use a small rim light (snooted speedlight) behind and to the side to outline the shoulder.</li>
          </ul>

          <h3>3. Balance ambient and flash</h3>
          <p>
            Mixing ambient light and flash lets you keep background ambience while controlling subject exposure.
            Lower your flash power and adjust camera shutter speed to bring in more background light.
          </p>
          <ul>
            <li>Example settings: ISO 100–400, shutter 1/125–1/200 (sync), aperture f/2.8–f/5.6 depending on depth</li>
          </ul>

          <h3>4. Mind the color temperature</h3>
          <p>
            Different light sources have different color temperatures. Use white balance, gels, or careful positioning
            to keep skin tones natural.
          </p>
          <ul>
            <li>Scenario: Warm tungsten lamps + daylight window — add a CTO gel to the flash or use custom white balance.</li>
          </ul>

          <h3>5. Practice posing with light</h3>
          <p>
            Light and pose work together. Try small shifts in head tilt, shoulder angle and chin position to see how
            catchlights and shadows change.
          </p>
          <ul>
            <li>Exercise: Move the subject’s chin down 10° and observe shadow changes under the nose and eyes.</li>
          </ul>

          <h3>Quick checklist before a portrait shoot</h3>
          <ul>
            <li>Test your main light and modifier — check catchlights and shadow quality.</li>
            <li>Set white balance for consistent color across images.</li>
            <li>Confirm background distance or add a background light if needed.</li>
            <li>Review 2–3 test frames and refine camera settings.</li>
          </ul>

          <h3>Further learning and next steps</h3>
          <p>
            If you’d like a hands-on session to try these techniques, check our <a href="/services">Services</a> for studio
            and outdoor options. Our <a href="/pricing">Pricing</a> page lists packages with studio time and retouching —
            or <a href="/contact">contact us</a> to customise a practical lighting workshop.
          </p>

          <div className="post-cta">
            <strong>Ready to improve your portraits?</strong>
            <a className="btn" href="/contact">Book a studio session or consultation →</a>
          </div>
        </>
      );
    },
  },

  {
    id: "behind-wedding-workflow",
    title: "Behind the Lens: Our Wedding Day Workflow (From Prep to Album)",
    featuredImage: "/assets/blog-wedding-workflow.jpg",
    description:
      "A transparent look at the steps we take on a wedding day to capture decisive moments and deliver a beautiful album.",
    date: "2025-06-02",
    content: function Post() {
      return (
        <>
          <h2>Overview</h2>
          <p>
            Weddings are fast-moving and emotional. A clear workflow helps us stay organised, minimise missed moments, and
            provide a calm experience for the couple and their families.
          </p>

          <h3>Pre-wedding planning (what we do before the day)</h3>
          <ul>
            <li>Consultation: Discuss timeline, must-have shots and family list.</li>
            <li>Location scouting: Evaluate light, backgrounds and logistics.</li>
            <li>Shot list & contingencies: Plan for rainy-day adjustments and backup gear.</li>
          </ul>

          <h3>On the wedding day: key phases</h3>
          <h4>1. Preparation</h4>
          <p>
            We arrive early to capture details (dress, rings, invitation) and candids. Lighting setups are pre-tested so formal portraits
            are quick and relaxed.
          </p>

          <h4>2. Ceremony</h4>
          <ul>
            <li>Discrete coverage with long lenses for candid emotion</li>
            <li>Spot-metering for highlights and cross-checking with second shooter</li>
          </ul>

          <h4>3. Portraits & family photos</h4>
          <p>
            We move through family groups efficiently using simple modifiers, clear direction, and a calm pace to keep everyone comfortable.
          </p>

          <h4>4. Reception & storytelling</h4>
          <ul>
            <li>Capture atmosphere, speeches and dance floor energy</li>
            <li>Mix of wide environmental shots and tight candid frames</li>
          </ul>

          <h3>Post-production workflow</h3>
          <ul>
            <li>Immediate backup of raw files to multiple drives</li>
            <li>Initial culling to highlight gallery (usually within 7–14 days)</li>
            <li>Full retouching for selected images, colour grading for consistency</li>
            <li>Album design drafts provided for client review (premium packages)</li>
          </ul>

          <h3>Examples & timing</h3>
          <p>
            Example timeline for a standard wedding package:
          </p>
          <ul>
            <li>Day 0–1: On-site shoot, immediate backup</li>
            <li>Day 7–14: Highlight gallery delivered (online)</li>
            <li>Day 21–45: Final edited images delivered; album draft within agreed timeframe</li>
          </ul>

          <h3>Why this helps you</h3>
          <p>
            A transparent workflow reduces surprises, enables clear communication, and ensures we deliver images that match your vision.
            For details on our event packages and pricing, visit <a href="/services">Services</a> and <a href="/pricing">Pricing</a>.
          </p>

          <div className="post-cta">
            <strong>Planning a wedding or large event?</strong>
            <a className="btn" href="/contact">Contact us for a tailored proposal →</a>
          </div>
        </>
      );
    },
  },

  {
    id: "studio-updates-backdrops-offers",
    title: "Studio News: New Backdrops, Gear Upgrades and Limited-Time Booking Offers",
    featuredImage: "/assets/blog-studio-updates.jpg",
    description:
      "Updates from the studio — new seamless backdrops, lens upgrades for sharper images, and a limited seasonal discount.",
    date: "2025-05-01",
    content: function Post() {
      return (
        <>
          <h2>What’s new at our studio</h2>
          <p>
            We invest slowly and thoughtfully in gear and studio improvements so you always receive a professional experience and refined final images.
          </p>

          <h3>New backdrops & styling options</h3>
          <ul>
            <li>Three new muslin and seamless paper backdrops in muted tones</li>
            <li>Selection of on-trend props and textured surfaces for product shoots</li>
          </ul>

          <h3>Equipment and quality improvements</h3>
          <ul>
            <li>New portrait lens with improved sharpness and creamy bokeh</li>
            <li>Updated tethering workflow for instant client previews during shoots</li>
          </ul>

          <h3>Seasonal booking offer (limited time)</h3>
          <p>
            Book a Standard package between May and August and receive a complimentary extra edited image and 10% off album design. Contact us
            for full terms and to confirm availability.
          </p>

          <h3>How this benefits your shoot</h3>
          <ul>
            <li>Greater creative options (backdrop + props) for stylised images</li>
            <li>Faster client review and stronger final results thanks to updated gear</li>
            <li>Limited offer helps you save on album extras and prints</li>
          </ul>

          <h3>Stay connected</h3>
          <p>
            For current availability and personalised quotes, check our <a href="/pricing">Pricing</a> and <a href="/services">Services</a> pages,
            or <a href="/contact">contact us</a> directly — we reply quickly and are happy to schedule a planning call.
          </p>

          <div className="post-cta">
            <strong>Interested in a studio session with our new setup?</strong>
            <a className="btn" href="/contact">Reserve a session or request details →</a>
          </div>
        </>
      );
    },
  },
];

export default function Blog() {
  return (
    <main className="blog-page container" aria-labelledby="blog-heading">
      <header className="blog-header">
        <p className="kicker">Blog & Tips</p>
        <h1 id="blog-heading">Photography tips, behind-the-scenes stories and studio updates</h1>
        <p className="lead">
          Practical tips for photographers and clients, transparent behind-the-scenes workflows, and news from the studio.
          Browse the posts below to learn, prepare for your session, and stay inspired.
        </p>
      </header>

      <nav className="blog-nav" aria-label="Blog posts">
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`}>{p.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="posts-list">
        {posts.map((post) => (
          <article className="post" id={post.id} key={post.id} itemScope itemType="http://schema.org/Article">
            <header className="post-header">
              <h2 className="post-title" itemProp="headline">{post.title}</h2>
              <time className="post-date" dateTime={post.date} itemProp="datePublished">
                {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <p className="post-description">{post.description}</p>
            </header>

            <figure className="post-figure">
              <img src={post.featuredImage} alt={post.title} />
              <figcaption className="sr-only">Featured image for {post.title}</figcaption>
            </figure>

            <section className="post-content" itemProp="articleBody">
              {post.content()}
            </section>

            <footer className="post-footer">
              <p className="small muted">Tags: photography tips, studio, workflow</p>
              <a className="back-to-top" href="#blog-heading">↑ Back to top</a>
            </footer>
          </article>
        ))}
      </section>

      <aside className="blog-cta">
        <div className="cta-card">
          <h3>Ready to book or ask a question?</h3>
          <p className="lead">We’d love to help plan your session and answer any questions about packages, editing or delivery.</p>
          <a className="btn btn-primary" href="/contact">Contact us →</a>
          <a className="btn btn-ghost" href="/services" style={{ marginLeft: 10 }}>View Services</a>
        </div>
      </aside>
    </main>
  );
}