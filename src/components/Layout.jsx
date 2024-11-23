import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <p>© 2024</p>
      </footer>
    </>
  );
};

export default Layout;
