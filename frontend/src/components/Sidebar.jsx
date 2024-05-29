import React from "react";

function Sidebar() {
  return (
    <div className="p-3 bg-white border-slate-200 border-r absolute lg:top-0 lg:left-0 h-full">
      <div className="bg-slate-50 hover:bg-slate-100 hover:shadow-md p-1 px-2 rounded-md my-3">
        <i class="fa-solid fa-comment-dots text-2xl text-slate-500"></i>
      </div>
      <div className="bg-slate-50 hover:bg-slate-100 hover:shadow-md  p-1 px-2 rounded-md my-3">
        <i class="fa-solid fa-user-group text-lg text-slate-500 "></i>
      </div>
      <div className="bg-slate-50 hover:bg-slate-100 hover:shadow-md p-1 px-2 rounded-md my-3">
        <i class="fa-solid fa-right-from-bracket text-2xl text-slate-500"></i>
      </div>
    </div>
  );
}

export default Sidebar;
