import ajaxFun from "../untils/ajaxFun"

export const getProductsList = (params) => {
    return ajaxFun({
        method: 'get',
        url: 'api/getProducts',
        params
    })
}

export const pay = (params) => {
    return ajaxFun({
        method: 'post',
        url: 'api/pay',
        params
    })
}