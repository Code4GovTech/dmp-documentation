---
sidebar_position: 1
title: Canned Analytics
slug: /2023/Avni/Canned Analytics
---


# Author
Akanksha Sinha

# Contact Info
- [Email](mailto:akanksha.feb25@gmail.com)
- [Linked In](https://www.linkedin.com/in/akankksha25/)
- [GitHub](https://github.com/ak2502)

# Project Description
While Avni users can set up analytics using BI tools, many standard reports that an end-user requires can be created right off the box within Avni. A canned analytics solution that provides basic analytics on a project readily will enable easier data access for organisations.

Avni currently has a canned analytics solution, but it does not perform well enough. This is because data for analytics was pulled from the OLTP database that contains data from all organisations. Avni-etl did not exist at this time.

The ETL solution creates organisation specific analytic tables. This can be used by the existing canned analytics solution to create better and faster reports. This project will include changes to ETL to bring in data that it does not bring in today, and create some rollups if they are necessary.
