# gatsby-contentful-blog-portfolio

Gatsby [Contentful](https://www.contentful.com) starter for creating a portfolio with a blog, helpful for businesses o freelancers!

[![Netlify Status](https://api.netlify.com/api/v1/badges/caf75181-f370-4f51-bb2b-78724a300f6a/deploy-status)](https://app.netlify.com/sites/gatsby-contentful-portfolio-blog/deploys)

![Gatsby Starter Homepage](./media/gatsby-starter-index.png)

### [Give a look to the Demo ✨](https://gatsby-contentful-portfolio-blog.netlify.com/)

### If this starter was helpful, please consider giving it a star! I would really appreciate that :)


## Features

* Simple structure for a blog, with articles and categories, and a portfolio! All using Contentful!
* [Gatsby v2](https://www.gatsbyjs.org/)
* [Netlify](https://www.netlify.com) Deployment Friendly
* Designed with styled-components
* Graphql
* Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)

## Requirements

You just need a Contentful account. Create one at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

Install Yarn or Npm

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful-userland/gatsby-contentful-starter.git
$ cd gatsby-contentful-starter
$ npm install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter https://github.com/contentful-userland/gatsby-contentful-starter
```

### Set up Contentful

Just use `npm run setup`. It will guide you through the configuration.

You can find the information requested in your Contentful space, in Settings -> API KEYS

After that, the CLI will automatically starts copying all the necessary model into your space (also creating a new .env file)

### Now just run: gatsby develop
