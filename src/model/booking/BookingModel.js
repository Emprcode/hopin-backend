import BookingSchema from "./BookingSchema.js";

export const carBooking = (bookingInfo) => {
  return BookingSchema(bookingInfo).save();
};

export const getCarBooking = (userId) => {
  return BookingSchema.findById(userId);
};
