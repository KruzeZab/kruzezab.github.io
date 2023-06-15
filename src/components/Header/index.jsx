import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import { useEffect, useState } from 'react';

const Header = ({ hasBack }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  const handleThemeSwitch = () =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="pb-6">
      <div className="flex justify-between items-center">
        {hasBack ? (
          <Link
            to="/"
            className=" hover:bg-gray-100 dark:hover:bg-gray-800 p-1 duration-150 rounded-full text-gray-500 dark:text-gray-200"
          >
            <IoMdArrowBack fontSize={'22px'} />
          </Link>
        ) : (
          <div />
        )}
        <button
          className="p-1 rounded-full"
          type="button"
          onClick={handleThemeSwitch}
        >
          {theme === 'light' ? (
            <MdDarkMode
              fontSize="22px"
              className="text-gray-500 dark:text-gray-200"
            />
          ) : (
            <MdLightMode
              fontSize="22px"
              className="text-gray-500 dark:text-gray-200"
            />
          )}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  hasBack: PropTypes.bool,
};

Header.defaultProps = {
  hasBack: false,
};

export default Header;
