import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "./index.css";
import useParseMarkdown from "../../../hooks/useParseMarkdown";
import ErrorComponent from "../../../components/ErrorComponent";
import Sidebar from "../../../components/Sidebar";
import C4GT2024Description from "../../../components/C4gt2024Description";

function C4GT2024() {
  const { API_AUTH_KEY, API_BASE_URL } = useParseMarkdown();
  const [issueData, setIssueData] = useState(null);
  const [error, setError] = useState(null);
  const [currentOrg, setCurrentOrg] = useState(null);
  const [currentIssue, setCurrentIssue] = useState(null);

  useEffect(() => {
    setError(() => null);
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
        } else setIssueData(() => data?.issues);
      })
      .catch((error) => {
        setError(() => error);
      });
  }, []);

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
                  currentTab={"c4gt"}
                  currentOrg={currentOrg}
                  currentIssue={currentIssue}
                  setCurrentIssue={setCurrentIssue}
                  setCurrentOrg={setCurrentOrg}
                />
              </aside>
              <main className="main-container">
                <C4GT2024Description />
              </main>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}
export default C4GT2024;
