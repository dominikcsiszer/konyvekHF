
import Form from '../containers/Form'

function NewBook() {
  return (
    <Form action='/api/konyv/new' method='post'/>
  )
}

export default NewBook
