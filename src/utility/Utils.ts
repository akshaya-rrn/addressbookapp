import moment from "moment";
import { Name } from "../types";

export const getUserName = (userNameObj: Name) => {
    return `${userNameObj.first} ${userNameObj.last}`;
};

export const formatDOB = (utcDate: Date) => {
    return moment().format('DD-MM-YYYY');
}