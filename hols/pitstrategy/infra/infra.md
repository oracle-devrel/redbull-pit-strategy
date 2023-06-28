# Lab 1: Infrastructure

## Introduction

In this lab, we will build the infrastructure that we will use to run the rest of the workshop.

The main element that we will be creating is a **Data Science** session and notebook, to experiment with the newly-generated data using notebooks.

![Infrastructure](images/lol_infra.png)

We will use Cloud Shell to execute _`start.sh`_ script that will call Terraform to deploy all the infrastructure required and setup the configuration. If you don't know about Terraform, don't worry, there is no need. Also, there are no installation requirements: we will use Cloud Shell (which has Terraform installed by default) to deploy our infrastructure. 

Terraform is an Open Source tool to deploy resources in the cloud with code. You declare what you want in Oracle Cloud and Terraform make sure you get the resources created.

Do you want to learn more? Feel free to check [Terraform's code in this repository](https://github.com/oracle-devrel/leagueoflegends-optimizer/tree/main/dev/terraform) after the workshop.

Estimated Lab Time: 15 minutes

### Prerequisites

* An Oracle Free Tier, Paid or LiveLabs Cloud Account
* Active Oracle Cloud Account with available credits to use for Data Science service.

## Task 1: Cloud Shell

1. From the Oracle Cloud Console, click on **Cloud Shell**.
  ![Cloud Shell Button](images/cloud-shell-button.png)

2. As soon as the Cloud Shell is loaded, you can download the assets to run this lab.

    ```bash
    <copy>git clone --branch dev https://github.com/oracle-devrel/redbull-pit-strategy.git</copy>
    ```

3. The result will look like this:
  ![Git Clone](images/git-clone.png)

4. Change directory with `cd` to `redbull-pit-strategy` directory:

    ```bash
    <copy>cd redbull-pit-strategy</copy>
    ```

## Task 2: Deploy with Terraform

1. You are going to create a file `.env.json` that contains variables for terraform. Including the number of desired CPUs for Data Science. Run on Cloud Shell the following command:

    ```bash
    <copy>npx zx scripts/setenv.mjs</copy>
    ```

2. It will run a dependency check and right after ask for a compartment name. If you are in a trial, or brand new to Oracle Cloud, just leave it empty and type _ENTER_.
    > NOTE: If you want to deploy on a specific compartment, type the name (not the OCI ID) and the compartment will be used.

3. Then, the script will ask for the `Data Science CPU number`. Type the number 1, but feel free to indicate up to 4 CPUs.

4. The script will finished.
    ![Cloud Shell setenv](./images/cloud-shell-setenv.png)

5. Terraform uses a file called `terraform.tfvars` that contains the variables Terraform uses to talk to Oracle Cloud and set up your deployment the way you want it. You are going to use a script that will ask you for information to create the `terraform.tfvars` file for you. Run on Cloud Shell the following command:

    ```bash
    <copy>npx zx scripts/tfvars.mjs</copy>
    ```

6. The script will create the `terraform.tfvars` file.
    ![Cloud Shell tfvars](./images/cloud-shell-tfvars.png)

## Task 3: Start Deployment

1. Change directory to `dev`

    ```bash
    <copy>cd dev</copy>
    ```

2. Run the `start.sh` script

    ```bash
    <copy>./start.sh</copy>
    ```

3. The script will run and it looks like this.
    ![Start SH beginning](images/start-sh-beginning.png)

4. Terraform will create resources for you, and during the process it will look like this.
    ![Start SH terraform](images/start-sh-terraform.png)

5. The final part of the script is to print the output of all the work done.
    ![Start SH output](images/start-sh-output.png)

6. Copy the Data Science notebook URL from the output variable _`ds_notebook_session`_. This is the URL we will use to connect to our Data Science environment.
    ![Start SH output](images/start-sh-ssh.png)

    > Note: login credentials for the Data Science notebook are the same as the ones used to access Oracle Cloud Infrastructure.

## Task 4: Accessing Notebook

Having just created our OCI Data Science environment, we need to install the necessary Python dependencies to execute our code. For that, we'll access our environment.

* The easiest way is to access into the notebook **through the URL** that we previously copied from Terraform's output.

    ![Start SH output](images/start-sh-ssh.png)

    If you have done it this way, make sure to **skip through to the next task**.

* (Optionally) We can also access to the notebook via the OCI console, on the top left hamburger menu:

    ![select data science](./images/select_data_science.png)

    > You may find the Data Science section by also searching in the top left bar, or in the Analytics & AI tab, if it doesn't appear in "Recently visited" for you:

    ![analytics tab](images/analyticstab.png)

    Now, we have access to a [list of our Data Science projects launched within OCI.](https://cloud.oracle.com/data-science/projects) We access our project, and inside our project we'll find the notebook.

    > The name of the notebook may be different than shown here in the screenshot.

    ![open notebook - 1](./images/open-notebook.png)

    ![open notebook - 2](./images/open-notebook2.png)

    You should now see the Jupyter environment

    ![notebook](./images/notebook.png)

## Task 5: Setting up Data Science Environment

We now need to load our notebook into our environment.
1. Opening a **Terminal** inside the _'Other'_ section the console and re-downloading the repository again:

    ![open terminal](./images/open_terminal.png)

2. Then, we re-clone the repository:

    ```bash
    <copy>git clone https://github.com/oracle-devrel/redbull-pit-strategy --branch dev</copy>
    ```

3. Install the conda environment

    ```bash
    <copy>odsc conda create -n myconda</copy>
    ```

    ![proceed](./images/proceed.png)

4. Activate the newly-created conda environment:

    ```bash
    <copy>
    conda activate /home/datascience/conda/myconda_v1_0
    </copy>
    ```

5. Install Python 3.8 within the conda environment:

    ```bash
    <copy>
    conda install -y python=3.8
    </copy>
    ```

6. Install Python dependencies:

    ```bash
    <copy>
    pip install -r redbull-pit-strategy/requirements.txt
    </copy>
    ```

> Note: make sure to accept prompts by typing 'y' as in 'Yes' when asked.

After these commands, all requirements will be fulfilled and we're ready to execute our notebooks with our newly created conda environment.

## Task 6: Accessing our Notebooks

Once we've re-downloaded the repository (or used the upload button to transfer the notebooks), we should see the repository / files in our file explorer:

![file explorer](./images/file_explorer.png)

We navigate to the _`redbull-pit-strategy/notebooks/`_ directory and open each one of the notebooks. This is the list of notebooks we will review:

* [_`00 pull data.ipynb`_](https://github.com/oracle-devrel/redbull-pit-strategy/blob/dev/notebooks/00%20pull%20data.ipynb)
* [_`01 data exploration.ipynb`_](https://github.com/oracle-devrel/redbull-pit-strategy/blob/dev/notebooks/01%20data%20exploration.ipynb)
* [_`02 merge data.ipynb`_](https://github.com/oracle-devrel/redbull-pit-strategy/blob/dev/notebooks/02%20merge%20data.ipynb)
* [_`03 Model Training.ipynb`_](https://github.com/oracle-devrel/redbull-pit-strategy/blob/dev/notebooks/03%20Model%20Training.ipynb)
* [_`04 deploy model.ipynb`_](https://github.com/oracle-devrel/redbull-pit-strategy/blob/dev/notebooks/04%20deploy%20model.ipynb)

You may now [proceed to the next lab](#next).


## Acknowledgements

* **Author** - Nacho Martinez, Data Science Advocate @ DevRel
* **Contributors** - Victor Martin - Product Strategy Director, Alireza Dibazar - Principal Data Scientist, Vesselin Diev - Senior Director of Data Science, ML Innovation Team
* **Last Updated By/Date** - May 28th, 2023
