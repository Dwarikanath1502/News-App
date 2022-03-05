import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState()

    // document.title = `${capitalizaFirstLetter(props.category)} - NewsFinder;`

    // const capitalizaFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);

    // }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page={page}&pageSize=${props.pageSize}`;
       
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.setTotalResults)
        setLoading(false)


        props.setProgress(100);

    }
    useEffect(() => {
     updateNews();

    }, [])



    const handlePreviousClick = async () => {
        // console.log("previous clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=${state.page - 1}&pageSize=${props.pageSize}`;
        // setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // setState({
        //     page: setState.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        
        setPage(page-1)
        updateNews();

    }

    const handleNextClick = async () => {
        // if (!(setState.page + 1 > Math.ceil(state.totalResults / props.pageSize))) {
        //     console.log("Next clicked");
        //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}
        //                &category=${props.category}&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=${state.page + 1}
        //                &pageSize=${props.pageSize}`;
        //     setState({ loading: true })
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     setState({
        //         page: setState.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
       
        setPage(page+1)
        updateNews();
    }
    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs

        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page={state.page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
       
    }


    return (
        <div className="container my-4" >
            <h1 className="text-center">NewFinder - Top Headlines</h1>
            {/* {loading && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">


                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <div className="col-md-4" >
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousClick}> Previous &larr;</button>
                    <button disabled={setState.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick} > Next &rarr;</button>
                </div> */}
        </div>
    )
}


News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: 'general'

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News