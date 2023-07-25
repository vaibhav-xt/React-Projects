import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';

const DataState = (props) => {

    // OpenAI Key
    const openAI = "https://api.openai.com/v1/images/generations"
    const API = "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"

    const dataHost = "https://dummyjson.com";
    const [allCategories, setAllCategories] = useState([]);
    const [formatCategory, setFormatCategory] = useState([]);
    const [products, setProducts] = useState([]);

    // allCategories
    useEffect(() => {
        fetch(`${dataHost}/products/categories`)
            .then(res => res.json())
            .then(json => setAllCategories(json));
        fetch(`${dataHost}/products/`)
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    useEffect(() => {
        const formattedCategories = allCategories.map(category => formatCategoryMethod(category));
        setFormatCategory(formattedCategories);
    }, [allCategories]);

    // const getImage = async () => {
    //     try {
    //         const response = await fetch(openAI, {
    //             method: "POST",
    //             headers: {
    //                 "Authorization": `Bearer ${API}`,
    //                 'Content-Type': "application/json",
    //             },
    //             body: JSON.stringify({
    //                 "prompt": "hello",
    //                 "n": 1,
    //                 "size": "1024x1024"
    //             })
    //         })
    //         const data = await response.json()
    //         console.log(data)
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    // useEffect(() => {
    //     getImage();
    // }, [])


    function formatCategoryMethod(category) {
        return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
        <DataContext.Provider value={{ allCategories, products, formatCategory }}> {/* Pass the value prop with the data */}
            {props.children}
        </DataContext.Provider>
    );
};

export default DataState;
