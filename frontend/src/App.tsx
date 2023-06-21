import IndexPage from "./pages/IndexPage";
import Navbar from "./components/main/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <IndexPage />
        </section>
        <section>
          <IndexPage />
        </section>
      </main>
    </>
  );
};

export default App;
