# Data Extraction

## Introduction
In this section of the workshop, we will focus on how to extract **meaningful** data, how to perform requests to a Python library (that will help us obtain all this data) and how to save this information into **persistent** files that we can re-use over and over.

Estimated Lab Time: 15 minutes

### Prerequisites

* An Oracle Free Tier, Paid or LiveLabs Cloud Account
* Active Oracle Cloud Account with available credits to use for Data Science service.
* [Previously created](https://github.com/oracle-devrel/leagueoflegends-optimizer/blob/livelabs/hols/dataextraction/infra/infra.md) OCI Data Science Environment


## Extracting Data

For the purpose of data extraction, we will reference the Python library called [`fastf1`](https://github.com/theOehrly/Fast-F1). All credits to them for the awesome library.

In order to interact with FastF1, we usually start by loading an event or a session. Most importantly, and by the library's developer's recommendation, caching should almost always be enabled to speed up the runtime of your scripts and to prevent exceeding the rate limit of api servers. FastF1 will print an annoyingly obnoxious warning message if you do not enable caching.


## Overview

You may now [proceed to the next lab](#next).


## Acknowledgements

* **Author** - Nacho Martinez, Data Science Advocate @ DevRel
* **Contributors** - Alireza Dibazar, Victor Martin - Product Strategy Director
* **Last Updated By/Date** - September 5th, 2022
