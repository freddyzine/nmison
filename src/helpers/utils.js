import axios from "axios";

export const apiCaller = async (config) => {
    try {
        const response = await axios(config);
        return {
            status: response.status,
            data: response.data?.data,
            message: response.data?.message,
            error: response.data.error,
        };
    } catch (err) {
        return {
            status: err.response.status,
            data: err.response.data?.data,
            message: err.response.data.message,
            error: err.response.data.error,
          };
    }
}

export const statusColor = (status) => {
    switch(status){
        case "completed":
            return "#00FF00"
        case "new":
            return "#90EE90"
        case "pending":
            return "#FFA500"
        case "bill available":
            return "#0000FF"
        case "demand note ready":
            return "#A020F0"
        case "cancel":
            return "#FF0000"
        default: 
            return "#A020F0"
    }
}

export const STATUS = Object.freeze({
	"new": "new",
	"pending": "pending",
	"bill_ready": "Ready: Calibration Bill",
	"bill_available": "Available: Calibration Bill",
	"dn_request": "Requested: Demand Note",
	"dn_ready": "Ready: demand Note",
	"dn_available": "Available: demand Note",
	"certificate_ready": "Ready: Certificate",
	"completed": "Completed",
	"canceled": "canceled"
})