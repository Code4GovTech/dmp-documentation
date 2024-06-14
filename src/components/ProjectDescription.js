import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useParseMarkdown from "../hooks/useParseMarkdown";

function ProjectDescription({
  currentIssue,
  setCurrentTab,
  setSelectedProject,
  setIssueNumber,
  issueData
}) {
  const history = useHistory();
  const {API_AUTH_KEY,API_BASE_URL} = useParseMarkdown();
  const [description, setDescription] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [error,setError] =useState(null)
  const [currentIssueData,setCurrentIssueData] = useState(null)

  useEffect(() => {
    setError(()=>null);
    setCurrentIssueData(()=>{
      let data = issueData?.filter((d,i)=>{
        if(d.org_name===currentIssue) return d.issues
        else return null
      })
      return data
    })
    fetch(`${API_BASE_URL}/issues/${currentIssue}`, {
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
        else setDescription(() => data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [currentIssue]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 997) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
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
      ) : description ? (
        <div
          className="container padding-top--md padding-bottom--lg"
          style={{ minHeight: "60vh" }}
        >
          <div className="row">
            <div className="col width">
              <div>
                <article>
                  <nav
                    className="theme-doc-breadcrumbs"
                    style={{ marginBottom: ".4rem" }}
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
                          style={{ cursor: "pointer" }}
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
                    <p>{description?.description}</p>
                    {mobile && (
                      <>
                        <h3>
                          Following are the list of Issues associated with the
                          organization
                        </h3>
                        {currentIssueData?.length != 0 && (
                          <ul>
                            {currentIssueData?.[0]?.issues?.map((d, i) => {
                              // console.log(currentIssueData)
                              return (
                                <li key={i}>
                                  <a style={{cursor:"pointer"}}
                                    onClick={() => {
                                      const newUrl = `/docs/2024/org?id=${currentIssue}&issue=${d.name}`;
                                      history.push(newUrl);
                                      setCurrentTab(() => "subDescription");
                                      setSelectedProject(() => d.name);
                                      setIssueNumber(() => d.issue_number);
                                    }}
                                  >
                                    {d.name}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      ):<></>}
    </>
  );
}

export default ProjectDescription;
