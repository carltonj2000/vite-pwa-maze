import "./css_main.css";
import { rawHtml } from "./mazeBluuGnome";

function App() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </>
  );
}

export default App;
