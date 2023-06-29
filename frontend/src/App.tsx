import IndexPage from "./pages/IndexPage";
import Navbar from "./components/main/Navbar";
import Calendar from "./components/main/Calendar";
import Clock from "./components/main/Clock";
import useAuthentication from "./hooks/useAuthentication";

const App = () => {
  useAuthentication();

  return (
    <>
      <Navbar />
      <main className="flex">
        <section className="w-full xl:w-5/6">
          <IndexPage />
        </section>
        <section className="xl:block xl:w-1/6 hidden">
          <Clock />
          <Calendar />
        </section>
      </main>
    </>
  );
};

export default App;
