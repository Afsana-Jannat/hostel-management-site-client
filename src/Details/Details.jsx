import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import Reviews from "./Reviews";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
    // const details = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const { id } = useParams();

    const { refetch: mealRefetch, data: details = {} } = useQuery({
        queryKey: ['meals', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meals/${id}`);
            return res.data;
        }
    })
    const { _id, title, image, name, likes, reviews } = details;




    const handleAddToMeals = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                mealId: _id,
                email: user.email,
                name,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login addd to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    const handleLIke = () => {
        axiosSecure.post('likes', {
            mealId: _id,
            userEmail: user.email,
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    mealRefetch()
                }
                else {
                    alert('already liked')
                }
            })
    }
    return (

        <div className="pt-5">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm md:w-[540px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <h2 className="text-xl">
                            ⭐⭐⭐⭐
                        </h2>
                        <br /><br />
                        <hr />
                        <div className="flex justify-between my-3">
                            <button className="btn btn-neutral btn-sm"
                                onClick={handleLIke}
                            >Like {likes}</button>
                            <button className="btn btn-neutral btn-sm"> Total Review: {reviews}</button>
                            <button
                                className="btn btn-neutral btn-sm"
                                onClick={handleAddToMeals}
                            >Add meals</button>
                        </div>
                        <hr />

                        <Reviews mealId={_id} mealRefetch={mealRefetch} />


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;