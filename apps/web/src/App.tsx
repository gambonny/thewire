import { css } from '@monorepo/styled/css'
import { Badge } from '@monorepo/ui'

function App() {
  return (
    <div className={css({ background: 'background.surface' })}>
      <Badge status="error">this is an error?</Badge>
    </div>
  )
}

export default App
