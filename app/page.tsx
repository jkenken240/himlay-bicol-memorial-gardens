"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Garden Lawn Lots",
    text: "A peaceful, landscaped resting place with clean pathways, native greenery, and thoughtful long-term care.",
    icon: "garden",
  },
  {
    number: "02",
    title: "Family Estate Lots",
    text: "A more private family space designed so generations can remain close in a serene garden setting.",
    icon: "estate",
  },
  {
    number: "03",
    title: "Memorial & Interment Care",
    text: "Gentle, coordinated support for the practical details families need during a difficult time.",
    icon: "care",
  },
  {
    number: "04",
    title: "Pre-need Planning",
    text: "Plan ahead at your own pace, understand your options clearly, and protect loved ones from rushed decisions.",
    icon: "plan",
  },
];

const faqs = [
  {
    q: "Can we reserve a memorial lot in advance?",
    a: "Yes. Himlay is being planned to support both immediate needs and advance family planning. Final reservation terms will be discussed personally once the development details are confirmed.",
  },
  {
    q: "Will installment plans be available?",
    a: "Flexible payment options are part of the proposed offering. The team will prepare a clear quotation based on the lot type, payment preference, and final approved price list.",
  },
  {
    q: "Where exactly in Bicol is the memorial garden?",
    a: "The development is planned within the Bicol Region. The exact site, visiting hours, and opening schedule will be published after the owners complete the final location announcement.",
  },
  {
    q: "Can our family schedule a private consultation?",
    a: "Yes. Use the inquiry form below and choose either a phone call, text message, or in-person site consultation as your preferred next step.",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top" aria-label="Himlay Bicol Memorial Gardens home">
      <span className="brand-symbol" aria-hidden="true">
        <span className="brand-sun" />
        <span className="brand-hill brand-hill-one" />
        <span className="brand-hill brand-hill-two" />
      </span>
      <span>
        <strong>HIMLAY</strong>
        <small>Bicol Memorial Gardens</small>
      </span>
    </a>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "garden") {
    return <span className="service-glyph"><i className="leaf leaf-left" /><i className="leaf leaf-right" /><b /></span>;
  }
  if (type === "estate") {
    return <span className="service-glyph estate-glyph"><i /><i /><i /></span>;
  }
  if (type === "care") {
    return <span className="service-glyph care-glyph"><i>+</i></span>;
  }
  return <span className="service-glyph plan-glyph"><i /><b>✓</b></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main id="top">
      <header className="site-header">
        <BrandMark />
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <b>{menuOpen ? "Close" : "Menu"}</b>
        </button>
        <nav id="main-menu" className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a href="#story" onClick={() => setMenuOpen(false)}>Our vision</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Memorial options</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Location</a>
          <a className="nav-cta" href="#inquire" onClick={() => setMenuOpen(false)}>Request a quotation</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="A peaceful memorial garden in Bicol at sunrise" />
        <div className="hero-shade" />
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> A new place of remembrance in Bicol</p>
          <h1 id="hero-title">A place of peace,<br /><em>prepared with care.</em></h1>
          <p className="hero-copy">A thoughtfully planned memorial garden where Bicolano families can remember, reflect, and stay close to the people they love.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#inquire">Request a quotation <span>↗</span></a>
            <a className="text-link light-link" href="#services">Explore memorial options <span>↓</span></a>
          </div>
        </div>
        <div className="hero-location">
          <span className="location-pin" aria-hidden="true" />
          <span><small>Planned location</small><strong>Bicol Region, Philippines</strong></span>
        </div>
        <a className="scroll-cue" href="#story" aria-label="Scroll to our vision"><span>Scroll to discover</span><i>↓</i></a>
      </section>

      <section className="promise-band" aria-label="Our promise">
        <p>Payapang pahingahan</p><i>✦</i><p>Maalagang paghahanda</p><i>✦</i><p>A lasting place for family</p>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-copy reveal-copy">
          <p className="eyebrow"><span /> Our vision</p>
          <h2>More than a resting place.<br /><em>A garden for every memory.</em></h2>
          <p className="lead">Himlay is envisioned as a peaceful memorial garden made for the families of Bicol—open, green, thoughtfully maintained, and welcoming in every season.</p>
          <p>We believe planning for remembrance should feel clear and humane. From choosing a memorial lot to arranging a family visit, every conversation begins with patience, dignity, and honest guidance.</p>
          <a className="text-link" href="#inquire">Speak with a care guide <span>↗</span></a>
        </div>
        <div className="story-visual" aria-hidden="true">
          <div className="photo-frame photo-frame-main">
            <div className="chapel-image" />
          </div>
          <div className="sun-medallion"><span>Hope</span><strong>∞</strong><span>Home</span></div>
          <div className="stone-card">
            <span className="stone-mark" />
            <p>Designed for quiet moments, meaningful visits, and memories that stay.</p>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow light"><span /> Proposed memorial services</p>
            <h2>Care for today.<br /><em>Peace of mind for tomorrow.</em></h2>
          </div>
          <p>Clear options, compassionate guidance, and a place your family will be proud to return to.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title} tabIndex={0}>
              <div className="service-top"><small>{service.number}</small><ServiceIcon type={service.icon} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#inquire" aria-label={`Ask about ${service.title}`}>Ask about this option <span>↗</span></a>
            </article>
          ))}
        </div>
        <p className="services-note">Initial service concept · Final availability and pricing will be confirmed by the owners.</p>
      </section>

      <section className="planning section-pad">
        <div className="planning-image-wrap">
          <div className="planning-image" role="img" aria-label="A Filipino family speaking with a memorial planning adviser" />
          <div className="floating-note"><span>01</span><p><strong>No pressure.</strong> Ask questions at your own pace.</p></div>
        </div>
        <div className="planning-copy">
          <p className="eyebrow"><span /> Planning with compassion</p>
          <h2>You do not have to make every decision <em>all at once.</em></h2>
          <p className="lead">A respectful conversation can make the future feel lighter. Our proposed care process keeps every step simple and personal.</p>
          <ol>
            <li><span>1</span><div><strong>Tell us what your family needs</strong><p>Immediate need, future planning, or simply a question—we will start where you are.</p></div></li>
            <li><span>2</span><div><strong>Receive clear options</strong><p>Compare lot types, possible payment plans, and the services included.</p></div></li>
            <li><span>3</span><div><strong>Visit when you are ready</strong><p>Arrange a private consultation and future site viewing with no obligation.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-map" aria-hidden="true">
          <div className="map-contours map-one" />
          <div className="map-contours map-two" />
          <div className="map-pin-large"><span className="brand-symbol mini"><span className="brand-sun" /><span className="brand-hill brand-hill-one" /><span className="brand-hill brand-hill-two" /></span></div>
          <span className="map-label label-north">N</span>
          <span className="map-label label-bicol">BICOL REGION</span>
        </div>
        <div className="visit-copy">
          <p className="eyebrow light"><span /> Rooted in Bicol</p>
          <h2>Close to home.<br /><em>Made for home.</em></h2>
          <p>Surrounded by the natural character of Bicol, Himlay is planned as an accessible and peaceful place for families to visit—not only on anniversaries, but whenever remembrance calls.</p>
          <div className="location-status"><span>Location announcement</span><strong>Exact municipality coming soon</strong><small>Join the inquiry list to receive site visit details.</small></div>
          <a className="button button-cream" href="#inquire">Ask about the location <span>↗</span></a>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="faq-heading">
          <p className="eyebrow"><span /> Helpful answers</p>
          <h2>Questions families<br /><em>often ask.</em></h2>
          <p>You can ask us anything. Planning ahead should feel understandable, never uncomfortable.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.q}<i>+</i></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="inquiry section-pad" id="inquire">
        <div className="inquiry-intro">
          <p className="eyebrow light"><span /> Private inquiry</p>
          <h2>Let us help you find the <em>right memorial option.</em></h2>
          <p>Share only what you are comfortable sharing. A care guide can explain the proposed options, prepare an initial quotation, or arrange a private conversation.</p>
          <div className="privacy-note"><span>♡</span><p><strong>Your inquiry will be treated with care.</strong><br />No pressure. No public sharing of your information.</p></div>
        </div>
        <div className="form-card">
          {submitted ? (
            <div className="form-success" role="status">
              <span>✓</span>
              <p className="eyebrow"><i /> Inquiry prepared</p>
              <h3>Thank you for reaching out.</h3>
              <p>This website is an initial concept. Once the owners connect their official phone or email, the care team can receive this request and contact you privately.</p>
              <button type="button" className="button button-green" onClick={() => setSubmitted(false)}>Send another inquiry <span>↗</span></button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-head"><span>Quotation &amp; questions</span><small>Step 1 of 1</small></div>
              <div className="form-row">
                <label>Full name<input required name="name" autoComplete="name" placeholder="Juan Dela Cruz" /></label>
                <label>Mobile number<input required name="phone" type="tel" autoComplete="tel" placeholder="09XX XXX XXXX" /></label>
              </div>
              <div className="form-row">
                <label>Email address <small>Optional</small><input name="email" type="email" autoComplete="email" placeholder="juan@email.com" /></label>
                <label>City or municipality<input required name="city" autoComplete="address-level2" placeholder="Your location in Bicol" /></label>
              </div>
              <label>What can we help you with?
                <select required name="interest" defaultValue="">
                  <option value="" disabled>Select a memorial option</option>
                  <option>Garden lawn lot</option>
                  <option>Family estate lot</option>
                  <option>Immediate memorial need</option>
                  <option>Advance planning</option>
                  <option>Site visit or location question</option>
                  <option>General question</option>
                </select>
              </label>
              <fieldset>
                <legend>How should we contact you?</legend>
                <label className="radio"><input type="radio" name="contact" value="call" defaultChecked /><span />Phone call</label>
                <label className="radio"><input type="radio" name="contact" value="text" /><span />Text message</label>
                <label className="radio"><input type="radio" name="contact" value="email" /><span />Email</label>
              </fieldset>
              <label>Your question or request <small>Optional</small><textarea name="message" rows={3} placeholder="Tell us what you would like to know, including your preferred lot or payment arrangement." /></label>
              <label className="consent"><input required type="checkbox" /><span />I agree to be contacted privately about this inquiry.</label>
              <button className="button button-green form-submit" type="submit">Prepare my inquiry <span>↗</span></button>
              <p className="demo-disclaimer">Concept form for owner review. Official contact delivery will be connected before launch.</p>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <BrandMark compact />
          <p>A peaceful place for memory, family, and the stories that remain.</p>
          <div className="footer-links"><a href="#story">Our vision</a><a href="#services">Memorial options</a><a href="#visit">Location</a><a href="#inquire">Inquiry</a></div>
          <a className="footer-cta" href="#inquire">Plan a private conversation <span>↗</span></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Himlay Bicol Memorial Gardens</span><span>Initial business concept · Details subject to owner approval</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
