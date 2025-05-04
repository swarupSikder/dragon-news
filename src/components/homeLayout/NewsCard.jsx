import React from 'react';
import { FaRegBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        total_view,
        rating,
        id,
    } = news;

    const formattedDate = new Date(news.author.published_date).toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="card bg-base-100 shadow-md p-4">
            {/* Author Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="dropdown dropdown-end flex items-center">
                    <FaRegBookmark></FaRegBookmark>

                    <label tabIndex={0} className="btn btn-sm btn-ghost rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M6 12h.01M12 12h.01M18 12h.01" /></svg>
                    </label>
                </div>
            </div>

            {/* Title */}
            <h2 className="font-bold text-lg mb-3">{title}</h2>

            {/* Image */}
            <figure className="mb-4">
                <img src={image_url} alt="News" className="rounded-md w-full max-h-60 object-cover" />
            </figure>

            {/* Details */}
            <p className="text-sm text-gray-700 mb-2">
                {details.slice(0, 200)}...
                <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer"> Read More</Link>
            </p>

            {/* Footer: Rating and Views */}
            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-1 text-orange-400">
                    {Array.from({ length: 5 }, (_, i) =>
                        i < rating.number ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                    <span className="ml-1 text-gray-700 font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <AiOutlineEye className="text-xl" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
