import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../index.css";
import { useHistory, useLocation } from "react-router-dom";
import useParseMarkdown from "../../../../hooks/useParseMarkdown";
import ErrorComponent from "../../../../components/ErrorComponent";
import Sidebar from "../../../../components/Sidebar";
import OrgDescription from "../../../../components/OrgDescription";
import IssueDescription from "../../../../components/IssueDescription";

function C4GT2024() {
  const location = useLocation();
  const history = useHistory();
  const { API_AUTH_KEY, API_BASE_URL } = useParseMarkdown();
  const [currentOrg, setCurrentOrg] = useState(null);
  const [currentIssue, setCurrentIssue] = useState(null);
  const [issueData, setIssueData] = useState(null);
  const [currentOrgData, setCurrentOrgData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(() => null);
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const ifOrg = urlParams.get("id") ? urlParams.get("id") : null;
    const ifIssue = urlParams.get("issue") ? urlParams.get("issue") : null;
    const newUrl = ifIssue
      ? `/docs/2024/org?id=${ifOrg}&issue=${ifIssue}`
      : ifOrg
        ? `/docs/2024/org?id=${ifOrg}`
        : "/docs/2024/";
    history.push(newUrl);
    if (ifIssue) setCurrentIssue(() => ifIssue);
    else setCurrentIssue(null);
    if (ifOrg) setCurrentOrg(() => ifOrg);
    else setCurrentOrg(null);
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
    } else {
      setCurrentOrg(null);
      setCurrentOrgData(null);
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
              <aside className="theme-doc-sidebar-container sidebar-container-2024">
                <Sidebar
                  issueData={issueData}
                  currentTab={"org"}
                  currentOrg={currentOrg}
                  currentIssue={currentIssue}
                  setCurrentIssue={setCurrentIssue}
                  setCurrentOrg={setCurrentOrg}
                />
              </aside>
              <main className="main-container">
                {currentIssue != null ? (
                  <IssueDescription
                    currentOrg={currentOrg}
                    currentIssue={currentIssue}
                  />
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
export default C4GT2024;
