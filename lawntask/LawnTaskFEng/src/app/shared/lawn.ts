export interface Address {
    street?: String,
    city?: String,
    state?: String,
    zip?: String,
    geometry :{
        lat : String,
        long : String
    }
}
export interface Lawn  {
    _id?: String,
    silty?: String,
    grass?: String,
    squarefoot?: String,
    address: Address,
    user_id?: String,
    temperature : number[],
    precipitation : number[] 
};
    