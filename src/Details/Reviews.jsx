import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Reviews = ({ mealId, mealRefetch }) => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: reviews = [], isPending, refetch } = useQuery({
        queryKey: ['reviewsByMeal', mealId],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviewsByMeal/' + mealId);
            return res.data
        }
    })
    console.log(reviews);
    console.log(user);
    const handleAddReviews = async (e) => {
        e.preventDefault();

        if (!user?.email) {
            alert('Please login first!')
        }

        const review = e.target.review.value;

        const res = await axiosSecure.post('/reviews', {
            review,
            reviewerEmail: user.email,
            reviewerImage: user?.photoURL || '',
            mealId,
            createdAt: new Date()
        })
        if (res.data.result.insertedId) {
            refetch();
            mealRefetch();
        }

    }
    return (
        <div className='p-3'>

            <form action="" className="w-full" onSubmit={handleAddReviews}>
                <textarea placeholder="Write a review" name='review' className="textarea textarea-bordered textarea-lg w-full mt-2" ></textarea>

                <div className="flex justify-end">
                    <button className="btn btn-sm btn-neutral">
                        {
                            isPending ? 'Loading' : "Send"
                        }
                    </button>
                </div>
            </form>

            {
                reviews.map(item => <div
                    key={item._id}
                    className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src={item.reviewerImage ? item.reviewerImage : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                        </div>
                    </div>
                    <div className="chat-bubble">{item.review}</div>
                </div>)
            }
        </div>
    );
};

export default Reviews;