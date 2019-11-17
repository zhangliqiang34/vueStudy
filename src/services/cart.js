import ajaxFun from "../untils/ajaxFun"

export const getProductsList = (params) => {
    return ajaxFun({
        method: 'get',
        url: 'api/getProducts',
        params
    })
}