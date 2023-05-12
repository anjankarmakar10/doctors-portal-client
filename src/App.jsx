import { styled } from "styled-components";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Desktop/Navbar";
import { Outlet } from "react-router-dom";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Navbar />
      <Wrapper />
      <Footer />
    </DataProvider>
  );
}

const Wrapper = styled(Outlet)`
  /* margin-top: 64px; */
  max-width: 1375px;
  margin-inline: auto;
`;

export default App;
