function App() {
  {
    /*Basics of tailwindCSS 

 <div className="h-screen bg-pink-100 px-5 py-10 ">
    <p className="text-xl font-bold text-center bg-yellow-100 text-rose-400">Hello World</p>
    </div> 
       
       
       1-->Simulating a Navbar  Flexbox
       2---> Basic Cards Cssgrid
       3-->Media Queries 

       */
  }

  return (
    <div>
      <div className="flex px-4 bg-slate-900 h-12 items-center justify-between">
        <div className="text-white">Logo</div>
        <div className="flex gap-2">
          <span className="text-white">Home</span>
          <span className="text-white">About</span>
          <span className="text-white">Contact</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-3 text-white text-center text-2xl sm:text-lg sm:grid-cols-2 md:text-sm md:grid-cols-3">
        <div className="bg-slate-500 rounded p-1">Feature 1</div>
        <div className="bg-slate-500 rounded p-1">Feature 2</div>
        <div className="bg-slate-500 rounded p-1">Feature 3</div>
        <div className="bg-slate-500 rounded p-1">Feature 4</div>
        <div className="bg-slate-500 rounded p-1">Feature 5</div>
        <div className="bg-slate-500 rounded p-1">Feature 6</div>
      </div>
    </div>
  );
}

export default App;
