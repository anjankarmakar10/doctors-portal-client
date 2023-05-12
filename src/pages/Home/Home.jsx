import DrAppointment from "./container/DrAppointment/DrAppointment";
import Header from "./container/Header/Header";
import Info from "./container/Info/Info";
import Services from "./container/Services/Services";
import Treatment from "./container/Treatment/Treatment";

const Home = () => {
  return (
    <main>
      <Header />
      <Info />
      <Services />
      <Treatment />
      <DrAppointment />
    </main>
  );
};

export default Home;
