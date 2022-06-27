const mongoose = require("mongoose")

const situationSchema = new mongoose.Schema(
    {
        desc: {
            type: String,
            required: true
        },
        departmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department"
        },
        avarageMark: {
            type: Number,
            default: 0 
        },
        name: {
            type: String, 
            required: true
        },
        diagnose: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Diagnose"
            }
        ],
        isExam: {
            type: Boolean, 
            default: false
        },
        times: {
            type: Number, 
            default: 0
        },
        isFinish: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Situation", situationSchema)