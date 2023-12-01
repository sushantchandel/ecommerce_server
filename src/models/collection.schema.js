import mongoose from "mongoose";

const collectionschema = mongoose.Schema(
    {
        name:{
            name:String,
            require:["please provide th e collection name"],
            trim:true,
            maxLength:[
                120,"collection must be less then 120"
            ]
        }
    }
    , { timestamps: true });

export default mongoose.model("Collection", collectionschema);
