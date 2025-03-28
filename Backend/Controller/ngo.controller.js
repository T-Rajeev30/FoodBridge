import NGO from "../models/ngo.model.js";

export const createNGOuser = async (req, res) => {
    const ngo = req.body;

    if (!ngo.name || !ngo.email || !ngo.phone || !ngo.address || !ngo.ngoregistrationnumber || !ngo.password ) {
        return res.status(400).json({ status: "error", message: "All fields are required" });
    }

    const newNGOuser = new NGO(ngo);

    try {
        await newNGOuser.save();
        res.status(201).json({ status: "success", ngo: newNGOuser });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export const getNGOuser = async (req, res) => {
    try {
        const ngo = await NGO.find();
        res.status(200).json({ status: "success", ngo });
    } catch (error) {
        res.status(500).json({ status: "error", message: "error in fetching products" });
    }
}

export const updateNGOuser = async (req, res) => {
    const { id } = req.params;

    const ngo = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: "error", message: "Invalid NGO id" });
    }

    try {
        const updatedNGO = await Product.findByIdAndUpdate(id, ngo, { new: true });
        res.status(200).json({ status: "success", product: updatedNGO });
    } catch (error) {
        res.status(500).json({ status: "error", message: "error in updating NGO" });
    }
}

export const deleteNGOuser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: "error", message: "Invalid NGO id" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "NGO deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "error in deleting NGO" });
    }
}
