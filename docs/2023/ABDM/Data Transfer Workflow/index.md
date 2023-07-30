---
sidebar_position: 1
title: Introduction
slug: /2023/ABDM/Data Transfer Workflow
---


# Author
Aman Gadadare

# Contact Info
 

- [Email](mailto:amangadadare2000@gmail.com)
- [Linked In]( https://www.linkedin.com/in/aman-gadadare-589918195/)
- [GitHub](https://github.com/AmanGadadare)

# Project Description
# ABDM 
- The Ayushman Bharat Digital Mission (ABDM) aims to develop the backbone necessary to support the integrated digital health infrastructure of the country.
-  It will bridge the existing gap amongst different stakeholders of the Healthcare ecosystem through digital highways.
## Data Transfer Workflow
 - Allow consented medical data transfer to the ABDM network
 - Currently, data transfer between an HIU (Health Information User) and HIP (Health Information Provider) involves multiple API interactions.
- SDK integrated at HRP on both fronts (HIP and HIU) should simplify this data transfer workflow.

### Project Goals
- This project aims to build ABDM Wrapper (SDK) which abstracts HRP complexities for developers. This abstraction can be achieved at both HIP and HIU sides:
- Handles metadata storage such as consent artifacts, schemas, mappings, etc.
- Abstracts out ABDM version upgrades, contract changes, deprecation, etc by giving a constant workflow interface to developers
- Provides capabilities of both async and sync apis. Developers will have the option to opt according to their convenience.
- Handles encryption decryption
- Take care of security auditing and compliance
- Store audit logs for consent and data flows.
- Governance around data retention and policies

Find More About Project [Here](https://github.com/atulai-sg/abdm-sdk/issues/5)

