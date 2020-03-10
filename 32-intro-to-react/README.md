# Intro to React

### SWBATs

- [x] Visualize / Identify components on any Websites
- [x] Explain what a component is conceptually in the UI
- [x] Explain Babel's purpose in React
- [x] Explain what a component actually is in code
- [x] Using JSX to build custom components and render them in browser
- [x] Props are to components as arguments are to functions

### Check out:
- [React Documentation](https://reactjs.org)

#### Fundamentals:
- Declarative
- Component Based
- Learn once, Write Anywhere

##### Imperative vs Declarative Programming
```javascript
// Imperative
const div = document.createElement('div')
div.textContent = "Hello World!"
const container = document.getElementById('container')
container.appendChild(div)

const div = document.createElement('div')
div.textContent = "Good Bye!"
const container = document.getElementById('container')
container.appendChild(div)

// Declarative
function addDiv(phrase){
  const div = document.createElement('div')
  div.textContent = phrase
  const container = document.getElementById('container')
  container.appendChild(div)
}

```

#### Examples
- [Airbnb](https://www.airbnb.com)

### Abstraction

#### 1. Static
````javascript
ReactDOM.render(
  <div>
    <h1> Hello, World! </h1>
    <h1> How you doin? </h1>
    <h1> Ssup? </h1>
  </div>,
  document.getElementById('root')
);
````

#### 2. Dynamic
````javascript
function greeting(phrase){
  return <h1>{phrase}</h1>
}

ReactDOM.render(
  <div>
    {greeting("Hello, World!")}
    {greeting("Hello, World!")}
    {greeting("Hello, World!")}
  </div>,
  document.getElementById('root')
)
````

#### 3. Static component with JSX
````javascript
function Greeting(){
  return <h1>Hello, World! </h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>,
  document.getElementById('root')
)
````

#### 4. Final Dynamic & Reusable
````javascript
function Greeting(props){
  return(
    <h1>{props.phrase}</h1>
  )
}

ReactDOM.render(
  <div>
    <Greeting phrase="Hello, World!"/>
    <Greeting phrase="How you doin?"/>
    <Greeting phrase="Ssup?"/>
  </div>,
  document.getElementById('root')
)
````

### To-do(s)

- [x] Learn how to identify components on a page, visually
- [ ] Understand how ````create-react-app```` works and what it offers a developer
- [ ] Learn the difference between props and state and why one would use one or the other
- [ ] Get more familiarity with component hierarchy and flow of information

#### Getting started

```javascript
 // Creating an application
  npx create-react-app my-app
  cd <Application_Name>

 // --> Checkout package.json before you run below command
  yarn add <Package_Name>
 //e.g.
  yarn add semantic-ui-css
 // --> Checkout package.json again
```

#### Import - Export
- Way to share information across files

#### Thinking about props
- Props are to components as arguments are to a function

#### Introduction to State
- Similar to an instance variable that can hold information
- Similar to an instance variable that a component can manage by itself and change over time.
- i.e. ```` Using state to hold user input! ````
