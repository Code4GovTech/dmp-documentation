import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import C4GT2024Page from "../../../components/C4GT2024Page";
import './index.css';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import { useLocation, useParams } from 'react-router-dom';

function C4GT2024() {
  const { siteConfig } = useDocusaurusContext();
  const [currentTab, setCurrentTab] = useState("c4gt");
  const [issueData,setIssueData] = useState(null)
  const API_BASE_URL = siteConfig.customFields.API_BASE_URL;
  const API_AUTH_KEY = siteConfig.customFields.API_AUTH_KEY;

  useEffect(()=>{
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
                      className={`menu__link ${currentTab == "c4gt" ? "menu__link--active" : ""}`}
                      style={{ cursor: "pointer" }}
                    >
                      C4GT'24
                    </div>
                  </li>
                  {
                    issueData?.map((data,i)=>{
                       return  <li key={i}
                      className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item menu__list-item--collapsed`}
                    >
                      <div
                        className={`menu__list-item-collapsible`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          window.location.href=`/docs/2024/org?id=${data?.org_name}`
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
          </main>
        </div>
      </div>
    </Layout>
  );
}
export default C4GT2024;
