import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function WindowControls() {
  return (
    <section className="flex p-1.5">
      <button className="m-1 p-1 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-red-500 hover:shadow-xl hover:shadow-red-500">
        <IoClose className="w-4 h-4" />
      </button>
      <button className="m-2 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-300">
        <MdKeyboardArrowUp className="w-4 h-4" />
      </button>
      <button className="m-2 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-300">
        <MdKeyboardArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
