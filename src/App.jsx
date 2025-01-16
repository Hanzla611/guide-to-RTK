import "./App.css";
import { decrementCounter, incrementCounter } from "./utils/counterSlice"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const counterValue = useSelector((store) => store.counter.counter);
  return (
    <div className="bg-gray-900 h-screen text-3xl font-bold text-center p-8 ">
      <div className="w-full px-80">
        <span className="text-white">Counter</span>
        <div className="mt-8 text-4xl underline font-bold text-white">
          {counterValue}
        </div>
        <div className="gap-12 col-span-2 flex justify-center mt-12">
          <button
             onClick={() => dispatch(decrementCounter())}
            className="bg-white text-black py-2 px-6"
          >
            -
          </button>
          <button
            onClick={() => dispatch(incrementCounter())}
            className="bg-white text-black py-1 px-6"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
