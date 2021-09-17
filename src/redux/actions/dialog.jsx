import * as type from '../types';

export const openDialog = ({data}) => {
    return {
        data,
        type: type.OPEN_DIAGLOG
    }
}

export const closeDialog = (data) => {
    return {
        data,
        type: type.CLOSE_DIALOG
    }
}