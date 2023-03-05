import { useState, useEffect } from "react"
import axios from "axios"

export function useApi(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsloading(true)
        axios.get(url)
            .then(response => {
                setData(response.data)
                setIsloading(false)
            })
            .catch(error => {
                setError(error)
                setIsloading(false)
            })
    }, [url])

    return [data, isLoading, error]
}