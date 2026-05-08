import Header from "../components/header/Header";
import WIP from "../components/wip/WIP";

export default function HomePage() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Home Page</h1>
      <WIP />
    </>
  );
}
