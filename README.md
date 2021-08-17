REACT JS
===========================================================================
https://github.com/avamsykiran/ReactJS_17Aug21_03Sep21_09001100.git


Pre-Requisite
-------------------------------------
    1. HTML 5
        Standard HTML Eleemnts and Typography
        Form elements and validations
        HTML 5 API
            GeoLocation
            WebStorage
            WebWorkers
    2. CSS
    3. Javascript (ES6)
        DOM manipulataions
        Standard JS objects like String, Math, Date, global
        setInterval,clearInterval,alert,confirm,..etc
        JS Functions - arrow functions, closures, call backs,IIFE
        Spread Operator
        Destructured Assignemnt
        Promsie 
        Rest Operator

Lab Setup
----------------------------------------------------
    1. NodeJS           node --version
                        npm --version
    2. VS Code
    3. Chrome

Web Evolution
-----------------------------------------------------

    Staic Web Site

        a collection of html docuemtns called web-pages.

    Dynamic Web Application

        the page content is dynamically generated.

        Server                                                  client

            Servlets and .jsp  <--------------REQUEST(URL)--------
                            -----(dynamically generated html + css+JS)--->
            .Cs and .aspx

    Single Page Application

        is a UI/UX web appliction that has extactly one and only html page.

        Server                                                  client

            UI/UX bundle        <--------First REQ----------
            (index.html + CSS + JS)
                                -------UI bundle------------->    index.html + CSS + JS

                                                                        the JS on the cleint side
                                                                        is reposible to render and
                                                                        modify the cotnent visible on
                                                                        the screen.

            SOA (Service Oriented Applciation)

                SOAP WEbSerive/
                REST api        <---req for any data neeeded ----                                                    
                                -----------data.json/data.xml----->     the data is received and the js will
                                                                            ensure tha tthe data is presented
                                                                            on the exisitng html DOM.

Node JS
---------------------------------------------------------------------------

    is a javascript execution environment for
    stand alone or serverside execution of javascript.

    react spa is developed not on the broser.
    it is developed on the developer machine.
    for developing a React SPA
        1. have to create a project
        2. have to install all requried libraries including react library
        3. have to transspell JS(ES6) into native JS
        4. the transpelled code msut be bundled and hosted on a development server or production server
        5. have to also run test cases on our react code and the test cases will
         be executed from dev server or production server.

         And for all this we need nodejs.

    Create a react applciation in 2 ways
        1. Manually
            npm init projectNAme
            cd projectName
            npm install eact react-scripts react-dom eslint jest ...etc(all librries)
            create a index.html
            create atlest one react component
            attach the component to the index file
            
        2. Usuing React CLI tool
            npx create-react-app projectName

React JS
---------------------------------------------------------------------------

    is a SPA js library.

    1. Components
                    A single page is composed of reusable smart sections called components

                    index.html
                        HeaderComponent
                            BannerComponent
                            NavigationComponent
                        DashBoardComponent
                            SummaryComponent
                            QuickLinksComponent
                            LoginComponent
                            RegistrationComponent

                    Component   =   Behaviral Code + Template  + state + props

                                    Behavoural Code         data laoding/event handling ..etc
                                    Template                a JSX element that can render the state as 
                                                            suggested.
                                    State                   the data that the component is related to
                                    Props                   short for proeprties.
                                                            As each compoent is used as new html element,
                                                            these can have attributes and the attributes are
                                                            accessed through props.

                    Each component can be incldued into the page as ne html elements

                    HeaderComponent         <Header />
                    DashboardComponent      <Dashboard />
                    LoginComponent          <Login />


                    Class Components

                            class Navigation extends React.Component {
                                constructor(props){
                                    this.state={};
                                }

                                render(){
                                    return (
                                        <nav>
                                            <h3>{this.props.title}</h3>
                                            <a href="">...</a>
                                            <a href="">...</a>
                                            <a href="">...</a>
                                        </nav>
                                    );
                                }
                            }

                            class Header extends React.Component {
                                constructor(){
                                    this.state ={
                                        title:"some web ttle",
                                        logo:"path of the logo image"
                                    }; //define all the fields that the state must have
                                }

                                render(){
                                    //return a JSX element only one single element

                                    return (
                                        <header>
                                            <div>
                                                <h1>{this.state.title}</h1>
                                                <img src={this.state.logo}/>
                                            </div>
                                            <Navigation title={this.state.title} />
                                        <header />
                                    );
                                }

                                //method needed to do the behavirual code or event handling code..
                            }

                            index.html
                                <html>
                                    <head></head>
                                    <body>
                                        <Header />
                                    </body>
                                </html>

                    Functional Components

                        is any javascript fucntion that accepts the props and returns a JSX element

                        function MessageBox(props) {
                            return (
                                <div class="alert alert-info">
                                    <p><strong>{this.props.message}</p>
                                </div>
                            );
                        }

                        <MessageBox message="Hello everybody how are you" />

                        const Footer = (props) => (
                            <footer>
                                <!--some footer content goes here -->
                            </footer>
                        );

                        <Footer />

                    High Order Components

                        is a javascript function that accpets a component and 
                        return another component.

                        is used to attach a common functionality to multiple 
                        components. It can accept a component , and attach the
                        new capability to it and then return it.




