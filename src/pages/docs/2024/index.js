import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import C4GT2024Page from "../../../components/C4GT2024Page";
import ProjectDescription from "../../../components/ProjectDescription";
import SubProjectDescription from "../../../components/SubDescription";
// import { useLocation, useParams } from 'react-router-dom';

function C4GT2024() {
  const [currentTab, setCurrentTab] = useState("c4gt");
  const [selectedProject, setSelectedProject] = useState(null);
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
        // style={{ height: "60vh" }}
      >
        <div className="docPage_node_modules-@docusaurus-theme-classic-lib-next-theme-DocPage-styles-module" style={{width:"100%", display:"flex"}}>
          <aside className="theme-doc-sidebar-container docSidebarContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-DocPage-styles-module">
            <div className="sidebar_node_modules-@docusaurus-theme-classic-lib-next-theme-DocSidebar-styles-module">
              <nav className="menu thin-scrollbar menu_node_modules-@docusaurus-theme-classic-lib-next-theme-DocSidebar-styles-module">
                <ul className="theme-doc-sidebar-menu menu__list">
                  <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                    <div
                      className={`menu__link ${currentTab == "c4gt" && "menu__link--active"}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentTab("c4gt");
                        setSelectedProject(null);
                      }}
                    >
                      C4GT'24
                    </div>
                  </li>

                  <li
                    className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item ${currentTab != "description" && selectedProject == null && "menu__list-item--collapsed"}`}
                  >
                    <div
                      className={`menu__list-item-collapsible ${currentTab == "description" && "menu__list-item-collapsible--active"}`}
                      onClick={() => {
                        setCurrentTab("description");
                        setSelectedProject(null);
                      }}
                    >
                      <div
                        className={`menu__link ${(currentTab == "description" || selectedProject != null) && "menu__link--active"}`}
                        style={{ cursor: "pointer" }}
                      >
                        SamagraX
                      </div>
                      <button
                        aria-label="Toggle the collapsible sidebar category 'SamagraX'"
                        type="button"
                        className="clean-btn menu__caret"
                      ></button>
                    </div>
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
                      <li className="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-2 menu__list-item">
                        <div
                          className={`menu__link ${currentTab == "subDescription" && selectedProject == "1" && "menu__link--active"}`}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setCurrentTab("subDescription");
                            setSelectedProject("1");
                          }}
                        >
                          SamagraX sample project 1
                        </div>
                      </li>
                      <li className="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-2 menu__list-item">
                        <div
                          className={`menu__link ${currentTab == "subDescription" && selectedProject == "2" && "menu__link--active"}`}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setCurrentTab("subDescription");
                            setSelectedProject("2");
                          }}
                        >
                          SamagraX sample project 2
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <main
            style={{ height: "100%" }}
            className="docMainContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-DocPage-styles-module"
          >
            {currentTab == "c4gt" ? (
                      <C4GT2024Page />
                    ) : currentTab == "description" ? (
                      <ProjectDescription />
                    ) : (
                      <SubProjectDescription
                        selectedProject={selectedProject}
                      />
                    )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
export default C4GT2024;
