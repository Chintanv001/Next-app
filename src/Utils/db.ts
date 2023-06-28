import mongoose from 'mongoose'

const connect = async () => {
    try {
        const mongoURL = process.env.MONGO!
         await mongoose.connect(mongoURL);
        
    } catch (error) {
        throw new Error("Connection failed")
    }
}

export default connect