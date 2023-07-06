import test, { expect } from "@playwright/test";
import * as credentials from '../../data/credentials.json'
import * as userData from '../../data/user_data.json'

test.describe('API tests for Restfull booker', ()=>{
    let bookingId: number
    let token: string
    test('User can create token using username and password @api', async ({request})=>{
        let response = await request.post(`/auth`, {data: credentials.API_Payload})
        expect(response.status()).toBe(200)
        let data = JSON.parse(await response.text())
        //console.log(data)
        expect(data.token).not.toBeNull()
        token = data.token
    })

    test('User can get booking list @api', async ({request})=>{
        let response = await request.get(`/booking`)
        expect(response.status()).toBe(200)
        let data = JSON.parse(await response.text())
        //console.log(data)
        expect(data[0].bookingid).not.toBeNull()
    })

    test('User can create booking @api', async ({request})=>{
        let response = await request.post(`/booking`, {data: userData})
        expect(response.status()).toBe(200)
        let data = JSON.parse(await response.text())
        //console.log(data)
        bookingId = data.bookingid
        expect(data.booking.firstname).toEqual(userData.firstname)
        expect(data.booking.lastname).toEqual(userData.lastname)
        expect(data.bookingid).not.toBeNull()
    })

    test('User can get booking information usuing booking id @api', async ({request})=>{
        let response = await request.get(`/booking/${bookingId}`)
        expect(response.status()).toBe(200)
        let data = JSON.parse(await response.text())
        //console.log(data)
        expect(data.firstname).toEqual('Jim')
        expect(data.lastname).toEqual('Brown')
        expect(data.totalprice).toEqual(111)
        expect(data.depositpaid).toEqual(true)
        expect(data.bookingdates.checkin).toEqual('2018-01-01')
    })

    test('User can update complete booking info @api', async ({request})=>{
        let response = await request.put(`/booking/${bookingId}`,{data: userData, headers: {'Cookie': `token=${token}`}})
        expect(response.status()).toBe(200)
        let data = JSON.parse(await response.text())
        //console.log(data)
        expect(data.firstname).toEqual('Jim')
    })

    test('User can update partial booking info @api', async ({request})=>{
        let updateInfo = {
            "firstname" : "Jamei",
            "lastname" : "Black",
        }
        let response = await request.patch(`/booking/${bookingId}`,{data: updateInfo, headers: {'Cookie': `token=${token}`}})
        expect(response.status()).toBe(200)
        let data = JSON.parse(await response.text())
        //console.log(data)
        expect(data.firstname).toEqual('Jamei')
        expect(data.lastname).toEqual('Black')
    })

    test('User can delete booking  @api', async ({request})=>{
        let response = await request.delete(`/booking/${bookingId}`,{headers: {'Cookie': `token=${token}`}})
        expect(response.status()).toBe(201)
    })
})