# merchant_portal

This is a admin portal for owners of venues that will be signing up on the Huddle app. It was adapted from a financial crypto investment portal, which is why you may find traces of components and code that is irrelvant to the Huddl functionality.

This is quite a complex repository which will require a bit of code reading before understanding it fully but I can point out the following structural paradigms:

## Components & Models

Its always a good idea to try and separate business logic, state and rendering code. In this repository, I use the concept of model components which act as the business logic and state manipulation layer. A model component is responsible for selecting the state needed by the component, as well as implementing things like event handling and lifecycle hooks. Model comoponents are actually HOC (Higher Order Components) - they are functions that accept a component, add in the state and functionality and return the composed component. So you will see presentational components being exported wrapped in their model components like `export default DashboardModel(Dashboard);`

## Redux

State is managed by modular redux, separated out by logical concerns (auth, businesses, offers etc). For more info see redux documentation https://redux.js.org/

## Redux-Saga

Asynchronous actions, such as calls to API's or other promise-based functionality are implemented using Redux-Saga. For more information see https://redux-saga.js.org/

## Other notable libraries used include:

https://ant.design/ - component library used to quickly build out complex components and theming
https://www.styled-components.com/ - styling components using CSS-in-JS

