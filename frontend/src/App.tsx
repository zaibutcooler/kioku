import IndexPage from "./pages/IndexPage";
import Navbar from "./components/main/Navbar";
import Calendar from "./components/main/Calendar";
import Clock from "./components/main/Clock";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <section className="sm:w-full w-5/6">
          <IndexPage />
        </section>
        <section className=" lg:block lg:w-1/6 hidden">
          <Clock />
          <Calendar />
        </section>
      </main>
    </>
  );
};

export default App;
