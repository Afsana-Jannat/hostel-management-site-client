import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { useEffect, useState } from "react";

const useMeals = () => {
    const axiosPublic = useAxiosPublic();
    // const [meals, setMeals] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect( () =>{
    //     fetch('https://hostel-management-ruby.vercel.app/meals')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMeals(data);
    //         setLoading(false);
    //     });
    // }, [])

    const { data: meals = [], isPending: loading, refetch } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axiosPublic.get('/meals')
            return res.data;
        }
    })
    return [meals, loading, refetch]
};

export default useMeals;