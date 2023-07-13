import axios from "axios";
import { 
    getAllTasksStart,
    getAllTasksSuccess,
    getAllTasksFail 
} from "./taskSlice";

export const getAllTasks = async (dispatch) => {
    dispatch(getAllTasksStart());
    try{
        const res = await axios.get("http://localhost:8000/api/tasks");
        dispatch(getAllTasksSuccess(res.data));
    }catch(err){
        dispatch(getAllTasksFail());
    }
}