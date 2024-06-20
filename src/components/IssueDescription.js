import React, { useEffect, useState } from "react";
import useParseMarkdown from "../hooks/useParseMarkdown";
import Markdown from "markdown-to-jsx";
import uncheckedBox from "/img/checkbox.png";
import checkedBox from "/img/tickedCheckbox.png";
import ErrorComponent from "./ErrorComponent";

function IssueDescription({ currentOrg, currentIssue }) {
  const { API_AUTH_KEY, API_BASE_URL } = useParseMarkdown();
  const [description, setDescription] = useState(null);
  const [isLearningsDropdown, setLearningsDropdown] = useState(0);
  const [isGoalsDropdown, setGoalssDropdown] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(() => null);
    fetch(`${API_BASE_URL}/v2/issues/${currentOrg}/${currentIssue}`, {
      method: "GET",
      headers: {
        "X-Secret-Key": API_AUTH_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.message) {
          throw new Error(`${data?.message}`);
        } else if (data?.error) {
          throw new Error(`${data?.error}`);
        } else setDescription(() => data);
      })
      .catch((error) => {
        setError(() => error);
      });
  }, [currentIssue]);

  return (
    <>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <div
          className="container padding-top--md padding-bottom--lg container-height"
        >
          {description && (
            <article>
              <nav
                className="theme-doc-breadcrumbs breadcrumbs-margin"
                aria-label="breadcrumbs"
              >
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link breadcrumbs-items" href="/">
                      🏠
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a
                      className="breadcrumbs__link breadcrumbs-items"
                      href={`/docs/2024/org?id=${currentOrg}`}
                    >
                      {currentOrg}
                    </a>
                  </li>
                  <li className="breadcrumbs__item breadcrumbs__item--active">
                    <a
                      className="breadcrumbs__link breadcrumbs-items cursor-pointer"
                    >
                      {description?.name}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="theme-doc-markdown markdown">
                <div className="header-layout">
                  <div>
                    <header
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <h1>{description?.name}</h1>
                      </div>
                      {description?.issue_url && (
                        <div>
                          <a href={description?.issue_url} target="_blank">
                            <img
                              src={"/img/link_icon.svg"}
                              width={32}
                              height={32}
                            />
                          </a>
                        </div>
                      )}
                    </header>
                    {description?.description && (
                      <>
                        <h2>Overview</h2>
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
                            style={{
                              width: `${description?.overall_progress}%`,
                              fontSize: "15px",
                            }}
                          />
                        </div>
                        <b>{description?.overall_progress + "%"}</b>
                      </>
                    )}
                    <table style={{ width: "100%" }}>
                      {description?.contributor.length != 0 && (
                        <tr>
                          <th>Contributor Name</th>
                          <td>
                            <a
                              href={`${description?.contributor[0]?.link}`}
                              target="_blank"
                            >
                              {description?.contributor[0]?.name}
                            </a>
                          </td>
                        </tr>
                      )}
                      {description?.mentor?.length != 0 && (
                        <>
                          <tr>
                            <th rowspan={description?.mentor?.length}>
                              Mentor Name
                            </th>
                            <td>
                              <a
                                href={`${description?.mentor[0]?.link}`}
                                target="_blank"
                              >
                                {description?.mentor[0]?.name}
                              </a>
                            </td>
                          </tr>
                          {description?.mentor?.length > 1 && (
                            <>
                              {description?.mentor?.map((d, i) => {
                                if (i != 0) {
                                  return (
                                    <tr>
                                      <td>
                                        <a href={`${d?.link}`} target="_blank">
                                          {d?.name}
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
                      {description?.org && (
                        <tr>
                          <th>Org Name</th>
                          <td>
                            <a href={description?.org?.link} target="_blank">
                              {description?.org?.name}
                            </a>
                          </td>
                        </tr>
                      )}
                    </table>
                  </div>
                </div>
                {description?.weekly_goals?.length > 0 && (
                  <div
                    className="markdown-body"
                    style={{ marginBottom: "16px" }}
                  >
                    <h2>Weekly Goals</h2>
                    {description?.weekly_goals?.map((d, i) => {
                      return (
                        <table className="fullwidth-table">
                          <tr>
                            <th>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  gap: "48px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  if (isGoalsDropdown == i)
                                    setGoalssDropdown(null);
                                  else setGoalssDropdown(i);
                                }}
                              >
                                <div>Week {d.week}</div>
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "16px",
                                    alignItems: "center",
                                  }}
                                >
                                  <div>{d?.progress}%</div>
                                  {d?.progress == 100 && (
                                    <img
                                      src={"/img/GreenCheckbox.png"}
                                      alt="checkbox"
                                      width={20}
                                      height={20}
                                    />
                                  )}
                                  <img
                                    src={"/img/right-arrow-icon.svg"}
                                    alt="arrow-icon"
                                    style={{
                                      transform:
                                        isGoalsDropdown == i
                                          ? "rotate(90deg)"
                                          : "none",
                                    }}
                                    width={20}
                                    height={20}
                                  />
                                </div>
                              </div>
                            </th>
                          </tr>
                          {d?.tasks?.length > 0 && isGoalsDropdown == i && (
                            <>
                              {d?.tasks?.map((t, index) => {
                                return (
                                  <tr
                                    key={index}
                                    style={{ backgroundColor: "none" }}
                                  >
                                    <td align="left">
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div>{`${index + 1}. ${t?.content}`}</div>
                                        <div>
                                          <img
                                            src={
                                              t.checked
                                                ? checkedBox
                                                : uncheckedBox
                                            }
                                            alt="checkbox"
                                            width={20}
                                            height={20}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          )}
                        </table>
                      );
                    })}
                  </div>
                )}
                {description?.weekly_learnings?.length > 0 && (
                  <div
                    className="markdown-body"
                    style={{ marginBottom: "16px" }}
                  >
                    <h2>Weekly Learnings</h2>
                    {description?.weekly_learnings?.map((d, i) => {
                      return (
                        <table className="fullwidth-table">
                          <tr>
                            <th>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  if (isLearningsDropdown == i)
                                    setLearningsDropdown(null);
                                  else setLearningsDropdown(i);
                                }}
                              >
                                <div>Week {d.week}</div>
                                <div>
                                  <img
                                    src={"/img/right-arrow-icon.svg"}
                                    alt="arrow-icon"
                                    style={{
                                      transform:
                                        isLearningsDropdown == i
                                          ? "rotate(90deg)"
                                          : "none",
                                    }}
                                    width={20}
                                    height={20}
                                  />
                                </div>
                              </div>
                            </th>
                          </tr>
                          {d.content && isLearningsDropdown == i && (
                            <tr style={{ backgroundColor: "none" }}>
                              <td align="left">
                                {d.content.match(/<ul>[\s\S]*?<\/ul>/) ? <Markdown>{d.content.match(/<ul>[\s\S]*?<\/ul>/)[0]}</Markdown> : <Markdown>{d.content}</Markdown>}
                              </td>
                            </tr>
                          )}
                        </table>
                      );
                    })}
                  </div>
                )}
                {description?.pr_details.length > 0 && (
                  <>
                    <h2 style={{ fontSize: "32px" }}>
                      Overall Project PR Table
                    </h2>
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
                  </>
                )}
              </div>
            </article>
          )}
        </div>
      )}
    </>
  );
}

export default IssueDescription;
