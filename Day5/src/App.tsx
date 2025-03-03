import AddWish from "./components/AddWish";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SantaInbox from "./components/SantaInbox";

function App() {
  return (
    <>
      <section className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <AddWish />
          <SantaInbox />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
