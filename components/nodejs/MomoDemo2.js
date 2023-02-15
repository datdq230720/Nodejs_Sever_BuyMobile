exports.getMoneyMoMo = (_money) => {
    var partnerCode = "MOMO";
    var accessKey = "F8BBA842ECF85";
    var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    var requestId = partnerCode + new Date().getTime();
    var orderId = requestId; // Mã đơn hàng
    var orderInfo = "Thanh toán qua QR MoMo";
    var redirectUrl = "http://localhost:3000/product"; // khi thanh toán thanh công sẽ trả về 
    var ipnUrl = "https://callback.url/notify";
    // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
    var amount = _money;
    var requestType = "captureWallet"
    var extraData = ""; //pass empty value if your merchant does not have stores

    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl="
        + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode="
        + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType="
        + requestType

    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretkey)
        .update(rawSignature)
        .digest('hex');

    const requestBody = JSON.stringify({
        partnerCode: partnerCode,
        accessKey: accessKey,
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        redirectUrl: redirectUrl,
        ipnUrl: ipnUrl,
        extraData: extraData,
        requestType: requestType,
        signature: signature,
        lang: 'vi'
    });
    //Create the HTTPS objects
    const https = require('https');
    const fs = require('fs');
    const options = {
        hostname: 'test-payment.momo.vn',
        port: 443,
        path: '/v2/gateway/api/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestBody)
        }
    }
    //Send the request and get the response
    const req = https.request(options, res => {

        console.log(`Status: ${res.statusCode}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        let url;
        res.on('data', (body) => {
            // console.log('Body: ');
            // console.log(body);
            // console.log('payUrl: ');
            // console.log(JSON.parse(body).payUrl);
            url = JSON.parse(body).payUrl+"";
        });
        res.on('end', () => {
            const open = require('open');
            open(url,  { wait : true });
            console.log('No more data in response.');

        });
        // console.log("-----------------requestBody: ---------------");
        // console.log(requestBody);

    });


    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });
    // write data to request body

    req.write(requestBody);
    req.end();
}