import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function useParseMarkdown() {
    const { siteConfig } = useDocusaurusContext();
    const API_BASE_URL = siteConfig.customFields.API_BASE_URL;
    const API_AUTH_KEY = siteConfig.customFields.API_AUTH_KEY;
  
    const weeklyGoals = (markdown) => {
        markdown = markdown.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    markdown = markdown.replace(/^## (.*$)/gim, `<h2>$1</h2>`);
    markdown = markdown.replace(/^# (.*$)/gim, `<h2 class="h2-font">$1</h2>`);

    markdown = markdown.replace(/\*\*(.*)\*\*/gim, "<b>$1</b>");
    markdown = markdown.replace(/\*(.*)\*/gim, "<i>$1</i>");

    markdown = markdown.replace(
      /- \[ \] (.*$)/gim,
      '<input type="checkbox" disabled> $1',
    );
    markdown = markdown.replace(
      /- \[x\] (.*$)/gim,
      '<input type="checkbox" checked disabled> $1',
    );

    markdown = markdown.replace(/^\s*-\s+(.*$)/gim, "<li>$1</li>");
    markdown = markdown.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");

    markdown = markdown.replace(
      /!\[(.*?)\]\((.*?)\)/gim,
      "<img alt='$1' src='$2' />",
    );

    markdown = markdown.replace(/\r\n\r\n/g, "");
    markdown = markdown.replace(/(?:\r\n|\r|\n)/g, "<br>");

    return markdown.trim();
    } 
    const weeklyLearnings = (markdown) => {
        markdown = markdown.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    markdown = markdown.replace(/^## (.*$)/gim, `<h2>$1</h2>`);
    markdown = markdown.replace(/^# (.*$)/gim, `<h2 class="h2-font">$1</h2>`);

    markdown = markdown.replace(/\*\*(.*)\*\*/gim, "<b>$1</b>");
    markdown = markdown.replace(/\*(.*)\*/gim, "<i>$1</i>");

    markdown = markdown.replace(
      /- \[ \] (.*$)/gim,
      '<input type="checkbox" disabled> $1',
    );
    markdown = markdown.replace(
      /- \[x\] (.*$)/gim,
      '<input type="checkbox" checked disabled> $1',
    );

    markdown = markdown.replace(/^\s*-\s+(.*$)/gim, "<li>$1</li>");
    markdown = markdown.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");

    markdown = markdown.replace(
      /!\[(.*?)\]\((.*?)\)/gim,
      "<img alt='$1' src='$2' />",
    );

    markdown = markdown.replace(/\r\n\r\n/g, "");
    markdown = markdown.replace(/(?:\r\n|\r|\n)/g, "");

    return markdown.trim();
    }
  
    return { weeklyGoals, weeklyLearnings,API_BASE_URL,API_AUTH_KEY };
  }
  
  export default useParseMarkdown;