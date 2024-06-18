import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useParseMarkdown from "../hooks/useParseMarkdown";
import ErrorComponent from "./ErrorComponent";

function OrgDescription({ currentOrg, currentOrgData }) {
  const history = useHistory();
  const { API_AUTH_KEY, API_BASE_URL } = useParseMarkdown();
  const [description, setDescription] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(() => null);
    fetch(`${API_BASE_URL}/issues/${currentOrg}`, {
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
        } else setDescription(() => data?.[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }, [currentOrg]);

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
        <ErrorComponent error={error} />
      ) : description ? (
        <div
          className="container padding-top--md padding-bottom--lg container-height"
        >
          <div className="row">
            <div className="col width">
              <div>
                <article>
                  <nav
                    className="theme-doc-breadcrumbs breadcrumbs-margin"
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
                          className="breadcrumbs__link breadcrumbs-items cursor-pointer"
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
                        {currentOrgData?.length != 0 && (
                          <ul>
                            {currentOrgData?.[0]?.issues?.map((d, i) => {
                              return (
                                <li key={i}>
                                  <a
                                    className="cursor-pointer"
                                    onClick={() => {
                                      const newUrl = `/docs/2024/org?id=${currentOrg}&issue=${d.id}`;
                                      history.push(newUrl);
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
      ) : (
        <></>
      )}
    </>
  );
}

export default OrgDescription;
