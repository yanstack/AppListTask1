import { DataTypes } from "sequelize";
import db from "../database/db.js";


const BlogModel= db.define('blogs',{
    Title:{type:DataTypes.STRING},
    Content:{type:DataTypes.STRING},
});

export default BlogModel;
