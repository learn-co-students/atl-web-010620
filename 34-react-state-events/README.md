## State, Events and Forms

## SWBATs
- [ ] Add Event handlers to elements in React
- [ ] Explain why we have Synthetic Events
- [ ] Instantiate `state` inside and outside of the `constructor`
- [ ] Create event handler callbacks that manipulate `state`
- [ ] Trigger re-renders by calling `setState`
- [ ] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [ ] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other
- [ ] Controlled Components
- [ ] Adding a controlled form to a component

## Notes:

### Visualization
- Creating component hierarchy
- Determining data flow

### Using Events
```javascript
1. find the DOM element
   const div = document.getElementById('container')

2. Adding an event listener to it
   div.addEventListener()

3. Giving it a callback
   div.addEventListener('click',(e)=> console.log('clicked'))
```

In react we don't need to do step 1, we can skip directly to step 2 by adding event handlers directly to our JSX. *Note:* We still must provide the event handler.

### Events
Synthetic events ensure that you can use the `event` object in the same way regardless of browser or machine. This comes back to the `learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

Because the event object in React is a Synthetic Event that is pooled, the event loses its value after some time. This means that in asynchronous events (intervals, timeouts, fetches) events will lose their values. Must use `event.persist()` to keep values around.

### State
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM.

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually precipitate changes to the DOM

`setState` is a function inherited from `React.Component` and is used to change state. You MUST use setState if you wish to re-render your component - direct mutations to state will NOT trigger a re-render.

`setState` is asynchronous - this means that code written immediately after a setState will not see changes in your state. If you wish to call a function after state has been changed, you can pass a callback as the second argument to setState

`setState` can take an object OR a function as its first argument. Use the function when you intend to use the old state values when writing the new state values.

### Props
You can pass anything in props, even functions! We will often find ourselves passing functions down to children components - this is because while we might need state in one part of our application, our event listener might be attached to an entirely different component. To get around this, we define our state-changing functions in a component and then pass these functions downwards to be called by children components.

### Conditional Rendering

### Functional vs Class Components

### Presentational vs Container Components

### Controlled Component
A component that combines its own state with React state.
- Checkout: [Documentation](https://reactjs.org/docs/forms.html)

### Uncontrolled Component
A component that stores its own state internally.
