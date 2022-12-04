import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newsdetils from '../../Shared/Newsdetils/Newsdetils';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.map(news => <Newsdetils
                    key={news._id}
                    news = {news}
                ></Newsdetils>)
            }
        </div>
    );
};

export default Category;