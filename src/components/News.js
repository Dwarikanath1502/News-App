import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();
        // console.log("Hello Constructor news");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalAtotalResultsrticles: parsedData.totalResults,
            loading: false
        })
    }

    handlePreviousClick = async () => {
        console.log("previous clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.setState.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }

    handleNextClick = async () => {
        if (!(this.setState.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            console.log("Next clicked");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=aba0349b6d5d4fb594fedf08fb7bfae3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.setState.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        console.log("render");
        return (
            <div className="container my-4" >
                <h1 className="text-center">NewFinder - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <div className="col-md-4" >
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> Previous &larr;</button>
                    <button disabled={this.setState.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} > Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News