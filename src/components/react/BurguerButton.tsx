import sections from '@config/sections.json';
import { useState } from 'react';
import { motion } from 'framer-motion';

const BurguerButton = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <motion.div
      className="relative"
      initial={false}
      animate={openNav ? 'openedNav' : 'closedNav'}
    >
      <button
        className="md:hidden block cursor-pointer rounded-full"
        onClick={handleClick}
      >
        <div className="burguer p-3 space-y-1">
          <motion.span
            className="block w-6 h-1 rounded-sm"
            variants={{
              closedNav: {
                rotate: 0,
                transformOrigin: 'top right',
                transition: { duration: 0.3 },
              },
              openedNav: {
                rotate: -45,
                transformOrigin: 'top right',
                transition: { duration: 0.3 },
              },
            }}
          ></motion.span>
          <motion.span
            className="block w-6 h-1 rounded-sm"
            variants={{
              closedNav: { opacity: 1, transition: { duration: 0.3 } },
              openedNav: { opacity: 0, transition: { duration: 0.1 } },
            }}
          ></motion.span>
          <motion.span
            className="block w-6 h-1 rounded-sm"
            variants={{
              closedNav: {
                rotate: 0,
                transformOrigin: 'bottom right',
                transition: { duration: 0.3 },
              },
              openedNav: {
                rotate: 45,
                transformOrigin: 'bottom right',
                transition: { duration: 0.3 },
              },
            }}
          ></motion.span>
        </div>
      </button>

      <motion.nav
        className="nav-mobile absolute right-[-1rem] top-16 md:hidden block rounded-l-lg w-48 p-5"
        variants={{
          closedNav: {
            display: 'none',
            opacity: 0,
            x: 100,
            transition: { duration: 0.5, type: 'tween' },
          },
          openedNav: {
            display: 'block',
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, type: 'tween' },
          },
        }}
      >
        <ul className="items-center gap-4 leading-10">
          {sections.map((section, index) => (
            <li key={`section-${index}`}>
              <button
                onClick={handleClick}
                className="hover:hover-button !py-0 pl-3"
              >
                <a href={section.tag}>
                  <span className="text-lg font-semibold">{section.name}</span>
                </a>
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default BurguerButton;
