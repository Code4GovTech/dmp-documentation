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
              to: "/docs/2024?id=A2I%20Bangladesh",
            },
            {
              label: "ABDM Enablers",
              to: "/docs/2024?id=ABDM%20Enablers",
            },
            {
              label: "Arghyam",
              to: "/docs/2024?id=Arghyam",
            },
            {
              label: "Avanti Fellows",
              to: "/docs/2024?id=Avanti%20Fellows",
            },
            {
              label: "Beckn Open Collective",
              to: "/docs/2024?id=Beckn%20Open%20Collective",
            },
            {
              label: "Belongg",
              to: "/docs/2024?id=Belongg",
            },
            {
              label: "Bhashini",
              to: "/docs/2024?id=Bhashini",
            },
            {
              label: "Blockster Labs/ CREDEBL",
              to: "/docs/2024?id=Blockster%20Labs/%20CREDEBL",
            },
            {
              label: "ConveGenius AI",
              to: "/docs/2024?id=ConveGenius%20AI",
            },
            {
              label: "Dhiway",
              to: "/docs/2024?id=Dhiway",
            },
            {
              label: "eGovernments Foundation",
              to: "/docs/2024?id=eGovernments%20Foundation",
            },
            {
              label: "EkStep Foundation",
              to: "/docs/2024?id=EkStep%20Foundation",
            },
            {
              label: "Haqdarshak",
              to: "/docs/2024?id=Haqdarshak",
            },
            {
              label: "IDinsight",
              to: "/docs/2024?id=IDinsight",
            },
            {
              label: "MeitY",
              to: "/docs/2024?id=MeitY",
            },
            {
              label: "Mojaloop",
              to: "/docs/2024?id=Mojaloop",
            },
            {
              label: "NSUT in collaboration with C4GT, SEETA, AIC",
              to: "/docs/2024?id=NSUT%20in%20collaboration%20with%20C4GT,%20SEETA,%20AIC",
            },
            {
              label: "Open Function Group",
              to: "/docs/2024?id=Open%20Function%20Group",
            },
            {
              label: "Piramal Swasthya Management Research",
              to: "/docs/2024?id=Piramal%20Swasthya%20Management%20Research",
            },
            {
              label: "Planet Read",
              to: "/docs/2024?id=Planet%20Read",
            },
            {
              label: "PolicyEngine",
              to: "/docs/2024?id=PolicyEngine",
            },
            {
              label: "Project Tech4Dev",
              to: "/docs/2024?id=Project%20Tech4Dev",
            },
            {
              label: "Protean",
              to: "/docs/2024?id=Protean",
            },
            {
              label: "Reap Benefit",
              to: "/docs/2024?id=Reap%20Benefit",
            },
            {
              label: "SamagraX",
              to: "/docs/2024?id=SamagraX",
            },
            {
              label: "Samanway Foundation",
              to: "/docs/2024?id=Samanway%20Foundation",
            },
            {
              label: "Shikshalokam",
              to: "/docs/2024?id=Shikshalokam",
            },
            {
              label: "Sugar Labs",
              to: "/docs/2024?id=Sugar%20Labs",
            },
            {
              label: "Swasth Alliance",
              to: "/docs/2024?id=Swasth%20Alliance",
            },
            {
              label: "Tattle",
              to: "/docs/2024?id=Tattle",
            },
            {
              label: "Tekdi",
              to: "/docs/2024?id=Tekdi",
            },
            {
              label: "The Mifos Initiative",
              to: "/docs/2024?id=The%20Mifos%20Initiative",
            },
            {
              label: "Unicef",
              to: "/docs/2024?id=Unicef",
            },
            {
              label: "Zendalona",
              to: "/docs/2024?id=Zendalona",
            },
            {
              label: "Zenysis Technologies",
              to: "/docs/2024?id=Zenysis%20Technologies",
            },
          ]
        },
        {
          label: "2025",
          position: "left",
          to: "/docs/2025/",
          items: [
          {
            label: "ADC karnal",
            to: "/docs/2025?id=ADC%20karnal",
          },
          {
            label: "ADC Mahendragarh",
            to: "/docs/2025?id=ADC%20Mahendragarh",
          },
          {
            label: "ADC Rohtak",
            to: "/docs/2025?id=ADC%20Rohtak",
          },
          {
            label: "Armman",
            to: "/docs/2025?id=Armman",
          },
          {
            label: "Avanti Fellows",
            to: "/docs/2025?id=Avanti%20Fellows",
          },
          {
            label: "Beckn Collective",
            to: "/docs/2025?id=Beckn%20Collective",
          },
          {
            label: "CMC Ambala",
            to: "/docs/2025?id=CMC%20Ambala",
          },
          {
            label: "Consul Democracy",
            to: "/docs/2025?id=Consul%20Democracy",
          },
          {
            label: "COSS",
            to: "/docs/2025?id=COSS",
          },
          {
            label: "Dhwani",
            to: "/docs/2025?id=Dhwani",
          },
          {
            label: "Education Initiative",
            to: "/docs/2025?id=Education%20Initiative",
          },
          {
            label: "Flywheel",
            to: "/docs/2025?id=Flywheel",
          },
          {
            label: "Haqdarshak",
            to: "/docs/2025?id=Haqdarshak",
          },
          {
            label: "iabsis",
            to: "/docs/2025?id=iabsis",
          },
          {
            label: "IDInsight",
            to: "/docs/2025?id=IDInsight",
          },
          {
            label: "IIIT-Delhi",
            to: "/docs/2025?id=IIIT-Delhi",
          },
          {
            label: "IIIT-H RCTS",
            to: "/docs/2025?id=IIIT-H%20RCTS",
          },
          {
            label: "Medic",
            to: "/docs/2025?id=Medic",
          },
          {
            label: "MedPlat",
            to: "/docs/2025?id=MedPlat",
          },
          {
            label: "Medtronic Labs",
            to: "/docs/2025?id=Medtronic%20Labs",
          },
          {
            label: "MeitY",
            to: "/docs/2025?id=MeitY",
          },
          {
            label: "Metabrainz",
            to: "/docs/2025?id=Metabrainz",
          },
          {
            label: "Mifos",
            to: "/docs/2025?id=Mifos",
          },
          {
            label: "Mojaloop Foundation",
            to: "/docs/2025?id=Mojaloop%20Foundation",
          },
          {
            label: "MOSIP",
            to: "/docs/2025?id=MOSIP",
          },
          {
            label: "National Urban Digital Mission",
            to: "/docs/2025?id=National%20Urban%20Digital%20Mission",
          },
          {
            label: "NHA",
            to: "/docs/2025?id=NHA",
          },
          {
            label: "NSUT in collaboration with C4GT, SEETA and AIC",
            to: "/docs/2025?id=NSUT%20in%20collaboration%20with%20C4GT%2C%20SEETA%20and%20AIC",
          },
          {
            label: "OpenIMIS",
            to: "/docs/2025?id=OpenIMIS",
          },
          {
            label: "OpenNyAI",
            to: "/docs/2025?id=OpenNyAI",
          },
          {
            label: "Piramal Swasthya Management and Research Institute",
            to: "/docs/2025?id=Piramal%20Swasthya%20Management%20and%20Research%20Institute",
          },
          {
            label: "PlanetRead",
            to: "/docs/2025?id=PlanetRead",
          },
          {
            label: "Pratham Books",
            to: "/docs/2025?id=Pratham%20Books",
          },
          {
            label: "Protean",
            to: "/docs/2025?id=Protean",
          },
          {
            label: "Samanvay Foundation",
            to: "/docs/2025?id=Samanvay%20Foundation",
          },
          {
            label: "Sampatti Card",
            to: "/docs/2025?id=Sampatti%20Card",
          },
          {
            label: "ShikshaLokam",
            to: "/docs/2025?id=ShikshaLokam",
          },
          {
            label: "Statwig",
            to: "/docs/2025?id=Statwig",
          },
          {
            label: "Sugar Labs",
            to: "/docs/2025?id=Sugar%20Labs",
          },
          {
            label: "Tattle",
            to: "/docs/2025?id=Tattle",
          },
          {
            label: "Tekdi",
            to: "/docs/2025?id=Tekdi",
          },
          {
            label: "The Apprentice Project",
            to: "/docs/2025?id=The%20Apprentice%20Project",
          },
        ],
        },
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
