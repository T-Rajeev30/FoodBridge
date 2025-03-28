import React, { useState, useEffect } from "react";

const NGODashBoard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [claimAmount, setClaimAmount] = useState({});

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    setFoodItems(storedFoodItems);
  }, []);

  const handleClaim = (index) => {
    const updatedFoodItems = [...foodItems];
    const amountToClaim = claimAmount[index] ? parseInt(claimAmount[index]) : 1;

    if (updatedFoodItems[index].quantity >= amountToClaim) {
      updatedFoodItems[index].quantity -= amountToClaim;
      if (updatedFoodItems[index].quantity === 0) {
        updatedFoodItems[index].claimed = true;
      }
      setFoodItems(updatedFoodItems);
      localStorage.setItem("foodItems", JSON.stringify(updatedFoodItems));
      alert("Food claimed successfully!");
    } else {
      alert("Not enough quantity available!");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex pt-[10%] flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-4">NGO Dashboard - Available Food</h2>
      
      {foodItems.length === 0 ? (
        <p className="text-xl text-gray-600">No food available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((food, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 w-[300px] text-center">
              {food.image ? (
                <img src={food.image} alt={food.foodName} className="w-full h-[200px] object-cover rounded-lg mb-3" />
              ) : (
                <p className="text-gray-500">No Image Available</p>
              )}
              
              <p className="text-lg font-semibold">{food.foodName}</p>
              <p><strong>Quantity:</strong> {food.quantity}</p>
              <p><strong>Expiry:</strong> {food.expiry}</p>
              
              {!food.claimed ? (
                <div className="mt-3">
                  <input 
                    type="number" 
                    min="1" 
                    max={food.quantity} 
                    className="border p-2 rounded w-20 mr-2"
                    placeholder="Qty" 
                    onChange={(e) => setClaimAmount({...claimAmount, [index]: e.target.value})} 
                  />
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    onClick={() => handleClaim(index)}>
                    Claim Food
                  </button>
                </div>
              ) : (
                <p className="text-green-600 font-semibold">✅ Fully Claimed</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NGODashBoard;