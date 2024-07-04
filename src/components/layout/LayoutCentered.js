const LayoutCentered = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-32">
        { children }
      </div>
    </div>
  )
}

export default LayoutCentered;