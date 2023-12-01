import mongoose from "mongoose";
import collectionSchema from "./collection.schema";

const productschema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      maxLength: 20,
    },
    discription: {
      type: String,
      required: true,
    },
    photos: [
      {
        secure_url: {
          type: String,
          required: true,
        },
      },
    ],
    stock: {
      type: String,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    collection: {
      ref: 'Collection',
    },
  },
  { timestamps: true }
);
