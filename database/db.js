
import mongoose from "mongoose";


export const Connection = async (URL) =>
    {
       try {

       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true });
       console.log('Database connected');
        
       } catch (error) {
            console.log('Error while connecting the database' , error.message);
       }
    }

    export default Connection;