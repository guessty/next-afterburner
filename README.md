# next-firestack

A highly opinionated boilerplate for rapid development of production sites using NextJS and Firebase.

## The Problem

It's 2018 and JavaScript development has never been so productive.

Cloud architecture is awesome and hosting a site is super simple.

There's just 2 things that stand in your way before you can get cracking:

1) What stack you choose? React or Vue? Prerender or SSR? Firebase or AWS?

2) And how the hell do you configure them to work together?

## The Solution

** And this is where the opinionated part comes in... **

This project provides you with the necesseary stack and configuration to get you started right away.

The stack choices and configuration are shamelessly based on personal preference and built to get the job done.

## The Stack

1) TypeScript

2) React, Redux & NextJS

3) Firebase (Authentication, Hosting, Fuctions, Storage & Firestore)

4) Styled Components and SASS

5) Jest & Enzyme

## Installation

1) `yarn global add create-next-firestack`

2) `create-next-firebase <my-app>`

3) `cd <my-app>`

4) `yarn start`

## Features

** It should go without saying that a Firebase account is required for you to be able to work with this project **

### Prerender pages by default with support for dymanic SSR pages if needed (NextJS, Firebase Hosting and Cloud Functions).

Statically exported pages are great when it comes to speed of access and cost of hosting. For this reason the project is configured to export static pages by default and you can deploy to Firebase Hosting with a single command.

If your site starts to get a bit more complicated and you find certain pages have dynamic content, you can opt to skip prerendering of those pages and push the rendering to Cloud Functions. A preconfigured Cloud Function will then spin up a server and render those pages on the fly preserving any SEO goodness.

### User Sign Up/Authentication by default (Redux, Firebase Authentication)

User sign up and login is handled by Firebase Authentication and enabled by default.

Authentication is restricted to Social Sign In using a Google account. This could easily be extended to supporte the traditional login or other social logins if needed.

### Store data and images with ease (Firebase Storage and Firestore)

Preconfigured to work from the client. Add your rules and you're good to go.

### Application State (Redux)

There if you need it.

### Testing and Linting (Jest & Enzymne)

All testing is confgured and ready to go.

## To Do

1) ~~Add suppprt for testing~~
2) ~~Improve routing~~
3) Emulate cloud functions in dev env
4) ~~Add in redux~~
5) ~~Provide out of the box support for firebase authentication with sign in/up forms~~

