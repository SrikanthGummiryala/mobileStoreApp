import Mobile from "../model/mobileModel.js";

export const getMobile = async (req, res) => {
  try {
    const mobile = await Mobile.find();
    res.status(200).json(mobile);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};
