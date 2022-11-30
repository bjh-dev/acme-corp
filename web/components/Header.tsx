import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import styles from '@/components/Header.module.css';
import HamburgerIcon from '@/components/icons/Hamburger';
import { getPathFromSlug, slugParamToPath } from '@/lib/urls';
import { HeaderProps, LogoProps } from '@/lib/types';

class Header extends Component<HeaderProps> {
  state = { showNav: false };

  componentDidMount() {
    const { router } = this.props;
    router.events.on('routeChangeComplete', this.hideMenu);
  }

  componentWillUnmount() {
    const { router } = this.props;
    router.events.off('routeChangeComplete', this.hideMenu);
  }

  hideMenu = () => {
    this.setState({ showNav: false });
  };

  handleMenuToggle = () => {
    const { showNav } = this.state;
    this.setState({
      showNav: !showNav,
    });
  };

  renderLogo = (logo: LogoProps) => {
    if (!logo || !logo.asset) {
      return null;
    }

    if (logo.asset.url && logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className={styles.logo} />;
    }

    return (
      <img src={logo.asset.url} alt={logo.title} className={styles.logo} />
    );
  };

  render() {
    const { title = 'Missing title', navItems, router, logo } = this.props;
    const { showNav } = this.state;

    return (
      <div className={styles.root} data-show-nav={showNav}>
        <h1 className={styles.branding}>
          <Link href={'/'}>
            <a title={title}>{this.renderLogo(logo)}</a>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems &&
              navItems.map((item) => {
                const { slug, title, _id } = item;
                const isActive =
                  slugParamToPath(router.query.slug) === slug.current;
                return (
                  <li key={_id} className={styles.navItem}>
                    <Link href={getPathFromSlug(slug.current)}>
                      <a
                        data-is-active={isActive ? 'true' : 'false'}
                        aria-current={isActive}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
          <button
            className={styles.showNavButton}
            onClick={this.handleMenuToggle}
          >
            <HamburgerIcon className={styles.hamburgerIcon} />
          </button>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
