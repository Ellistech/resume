import NavMenu from "./NavMenu";

export default function Layout(props) {
  return (
    <div>
      <main>{props.content} </main>
      <NavMenu></NavMenu>
    </div>
  );
}
