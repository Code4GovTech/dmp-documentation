import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function useParseMarkdown() {
    const { siteConfig } = useDocusaurusContext();
    const API_BASE_URL = siteConfig.customFields.API_BASE_URL;
    const API_AUTH_KEY = siteConfig.customFields.API_AUTH_KEY;
  
    return { API_BASE_URL,API_AUTH_KEY };
  }
  
  export default useParseMarkdown;