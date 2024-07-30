import { Priority } from "../../createaskForm/enums/Priority";
import { Status } from "../../createaskForm/enums/Status";
export interface ITaskApi {
    id:string,
    date:string,
    title:string,
    description:string,
    priority:`${Priority}`
    status:`${Status}`

}
