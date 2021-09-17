import * as type from '../types';

export const openDialog = ({data}) => {
    console.log(data)
    return {
        data,
        type: type.OPEN_DIAGLOG
    }
}

export const closeDialog = () => {
    return {
        type: type.CLOSE_DIALOG
    }
}