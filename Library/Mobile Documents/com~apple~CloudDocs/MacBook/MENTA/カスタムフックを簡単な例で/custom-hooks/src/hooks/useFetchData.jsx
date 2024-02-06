import { useEffect, useState } from "react";

// URLは外側から渡す
const useFetchData = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        };
        fetchPost();
    },[url]);
    // dataを返り値として出力する
    return { data };
}

export default useFetchData;