// src/pages/docs/2025/index.js

import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "./index.css";
import { useHistory, useLocation } from "react-router-dom";
import useParseMarkdown from "../../../hooks/useParseMarkdown";
import ErrorComponent from "../../../components/ErrorComponent";
import Sidebar from "../../../components/Sidebar";
import C4GT2025Description from "../../../components/C4gt2025Description";
import OrgDescription from "../../../components/OrgDescription";
import IssueDescription from "../../../components/IssueDescription";

function C4GT2025() {
  const location = useLocation();
  const history = useHistory();
  const { API_AUTH_KEY, API_BASE_URL } = useParseMarkdown();
  const [currentOrg, setCurrentOrg] = useState(null);
  const [currentIssue, setCurrentIssue] = useState(null);
  const [issueData, setIssueData] = useState(null);
  const [currentOrgData, setCurrentOrgData] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  const [error, setError] = useState(null);
  const year = 2025; // Define year variable

  useEffect(() => {
    setError(() => null);
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const ifOrg = urlParams.get("id") ? urlParams.get("id") : null;
    const ifIssue = urlParams.get("issue") ? urlParams.get("issue") : null;
    const newUrl = ifIssue
      ? `/docs/${year}?id=${ifOrg}&issue=${ifIssue}`
      : ifOrg
        ? `/docs/${year}?id=${ifOrg}`
        : `/docs/${year}/`;
    history.push(newUrl);
    if (ifIssue) setCurrentIssue(() => ifIssue);
    else setCurrentIssue(null);
    if (ifOrg) {
      setCurrentOrg(() => ifOrg);
      setCurrentTab("org");
    } else {
      setCurrentOrg(null);
      setCurrentTab("c4gt");
    }
    fetch(`${API_BASE_URL}/issues?year=${year}`, { // Modified API call
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
        } else {
          let issues = data?.issues;
          setIssueData(() => issues);
          if (ifOrg) {
            setCurrentOrgData(() => {
              let issue_data = issues?.filter((d, i) => {
                if (d.org_name == ifOrg) return d.issues;
                else return;
              });
              return issue_data;
            });
          } else setCurrentOrgData(null);
        }
      })
      .catch((error) => {
        setError(() => error);
      });
  }, []);

  useEffect(() => {
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const ifOrg = urlParams.get("id") ? urlParams.get("id") : null;
    const ifIssue = urlParams.get("issue") ? urlParams.get("issue") : null;
    if (ifIssue) setCurrentIssue(() => ifIssue);
    else setCurrentIssue(null);
    if (ifOrg) {
      setCurrentOrg(() => ifOrg);
      setCurrentOrgData(() => {
        let data = issueData?.filter((d, i) => {
          if (d.org_name == ifOrg) return d.issues;
          else return;
        });
        return data;
      });
      setCurrentTab("org");
    } else {
      setCurrentOrg(null);
      setCurrentOrgData(null);
      setCurrentTab("c4gt");
    }
  }, [location]);

  return (
    <>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <Layout>
          <div className="main-wrapper docs-wrapper docs-doc-page">
            <div className="sidebar-container">
              <aside className="theme-doc-sidebar-container sidebar-container-2025">
                <Sidebar
                  issueData={issueData}
                  currentTab={currentTab}
                  currentOrg={currentOrg}
                  currentIssue={currentIssue}
                  setCurrentIssue={setCurrentIssue}
                  setCurrentOrg={setCurrentOrg}
                  setCurrentTab={setCurrentTab}
                  year={`${year}`} // Pass the year prop here
                />
              </aside>
              <main className="main-container">
                {currentTab === "c4gt" ? (
                  <C4GT2025Description />
                ) : currentIssue != null ? (
                  <IssueDescription currentOrg={currentOrg} currentIssue={currentIssue} />
                ) : currentOrg != null ? (
                  <OrgDescription
                    currentIssue={currentIssue}
                    setCurrentIssue={setCurrentIssue}
                    currentOrg={currentOrg}
                    issueData={issueData}
                    currentOrgData={currentOrgData}
                  />
                ) : (
                  <></>
                )}
              </main>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default C4GT2025;