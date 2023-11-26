
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";




const FoodCard = ({item}) => {
    const {_id, name, title, image, price, rating} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToMeals = food =>{
      if(user && user.email){
        // TODO: send cart item to the database
        console.log(user.email, food);
        const cartItem = {
          mealId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
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
          navigate('/login', {state: {from: location}})
          }
        });
      }
    }
    return (
<div className="card glass">
  <figure><img className="h-44 w-60" src={image} alt="Shoes" /></figure>
  <p className="absolute right-0 rounded-full p-2 mr-4 mt-4 bg-slate-800 text-white">$ {price}</p>
  <div className="card-body">
    <h2 className="card-title text-white">{name}</h2>
    <p className="font-bold text-white">{title}</p>
    <div className="card-actions justify-end">
    {/* <Link to={`/details/${_id}`}>
    <button className="btn
     btn-primary">Details</button>
    </Link> */}
   <button
    onClick={() => handleAddToMeals(item)}
    >Add meals</button>
    </div>
  </div>
</div>
    );
};
// card-compact bg-slate-400 shadow-xl
export default FoodCard;