import CarSchema from "./CarSchema.js";

// create
export const addCar = (userObj) => {
  return CarSchema(userObj).save();
};

//get
export const getAllCars = () => {
  return CarSchema.find();
};

//update
export const updateCar = ({ _id, ...updateObj }) => {
  return CarSchema.findByIdAndUpdate(_id, updateObj, { new: true });
};

//delete
export const deleteCar = (_id) => {
  return CarSchema.findByIdAndDelete(_id);
};
