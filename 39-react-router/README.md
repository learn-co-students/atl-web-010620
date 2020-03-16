# React Router

- [Documentation on Github](https://github.com/ReactTraining/react-router)
- [Quick Guide](https://reacttraining.com/react-router/web/guides/quick-start)

### React Router Components

#### Router
Will use 1 place in our application (and one place only).
Very top level, essentially listening for when the route changes, and making that info accessible


```js
  // Example
    import { BrowserRouter } from 'react-router-dom'

    <BrowserRouter>
        ...
        ...
    </BrowserRouter>
```

#### Route
Conditionally render a certain component based on what the route looks like

```js
  // Example
    import { Route } from 'react-router-dom'

    <Route path="/" component={...} />
      ...
    <Route path="/home" component={...} />
    // When to use 'exact' keyword?
```

#### Link
Changes the url we see in the browser, must have a 'to' prop

```js
  // Example
    import { Link } from 'react-router-dom'
    ...
      <Link to="/home"/> // => (?)
    ...
```

#### Switch
Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if)

```js
  // Example
    import { Switch } from 'react-router-dom'
      ...
      <Switch>
        ...
      </Switch>
```

#### Redirect

```js
  // Example
    import { Redirect } from 'react-router-dom'
    ...
      <Redirect to='/login' />
    ...
```


### Benefits
- Faster (Client Side Routing)
- UI in sync with the URL (Dynamic Route Matching)
- Easy to implement navigation
- Still a SPA (Single Page Application)
