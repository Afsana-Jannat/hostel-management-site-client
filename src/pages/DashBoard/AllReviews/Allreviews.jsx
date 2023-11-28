import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Allreviews = () => {
    const [reviews, setReviews] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const url = '/reviews'
        axiosSecure.get(url)
            .then(res => {
                setReviews(res.data)
            })
    }, [])

    console.log(reviews);
    return (
        <div>
            thsi is all reviews

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Review</th>
                            <th>Reviewer</th>
                            <th>View | Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {reviews.map((item, index) => <tr
                            key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.review.slice(0, 20)}...</td>
                            <td>{item.reviewerEmail}</td>
                            <td>
                                <div className="flex justify-between">
                                    {
                                        <Link to={'/details/' + item.mealId}>
                                            <button className="btn btn-sm btn-neutral">View</button>
                                        </Link>
                                    }
                                    <button className="btn btn-sm btn-neutral">Delete</button>
                                </div>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allreviews;