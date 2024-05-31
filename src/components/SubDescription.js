import React, { useEffect, useState } from "react";

function SubProjectDescription({ selectedProject }) {
  const [description,setDescription] = useState(null)
  useEffect(()=>{
    fetch(`https://api.dev.c4gt.samagra.io/issues/VedantKhairnar/1`, {
        method: 'GET',
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
},[])
  return (
    <div className="container padding-top--md padding-bottom--lg">
      {description && <div className="row">
        <div className="col width">
          <div>
            <article>
              <div className="theme-doc-markdown markdown">
                <header>
                  <h1>{selectedProject}</h1>
                </header>
                <h2>Overview</h2>
                <p>
                  {description?.description}
                </p>
                <h2>Weekly Tasks and Learnings</h2>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 style={{ fontSize: "32px" }}>Overall Project PR Table</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button style={{ padding: "4px 8px" }}>PR Summary</button>
                  </div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th align="left">PR Name</th>
                      <th align="left">Link</th>
                      <th align="left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {description?.pr_details?.pr_details?.map((tdata,i)=>{
                      return <tr key={i}>
                      <td align="left">{tdata.name}</td>
                      <td align="left">
                        <a href={tdata.link}>{tdata.link}</a>
                      </td>
                      <td align="left">{tdata.status}</td>
                    </tr>
                    })}
                    
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
        <div className="col col--3">
          <div
            className="table-container thin-scrollbar theme-doc-toc-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: description?.overall_progress }}>
                {description?.overall_progress}
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>{description?.contributor_name}</th>
                </tr>
                <tr>
                  <th>{description?.name}</th>
                </tr>
                <tr>
                  <th>{description?.org_name}</th>
                </tr>
              </tbody>
            </table>
            {/* <div><div>Contributor Name</div>
        <div>Mentor Name</div>
        <div>Organisation</div></div> */}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default SubProjectDescription;
