import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import ProjectDescription from "../../../../components/ProjectDescription";
import SubProjectDescription from "../../../../components/SubDescription";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../index.css";
import { useHistory, useLocation } from "react-router-dom";
import useParseMarkdown from "../../../../hooks/useParseMarkdown";

function C4GT2024() {
  const location = useLocation();
  const history = useHistory();
  const {API_AUTH_KEY,API_BASE_URL} = useParseMarkdown();
  const [currentTab, setCurrentTab] = useState("description");
  const [currentIssue, setCurrentIssue] = useState(null);
  const [issueData, setIssueData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [issueNumber, setIssueNumber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(()=>null);
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("id") ? urlParams.get("id") : "c4gt";
    setSelectedProject(() =>
      urlParams.get("issue") ? urlParams.get("issue") : null,
    );
    const newUrl = `/docs/2024/org?id=${product}`;
    history.push(newUrl);
    setCurrentIssue(() => product);
    fetch(`${API_BASE_URL}/issues`, {
      method: "GET",
      headers: {
        "X-Secret-Key": API_AUTH_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data?.message){
          throw new Error(`${data?.message}`);
        }
        else if(data?.error){
          throw new Error(`${data?.error}`);
        }
        else setIssueData(() => data);
      })
      .catch((error) => {
        setError(()=>error);
      });
  }, []);

  useEffect(() => {
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("id") ? urlParams.get("id") : "c4gt";
    setCurrentIssue(() => product);
  }, [location]);

  return (<>
  {error ? (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h3>{error.message}</h3>
      </div>
      ) : (
    <Layout>
      <div className="main-wrapper docs-wrapper docs-doc-page">
        <div style={{ width: "100%", display: "flex" }}>
          <aside className="theme-doc-sidebar-container sidebar-container-2024">
            <div className="sidebar-styles">
              <nav className="menu thin-scrollbar menu_styles">
                <ul className="theme-doc-sidebar-menu menu__list">
                  <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                    <div
                      className={`menu__link`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.location.href = `/docs/2024/`;
                      }}
                    >
                      C4GT'24
                    </div>
                  </li>
                  {issueData?.map((data, i) => {
                    return (
                      <li
                        key={i}
                        className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item ${currentIssue == data?.org_name ? "" : "menu__list-item--collapsed"}`}
                      >
                        <div
                          className={`menu__list-item-collapsible ${currentIssue == data?.org_name && selectedProject == null ? "menu__list-item-collapsible--active" : ""}`}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            const newUrl = `/docs/2024/org?id=${data?.org_name}`;
                            history.push(newUrl);
                            setCurrentIssue(() => data?.org_name);
                            setSelectedProject(() => null);
                            setIssueNumber(() => null);
                            setCurrentTab(() => "description");
                          }}
                        >
                          <div
                            className={`menu__link ${currentIssue == data?.org_name ? "menu__link--active" : ""}`}
                          >
                            {data?.org_name}
                          </div>
                          <button
                            aria-label={`Toggle the collapsible sidebar category ${data?.org_name}`}
                            type="button"
                            className="clean-btn menu__caret"
                          ></button>
                        </div>
                        {currentIssue == data?.org_name ? (
                          <ul
                            className="menu__list"
                            style={{
                              display: "block",
                              overflow: "visible",
                              height: "auto",
                              willChange: "height",
                              transition: "height 187ms ease-in-out 0s",
                            }}
                          >
                            {data?.issues?.map((d, i) => {
                              if (d?.name != null)
                                return (
                                  <li
                                    key={i}
                                    className="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-2 menu__list-item"
                                  >
                                    <div
                                      className={`menu__link ${currentTab == "subDescription" && selectedProject == d.name ? "menu__link--active" : ""}`}
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        const newUrl = `/docs/2024/org?id=${currentIssue}&issue=${d.name}`;
                                        history.push(newUrl);
                                        setCurrentTab(() => "subDescription");
                                        setSelectedProject(() => d.name);
                                        setIssueNumber(() => d.issue_number);
                                      }}
                                    >
                                      {d.name}
                                    </div>
                                  </li>
                                );
                              else <></>;
                            })}
                          </ul>
                        ) : (
                          <></>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>
          <main style={{ height: "100%" }} className="main-container">
            {currentTab == "description" && currentIssue != null ? (
              <ProjectDescription
                currentIssue={currentIssue}
                setCurrentTab={setCurrentTab}
                setIssueNumber={setIssueNumber}
                setSelectedProject={setSelectedProject}
                issueData={issueData}
              />
            ) : (
              <></>
            )}
            {currentTab == "subDescription" && selectedProject != null ? (
              <SubProjectDescription
                selectedProject={selectedProject}
                issueNumber={issueNumber}
                currentIssue={currentIssue}
              />
            ) : (
              <></>
            )}
          </main>
        </div>
      </div>
    </Layout>)}
    </>
  );
}
export default C4GT2024;
