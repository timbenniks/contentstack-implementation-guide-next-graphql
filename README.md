# Contentstack Kickstart: Next.js GraphQL

Contentstack Kickstarts are the minimum amount of code needed to connect to Contentstack.
This kickstart covers the following items:

- SDK initialization
- Live preview and Visual building setup

> This example has Contentstack Live preview set up with GraphQL and SSR mode turnt on. Which means Contentstack adds query parameters to the URL which we grab in the code and give to the Live Preview SDK intance. Contentstack refreshes the browser on content edit each time.

More details about this codebase can be found on the [Contentstack docs](https://www.contentstack.com/docs/developers).

[![Join us on Discord](https://img.shields.io/badge/Join%20Our%20Discord-7289da.svg?style=flat&logo=discord&logoColor=%23fff)](https://community.contentstack.com)

## How to get started

Before you can run this code, you will need a Contentstack "Stack" to connect to.
Follow the following steps to seed a Stack that this codebase understands.

> If you installed this Kickstart via the Contentstack Markertplace or the new account onboarding, you can skip this step.

### Install the CLI

```bash
npm install -g @contentstack/cli
```

### Log in via the CLI

```bash
csdx auth:login
```

### Get your organization UID

In your Contentstack Organization dashboard find `Org admin` and copy your Organization ID (Example: `blt481c598b0d8352d9`).

### Create a new stack

Make sure to replace `<YOUR_ORG_ID>` with your actual Organization ID and run the below.

```bash
csdx cm:stacks:seed --repo "contentstack/kickstart-stack-seed" --org "<YOUR_ORG_ID>" -n "Kickstart Stack"
```

## Create a new delivery token.

Go to `Settings > Tokens` and create a delivery token. Select the `preview` scope and turn on `Create preview token`

## Fill out your .env file.

Now that you have a delivery token, you can fill out the .env file in your codebase.

> You can find the API key, Delivery Token and Preview Token in Settings > Tokens > Your token.

```
NEXT_PUBLIC_CONTENTSTACK_API_KEY=<YOUR_API_KEY>
NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=<YOUR_DELIVERY_TOKEN>
NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN=<YOUR_PREVIEW_TOKEN>
NEXT_PUBLIC_CONTENTSTACK_REGION=<YOUR_REGION>
NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=preview
NEXT_PUBLIC_CONTENTSTACK_PREVIEW=true
```

## Turn on Live Preview

Go to Settings > Live Preview. Click enable and select the `Preview` environment in the drop down. Hit save.

## Install the dependencies

```bash
npm install
```

### Run your app

```bash
npm run dev
```

### See your page visually

### In the browser

Go to `http://localhost:3000`.

#### In the CMS

Go to Entries and select the only entry in the list.
In the sidebar, click on the live preview icon.
Or, see your entry in the visual builder
