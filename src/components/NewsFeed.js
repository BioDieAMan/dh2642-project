import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getGlobalCovidNews } from '../redux/actions/globalCovidNewsActions';

const NewsFeed = ({
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
                                {article.image?<img src={article.image.thumbnail.contentUrl} />:<img src="https://valstatandlakarklinik.se/wp-content/uploads/2016/10/orionthemes-placeholder-image.png{article.image.thumbnail.contentUrl" />}
                                <div>
                                    <h4>{article.name}</h4>
                                    <p>{article.description}</p>
                                    <p className="newsProvider">{article.provider[0].name}</p>
                                    <p className="newsDate">{article.datePublished.slice(0,10)}</p>
                                </div>
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
        data: state.globalCovidNews.globalCovidNews,
        loading: state.globalCovidNews.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGlobalCovidNews: () => dispatch(getGlobalCovidNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
