import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '962b75c32cmsh1c8ed06b4ff6c1ep1e375djsnbfe3662c987d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;