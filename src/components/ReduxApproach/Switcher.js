import { useSelector, useDispatch } from "react-redux";
import { toggle as toggleA } from "../../redux/slices/toggleA";
import { toggle as toggleB } from "../../redux/slices/toggleB";

const Switcher = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.toggleA.value);
  const b = useSelector((state) => state.toggleB.value);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={a}
          onChange={() => dispatch(toggleA())}
        />
        <span>Toggle A</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={b}
          onChange={() => dispatch(toggleB())}
        />
        <span>Toggle B</span>
      </label>
    </>
  );
};

export default Switcher;
