import http from '../http'


export const getCityList = () => {
    return http({
        url: './data/cityList.json',
        method: 'get',
    })
}

export const getAreaList = () => {
    return http({
        url: './data/areaList.json',
        method: 'get',
    })
}

export const getIndustry = () => {
    return http({
        url: './data/industryList.json',
        method: 'get',
    })
}

export const getProjectList = () => {
    return http({
        url: './data/projectList.json',
        method: 'get',
    })
}