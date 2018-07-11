import React, { Component } from 'react';
import './App.css'; //App-specific styling

import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';


const BLOG_POSTS = { //model for demoing
  '2018-07-11':"Still no sleep...",
  '2018-07-09':"Today I did not get any sleep either",
  '2018-07-08':"Today I did not get any sleep",
  '2018-07-04':"It was the 4th of the July. I worked.",
};

class App extends Component {
  render() {
    let postLinks = Object.keys(BLOG_POSTS).map((date) => {
      return (
      <li key={date}>
        <Link to={'/blog/posts/'+date} className="nav-link">{date}</Link>
      </li>
      )
    });

    let renderWelcomeFunction = (routerProps) => {
      return <WelcomePage {...routerProps} greetee="y'all"/>;
    }

    return (
      <BrowserRouter>
        <div className="container">
          <h1>My Blog</h1>
          <nav>
            <ul className="nav">
              <li>
                <NavLink exact to='/' className="nav-link" activeClassName="activeLink">Home</NavLink>
              </li>
              <li>
                <NavLink to='/about' className="nav-link"  activeClassName="activeLink">About</NavLink>
              </li>
              <li>
                <NavLink to='/blog' className="nav-link"  activeClassName="activeLink">Blog</NavLink>
              </li>
              {postLinks}
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' render={renderWelcomeFunction} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/blog' component={BlogPostList} />
            <Route path='/blog/posts/:postDate' component={BlogPost} />
            <Route path='/blog/posts/:postDate/:other' component={BlogPost} />
            <Route path='/' component={WelcomePage} /> {/* default */}
          </Switch>

          {/* <WelcomePage greetee="y'all" /> */}
          {/* <AboutPage />
          <BlogPostList /> */}
        </div>
      </BrowserRouter>
    );
  }
}


class WelcomePage extends Component {
  render() {
    console.log(this.props);

    return (
      <p className="lead"><strong>Welcome {this.props.greetee}</strong> to my blog, Where I post micro updates about whatever stuff is of interest to me <Link to='/blog'>See the blog!</Link></p>
    );
  }
}

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit, libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
      </div>
    );
  }
}

class BlogPostList extends Component {
  render() {
    let postItems = Object.keys(BLOG_POSTS).map((date) => {
      return <BlogPost key={date} date={date} />
    })

    return <div>{postItems}</div>
  }
}

class BlogPost extends Component {
  constructor(props){
    super(props);
    this.state ={shouldRedirect: false}
  }

  render() {

    //console.log(this.props.match.params);

    let date = this.props.date || this.props.match.params.postDate

    if(date === 'myfoot'){ //is bad
      return <Redirect to='/blog'/>;
    }

    if(this.state.shouldRedirect){
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <h2>Post on {date}</h2>
        <p>{BLOG_POSTS[date]}</p>
        <button onClick={() => this.setState({shouldRedirect: true})}>Go Home</button>
      </div>
    );
  }
}


export default App;