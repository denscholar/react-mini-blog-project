//The whole essence of this file is to create a custom hook to make it reusable instead of always writing the same useEffect hook all the time.
//Note that custom hook need to start with the word use else, it won't work.
//Do not hard code the url end point. pass it inside the useFetch and also pass it as a dependency in the useEffect so that when the data changes, the useEffect reloads to get the new data.

import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data, please try again later') //now we are catching the error. We need to store the error in a state so we can output it to the browser.
                    }
                    return res.json();
                }).then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                }).catch(err => {
                    setError(err.message); //this sets the error message to either network error or endpoint error
                    setIsLoading(false) //set the isloading to false to remove the is loading showing 
                })
        }, 1000);

    }, [url])
    return {data, isLoading, error} //you will need to return some value to be able to use it in another file.
}
 
export default UseFetch;