import React from "react";
import BackgroundImage from "../../public/BackgroundImage";
import Addtodo from "../../components/AddTodo";

export default function Home() {
  return (
    <main className=" w-full h-screen">
      {/* <BackgroundImage /> */}
      <div className="flex flex-col justify-center gap-10 mt-10">
        <div className="flex justify-center">
          <div className="w-11/12 h-[80px] bg-slate-100 text-3xl font-black text-center rounded-lg border-2 border-slate-950 ">
            Daily Planner 2024
          </div>
        </div>
        <div className="flex justify-around ">
          <div className=" w-1/4 rounded-lg border-2 border-slate-950 h-96 bg-slate-100   ">
            <div>
              <div className="flex justify-around mt-2 border-b-2 border-slate-950">
                <h1 className="text-xl font-semibold ">To Do</h1>
                <button className="w-5 h-5 bg-green-600 mt-1 rounded-full rounded-lg border border-slate-950 flex justify-center items-center ">
                  +
                </button>
              </div>
            </div>
            <div className=" flex justify-center mt-3 text-center">
              <Addtodo />
            </div>
          </div>
          <div className="w-1/4 rounded-lg border-2 border-slate-950 h-96 bg-slate-100 ">
            <div>
              <div className="flex justify-around mt-2 border-b-2 border-slate-950">
                <h1 className="text-xl font-semibold ">In progress</h1>
              </div>
            </div>
            <div className=" flex justify-center mt-3 text-center">
              <Addtodo />
            </div>
          </div>
          <div className="w-1/4 rounded-lg border-2 border-slate-950 h-96 bg-slate-100 ">
            <div>
              <div className="flex justify-around mt-2 border-b-2 border-slate-950">
                <h1 className="text-xl font-semibold ">Closed</h1>
              </div>
            </div>
            <div className=" flex justify-center mt-3 text-center">
              <Addtodo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
