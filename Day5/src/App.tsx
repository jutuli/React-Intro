import Footer from "./components/Footer";
import Header from "./components/Header";
import Wishlist from "./components/WishList";

function App() {
  return (
    <>
      <section className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Wishlist />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
