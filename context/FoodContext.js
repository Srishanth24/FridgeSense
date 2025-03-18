import React, { createContext, useState, useEffect } from 'react';
import { getFoodItems, saveFoodItem, removeFoodItem } from '../services/localStorage';

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            const items = await getFoodItems();
            setFoodItems(items);
        };
        fetchFoodItems();
    }, []);

    const addFoodItem = async (item) => {
        const updatedItems = [...foodItems, item];
        setFoodItems(updatedItems);
        await saveFoodItem(updatedItems);
    };

    const updateFoodItem = async (updatedItem) => {
        const updatedItems = foodItems.map(item => 
            item.id === updatedItem.id ? updatedItem : item
        );
        setFoodItems(updatedItems);
        await saveFoodItem(updatedItems);
    };

    const deleteFoodItem = async (id) => {
        const updatedItems = foodItems.filter(item => item.id !== id);
        setFoodItems(updatedItems);
        await removeFoodItem(updatedItems);
    };

    return (
        <FoodContext.Provider value={{ foodItems, addFoodItem, updateFoodItem, deleteFoodItem }}>
            {children}
        </FoodContext.Provider>
    );
};