---
sidebar_position: 1
title: Introduction
slug: /2023/DDP/Airbyte connector for Avni
---


# Author
Aviraj Gour

# Contact Info
- [Email](mailto:asgour2021@gmail.com)
- [Linked In](https://www.linkedin.com/in/aviraj-singh-gour-850765232/)
- [GitHub](https://github.com/avirajsingh7)

# Project Description

The goal is to develop a source connector for Avni, enabling NGOs using Avni to utilize Airbyte for their data management requirements.
The source connector for Avni will enable Avni users to extract data from Avni's databases or APIs and replicate it into Airbyte's standardized data format. This integration will provide NGOs with the exibility to connect Avni's data with a wide range of destinations, including databases, data warehouses, and analytics platforms supported by Airbyte.

To build the connector frstly, we have to understand the AVNI platform.
AVNI is an open source platform for on field service and data collection. A three-level adjustable data structure given by Avni enables modelling of the services offered (or data collected). Setting up topics, enrolling subjects in programmes, and establishing encounters for enrollments/subjects are all possible with Avni.

To build the connector I will be using Airbyte Python Sdk, I will be using python sdk at the place of the low code connector because it will provide us with more fexibility and customization.
In order to create a connector will be creating 4 different streams of subject, program enrollment, program encounters and encounters.