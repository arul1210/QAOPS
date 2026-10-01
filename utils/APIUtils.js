class APIUtils 
{


    constructor(apiContext, loginPayLoad)
    {
        this.apiContext=apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async gettoken()
    {

        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data:this.loginPayLoad
        }
    )
    
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log('Token',token);
    return token;
    }

    async createOrder(orderPayLoad)
    {
        let response ={};
        response.token = await this.gettoken();

        const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
              {
                data : orderPayLoad,
                headers: 
                {
                  'authorization': response.token,
                  'content-type':'application/json'
                }
              }
            ) 
            const orderResponseJson = await orderResponse.json();
            console.log(orderResponse);
            const orderId = orderResponseJson.orders[0];
            response.orderId=orderId;
            return response;
    }

    
}
module.exports={APIUtils};