import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: 'general'

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        // console.log("Hello Constructor news");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page={this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,

        })
        this.props.setProgress(100);

    }

    async componentDidMount() {
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalAtotalResultsrticles: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }

    handlePreviousClick = async () => {
        // console.log("previous clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.setState.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        this.setState({ page: this.state.page - 1 })
        this.updateNews();

    }

    handleNextClick = async () => {
        // if (!(this.setState.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     console.log("Next clicked");
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
        //                &category=${this.props.category}&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=${this.state.page + 1}
        //                &pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     this.setState({
        //         page: this.setState.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }
    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs

        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page={this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,

        })
    }

    render() {
        console.log("render");
        return (
            <div className="container my-4" >
                <h1 className="text-center">NewFinder - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">


                        <div className="row">
                            {this.state.articles.map((element) => {
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
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> Previous &larr;</button>
                    <button disabled={this.setState.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} > Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News