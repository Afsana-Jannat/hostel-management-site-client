import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMeals from '../../../../hooks/useMeals';
import CartTab from '../CartTab/CartTab';

const MealByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [meals] = useMeals();
    console.log(meals);
    const breakfast = meals.filter(item => item.category === 'breakfast')
    const lunch = meals.filter(item => item.category === 'lunch')
    const dinner = meals.filter(item => item.category === 'dinner')

    return (
        <div className="p-8">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>BreakFast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel>
                   <CartTab items={breakfast}></CartTab>
                </TabPanel>
                <TabPanel>
                    <CartTab items={lunch}></CartTab>
                </TabPanel>
                <TabPanel>
                    <CartTab items={dinner}></CartTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealByCategory;