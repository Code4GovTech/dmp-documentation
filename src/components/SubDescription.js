import React from "react";

function SubProjectDescription({ selectedProject }) {
  return (
    <div className="container padding-top--md padding-bottom--lg">
      <div className="row">
        <div className="col width">
          <div>
            <article>
              <div className="theme-doc-markdown markdown">
                <header>
                  <h1>SamagraX sample project {selectedProject}</h1>
                </header>
                <h2>Overview</h2>
                <p>
                  At SamagraX, we are building the next-gen, federated,
                  privacy-aware, interoperable platforms that will impact the
                  lives of millions of citizens across the country.
                </p>
                <h2>Weekly Tasks and Learnings</h2>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 style={{ fontSize: "32px" }}>Overall Project PR Table</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button style={{ padding: "4px 8px" }}>PR Summary</button>
                  </div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th align="left">PR Name</th>
                      <th align="left">Link</th>
                      <th align="left">Raised/Merged</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td align="left">Test name 1</td>
                      <td align="left">
                        <a href="/docs/2024">SamagraX sample project Link 1</a>
                      </td>
                      <td align="left">xyz</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td align="left">Test name 2</td>
                      <td align="left">
                        <a href="/docs/2024">SamagraX sample project Link 2</a>
                      </td>
                      <td align="left">xyz</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td align="left">Test name 3</td>
                      <td align="left">
                        <a href="/docs/2024">SamagraX sample project Link 3</a>
                      </td>
                      <td align="left">xyz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
        <div className="col col--3">
          <div
            className="table-container thin-scrollbar theme-doc-toc-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `70%` }}>
                70%
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Contributor Name</th>
                </tr>
                <tr>
                  <th>Mentor Name</th>
                </tr>
                <tr>
                  <th>Organisation</th>
                </tr>
              </tbody>
            </table>
            {/* <div><div>Contributor Name</div>
        <div>Mentor Name</div>
        <div>Organisation</div></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubProjectDescription;
