import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
  <>
    <Header /> 
    <main className={props.className}>{props.children}</main>
    <Footer /> 
  </>
);

export default Layout;