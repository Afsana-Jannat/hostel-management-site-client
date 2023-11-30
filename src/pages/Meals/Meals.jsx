import { Helmet } from 'react-helmet-async';
import AllMeals from '../DashBoard/AllMeals/AllMeals';

const Meals = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>hostel management | Meals</title>
                </Helmet>
            </div>
            <div>
                <h2 className='p-14'></h2>
                <AllMeals></AllMeals>
            </div>
        </div>
    );
};

export default Meals;