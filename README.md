# next-firebase-starter

**The project is based on a few of the next examples but set up for my own needs.**

A starter kit for working with NextJS and Firebase (Hosting, Cloud Functions, Firestore, and Storage) with baked in support for TypeScript.

It also uses next-routes for custom routing and :slug support. Routes are added in two places depending on how you want to serve your app.

Client routes are added in `src/app/config/routes`. Any routes which contain `prerender: true` will also be exported to static pages for serving on Firebase Hosting.

SSR routes are added in `src/functions/src/config/routes`. Add routes here if you have routes whicb are dynamically generated but also want the to be SEO friendly.

*Todo*
1) Add testing
2) Improve routing
3) Emulate cloud functions in dev env
4) Add in redux
5) Provide out of the box support for firebase authentication with sign in/up forms

