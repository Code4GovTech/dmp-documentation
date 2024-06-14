import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import C4GT2024Page from "../../../components/C4GT2024Page";
import "./index.css";
import useParseMarkdown from "../../../hooks/useParseMarkdown";

function C4GT2024() {
  const {API_AUTH_KEY,API_BASE_URL} = useParseMarkdown();
  const [currentTab, setCurrentTab] = useState("c4gt");
  const [issueData, setIssueData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(()=>null);
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
        setError(() => error);
      });
  }, []);

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
                        className={`menu__link ${currentTab == "c4gt" ? "menu__link--active" : ""}`}
                        style={{ cursor: "pointer" }}
                      >
                        C4GT'24
                      </div>
                    </li>
                    {issueData == null ? (
                      <></>
                    ) : (
                      issueData?.map((data, i) => {
                        return (
                          <li
                            key={i}
                            className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item menu__list-item--collapsed`}
                          >
                            <div
                              className={`menu__list-item-collapsible`}
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                window.location.href = `/docs/2024/org?id=${data?.org_name}`;
                              }}
                            >
                              <div className={`menu__link`}>
                                {data?.org_name}
                              </div>
                              <button
                                aria-label={`Toggle the collapsible sidebar category ${data?.org_name}`}
                                type="button"
                                className="clean-btn menu__caret"
                              ></button>
                            </div>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </nav>
              </div>
            </aside>
            <main style={{ height: "100%" }} className="main-container">
              {currentTab == "c4gt" ? <C4GT2024Page /> : <></>}
            </main>
          </div>
        </div>
    </Layout>)}
    </>
  );
}
export default C4GT2024;
