const TestLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="bg-rose-500 h-full">
      <div>
        This is a navbar
      </div>
      <hr />
      { children }
    </div>
  )
}

export default TestLayout