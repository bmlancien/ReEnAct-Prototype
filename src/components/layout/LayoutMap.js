const LayoutMap = ({ children }) => {
  return (
    <main class="grow flex flex-col h-full">
      <div class="grow flex flex-col h-full">
        <div class="grow flex columns-2 h-full w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
          { children }
        </div>
      </div>
    </main>
  )
}

export default LayoutMap;