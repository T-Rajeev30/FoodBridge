import Hotels from "../models/hotels.model.js";

export const createHoteluser = async (req, res) => {
    const hotel = req.body;

    if (!hotel.hotelname || !hotel.ownername || !hotel.email || !hotel.phone || !hotel.address || !hotel.fssai || !hotel.password) {
        return res.status(400).json({ status: "error", message: "All fields are required" });
    }

    const newHoteluser = new Hotels(hotel);

    try {
        await newHoteluser.save();
        res.status(201).json({ status: "success", hotel: newHoteluser });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}