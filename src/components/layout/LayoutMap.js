const LayoutMap = ({ children }) => {
  return (
    <main className="grow flex flex-col h-full">
      <div className="grow flex flex-col h-full">
        <div className="grow flex columns-2 h-full w-full mx-auto max-w-7xl sm:px-6 lg:px-8 pb-32">
          { children }
        </div>
      </div>
    </main>
  )
}

export default LayoutMap;