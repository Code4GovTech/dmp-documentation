import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import ProjectDescription from "../../../../components/ProjectDescription";
import SubProjectDescription from "../../../../components/SubDescription";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import '../index.css';
// import { useLocation, useParams } from 'react-router-dom';

function C4GT2024() {
    const { siteConfig } = useDocusaurusContext();
  const API_BASE_URL = siteConfig.customFields.API_BASE_URL;
  const API_AUTH_KEY = siteConfig.customFields.API_AUTH_KEY;
  const [currentTab, setCurrentTab] = useState("description");
  const [currentIssue, setCurrentIssue] = useState(null);
  const [currentIssueData, setCurrentIssueData] = useState(null)
  const [issueData,setIssueData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [issueNumber,setIssueNumber] = useState(null);

  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("id")?urlParams.get("id"):"c4gt";
    setCurrentIssue(()=>product)
    fetch(`${API_BASE_URL}/issues`, {
        method: 'GET',
        headers:{
          'X-Secret-Key':API_AUTH_KEY,
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIssueData(()=>data)
      })
      .catch(error => {
        console.log("error",error.message);
      });
},[])
  // const { search } = useLocation();
  // const params = useParams();

  // useEffect(() => {
    // window.location.reload();
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const product = urlParams.get("id");
    // console.log(product)
  // }, [search,params]);

 
  return (
    <Layout>
      <div
        className="main-wrapper docs-wrapper docs-doc-page"
      >
        <div style={{width:"100%", display:"flex"}}>
          <aside className="theme-doc-sidebar-container sidebar-container-2024">
            <div className="sidebar-styles">
              <nav className="menu thin-scrollbar menu_styles">
                <ul className="theme-doc-sidebar-menu menu__list">
                  <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                    <div
                      className={`menu__link`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.location.href=`/docs/2024/`
                      }}
                    >
                      C4GT'24
                    </div>
                  </li>
                  {
                    issueData?.map((data,i)=>{
                      return  <li key={i}
                      className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item`}
                    >
                      <div
                        className={`menu__list-item-collapsible`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setCurrentIssue(()=>data?.org_name);
                          setSelectedProject(()=>null);
                          setIssueNumber(()=>null);
                          setCurrentTab(()=>"description");
                          setCurrentIssueData(()=>data?.issues)
                        }}
                      >
                        <div
                          className={`menu__link`}
                        >
                          {data?.org_name}
                        </div>
                        <button
                          aria-label={`Toggle the collapsible sidebar category ${data?.org_name}`}
                          type="button"
                          className="clean-btn menu__caret"
                        ></button>
                      </div>
                      {(currentIssue==data?.org_name) ? <ul
                        className="menu__list"
                        style={{
                          display: "block",
                          overflow: "visible",
                          height: "auto",
                          willChange: "height",
                          transition: "height 187ms ease-in-out 0s",
                        }}
                      >
                        {data?.issues?.map((d,i)=>{
                          return <li key={i} className="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-2 menu__list-item">
                          <div
                            className={`menu__link ${(currentTab == "subDescription" && selectedProject == d.name) ? "menu__link--active":""}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setCurrentTab(()=>"subDescription");
                              setSelectedProject(()=>d.name);
                              setIssueNumber(()=>d.issue_number);
                            }}
                          >
                           {d.name}
                          </div>
                        </li>
                        })}
                        
                      </ul>:<></>}
                    </li>
                    })
                  }
                 
                </ul>
              </nav>
            </div>
          </aside>
          <main
            style={{ height: "100%" }}
            className="main-container"
          >
            {(currentTab == "description"  && currentIssue!=null) ? <ProjectDescription currentIssue={currentIssue} currentIssueData={currentIssueData}/>:<></>}
            {currentTab == "subDescription" ?
                      <SubProjectDescription
                        selectedProject={selectedProject}
                        issueNumber={issueNumber}
                        currentIssue={currentIssue}
                      />:<></>}
          </main>
        </div>
      </div>
    </Layout>
  );
}
export default C4GT2024;
