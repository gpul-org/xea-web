import React from 'react'
import { Link } from 'react-router'
import { injectIntl, FormattedMessage } from 'react-intl'

import LogInAndOut from '../login/LogInAndOut'

function MainToolBar (props) {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">XEA</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/about">
                  <FormattedMessage
                    id="mainToolBar.about"
                    description="About link in main toolbar"
                    defaultMessage="About"
                  />
                </Link>
              </li>
            </ul>
            <LogInAndOut />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default injectIntl(MainToolBar)
