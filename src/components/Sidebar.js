import React from "react";
import { useHistory } from "react-router-dom";

function Sidebar({
  currentTab,
  issueData,
  currentOrg,
  setCurrentOrg,
  currentIssue,
  setCurrentIssue,
}) {
  const history = useHistory();
  return (
    <div className="sidebar-styles">
      <nav className="menu thin-scrollbar menu_styles">
        <ul className="theme-doc-sidebar-menu menu__list">
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
            <div
              className={`menu__link cursor-pointer ${currentTab == "c4gt" ? "menu__link--active" : ""}`}
              onClick={() => {
                window.location.href = `/docs/2024/`;
              }}
            >
              C4GT'24
            </div>
          </li>
          {issueData == null ? (
            <></>
          ) : (
            issueData?.map((data, i) => {
              return (
                <li
                  key={i}
                  className={`theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item ${currentOrg == data?.org_name ? "" : "menu__list-item--collapsed"}`}
                >
                  <div
                    className={`menu__list-item-collapsible cursor-pointer ${currentOrg == data?.org_name && currentIssue == null ? "menu__list-item-collapsible--active" : ""}`}
                    onClick={() => {
                      const newUrl = `/docs/2024/org?id=${data?.org_name}`;
                      history.push(newUrl);
                      setCurrentOrg(() => data?.org_name);
                      setCurrentIssue(() => null);
                    }}
                  >
                    <div
                      className={`menu__link ${currentOrg == data?.org_name ? "menu__link--active" : ""}`}
                    >
                      {data?.org_name}
                    </div>
                    <button
                      aria-label={`Toggle the collapsible sidebar category ${data?.org_name}`}
                      type="button"
                      className="clean-btn menu__caret"
                    ></button>
                  </div>
                  {currentOrg == data?.org_name ? (
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
                      {data?.issues?.map((d, i) => {
                        if (d?.name != null)
                          return (
                            <li
                              key={i}
                              className="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-2 menu__list-item"
                            >
                              <div
                                className={`menu__link cursor-pointer ${currentIssue == d.id ? "menu__link--active" : ""}`}
                                onClick={() => {
                                  const newUrl = `/docs/2024/org?id=${currentOrg}&issue=${d.id}`;
                                  history.push(newUrl);
                                  setCurrentIssue(() => d.id);
                                }}
                              >
                                {d.name}
                              </div>
                            </li>
                          );
                        else <></>;
                      })}
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
