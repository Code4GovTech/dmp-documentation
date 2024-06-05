import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function SubProjectDescription({ selectedProject,issueNumber, currentIssue }) {
  const [description, setDescription] = useState(null);
  const { siteConfig } = useDocusaurusContext();
  const API_BASE_URL = siteConfig.customFields.API_BASE_URL;
  const API_AUTH_KEY = siteConfig.customFields.API_AUTH_KEY;

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/issues/${currentIssue}/${issueNumber}`,
      {
        method: "GET",
        headers: {
          "X-Secret-Key": API_AUTH_KEY,
        },
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDescription(() => data);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }, [selectedProject]);

  const parseMarkdown = (markdown) => {
    markdown = markdown.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    markdown = markdown.replace(/^## (.*$)/gim, `<h2>$1</h2>`);
    markdown = markdown.replace(/^# (.*$)/gim, `<h2 class="h2-font">$1</h2>`);

    markdown = markdown.replace(/\*\*(.*)\*\*/gim, "<b>$1</b>");
    markdown = markdown.replace(/\*(.*)\*/gim, "<i>$1</i>");

    markdown = markdown.replace(
      /- \[ \] (.*$)/gim,
      '<input type="checkbox" disabled> $1',
    );
    markdown = markdown.replace(
      /- \[x\] (.*$)/gim,
      '<input type="checkbox" checked disabled> $1',
    );

    markdown = markdown.replace(/^\s*-\s+(.*$)/gim, "<li>$1</li>");
    markdown = markdown.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");
  
  markdown = markdown.replace(/\r\n\r\n/g, "");
  markdown = markdown.replace(/(?:\r\n|\r|\n)/g, "<br>");

    // markdown = markdown.replace(/\n/gim, "<br>");
    console.log(markdown)

    return markdown.trim();
  };

  return (
    <div className="container padding-top--md padding-bottom--lg" style={{minHeight:"60vh"}}>
      {description && (
        <article>
          <div className="theme-doc-markdown markdown">
            <div className="header-layout"
            >
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
                {description?.description && <><h2 style={{fontSize:"32px"}}>Overview</h2>
                <p>
                  {description?.description}
                </p></>}
              </div>
              <div
                className="table-container thin-scrollbar theme-doc-toc-desktop right-side-table"
                style={{ minWidth: "300px" }}
              >
                {description?.overall_progress != null && <><div
                  className="progress-bar-container"
                  style={{ maxWidth: "200px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${description?.overall_progress}%` }}
                  >{description?.overall_progress + "%"}
                    </div>
                    
                  
                </div>
                {/* <div>{description?.overall_progress + "%"}</div> */}
                </>}
                <table style={{ width: "100%" }}>
                  {description?.contributor_name && <tr>
                    <th>Contributor Name</th>
                    <td>
                      <a href={`https://github.com/${description?.contributor_name}`} target="_blank">{description?.contributor_name}</a>
                    </td>
                  </tr>}
                  {description?.mentor_name.length!=0 && <><tr>
                    <th rowspan={description?.mentor_name.length}>
                      Mentor Name
                    </th>
                    <td>
                      <a href={`https://github.com/${description?.mentor_name[0]}`} target="_blank">{description?.mentor_name[0]}</a>
                    </td>
                  </tr>
                  {description?.mentor_name.length > 1 && (
                    <>
                      {description?.mentor_name?.map((d, i) => {
                        if (i != 0) {
                          return (
                            <tr>
                              <td>
                                <a href={`https://github.com/${d}`} target="_blank">{d}</a>
                              </td>
                            </tr>
                          );
                        } else return <></>;
                      })}
                    </>
                  )}</>}
                  {description?.org_name && <tr>
                    <th>Org Name</th>
                    <td>
                      <a href={description?.org_link} target="_blank">
                        {description?.org_name}
                      </a>
                    </td>
                  </tr>}
                </table>
              </div>
            </div>
            <div className="markdown-body" style={{marginBottom:"16px"}}>
              {description?.weekly_goals_html && <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(description?.weekly_goals_html),
                }}
              />}
              {/* {parseMarkdown(description?.weekly_goals_html)} */}
            </div>
            <div className="markdown-body" style={{marginBottom:"16px"}}>
              {description?.weekly_learnings_html && <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(description?.weekly_learnings_html),
                }}
              />}
            </div>
            <h2 style={{fontSize:"32px"}}>Overall Project PR Table</h2>
            <table style={{ width: "100%",display:"table" }}>
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
                        <a href={tdata.link} target="_blank">{tdata.link}</a>
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
