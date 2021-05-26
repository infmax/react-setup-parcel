import * as React from 'react'

interface Props {
  name: string;
}

const App = ({ name }: Props) => (
  <>
    <h1>
      Hello
      {name}
    </h1>
  </>
)

export default App
