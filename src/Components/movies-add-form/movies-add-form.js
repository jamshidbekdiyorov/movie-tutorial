import './movies-add-form.css'
function MoviesAddForm(props) {
    return (
        <div className='movie-add-form'>
            <h3>Yangi kino qushish </h3>
            <form className='add-form d-flex'>
            <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' />
            <input type="number" className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" />
            <button type='submit' className='btn btn-outline-dark'>
                Qo'shish
            </button>
        </form>
        </div>
    )
}

export default MoviesAddForm;