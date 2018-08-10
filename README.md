# next-firebase-starter

A starter kit for working with NextJS and Firebase (Hosting, Cloud Functions, Firestore, and Storage) with baked in support for TypeScript.

The project is configured to use next-routes for custom routing and :slug support. 

Routes are added in two places depending on how you want to serve your app.

Client routes are added in `src/app/config/routes`. Any routes which contain `prerender: true` will also be exported to static pages for serving on Firebase Hosting.

SSR routes are added in `src/functions/src/config/routes`. Add routes here if you have routes whicb are dynamically generated but also want the to be SEO friendly.

*Todo*
1)  Add testing
2) Improve routeing
3) Possibly nacke in redua and afurebase authentication




