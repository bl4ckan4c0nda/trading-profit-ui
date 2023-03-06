// import { useState, useEffect } from "react"
// import axios from "axios"

// export function useApi(url) {
//     const [data, setData] = useState([])
//     const [isLoading, setIsloading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         setIsloading(true)
//         axios.get(url)
//             .then(response => {
//                 setData(response.data)
//                 setIsloading(false)
//             })
//             .catch(error => {
//                 setError(error)
//                 setIsloading(false)
//             })
//     }, [url])

//     return [data, isLoading, error]
// }
import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, method = "get") => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios[method](url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url, method]);

    return { data, isLoading, error };
};

export default useApi;