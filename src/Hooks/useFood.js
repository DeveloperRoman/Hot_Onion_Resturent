import { useEffect, useState } from "react"

const useFood = () => {
    const [foods, setFoods] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
            .finally(setIsLoading(false))
    }, []);
    
    // console.log(foods);
    
    return {isLoading, foods};
}

export default useFood;