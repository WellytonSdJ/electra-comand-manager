type ComandButtonProps = {
  title: string
  comand: () => void
}

const ComandButton = ({ title, comand }: ComandButtonProps): JSX.Element => {
  return (
    <button onClick={comand}>
      <span>{title}</span>
    </button>
  )
}

export default ComandButton
