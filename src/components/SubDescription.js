import React, { useEffect, useState } from "react";
import useParseMarkdown from "../hooks/useParseMarkdown";

function SubProjectDescription({ selectedProject, issueNumber, currentIssue }) {
  const {weeklyGoals, weeklyLearnings,API_AUTH_KEY,API_BASE_URL} = useParseMarkdown();
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(()=>null);
    fetch(`${API_BASE_URL}/issues/${currentIssue}/${issueNumber}`, {
      method: "GET",
      headers: {
        "X-Secret-Key": API_AUTH_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDescription(() => data);
      })
      .catch((error) => {
        setError(()=>error)
      });
  }, [selectedProject]);

  return (<>
    {error ? 
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <p>{error.message}</p>
          <button onClick={() => {window?.history.back()
            window?.location?.reload()
          }}>Back</button>
        </div>
      : <div
      className="container padding-top--md padding-bottom--lg"
      style={{ minHeight: "60vh" }}
    >
      {description && (
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
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link breadcrumbs-items" href={`/docs/2024/org?id=${currentIssue}`}>
                      {currentIssue}
                    </a>
                  </li>
                  <li className="breadcrumbs__item breadcrumbs__item--active">
                    <a
                      className="breadcrumbs__link breadcrumbs-items"
                      style={{ cursor: "pointer" }}
                    >
                      {selectedProject}
                    </a>
                  </li>
                </ul>
              </nav>
          <div className="theme-doc-markdown markdown">
            <div className="header-layout">
              <div>
                <header
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div>
                    <h1>{selectedProject}</h1>
                  </div>
                  <div>
                    <a href={description?.issue_url} target="_blank">
                      <img src={"/img/link_icon.svg"} width={32} height={32} />
                    </a>
                  </div>
                </header>
                {description?.description && (
                  <>
                    <h2 style={{ fontSize: "32px" }}>Overview</h2>
                    <p>{description?.description}</p>
                  </>
                )}
              </div>
              <div
                className="table-container thin-scrollbar theme-doc-toc-desktop right-side-table"
                style={{ minWidth: "300px" }}
              >
                {description?.overall_progress != null && (
                  <>
                    <div
                      className="progress-bar-container"
                      style={{ maxWidth: "200px" }}
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${description?.overall_progress}%` }}
                      >
                        {description?.overall_progress > 0
                          ? description?.overall_progress + "%"
                          : ""}
                      </div>
                    </div>
                  </>
                )}
                <table style={{ width: "100%" }}>
                  {description?.contributor_name && (
                    <tr>
                      <th>Contributor Name</th>
                      <td>
                        <a
                          href={`https://github.com/${description?.contributor_name}`}
                          target="_blank"
                        >
                          {description?.contributor_name}
                        </a>
                      </td>
                    </tr>
                  )}
                  {description?.mentor_name?.length != 0 && (
                    <>
                      <tr>
                        <th rowspan={description?.mentor_name?.length}>
                          Mentor Name
                        </th>
                        <td>
                          <a
                            href={`https://github.com/${description?.mentor_name[0]}`}
                            target="_blank"
                          >
                            {description?.mentor_name[0]}
                          </a>
                        </td>
                      </tr>
                      {description?.mentor_name?.length > 1 && (
                        <>
                          {description?.mentor_name?.map((d, i) => {
                            if (i != 0) {
                              return (
                                <tr>
                                  <td>
                                    <a
                                      href={`https://github.com/${d}`}
                                      target="_blank"
                                    >
                                      {d}
                                    </a>
                                  </td>
                                </tr>
                              );
                            } else return <></>;
                          })}
                        </>
                      )}
                    </>
                  )}
                  {description?.org_name && (
                    <tr>
                      <th>Org Name</th>
                      <td>
                        <a href={description?.org_link} target="_blank">
                          {description?.org_name}
                        </a>
                      </td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
            <div className="markdown-body" style={{ marginBottom: "16px" }}>
              {description?.weekly_goals_html && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: weeklyGoals(description?.weekly_goals_html),
                  }}
                />
              )}
            </div>
            <div className="markdown-body" style={{ marginBottom: "16px" }}>
              {description?.weekly_learnings_html && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: weeklyLearnings(
                      description?.weekly_learnings_html,
                    ),
                  }}
                />
              )}
            </div>
            <h2 style={{ fontSize: "32px" }}>Overall Project PR Table</h2>
            <table className="fullwidth-table">
              <thead>
                <tr>
                  <th align="left">Week</th>
                  <th align="left">PR Name</th>
                  <th align="left">Link</th>
                  <th align="left">Status</th>
                </tr>
              </thead>
              <tbody>
                {description?.pr_details?.map((tdata, i) => {
                  return (
                    <tr key={i}>
                      <td align="left">{tdata.week}</td>
                      <td align="left">{tdata.name}</td>
                      <td align="left">
                        <a href={tdata.link} target="_blank">
                          {tdata.link}
                        </a>
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
    </div>}</>
  );
}

export default SubProjectDescription;
