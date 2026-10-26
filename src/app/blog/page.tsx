import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./blog.css";

export const metadata: Metadata = {
  title: "Digital Marketing Insights",
  description:
    "Explore practical insights on SEO, social media, paid advertising, content marketing, websites, lead generation, and digital growth.",
};

const articles = [
  {
    category: "SEO",
    title: "A Practical Starting Point for Stronger Search Visibility",
    description:
      "Understand search intent, useful content, and the fundamentals that help people discover your business.",
    date: "Featured insight",
    readTime: "5 min read",
    image: "/images/hero-carousel/seo-visibility.webp",
    featured: true,
  },
  {
    category: "Paid Advertising",
    title: "Making Your Advertising Budget Work Harder",
    description:
      "Explore targeting, conversion tracking, and campaign improvements that connect spending with business goals.",
    date: "Marketing insights",
    readTime: "6 min read",
    image: "/images/hero-carousel/ad-performance.webp",
  },
  {
    category: "Website & Conversion",
    title: "Turning Website Visits Into Meaningful Enquiries",
    description:
      "See how focused landing pages, clear messaging, and simpler journeys can help visitors take action.",
    date: "Website strategy",
    readTime: "4 min read",
    image: "/images/hero-carousel/conversion-enquiries.webp",
  },
] as const;

const categories = [
  {
    number: "01",
    title: "SEO",
    description:
      "Search visibility, keyword research, technical SEO, search intent, and organic growth.",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "Content planning, audience engagement, platform trends, and brand communication.",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description:
      "Google Ads, Meta Ads, audience targeting, campaign planning, and conversion tracking.",
  },
  {
    number: "04",
    title: "Content Marketing",
    description:
      "Content strategy, blogs, audience-focused writing, optimization, and brand storytelling.",
  },
  {
    number: "05",
    title: "Website & Conversion",
    description:
      "Landing pages, user experience, calls to action, and conversion journeys.",
  },
  {
    number: "06",
    title: "Lead Generation",
    description:
      "Relevant prospects, better conversion journeys, and meaningful inquiry opportunities.",
  },
  {
    number: "07",
    title: "Branding & Creative",
    description:
      "Visual communication, creative strategy, and consistent digital branding.",
  },
] as const;

const benefits = [
  {
    number: "01",
    title: "Business-Focused",
    description:
      "We connect digital marketing activities with broader business objectives.",
  },
  {
    number: "02",
    title: "Practical",
    description:
      "Clear explanations help make marketing concepts and strategies easier to apply.",
  },
  {
    number: "03",
    title: "Audience-Focused",
    description:
      "Explore ways to understand your audience and communicate with the right people.",
  },
  {
    number: "04",
    title: "Data-Informed",
    description:
      "Where relevant, we consider performance data, search behavior, and measurable outcomes.",
  },
  {
    number: "05",
    title: "Continuously Updated",
    description:
      "Our insights can evolve alongside platforms, technology, and marketing practices.",
  },
] as const;

const faqs = [
  {
    question: "What topics does our blog cover?",
    answer:
      "Our blog covers SEO, social media marketing, paid advertising, content marketing, websites, lead generation, branding, marketing automation, and other digital marketing topics.",
  },
  {
    question: "Who is the blog for?",
    answer:
      "The content is intended for business owners, marketers, professionals, and anyone looking to understand digital marketing strategies and trends.",
  },
  {
    question: "How often are new articles published?",
    answer:
      "New articles can be published according to the company's content schedule.",
  },
  {
    question: "Can I suggest a topic for the blog?",
    answer:
      "Yes. You can contact our team with a digital marketing topic you would like us to explore.",
  },
  {
    question: "Can businesses get help implementing these strategies?",
    answer:
      "Yes. Explore our digital marketing services or contact our team to discuss your business requirements.",
  },
] as const;

export default function BlogPage() {
  return (
    <main id="main-content" className="blog-page">
      <section className="blog-hero">
        <div className="blog-container blog-hero__grid">
          <div className="blog-hero__copy">
            <span className="blog-eyebrow">
              <span className="blog-eyebrow__dot" />
              Digital Marketing Insights
            </span>
            <h1>
              Ideas, Strategies, and Insights to Help Your Business{" "}
              <span>Grow Digitally.</span>
            </h1>
            <p className="blog-hero__description">
              Digital marketing is constantly changing. New search behaviors,
              platforms, technologies, and customer expectations continue to
              shape how businesses connect with their audiences.
            </p>
            <p className="blog-hero__support">
              Explore our insights on SEO, social media, paid advertising,
              content marketing, websites, lead generation, and other digital
              marketing topics.
            </p>
            <div className="blog-actions">
              <Link className="blog-button blog-button--primary" href="#latest-articles">
                Explore Latest Articles <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="blog-hero__visual" aria-label="Digital marketing insight previews">
            <div className="blog-visual-orbit blog-visual-orbit--one" />
            <div className="blog-visual-orbit blog-visual-orbit--two" />
            <div className="blog-visual-label">IDEAS INTO ACTION</div>
            <div className="blog-visual-card blog-visual-card--main">
              <Image
                src="/images/hero-carousel/seo-visibility.webp"
                alt="Search visibility and SEO"
                width={620}
                height={420}
                priority
              />
              <span>01 / SEARCH VISIBILITY</span>
              <strong>Be discovered by the right audience.</strong>
            </div>
            <div className="blog-visual-card blog-visual-card--small">
              <Image
                src="/images/hero-carousel/conversion-enquiries.webp"
                alt="Website conversion and enquiries"
                width={360}
                height={240}
              />
              <span>02 / CONVERSION</span>
            </div>
            <span className="blog-visual-index">INSIGHTS · STRATEGY · GROWTH</span>
          </div>
        </div>
      </section>

      <section className="blog-section blog-featured" id="featured-insight">
        <div className="blog-container">
          <div className="blog-section-heading">
            <span className="blog-eyebrow">Featured Insight</span>
            <h2>Explore Our Latest Digital Marketing Insights</h2>
          </div>
          <article className="blog-featured-card">
            <div className="blog-featured-card__image">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                width={900}
                height={620}
              />
              <span className="blog-image-tag">EDITOR&apos;S PICK</span>
            </div>
            <div className="blog-featured-card__content">
              <span className="blog-card-category">{articles[0].category}</span>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].description}</p>
              <p className="blog-editorial-note">
                A practical introduction to building a stronger search
                foundation for your business.
              </p>
              <Link className="blog-text-link" href="#latest-articles">
                Read More <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="blog-section blog-latest" id="latest-articles">
        <div className="blog-container">
          <div className="blog-section-heading blog-section-heading--split">
            <div>
              <span className="blog-eyebrow">Latest Articles</span>
              <h2>Fresh Insights for Your Digital Growth</h2>
            </div>
            <p>
              Explore practical strategies, trends, and ideas across digital
              marketing.
            </p>
          </div>
          <div className="blog-article-grid">
            {articles.map((article, index) => (
              <article className="blog-article-card" key={article.title}>
                <div className="blog-article-card__image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={720}
                    height={480}
                  />
                  <span className="blog-image-number">
                    0{index + 1}
                  </span>
                </div>
                <div className="blog-article-card__body">
                  <div className="blog-article-meta">
                    <span className="blog-card-category">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <div className="blog-article-card__footer">
                    <span>{article.date}</span>
                    <Link
                      href="#contact"
                      aria-label={`Discuss ${article.title} with our team`}
                    >
                      Read More <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="blog-content-note">
            These are starter editorial previews. Replace them with published
            articles and individual article URLs when your blog content is ready.
          </p>
        </div>
      </section>

      <section className="blog-section blog-categories" id="blog-categories">
        <div className="blog-container">
          <div className="blog-section-heading">
            <span className="blog-eyebrow">Suggested Blog Categories</span>
            <h2>Explore What Matters to Your Business</h2>
            <p>Find ideas by the digital marketing topic you want to understand.</p>
          </div>
          <div className="blog-category-grid">
            {categories.map((category) => (
              <a
                className="blog-category-card"
                href="#latest-articles"
                key={category.number}
              >
                <span className="blog-category-card__number">{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="blog-category-card__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section blog-popular">
        <div className="blog-container">
          <div className="blog-section-heading blog-section-heading--split">
            <div>
              <span className="blog-eyebrow">Popular Reads</span>
              <h2>Topics Businesses Are Exploring</h2>
            </div>
            <p>
              Start with these useful introductions to visibility, advertising,
              and website conversion.
            </p>
          </div>
          <div className="blog-popular-grid">
            {articles.map((article, index) => (
              <Link
                className="blog-popular-card"
                href="#latest-articles"
                key={article.title}
              >
                <span>0{index + 1} / {article.category}</span>
                <h3>{article.title}</h3>
                <span className="blog-popular-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="blog-centered-action">
            <Link className="blog-button blog-button--outline" href="#latest-articles">
              Explore All Articles <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="blog-section blog-benefits">
        <div className="blog-container">
          <div className="blog-section-heading">
            <span className="blog-eyebrow">Why Read Our Blog?</span>
            <h2>Practical Insights, Not Just Marketing Jargon</h2>
          </div>
          <div className="blog-benefit-grid">
            {benefits.map((benefit) => (
              <article className="blog-benefit-card" key={benefit.number}>
                <span>{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section blog-faq" id="blog-faq">
        <div className="blog-container blog-faq__layout">
          <div className="blog-section-heading">
            <span className="blog-eyebrow">Blog FAQs</span>
            <h2>Questions Before You Dive In?</h2>
            <p>Quick answers about our articles and digital marketing content.</p>
          </div>
          <div className="blog-faq-list">
            {faqs.map((faq, index) => (
              <details className="blog-faq-item" key={faq.question}>
                <summary>
                  <span className="blog-faq-item__number">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <span className="blog-faq-item__icon" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-final-cta" id="contact">
        <div className="blog-container blog-final-cta__inner">
          <span className="blog-eyebrow">Have a Digital Marketing Question?</span>
          <h2>Can&apos;t find what you&apos;re looking for?</h2>
          <p>
            Tell us about your business, your challenge, or the digital
            marketing goal you&apos;re working towards.
          </p>
          <div className="blog-actions">
            <Link className="blog-button blog-button--light" href="/#contact">
              Contact Us <span aria-hidden="true">↗</span>
            </Link>
            <Link className="blog-button blog-button--glass" href="/services">
              Explore Our Services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}