import { Header } from "./components/layout/Header";
import { LandingPage } from "./pages/LandingPage";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;