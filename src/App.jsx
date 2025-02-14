//import FloatingHearts from "./components/FloatingHearts";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ImageScroller from "./components/ImageScroller";
import ValentineMessage from "./components/ValentineMessage";
import ValentineVideo from "./components/ValentineVideo";
import ValentineWeek from "./components/ValentineWeek";

function App() {
  return (
    <div className="relative min-h-screen bg-pink-50">
      {/* <FloatingHearts /> */}
      <Header/>
      <ImageScroller/>
      <ValentineWeek/>
      <Gallery/>
      <ValentineVideo/>
      <ValentineMessage/>
      <Footer/>
    </div>
  );
}

export default App;
