import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddMeals = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const mealsItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                title: data.title,
                image: res.data.data.display_url
            }
            // 
            const mealRes = await axiosSecure.post('/meals', mealsItem);
            console.log(mealRes.data)
            if(mealRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url', res.data)
    }
    return (
        <div>
            <div>
                <h2 className="text-3xl mb-8 text-center font-bold">
                    Add Meals Item
                </h2>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', {required: 'true'})}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', {required: 'true'})}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch"> Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', {required: 'true'})}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* text Area */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <textarea {...register('title', {required: 'true'})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('image', {required: 'true'})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Add Item
                        <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMeals;