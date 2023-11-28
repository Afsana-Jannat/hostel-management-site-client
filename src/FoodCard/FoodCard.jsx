
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";




const FoodCard = ({ item }) => {
  const { _id, name, title, image, price, rating } = item;
  console.log(_id);


  return (
    <div className="card glass">
      <figure><img className="h-44 w-60" src={image} alt="Shoes" /></figure>
      <p className="absolute right-0 rounded-full p-2 mr-4 mt-4 bg-slate-800 text-white">$ {price}</p>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className="font-bold text-white">{title}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn
     btn-primary">Details</button>
          </Link>

        </div>
      </div>
    </div>
  );
};
// card-compact bg-slate-400 shadow-xl
export default FoodCard;