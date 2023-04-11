# reactjs
Learning journey of reactjs

## what is React?
React is a javascript Library for building User Interfaces.

### javascript library -> <br/> 
It is about building javascript-driven apps, react apps run on browser. They don't run on server, that gives as an great advantage to things happen instanly on user's browser.we don't wait for server response to get a new page or render something new. <br/>

###  user interfaces -> <br/> 
React is all about components, you can split up your web app/web page as a separate component. Using components codes are more manageable and reusable if any thing wrong you can go to that particular component and update it. <br/>
React component = custom HTML element. <br/>
example : `<Header/>, <Sidebar/>, <Footer/>`,etc. <br/>

### first react code -> <br/>
Recommented online code editor : codepen.io <br/>
**There a another branch for code examples you can find out all code examples. On that branch.** <br/>
First react code example on codepen.io : [code example](https://codepen.io/sarveshshreekumaran/details/yLRyXQb) <br />

## Why react ? <br />
- UI state becomes difficult to handle with vanilla javascript.
- Focus on business logic, not on preventing your app from exploding.
- Huge ecosystem. active community, high performance. <br/>

### React alternatives ->
Angular, Vuejs, Backbonejs, Ember. <br/>
Most recommented alternatives are : Angular, vue. <br />

### Two kinds of web applications -> <br/>
- single page application 
- multi page application <br/>

### single page application : <br/>
we get only one HTML page from the server, and that all managable by javascript with react. <br/>

### multi page application :  <br/>
we can get multiple HTML pages where each page has the content for a given route. <br/>
example : example.com/users <br/>
In multi page application we only use react for to create little widgets. <br/>

Most popular approach is **single page application.** Because entire page is manage by javascript, and you never go back to the server and reload the page. <br/>
  
**Single page application** built up with components and every component is a react component. so that the entire page is managed by root react component, which means all are under react's control. <br>

**Multi page application** lot of the page is just going to be normal HTML and CSS and some widgets only are built with react. eg:Image gallery etc,. <br/>

**single page application** : Typically only one ReactDOM.render() call. <br/>
**multi page application** : One ReactDOM.render() call per "widget" in different page. 

  
