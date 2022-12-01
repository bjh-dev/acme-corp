import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

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
      return <SVG src={logo.asset.url} />;
    }

    return <img src={logo.asset.url} alt={logo.title} />;
  };

  render() {
    const { title = 'Missing title', navItems, router, logo } = this.props;
    const { showNav } = this.state;

    return (
      <div data-show-nav={showNav}>
        <h1>
          <Link href={'/'} title={title}>
            {this.renderLogo(logo)}
          </Link>
        </h1>
        <nav>
          <ul>
            {navItems &&
              navItems.map((item) => {
                const { slug, title, _id } = item;
                const isActive =
                  slugParamToPath(router.query.slug) === slug.current;
                return (
                  <li key={_id}>
                    <Link
                      href={getPathFromSlug(slug.current)}
                      data-is-active={isActive ? 'true' : 'false'}
                      aria-current={isActive}>

                      {title}

                    </Link>
                  </li>
                );
              })}
          </ul>
          <button onClick={this.handleMenuToggle}>
            <HamburgerIcon />
          </button>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
