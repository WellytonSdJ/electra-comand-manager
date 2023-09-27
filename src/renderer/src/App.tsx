type ComandButtonProps = {
  title: string
  comand: () => void
}
function ComandButton({ title, comand }: ComandButtonProps): JSX.Element {
  return (
    <button onClick={comand}>
      <span>{title}</span>
    </button>
  )
}
function App(): JSX.Element {
  return (
    <div>
      <ComandButton title="teste 1" comand={(): void => alert('isso é um teste')} />
    </div>
  )
}

export default App
