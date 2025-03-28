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

export const getHoteluser = async (req, res) => {
    try {
        const hotel = await Hotels.find();
        res.status(200).json({ status: "success", hotel });
    } catch (error) {
        res.status(500).json({ status: "error", message: "error in fetching products" });
    }
}

export const updateHoteluser = async (req, res) => {
    const { id } = req.params;

    const hotel = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: "error", message: "Invalid hotel id" });
    }

    try {
        const updatedHotel = await Product.findByIdAndUpdate(id, hotel, { new: true });
        res.status(200).json({ status: "success", product: updatedHotel });
    } catch (error) {
        res.status(500).json({ status: "error", message: "error in updating Hotel" });
    }
}

export const deleteHoteluser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: "error", message: "Invalid Hotel id" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Hotel deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "error in deleting Hotel" });
    }
}
