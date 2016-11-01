import React from 'react'
import { Link } from 'react-router'
import { injectIntl, FormattedMessage } from 'react-intl'

function NotFoundPage () {
  return (
    <div>
      <h4>
        <FormattedMessage
          id="notFoundPage.title"
          description="Page not found title"
          defaultMessage="Page Not Found"
        />
      </h4>
      <Link to="/">
        <FormattedMessage
          id="notFoundPage.goBackLink"
          description="Link to go back to the main page"
          defaultMessage="Go back to homepage"
        />
      </Link>
    </div>
  )
}

export default injectIntl(NotFoundPage)
