import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';

export default class News extends Component {


    static defaultProps={
            country:'in',
            pageSize:8,
            category:"general"
    }

    static propTypes={
        country:propTypes.string,
        pageSize:propTypes.number,
        category:propTypes.string
    }

    //for defining a constructure always add super() fucntion
  constructor(){
    super();
    this.state={
            articles:[],
            loading:false,
            page:1
    }
  }


  async updateNews(page){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
    })
  }

//it will work after rendering
async componentDidMount(){
    this.updateNews();
}  

handlePreviousClick=async()=>{
    this.setState({
        page:this.state.page-1
    })
    this.updateNews();
}

handleNextClick=async()=>{
    this.setState({
        page:this.state.page+1
    })
    console.log(this.state.page)

    this.updateNews();

    
}
 
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{marign:'40px 0px'}}>NewsMonkey- Top Headlines</h1>   
               { this.state.loading && <Spinner/>}
                <div className="row">
               
                { !this.state.loading &&  this.state.articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}

                    <div className="container d-flex justify-content-between">
                    <button  disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>
                   
                </div>
            </div>
        )
    }
}
