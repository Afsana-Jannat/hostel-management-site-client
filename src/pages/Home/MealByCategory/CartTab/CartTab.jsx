import FoodCard from "../../../../FoodCard/FoodCard";


const CartTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                   {
                        items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
                   </div>
    );
};

export default CartTab;