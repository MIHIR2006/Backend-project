import mongoose,{Schema, schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, //Cloudinary url
            require:true
        },
        thumbnail:{
            type: String, //Cloudinary url
            require:true
        },
        title:{
            type: String,
            require:true
        },
        description:{
            type: String,
            require:true
        },
        duration:{
            type: String,
            require:true
        },
        views:{
            type:Number,
            default:0,
        },
        isPublished: {
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref: "User"
        }
    },{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate-v2)
export const Video = mongoose.model("Video",videoSchema)