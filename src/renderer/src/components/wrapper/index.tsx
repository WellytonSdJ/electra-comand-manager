type WrapperProps = {
  children: string | JSX.Element | JSX.Element[]
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <div className="p-2 gap-2 bg-[#641e1e] text-[blue]">teste{children}</div>
}

export default Wrapper
