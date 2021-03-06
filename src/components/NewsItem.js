import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%' }}>{source}</span>
                <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2020/02/GettyImages-655825116.jpeg?w=599" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem;