import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";
function App() {
  // state.REDUCER NAME.STATE NAME IN REDUCER
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(cats);
  return (
    <div>
      {cats.map((cat, index) => {
        return <div key={index}>{cat.name}</div>;
      })}
    </div>
  );
}

export default App;
