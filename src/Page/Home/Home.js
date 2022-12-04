import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newsdetils from '../Shared/Newsdetils/Newsdetils'


const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1>News length: {allNews.length}</h1>
            {
                allNews.map(news => <Newsdetils
                 key={news._id}
                 news = {news}
                ></Newsdetils>)
            }
        </div>
    );
};

export default Home;