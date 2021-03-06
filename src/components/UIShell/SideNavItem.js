import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const SideNavItem = ({ className: customClassName, children }) => {
  const className = cx('bx--side-nav__item', customClassName);
  return <li className={className}>{children}</li>;
};

SideNavItem.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: PropTypes.node.isRequired,
};

export default SideNavItem;
