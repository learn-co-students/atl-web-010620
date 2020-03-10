### Book Data

```js
const data = [
  {
    title: 'Harry Potter the First',
    author: 'JK Crawling',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'
  },
  {
    title: 'Harry Potter the Second',
    author: 'JK Crawling',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg'
  },
  {
    title: 'Harry Potter the Third',
    author: 'JK Crawling',
    img: 'https://i5.walmartimages.com/asr/6203b8f8-2b25-4210-8f86-74bd8f29cad4_1.7fb18bac579090c28ec66e3a28d1c801.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff'
  }
]
```


### Header
```jsx
  <header>
    <h1> Book App (not Amazon duh!) </h1>
  </header>
```

### Card Container

```jsx
  <div className="card-container">

  </div>
```


### Card

```jsx
  <div className="card">
    <img src={} alt="" />
    <h3>Book Name: {} </h3>
    <h3>Author: {} </h3>
  </div>
```

### css: App.css

```css
.App {
  text-align: center;
}

.card img{
  height: 300px
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
