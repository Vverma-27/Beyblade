import Beyblade from "./Beyblade";

const App = () => {
  return (
    <main>
      <div className="h-[100vh] w-[100vw] flex" id="hero">
        <div className="flex-1 h-full bg-white flex items-center justify-center flex-col gap-[8vh]">
          <h1 className="font-sans text-[12rem] text-black opacity-65 font-black">
            Beyblade
          </h1>
          <p className="text-base font-light font-sans w-full text-center">
            <br />
            <br />
            This is the best Beyblade in the market. <br /> Get this beyblade
            and flex in front of your friends <br /> This is the OG Pegasus
          </p>
        </div>
        <div className="fixed top-[45%] left-0 right-0 -translate-y-1/2">
          <Beyblade />
        </div>
      </div>
      <div className="h-[100vh] w-[100vw] flex" id="desc">
        {/* <div className="flex-1 h-full bg-white"><Beyblade /></div> */}
        <div className="flex-1 h-full bg-[#0064EE] flex items-center justify-center flex-col"></div>
      </div>
    </main>
  );
};

export default App;
