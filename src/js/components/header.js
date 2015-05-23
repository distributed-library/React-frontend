import React from 'react';

export default class HeaderLayout extends React.Component {
  render(){
    return <header className="navbar navbar-inverse navbar-static-top bs-docs-nav" role='banner'>
      <div className='container'>
        <div className='navbar-heder'>
          <a href="#" className='navbar-brand'>
            Distributed Library system
          </a>
        </div>

        <nav className="collapse navbar-collapse bs-navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href='#signin'> Sign In </a>
            </li>

            <li>
              <a href='#signup'> Sign UP </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  }
}
