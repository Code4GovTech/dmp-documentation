import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import C4GT2024Page from "../../../components/C4GT2024Page";
import ProjectDescription from "../../../components/ProjectDescription";
import SubProjectDescription from "../../../components/SubDescription";
import './index.css';
// import { useLocation, useParams } from 'react-router-dom';

function C4GT2024() {
  const [currentTab, setCurrentTab] = useState("c4gt");
  const [selectedProject, setSelectedProject] = useState(null);
  const [issueData,setIssueData] = useState(null)
  const [issueDescription,setIssueDescription] = useState('VedantKhairnar')

  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("id")?urlParams.get("id"):"c4gt";
    setCurrentTab(()=>product)
    fetch("https://api.dev.c4gt.samagra.io/api/issues", {
        method: 'GET',
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIssueData(()=>data.issues)
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
                      className={`menu__link ${currentTab == "c4gt" ? "menu__link--active" : ""}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentTab(()=>"c4gt");
                        setSelectedProject(()=>null);
                      }}
                    >
                      C4GT'24
                    </div>
                  </li>
                  {
                    issueData?.map((data,i)=>{
                      // const toggleButton = 
                      return  <li key={i}
                      className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item ${(currentTab != data?.org_name && selectedProject == null) ? "menu__list-item--collapsed" : ""}`}
                    >
                      <div
                        className={`menu__list-item-collapsible ${currentTab == data?.org_name ? "menu__list-item-collapsible--active":""}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setCurrentTab(()=>data?.org_name);
                          setSelectedProject(()=>null);
                          setIssueDescription(()=>data?.org_name)
                        }}
                      >
                        <div
                          className={`menu__link ${(currentTab == data?.org_name || selectedProject != null) ? "menu__link--active":""}`}
                        >
                          {data?.org_name}
                        </div>
                        <button
                          aria-label={`Toggle the collapsible sidebar category ${data?.org_name}`}
                          type="button"
                          className="clean-btn menu__caret"
                        ></button>
                      </div>
                      {(currentTab==data?.org_name || selectedProject!=null) ? <ul
                        className="menu__list"
                        style={{
                          display: "block",
                          overflow: "visible",
                          height: "auto",
                          willChange: "height",
                          transition: "height 187ms ease-in-out 0s",
                        }}
                      >
                        {data?.issues.map((d,i)=>{
                          return <li key={i} className="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-2 menu__list-item">
                          <div
                            className={`menu__link ${(currentTab == "subDescription" && selectedProject == d.repo+i) ? "menu__link--active":""}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setCurrentTab(()=>"subDescription");
                              setSelectedProject(()=>d.repo+i);
                            }}
                          >
                           {d.repo}
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
            {currentTab == "c4gt" ? <C4GT2024Page />:<></>}
            {currentTab == issueData?.[0]?.org_name ? <ProjectDescription issueDescription={issueDescription}/>:<></>}
            {currentTab == "subDescription" ?
                      <SubProjectDescription
                        selectedProject={selectedProject}
                      />:<></>}
          </main>
        </div>
      </div>
    </Layout>
  );
}
export default C4GT2024;
