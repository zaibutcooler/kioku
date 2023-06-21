import IndexPage from "./pages/IndexPage";
import Navbar from "./components/main/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="lg:grid lg:grid-cols-6 flex">
        <section className="lg:col-span-5 ">
          <IndexPage />
        </section>
        <section className="hidden lg:block lg:col-span-1">Sidebar</section>
      </main>
    </>
  );
};

export default App;
