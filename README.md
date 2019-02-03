## Getting Started

Install all of the dependencies

```javascript
npm install
```

Start the app

```javascript
npm run start
```

Run the tests

```javascript
npm run test
```

## Overview

This is pretty simple take on the taco shack exercise. There are only a few different "pages":

- **/(root)** start page
- **/item** select the type of item you want to build
- **/meat** select a meat that you'd like on your item
- **/salsa** select the salsa
- **/drink** decide if you'd like a drink or not
- **/confirmation** review your selections and ensure the prices are correct
- **/complete** final page after the order is confirmed

## Structure

The app is split up into individual files for each of the "pages". In some cases, I pull out sections of a component into a FunctionComponent to make it a bit easier to digest what's happening. If that component that I split out is used in multiple places, I pull it to its own file, otherwise it will generally be put to the bottom of the file.

Since this was a simple, small app, I didn't feel the need to include redux/mobx. I think a lot of times, developers jump the gun on that decision and introduce uneccessary complexity to their app.

You'll also notice that I'm leveraging Typescript, which I think makes development much easier.

## Routing

I'm using react router v4 to handle all of the routes. I probably didn't need to use this, but it makes it possible to go back and forth between screens with ease.

## Images

I'm using SVG icons for all of the selections you can make, which I included a simple custom type for to make Typescript happy.

## Styled Components

I'm using styled-components for the styling on this app. In a real app, I would likely change the orginization of the styles, but for this I basically put any global styles into the root container, AppContainer. While building components and adding new styles, if they were isolated to a specific file, I'd create a new container and add the styles there.

## Tests

I could definitely go into more detail with the unit tests for this little app, but focused on the core logic which mainly exists on the confirmation age. It's important that the calculations are correct, so that's what I wrote tests for.
