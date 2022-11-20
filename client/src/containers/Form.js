import './css/Form.css'

function Form(props) {
    let url = 'http://localhost:5000'+props.action
    return (
        <form action={url} method={props.method} className='form'>
            <h1>Új könyv</h1>
            <input type='text' className='form-input' placeholder='Book title' name='title'></input>
            <input type='text' className='form-input' placeholder='Book description' name='description'></input>
            <input type='text' className='form-input' placeholder='Book author' name='author'></input>
            <input type='text' className='form-input' placeholder='Book category' name='category'></input>
            <input type='datetime-local' className='form-input' placeholder='Book published' name='published'></input>
            <input type='text' className='form-input' placeholder='Book image' name='img'></input>
            <button type='submit' className='new-btn'>Létrehozás</button>
        </form>
    )
}

export default Form