type Props = {
  text: string
}

export const HeadlineH2 = ({ text }: Props) => {
  return (
    <h2 className="text-3xl font-semibold tracking-tight transition-colors">
      {text}
    </h2>
  )
}