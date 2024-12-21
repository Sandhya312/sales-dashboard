

export const SideBar = () => {
  return (
    <div className="bg-green1
      h-screen
      w-16 p-3 py-5
      fixed
      left-0
      top-0
      " id="sidebar">
      <div
        id="sidebar-top"
        className="flex
        justify-between
        items-center
        flex-col h-1/3"
      >
        <img src="src/assets/Logo.svg" alt="logo" />
        <hr className="border-1 outline-none w-full border-green2" />
        <section className=" h-2/3">
          <div className="flex justify-between h-full items-center flex-col">
            <img src="src/assets/Home.svg" alt="home"
              className="cursor-pointer"
              />
            <img src="src/assets/Chats.svg" alt="chats"
              className="cursor-pointer"
              />
            <img src="src/assets/People.svg" alt="people"
              className="cursor-pointer"
              />
          </div>
        </section>
      </div>
      <div id="sidebar-bottom"
        className="flex
        flex-col
        justify-end
        items-center
        h-2/3
        ">
        <img src="src/assets/settings.svg" alt="settings" />
      </div>
    </div>
  )
}