# Template Serverless + Localstack

## Prerequisite Software

Before you can work with this project, you must install and configure the following products on your development machine:

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) on Mac computers, it's easier to install it using Homebrew: `brew install awscli`
- [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or [Windows](http://windows.github.com))
- [Node.js](http://nodejs.org) - **Current version** _v14_
- [Serverless](https://www.serverless.com/framework/docs/getting-started/)
- [Docker](https://docs.docker.com/engine/install/)
- [Yarn](https://yarnpkg.com/getting-started/install)

It is recommendable to install node via [NVM](https://github.com/nvm-sh/nvm)

## Set up your AWS Credentials

1. Log in into [Aws Console](https://mna.awsapps.com/start)
2. Expand **Aws Account** --> _Command line or programmatic access_
3. Find and copy **AWS Access Key ID** and **AWS Secret Access Key**

Now you have the information required to create a credential file:

```shell
# Run
> aws configure

# Required Data
> AWS Access Key ID [None]: XXXXXXXXXXXXXXXXXXXXX
> AWS Secret Access Key [None]: XXXXXXXXXXXXXXXXXXXXX
> Default region name [None]: us-east-1
> Default output format [None]: json
```

Now validate that changes have been saved

```shell
cat ~/.aws/credentials
```

## Configure AWS Locally

Create your local profile:

```shell
# Set aws profile
> aws configure sso --profile your-aws-profile
```

These are some configuration values:

```shell
> sso_start_url = https://mna.awsapps.com/start
> sso_region = us-east-1
> region = us-east-1
> output = json
```

## Getting the Sources

Clone this repository:

```shell
# Clone
> git clone git@gitlab.com:mna-open-source/template-serverless-localstack.git


# Go to the sources directory:
> cd template-serverless-localstack

```

## Installing NPM Modules

Next, install the JavaScript modules needed to build and test the app:

```shell
# Install project dependencies (package.json)
> yarn
```

## Quick Start

How to run your local environment.

```
yarn aws-sso-login
yarn sso-login
```

To test it, issue the following command

```
yarn invoke:world 
```
