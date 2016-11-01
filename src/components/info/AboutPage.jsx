import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'

// Since this component is simple and static, there's no parent container for it.
function AboutPage () {
  return (
    <div>
      <h2 className="text-center">
        <FormattedMessage
          id="aboutPage.title"
          description="Main title in about page"
          defaultMessage="About"
        />
      </h2>
      <p>
        <FormattedMessage
          id="aboutPage.footer.text1"
          description="Text 1 in about page footer"
          defaultMessage="With "
        />
        <span className="fa fa-heart" />
        <FormattedMessage
          id="aboutPage.footer.text2"
          description="Text 2 in about page footer"
          defaultMessage=" from XEA contributors and"
        />
        <a target="_blank" rel="noopener noreferrer" href="http://gpul.org/">
          <FormattedMessage
            id="aboutPage.footer.text3"
            description="Text 3 in about page footer"
            defaultMessage=" GPUL"
          />
        </a>
        <FormattedMessage
          id="aboutPage.footer.text4"
          description="Text 4 in about page footer"
          defaultMessage=" association"
        />
      </p>
    </div>
  )
}

export default injectIntl(AboutPage)
