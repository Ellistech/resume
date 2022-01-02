import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Header></Header>

      <main>{props.content} </main>

      <Footer></Footer>
    </div>
  );
}
