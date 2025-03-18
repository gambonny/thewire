import { css } from '@monorepo/styled/css'
import { TextField } from '@monorepo/ui'

function App() {
  return (
    <div className={css({ background: 'background.surface' })}>
      <TextField label="name" autoFocus />
    </div>
  )
}

export default App
