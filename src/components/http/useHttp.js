import * as actionTypes from '../../context/action'
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/reducer";

export const useHttp = () => {
    const { dispatch } = useContext(Context)
    const request = async (link) => {
        dispatch({
            type: actionTypes.REQUEST_LOADING
        })
        try {
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`)
            dispatch({
                type: actionTypes.REQUEST_SUCCESSFUL,
                payload: res.data.result.full_short_link2,
            })
        } catch (err) {
            dispatch({
                type: actionTypes.REQUEST_ERROR,
                textError: 'something went wrong'
            })
            setTimeout(() => {
                dispatch({
                    type: actionTypes.REQUEST_ERROR,
                    textError: ''
                }, 2000)
            })
        }
    }
    return { request }
}