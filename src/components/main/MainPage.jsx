import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import SearchMenu from '../search/SearchMenu'

function MainPage () {
  return (
    <div>
      <h2 className="text-center">
        <FormattedMessage
          id="main.welcome"
          description="Welcome header text"
          defaultMessage="Welcome to Xea"
        />
      </h2>
      <div className="row">
        <SearchMenu />
      </div>
      <p className="row text-center">
        <FormattedMessage
          id="main.description"
          description="Description that tell people what they can see in the main page"
          defaultMessage="Here you can see a list with near events"
        />
      </p>
    </div>
  )
}

export default injectIntl(MainPage)
