import React, { useState } from "react";

const RestaurantDashboard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry, setExpiry] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    if (!foodName || !quantity || !expiry || !image) {
      alert("Please fill all details and upload an image!");
      return;
    }

    const newFood = {
      foodName,
      quantity: parseInt(quantity), // Convert to number
      expiry,
      image: URL.createObjectURL(image),
      claimed: false,
    };

    const updatedFoodItems = [...foodItems, newFood];
    setFoodItems(updatedFoodItems);
    localStorage.setItem("foodItems", JSON.stringify(updatedFoodItems));

    alert("Food item uploaded successfully!");
  };

  return (
    <div className="bg-[#fede19] h-screen flex items-center justify-center flex-col gap-6">
      <h2 className="pt-6 text-[2vw] font-bold uppercase">Restaurant Dashboard</h2>
      <div className="flex flex-col justify-center items-center gap-5">
        <input className="w-[40vw] h-[3vw] rounded-xl" type="text" placeholder="Food Name" onChange={(e) => setFoodName(e.target.value)} />
        <input className="w-[40vw] h-[3vw] rounded-xl" type="number" placeholder="Quantity in kg" onChange={(e) => setQuantity(e.target.value)} />
        <input className="w-[40vw] h-[3vw] rounded-xl" type="text" placeholder="Expiry Time" onChange={(e) => setExpiry(e.target.value)} />
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
    </div>
  );
};

export default RestaurantDashboard;
