import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MealByCategory from "../MealByCategory/MealByCategory.js/MealByCategory";


const Home = () => {
    return (
        <div className="" style={{backgroundImage: 'url(https://i.ibb.co/M1NQ8xq/istockphoto-1341408852-640x640.jpg)'}}>
            <Helmet>
                <title>hostel management | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <MealByCategory></MealByCategory>
        </div>
    );
};

export default Home;