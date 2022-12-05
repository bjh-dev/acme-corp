import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React, { Component } from 'react';

import HamburgerIcon from '@/components/icons/Hamburger';
import { HeaderProps, LogoProps } from '@/lib/types';
import { getPathFromSlug, slugParamToPath } from '@/lib/urls';

import Logo from '../ui/Logo';

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

  render() {
    const { title = 'Missing title', navItems, router, logo } = this.props;
    const { showNav } = this.state;

    return (
      <div data-show-nav={showNav} className="py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1>
                <Link href={'/'} title={title}>
                  <div className="w-36 relative object-cover">
                    <Logo layout="horizontal" />
                  </div>
                </Link>
              </h1>
            </div>
            <div className="flex space-x-2">
              <nav>
                <ul className="flex space-x-2">
                  {navItems &&
                    navItems.map((item) => {
                      const { slug, title, _id } = item;
                      const isActive =
                        slugParamToPath(router.query.slug) === slug.current;
                      return (
                        <li key={_id} className="px-2 py-1">
                          <Link
                            href={getPathFromSlug(slug.current)}
                            data-is-active={isActive ? 'true' : 'false'}
                            aria-current={isActive}
                            className={`hover:text-indigo-500 border-b-2 border-zinc-50 dark:border-zinc-800 hover:border-zinc-800 dark:hover:border-zinc-50 pb-2 ${
                              isActive ? 'text-indigo-500 border-zinc-50' : null
                            }`}
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
                <button className="hidden">
                  <HamburgerIcon />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
