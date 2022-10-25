import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard">
            <Route path="ecommerce" element={<New />} />
            <Route path="sass" element={<New />} />
            <Route path="crypto" element={<New />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="applications">
            <Route index element={<List />} />
            <Route path="calendar" element={<Single />} />
            <Route path="chat" element={<New />} />
            <Route path="filemanager" element={<New />} />
            <Route path="ecommerce" element={<New />} />
            <Route path="email" element={<New />} />
            <Route path="invoices" element={<New />} />
            <Route path="projects" element={<New />} />
            <Route path="contacts" element={<New />} />
          </Route>
          <Route path="pages">
            <Route path="authentication" element={<New />} />
            <Route path="utility" element={<New />} />

          </Route>
          <Route path="components">
            <Route path="ui" element={<New />} />
            <Route path="forms" element={<New />} />
            
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
