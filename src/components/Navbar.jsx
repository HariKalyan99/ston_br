import navLogo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3 flex justify-center items-center flex-col">
      <img src={navLogo} alt="nav-logo" className="md:w-24 w-20" />
      <h1>VRaud</h1>
    </nav>
  );
};

export default Navbar;
