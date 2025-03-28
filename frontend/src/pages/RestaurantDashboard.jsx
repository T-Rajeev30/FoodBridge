import React, { useState, useEffect } from "react";

const RestaurantDashboard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry, setExpiry] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    setFoodItems(storedFoodItems);
  }, []);

  const handleUpload = () => {
    if (!foodName || !quantity || !expiry || !image) {
      alert("Please fill all details and upload an image!");
      return;
    }

    const newFood = {
      foodName,
      quantity: parseInt(quantity),
      expiry,
      image: URL.createObjectURL(image),
      claimedQuantity: 0,
    };

    const updatedFoodItems = [...foodItems, newFood];
    setFoodItems(updatedFoodItems);
    localStorage.setItem("foodItems", JSON.stringify(updatedFoodItems));

    alert("Food item uploaded successfully!");
  };

  return (
    <div className="bg-[#98D0F8] h-screen flex items-center justify-center flex-col gap-6">
      <h2 className="pt-6 text-[2vw] font-bold uppercase">Restaurant Dashboard</h2>
      <div className="flex flex-col justify-center items-center gap-5">
        <input className="w-[40vw] h-[3vw] rounded-xl p-4" type="text" placeholder="Food Name" onChange={(e) => setFoodName(e.target.value)} />
        <input className="w-[40vw] h-[3vw] rounded-xl p-4" type="number" placeholder="Quantity in kg" onChange={(e) => setQuantity(e.target.value)} />
        <input className="w-[40vw] h-[3vw] rounded-xl p-4" type="text" placeholder="Expiry Time" onChange={(e) => setExpiry(e.target.value)} />
        <input 
          className="w-[40vw] h-[3vw] rounded-xl bg-white p-2 cursor-pointer" 
          type="file" 
          accept="image/*" 
          onChange={(e) => setImage(e.target.files[0])} 
        />
        <button className="bg-[#FD5c26] text-white w-[40vw] h-[3vw] rounded-xl" onClick={handleUpload}>
          Upload Food
        </button>
      </div>
      
      <div className="mt-10 w-auto gap-10 flex items-center">
        {/* <h3 className="text-xl font-bold text-center mb-4">Uploaded Food Items</h3> */}
        {foodItems.length === 0 ? (
          <p className="text-center">No food items uploaded yet.</p>
        ) : (
          foodItems.map((item, index) => (
            <div key={index} className="border   p-4 mb-2 rounded-xl bg-white">
              <img src={item.image} alt={item.foodName} className="w-20 h-20 object-cover rounded" />
              <h4 className="font-semibold">{item.foodName}</h4>
              <p>Quantity Available: {item.quantity} kg</p>
              <p>Expiry: {item.expiry}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantDashboard;