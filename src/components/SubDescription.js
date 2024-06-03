import React, { useEffect, useState } from "react";

function SubProjectDescription({ selectedProject }) {
  const [description, setDescription] = useState(null);
  useEffect(() => {
    fetch(`https://api.dev.c4gt.samagra.io/issues/VedantKhairnar/1`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDescription(() => data);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }, []);
  return (
    <div className="container padding-top--md padding-bottom--lg">
      {description && (
        <article>
          <div className="theme-doc-markdown markdown">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "28px",
              }}
            >
              <div>
                <header
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div>
                    <h1>{selectedProject}</h1>
                  </div>
                  <div>
                    <a href={description?.issue_url}>
                      <img src={"/img/link_icon.svg"} width={32} height={32} />
                    </a>
                  </div>
                </header>
                <h2 style={{ fontSize: "32px" }}>Overview</h2>
                <p>{description?.description}</p>

                {/* <iframe
        src={description?.weekly_goals_html}
        title="Example Iframe"
        width="600"
        height="400"
        style={{ border: '1px solid black' }}
        allowFullScreen
      ></iframe> */}
              </div>
              <div
                className="table-container thin-scrollbar theme-doc-toc-desktop right-side-table"
              >
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${description?.overall_progress}%` }}
                  >
                    {description?.overall_progress + "%"}
                  </div>
                </div>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <th>{description?.contributor_name}</th>
                    </tr>
                    <tr>
                      <th>{description?.name}</th>
                    </tr>
                    <tr>
                      <th>{description?.org_name}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h2>Weekly Tasks and Learnings</h2>
            <ul>
              <li>
                <a href={description?.weekly_goals_html}>
                  {description?.weekly_goals_html}
                </a>
              </li>
              <li>
                <a href={description?.weekly_learnings_html}>
                  {description?.weekly_learnings_html}
                </a>
              </li>
            </ul>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2 style={{ fontSize: "32px" }}>Overall Project PR Table</h2>
              {/* <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button style={{ padding: "4px 8px" }}>PR Summary</button>
                  </div> */}
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th align="left">PR Name</th>
                  <th align="left">Link</th>
                  <th align="left">Status</th>
                </tr>
              </thead>
              <tbody>
                {description?.pr_details?.pr_details?.map((tdata, i) => {
                  return (
                    <tr key={i}>
                      <td align="left">{tdata.name}</td>
                      <td align="left">
                        <a href={tdata.link}>{tdata.link}</a>
                      </td>
                      <td align="left">{tdata.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      )}
    </div>
  );
}

export default SubProjectDescription;
