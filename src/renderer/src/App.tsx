import ComandButton from './components/comand-button'
import Wrapper from './components/wrapper'

function App(): JSX.Element {
  return (
    <Wrapper>
      <ComandButton title="teste 1" comand={(): void => alert('isso é um teste')} />
      <h1 className="text-3xl font-bold text-[red]">Hello world!</h1>
    </Wrapper>
  )
}

export default App
