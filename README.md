# W09D02

## Redux
```
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time-traveling debugger.
```

## Get Start:
###### Start React
```
npx create-react-app my-app
cd my-app
npm start
```

###### Start Redux
> install 
```
npm i redux
npm i react-redux
npm i redux-devtools-extension
```
> Reducers
  1. index.js
  2. task.js
  3. login.js

> should start by wrapping your entire application in a <Provider> component to make the store available throughout the component tree.

```
const store = createStore(rootReducer)

<Provider store={store}> </Provider>
```

> useDispatch
```
The equivalent of map dispatch to props is useDispatch. 
We will invoke useDispatch and store it to a variable, dispatch. 
Dispatch will work with all actions imported from the actions folder. 
```
  
> useSelector
```
useSelector is a function that takes the current state as an argument 
and returns whatever data you want from it and it allows you to store 
the return values inside a variable within the scope of 
you functional components instead of passing down as props
```
