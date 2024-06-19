require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const year = new Date().getFullYear();
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Code for GovTech (C4GT)",
  tagline: "Updates about activites done by students.",
  url: "http://tech.samagragovernance.in/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Samagra",
  projectName: "c4gt",
  themeConfig: {
    navbar: {
      // title: "DMP",
      logo: {
        alt: "DMP",
        src: "img/C4GT_Logo_Text.png",
      },
      items: [
        {
          label: "2022",
          position: "left",
          to: "/docs/2022/",
          items: [
            {
              label: "UCI Web Channel",
              to: "/docs/2022/uci/",
            },

            {
              label: "Competency Passbook",
              to: "/docs/2022/passbook/",
            },
            {
              label: "Admin for Sunbird RC",
              to: "/docs/2022/admin/",
            },
            {
              label: "Centralized Access Control",
              to: "/docs/2022/cac/",
            },
            {
              label: 'Yaus: Yet Another URL Shortener',
              to: '/docs/2022/yaus/',
            },
            {
              label: 'Shiksha',
              to: '/docs/2022/shiksha/',
            },
            {
              label: 'Sunbird QuML Player',
              to: '/docs/2022/sunbird-quml/',
            },
            {
              label: 'Machine Learning Platform',
              to: '/docs/2022/ml-platform/',
            },
          ],
        },
        {
          label: "2023",
          position: "left",
          to: "/docs/2023/",
          items: [
            {
              label: "ABDM",
              to: "/docs/2023/ABDM",
            },

            {
              label: "AI Tools",
              to: "/docs/2023/AI Tools",
            },
            {
              label: "Avni",
              to: "/docs/2023/Avni",
            },
            {
              label: "Bahmni",
              to: "/docs/2023/Bahmni",
            },
            {
              label: "BeckN",
              to: "/docs/2023/BeckN",
            },
            {
              label: "CARE",
              to: "/docs/2023/CARE",
            },
                                                {
              label: "cQube",
              to: "/docs/2023/cQube",
            },
            {
              label: "CORD Network",
              to: "/docs/2023/CORD Network",
            },
            {
              label: "DDP",
              to: "/docs/2023/DDP",
            },
            {
              label: "DIGIT",
              to: "/docs/2023/DIGIT",
            }, 
            {
              label: "DIKSHA",
              to: "/docs/2023/DIKSHA",
            }, 
            {
              label: "DevOps Pipeline",
              to: "/docs/2023/DevOps Pipeline",
            }, 
            {
              label: "Doc Generator",
              to: "/docs/2023/Doc Generator",
            }, 
            {
              label: "Farmstack",
              to: "/docs/2023/Farmstack",
            }, 
            {
              label: "Glific",
              to: "/docs/2023/Glific",
            }, 
            {
              label: "Health Claims Exchange",
              to: "/docs/2023/Health Claims Exchange",
            }, 
            {
              label: "Karmayogi",
              to: "/docs/2023/Karmayogi",
            }, 
            {
              label: "ODK Extension Collection",
              to: "/docs/2023/ODK Extension Collection",
            }, 
            {
              label: "QuML",
              to: "/docs/2023/QuML",
            }, 
            {
              label: "Quiz Creator",
              to: "/docs/2023/Quiz Creator",
            }, 
            {
              label: "Solve Ninja Chatbot",
              to: "/docs/2023/Solve Ninja Chatbot",
            }, 
            {
              label: "Sunbird DevOps",
              to: "/docs/2023/Sunbird DevOps",
            }, 
            {
              label: "Sunbird ED",
              to: "/docs/2023/Sunbird ED",
            },
                        {
              label: "Sunbird Knowlg",
              to: "/docs/2023/Sunbird Knowlg",
            },
                        {
              label: "Sunbird Lern",
              to: "/docs/2023/Sunbird Lern",
            },
                        {
              label: "Sunbird Obsrv",
              to: "/docs/2023/Sunbird Obsrv",
            },
                        {
              label: "Sunbird RC",
              to: "/docs/2023/Sunbird RC",
            },
                        {
              label: "Sunbird Saral",
              to: "/docs/2023/Sunbird Saral",
            },
                        {
              label: "Sunbird UCI",
              to: "/docs/2023/Sunbird UCI",
            },
                        {
              label: "Sunbird inQuiry",
              to: "/docs/2023/Sunbird inQuiry",
            },
                        {
              label: "Template creation portal",
              to: "/docs/2023/Template creation portal",
            },
                        {
              label: "Text2SQL",
              to: "/docs/2023/Text2SQL",
            },
                        {
              label: "TrustBot and POSHpal",
              to: "/docs/2023/TrustBot and POSHpal",
            },
                        {
              label: "TrustIn",
              to: "/docs/2023/TrustIn",
            },
                        {
              label: "Unnati",
              to: "/docs/2023/Unnati",
            },
                        {
              label: "WarpSQL",
              to: "/docs/2023/WarpSQL",
            },
                                    {
              label: "Workflow",
              to: "/docs/2023/Workflow",
            },
                                    {
              label: "Yaus",
              to: "/docs/2023/Yaus",
            },

          ],
        },
        {
          label: "2024",
          position: "left",
          to: "/docs/2024/",
          items: [
            {
              label: "A2I Bangladesh",
              to: "/docs/2024/org?id=A2I%20Bangladesh",
            },
            {
              label: "ABDM Enablers",
              to: "/docs/2024/org?id=ABDM%20Enablers",
            },
            {
              label: "Arghyam",
              to: "/docs/2024/org?id=Arghyam",
            },
            {
              label: "Avanti Fellows",
              to: "/docs/2024/org?id=Avanti%20Fellows",
            },
            {
              label: "Beckn Open Collective",
              to: "/docs/2024/org?id=Beckn%20Open%20Collective",
            },
            {
              label: "Belongg",
              to: "/docs/2024/org?id=Belongg",
            },
            {
              label: "Bhashini",
              to: "/docs/2024/org?id=Bhashini",
            },
            {
              label: "Blockster Labs/ CREDEBL",
              to: "/docs/2024/org?id=Blockster%20Labs/%20CREDEBL",
            },
            {
              label: "ConveGenius AI",
              to: "/docs/2024/org?id=ConveGenius%20AI",
            },
            {
              label: "Dhiway",
              to: "/docs/2024/org?id=Dhiway",
            },
            {
              label: "eGovernments Foundation",
              to: "/docs/2024/org?id=eGovernments%20Foundation",
            },
            {
              label: "EkStep Foundation",
              to: "/docs/2024/org?id=EkStep%20Foundation",
            },
            {
              label: "Haqdarshak",
              to: "/docs/2024/org?id=Haqdarshak",
            },
            {
              label: "IDinsight",
              to: "/docs/2024/org?id=IDinsight",
            },
            {
              label: "MeitY",
              to: "/docs/2024/org?id=MeitY",
            },
            {
              label: "Mojaloop",
              to: "/docs/2024/org?id=Mojaloop",
            },
            {
              label: "NSUT in collaboration with C4GT, SEETA, AIC",
              to: "/docs/2024/org?id=NSUT%20in%20collaboration%20with%20C4GT,%20SEETA,%20AIC",
            },
            {
              label: "Open Function Group",
              to: "/docs/2024/org?id=Open%20Function%20Group",
            },
            {
              label: "Piramal Swasthya Management Research",
              to: "/docs/2024/org?id=Piramal%20Swasthya%20Management%20Research",
            },
            {
              label: "Planet Read",
              to: "/docs/2024/org?id=Planet%20Read",
            },
            {
              label: "PolicyEngine",
              to: "/docs/2024/org?id=PolicyEngine",
            },
            {
              label: "Project Tech4Dev",
              to: "/docs/2024/org?id=Project%20Tech4Dev",
            },
            {
              label: "Protean",
              to: "/docs/2024/org?id=Protean",
            },
            {
              label: "Reap Benefit",
              to: "/docs/2024/org?id=Reap%20Benefit",
            },
            {
              label: "SamagraX",
              to: "/docs/2024/org?id=SamagraX",
            },
            {
              label: "Samanway Foundation",
              to: "/docs/2024/org?id=Samanway%20Foundation",
            },
            {
              label: "Shikshalokam",
              to: "/docs/2024/org?id=Shikshalokam",
            },
            {
              label: "Sugar Labs",
              to: "/docs/2024/org?id=Sugar%20Labs",
            },
            {
              label: "Swasth Alliance",
              to: "/docs/2024/org?id=Swasth%20Alliance",
            },
            {
              label: "Tattle",
              to: "/docs/2024/org?id=Tattle",
            },
            {
              label: "Tekdi",
              to: "/docs/2024/org?id=Tekdi",
            },
            {
              label: "The Mifos Initiative",
              to: "/docs/2024/org?id=The%20Mifos%20Initiative",
            },
            {
              label: "Unicef",
              to: "/docs/2024/org?id=Unicef",
            },
            {
              label: "Zendalona",
              to: "/docs/2024/org?id=Zendalona",
            },
            {
              label: "Zenysis Technologies",
              to: "/docs/2024/org?id=Zenysis%20Technologies",
            },
          ]
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Code4GovTech",
            },
            {
              label: "Discord",
              href: "https://discord.gg/XeNVhYV4",
            },
            {
              label: "Main home page",
              href: "http://tech.samagragovernance.in/",
            }, {
              label: "Resources",
              to: '/docs/Resources'
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCfkXErS-f87xUQkmSKSC8bg",
            },
            {
              label: "Getting started",
              href: "https://github.com/Code4GovTech/C4GT/wiki",
            },
          ],
        },
      ],
      copyright: `Copyright © ${year} C4GT, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Code4GovTech/C4GT/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Code4GovTech/C4GT/edit/main/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  customFields: {
    API_BASE_URL: process.env.API_BASE_URL, // Assuming you have REACT_APP_API_URL set in your environment
    API_AUTH_KEY: process.env.API_AUTH_KEY,
  },
};
