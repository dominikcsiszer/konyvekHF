import './css/Konyv.css'

function Konyv(props) {
    return (
        <div className="card">
                <div className="card-body">
                    <p className="card-author"><span className="author-category">{props.category}</span> {props.author}</p>
                    <h3 className="card-title">{props.title}</h3>
                    <div className="card-sep"></div>
                    <p className="card-text">{props.description}</p>
                    <div className="card-imgBorder">
                        <img src={props.img} alt="" className="card-img" />
                    </div>
                </div>
            </div>
    )
}

export default Konyv