const BottomNav = ({ children }) => {
  return (
    <nav className="fixed bottom-[37px] left-0 w-full bg-white py-2 px-6 border-t border-slate-200">
      <div className="flex justify-center">
        { children }
      </div>
    </nav>
  )
}

export default BottomNav;