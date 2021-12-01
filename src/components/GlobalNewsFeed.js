import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getGlobalCovidNews } from '../redux/actions/covidNewsActions';

const GlobalNewsFeed = ({
    data,
    loading,
    getGlobalCovidNews
}) => {
    useEffect(() => {
        getGlobalCovidNews()
    }, [])

    return (
        <div>
            <h2>Covid News</h2>
            {loading ? <div>loading...</div>
                : data ? < div >
                    {data.map(article =>
                        <div className="newsCard">
                            <a href={article.url}>
                                <div className="newsContainer">
                                    {'image' in article?
                                        <img className="newsImage" src={article.image.thumbnail.contentUrl} />:
                                        <img className="newsImage" src="https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF" />
                                    }
                                    <div className="newsOverlay">
                                        <div className="newsText">
                                            <p>{article.description}</p>
                                            <p className="newsProvider">{article.provider[0].name}</p>
                                            <p className="newsDate">{article.datePublished.slice(0,10)}</p>
                                        </div>
                                    </div>
                                </div>
                                <h4>{article.name}</h4>
                            </a>
                        </div>
                    )}
                </div >
                    : <div>No data</div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.covidNews.globalCovidNews,
        loading: state.covidNews.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGlobalCovidNews: () => dispatch(getGlobalCovidNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNewsFeed)
