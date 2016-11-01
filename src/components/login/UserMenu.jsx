import React, { PropTypes } from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { injectIntl, FormattedMessage } from 'react-intl'

function UserMenu (props) {
  return (
    <DropdownButton
      id="loginDropdown"
      className="btn btn-link navbar-btn btn-as-navbar-link"
      title={props.username}
    >
      <MenuItem>
        <FormattedMessage
          id="userMenu.item.profile"
          description="Profile menu item"
          defaultMessage="Profile"
        />
      </MenuItem>
      <MenuItem onClick={props.handleLogout}>
        <FormattedMessage
          id="userMenu.item.signOut"
          description="Sign out menu item"
          defaultMessage="Sign out"
        />
      </MenuItem>
    </DropdownButton>
  )
}

UserMenu.propTypes = {
  username: PropTypes.string,
  handleLogout: PropTypes.func
}

export default injectIntl(UserMenu)
