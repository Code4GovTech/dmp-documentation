import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function ProjectDescription({currentIssue, currentIssueData}) {
  const { siteConfig } = useDocusaurusContext();
  const API_BASE_URL = siteConfig.customFields.API_BASE_URL;
  const API_AUTH_KEY = siteConfig.customFields.API_AUTH_KEY;
  const [description,setDescription] = useState(null)

  useEffect(()=>{
    fetch(`${API_BASE_URL}/issues/${currentIssue}`, {
        method: 'GET',
        headers:{
          'X-Secret-Key':API_AUTH_KEY,
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDescription(()=>data)
      })
      .catch(error => {
        console.log("error",error.message);
      });
},[currentIssue])
  return (
    <div className="container padding-top--md padding-bottom--lg" style={{ minHeight: "60vh" }}>
              <div className="row">
                <div className="col width">
                  <div>
    <article>
      <nav
        className="theme-doc-breadcrumbs" style={{marginBottom:".4rem"}}
        aria-label="breadcrumbs"
      >
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <a
              className="breadcrumbs__link breadcrumbs-items"
              href="/"
            >
              🏠
            </a>
          </li>
          <li className="breadcrumbs__item breadcrumbs__item--active">
            <a
              className="breadcrumbs__link breadcrumbs-items"
              href={`/docs/2024/org?id=${description?.name}`}
              style={{cursor:"pointer"}}
            >
              {description?.name}
            </a>
          </li>
        </ul>
      </nav>
      <div className="theme-doc-markdown markdown">
        <header>
          <h1>{description?.name}</h1>
        </header>
        <p>{description?.description}
        {/* when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum */}
        </p>
        {/* <h3>Following are the list of Issues associated with the organization</h3>
        {currentIssueData?.length!=0 && <ul>
                        {currentIssueData?.map((d,i)=>{
                          return <li key={i}>
                          <a>
                           {d.name}
                          </a>
                        </li>
                        })}
                        
                      </ul>} */}
      </div>
    </article>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ProjectDescription;
