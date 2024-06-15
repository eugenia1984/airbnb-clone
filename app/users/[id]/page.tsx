const IdPage = ({
  params
}: {
  params: { id: string }
}) => {
  return (
    <div>Id: {params.id} Page</div>
  )
}

export default IdPage;