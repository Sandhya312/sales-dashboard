import { Orders } from "../../components/orders";
import { Insights } from "./insights";
import { NavBar } from "../../components/NavBar";
import { OrderDetails } from "./OrderDetails";
import { SideBar } from "../../components/Sidebar"
import { useState } from "react";
import MyChatBot from "../../components/chat/chatbot";

export const SalesDashboard = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen h-max w-screen ">
      <SideBar />
      <div id="main-container"
        className="ml-16 bg-white h-auto w-[calc(100vw-5rem)]">
        <NavBar />
        <div className=" w-full h-max min-h-screen p-10">
          <div className=" h-max border px-8 py-10 border-border1 rounded-2xl h-60">
          <OrderDetails />
            <Insights />
            <Orders />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 p-5 flex flex-col gap-5 items-end">
      {isChatOpen && <MyChatBot />}
      <button  onClick={()=> {setIsChatOpen(!isChatOpen)}}>
        <img src="/assets/chatbot.webp" className="size-10" />
      </button>
      </div>
    </div>
  );
};
