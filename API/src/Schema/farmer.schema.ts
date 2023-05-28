import {object,number,string,TypeOf} from 'zod'


const payload = {
    body: object({
        fullname: string({
            required_error: "name is required"
        }),
        age: number({
            required_error: "age is required"
        }),
        district: string({
            required_error: "district is required"
        })
    })
}

const params = {
    params: object ({
        farmerId: string ({
            required_error: "farmerId is required"
        })
    })
}

export const createFarmerSchema = object ({
    ...payload
})

export const updateFarmerSchema = object ({
    ...payload,
    ...params
})

export const deleteFarmerSchema = object ({
    ...params
})

export const getFarmerSchema = object ({
    ...params
})


export type createFarmerInput = TypeOf<typeof createFarmerSchema>
export type updateFarmerInput = TypeOf<typeof updateFarmerSchema>
export type ReadFarmerInput = TypeOf<typeof getFarmerSchema>
export type deleteFarmerInput = TypeOf<typeof deleteFarmerSchema>