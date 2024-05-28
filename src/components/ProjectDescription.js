import React from "react";

function ProjectDescription() {
  return (
    <div className="container padding-top--md padding-bottom--lg" style={{ height: "60vh" }}>
              <div className="row">
                <div className="col width">
                  <div>
    <article>
      <nav
        className="theme-doc-breadcrumbs" style={{marginBottom:".4rem"}}
        aria-label="breadcrumbs"
      >
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <a
              className="breadcrumbs__link breadcrumbs-items"
              href="/"
            >
              🏠
            </a>
          </li>
          <li className="breadcrumbs__item breadcrumbs__item--active">
            <a
              className="breadcrumbs__link breadcrumbs-items"
              // href="/docs/2024/"
              style={{cursor:"pointer"}}
            >
              SamagraX
            </a>
          </li>
        </ul>
      </nav>
      <div className="theme-doc-markdown markdown">
        <header>
          <h1>SamagraX</h1>
        </header>
        <p>
          At SamagraX, we are building the next-gen, federated, privacy-aware,
          interoperable platforms that will impact the lives of millions of
          citizens across the country. We are constantly experimenting with
          open-source technologies and processes to create reusable technology
          components and deploy products at scale in the Indian governance
          ecosystem.
        </p>
      </div>
    </article>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ProjectDescription;
