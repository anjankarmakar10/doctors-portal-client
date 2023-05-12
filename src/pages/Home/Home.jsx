import ContactUs from "./container/ContactUs/ContactUs";
import DrAppointment from "./container/DrAppointment/DrAppointment";
import Header from "./container/Header/Header";
import Info from "./container/Info/Info";
import Services from "./container/Services/Services";
import Testimonials from "./container/Testimonials/Testimonials";
import Treatment from "./container/Treatment/Treatment";

const Home = () => {
  return (
    <main>
      <Header />
      <Info />
      <Services />
      <Treatment />
      <DrAppointment />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default Home;
