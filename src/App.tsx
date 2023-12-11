import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./component/cart";
import { Header } from "./component/header";
import { Main } from "./component/main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import "./App.css";
// import Cart from "./component/cart";
// import { Header } from "./component/header";
// import { Main } from "./component/main";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/main" element={<Main />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//export default App;
