ReactJS is a popular JavaScript library for building user interfaces.
- Competitors include AngularJS, EmberJS, VueJS.
    - developed by Facebook
- good to use with Redux, a global state container
- controls the View in MVC
- increased application performance, can be used client *and* serverside, and better code readability, can be integrated with other frameworks

###Traditional Data Flow vs ReactJS
|TDF|ReactJS|
|---|-------|
|uses DOM | uses virtual DOM |
|requires refresh to update view| affects only changed component, calculates & delivers changes|
|more memory consumption| more efficient using diffs|
|slow| responsive|

**Install**: npm install -g create-react-app  
**Usage**: create-react-app app-name

###Virtual DOM
- displays elements as objects and properties just like a DOM
- React uses VDOM to receive changes, render a new representation, calculate diffs between the new and old representation, and compute the most efficient way to push changes to the DOM (sort of patching the DOM)

###Data Binding (one-way)
- advantage: unidirectional data flow is easier to control
- goes from Actions -> Dispatcher -> Store -> View

###Serverside Rendering
- rendering done serverside is faster, browser doesn't have to wait for full JS load

### (JavaScript Syntax Extension)
- a preprocessor step that adds XML to the JavaScript
- allows for mixing HTML & JS; returns HTML elements
- tags have a tag name, attributes, and children
  - attributes wrapped in "" quotes are a *string*; otherwise is a *JS expression* that s/b wrapped in {} brackets.
- instead of DOM's `class` attribute, JSX uses `className` because it's technically JavaScript

###Creating Components
1) Class Method
```
class App extends Component { //inherits properties of Component from React
  render() {
    return(
      <h2>Hello World</h2>
      )
  }
}
```
2) Functional Method (older)
```
var HelloWorld = React.createClass({
  render: function() {
    return (
      <h2>Hello World</h2>
      )
  }
  })
```
```
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
  );
```


###Class Component
- building block of React
- has external props
- can be nested and used through multiple projects
- must have `render()` method & uses `this.props` instead of `props` of functional component
- has modifiable internal state (which contains the data used by that component)
  - set initial internal state using:
      ```
      class App extends Component {
        constructor(props) {
          super(props);       //parent constructor

            this.state = {  //initial state
              todos
            };
          }
      ```    

###Controlled Components
- components that don't keep their own state, but instead receive a value from parent (only accepts props), and informs parent of changes
- if the component consists of only a `render` method, we can turn it into a **(stateless) functional component***
```
function ListItem(props) {
  return (
    <li>
      {props.item}
    </li>
    );
}
```

###Props
- external qualities handed to component
- component cannot change props
- can set default props through:
```
getDefaultProps: function() {
  return {
    key: "value"
  }
}
```

###State
- internal info about component
- there's an initial state
- we change the state via this.setState

###render() method
- is called whenever state changes
- Virtual DOM - computes most efficient way to add/delete things from page
  - does not reload all components; React computes and controls how changes occur in the most efficient manner


##Tips
- **Pull state upwards to the parent component** when aggregating data from multiple children or having two children components communicate. The parent can pass the state down to the children via props to keep everything in sync
- Use `on` names (onClick) for attributes, and `handle` names (handleClick) for handler methods
- **Don't mutate data** and instead replace data with a new, modified copy of object
    - easier to undo/redo, and travel back to earlier data versions
    - use pure functions that don't change the inputs(props)

===========
#Building Blocks of React
**Element**(Smallest piece, transpiles into plain object)
  - immutable! can't change children or attributes
  **Component** (comprised of elements)
  - the isolated, reusable building blocks of the UI
  - comparable to JS functions, as they receive inputs/args `props`, and return elements
**root div** (located in HTML file, the root DOM node will be managed by React DOM. In applications built purely in React, there's only one root. But when integrating React into existing apps, there may be many)

`ReactDOM.render()` gets passed both the element and root node like so:
```
ReactDOM.render(
  element,
  document.getElementById('root')
  );
```

##LifeCycle Hooks
- free up resources taken by components when not in use
  - mounting: when component is rendered to the DOM for the first time
  - unmounting: when the DOM produced by the component is removed
`componentDidMount() {}` and `componentWillUnmount() {}`  
