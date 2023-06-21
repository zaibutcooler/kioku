import IndexPage from "./pages/IndexPage";
import Navbar from "./components/main/Navbar";
import Calendar from "./components/main/Calendar";
import Clock from "./components/main/Clock";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="lg:grid lg:grid-cols-6 flex">
        <section className="lg:col-span-5 ">
          <IndexPage />
        </section>
        <section className="hidden xl:block lg:col-span-1">
          <Clock />
          <Calendar />
        </section>
      </main>
    </>
  );
};

export default App;
