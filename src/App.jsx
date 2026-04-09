import { useState } from "react";

function App() {
  /*Basics of tailwindCSS 

 <div className="h-screen bg-pink-100 px-5 py-10 ">
    <p className="text-xl font-bold text-center bg-yellow-100 text-rose-400">Hello World</p>
    </div> 
       
       
       1-->Simulating a Navbar  Flexbox
       2---> Basic Cards Cssgrid
       3-->Media Queries
       4-->Dark and Light Mode
       5-->Directives

       */
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`${theme} min-h-screen dark:text-primary dark:bg-background text-slate-900`}
    >
      {/* Navbar */}
      <div className="flex text-xl font-bold px-4  h-12 items-center justify-between">
        <div className="">Logo</div>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex gap-2">
          <span className="">Home</span>
          <span className="">About</span>
          <span className="">Contact</span>
          <button
            className="text-white text-xl cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navbar */}

      {open && (
        <div className="flex flex-col items-center p-4  text-lg gap-2   dark:bg-slate-900  text-slate-900 dark:text-white  sm:hidden">
          <span className="">Home</span>
          <span className="">About</span>
          <span className="">Contact</span>

          <button
            className="text-white text-xl cursor-pointer sm:hidden"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}

      {/* Grid  */}
      <div className="grid grid-cols-1 gap-4 p-3  dark:text-white dark:bg-slate-900 text-white text-center text-2xl sm:text-lg sm:grid-cols-2 md:text-sm md:grid-cols-3">
        <div className="hover:bg-slate-800  bg-slate-500 rounded p-1">
          Feature 1
        </div>
        <div className="hover:bg-slate-800 hover:scale-120 bg-slate-500 rounded p-1">
          Feature 2
        </div>
        <div className="hover:bg-slate-800 hover:scale-105 transition-all bg-slate-500 rounded p-1">
          Feature 3
        </div>
        <div className="hover:bg-slate-800  hover:scale-105 transition-all duration-700 bg-slate-500 rounded p-1">
          Feature 4
        </div>
        <div className="hover:bg-slate-800  bg-slate-500 rounded p-1">
          Feature 5
        </div>
        <div className="hover:bg-slate-800  bg-slate-500 rounded p-1">
          Feature 6
        </div>
      </div>

      {/*Using Directive and Custom Styles*/}

 {/* Without Directives */}

      {/* <div className="flex justify-center items-center">
        <div className=" group flex flex-col  justify-center items-center h-[300px] w-[350px] bg-amber-300 rounded-xl hover:bg-amber-700 ">
          <p className="">This is a Card</p>
          <button className="tcursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Click Here!!
          </button>
        </div>
      </div> */}

{/* With Directives */} 

      <div className="flex-center">
        <div className="card">
          <p className="">This is a Card</p>
          <button>Click Here!!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
