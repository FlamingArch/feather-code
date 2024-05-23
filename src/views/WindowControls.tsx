import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export default function WindowControls() {
  return (
    <section className="flex p-1.5">
      <button
        onClick={() => window.close()}
        className="m-1 p-1 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-red-500 hover:shadow-xl hover:shadow-red-500"
      >
        <IoClose className="w-4 h-4" />
      </button>
      <button
        onClick={() => toggleFullScreen()}
        className="m-2 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-300"
      >
        <MdKeyboardArrowUp className="w-4 h-4" />
      </button>
    </section>
  );
}
