import { useEffect, useState } from "react";

const useMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () =>{
        fetch('http://localhost:5000/meals')
        .then(res => res.json())
        .then(data => {
            setMeals(data);
            setLoading(false);
        });
    }, [])
    return [meals, loading]
};

export default useMeals;