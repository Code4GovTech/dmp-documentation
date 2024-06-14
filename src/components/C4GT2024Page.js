import React from "react";

function C4GT2024Page() {
  return (
    <div
      className="container padding-top--md padding-bottom--lg"
      style={{ minHeight: "60vh" }}
    >
      <div className="row">
        <div className="col width">
          <div>
            <article>
              <nav
                className="theme-doc-breadcrumbs"
                style={{ marginBottom: ".4rem" }}
                aria-label="breadcrumbs"
              >
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link breadcrumbs-items" href="/">
                      🏠
                    </a>
                  </li>
                  <li className="breadcrumbs__item breadcrumbs__item--active">
                    <a
                      className="breadcrumbs__link breadcrumbs-items"
                      style={{ cursor: "pointer" }}
                    >
                      C4GT'24
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="theme-doc-markdown markdown">
                <header>
                  <h1>C4GT'24</h1>
                </header>
                <p>
                  C4GT Mentoring Program has been conceptualized as a summer
                  coding program to create a close-knit community that can build
                  and contribute to global digital public goods.
                </p>
                <ul>
                  <li>
                    An opportunity for college students and working
                    professionals in India to experience the GovTech space
                  </li>
                  <li>Organized annually over 2 months (July-August)</li>
                  <li>
                    There will be a set of diverse and engaging GovTech problem
                    statements every year for the participants to work on
                  </li>
                  <li>
                    Shortlisted contributors will receive mentorship from
                    leading practitioners in GovTech ecosystem
                  </li>
                </ul>
                <p>Thanks for being part of the community. 💚</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default C4GT2024Page;
