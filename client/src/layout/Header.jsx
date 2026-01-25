import Navbar from "./Navbar";

const Header = ({ logo, navItems, actions, sticky = true }) => {
  return (
      <Navbar
        brand={logo}
        links={navItems}
        actions={actions}
        sticky={sticky}
      />
  );
};

export default Header;