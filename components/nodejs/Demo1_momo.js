exports.getPayMoMo = (_amount) => {
    var partnerCode = "MOMO";
    var accessKey = "F8BBA842ECF85";
    var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    var requestId = partnerCode + new Date().getTime();
    var orderId = requestId; // Mã đơn hàng
    var orderInfo = "Thanh toán qua QR MoMo";
    var redirectUrl = "http://localhost:3000/login"; // khi thanh toán thanh công sẽ trả về 
    var ipnUrl = "https://callback.url/notify";
    // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
    var amount = _amount;
    var requestType = "captureWallet"
    var extraData = ""; //pass empty value if your merchant does not have stores

    let _Url = "";
    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl="
        + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode="
        + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType="
        + requestType
    //puts raw signature
    // console.log("--------------------RAW SIGNATURE----------------")
    // console.log(rawSignature)
    //signature
    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretkey)
        .update(rawSignature)
        .digest('hex');
    // console.log("--------------------SIGNATURE----------------")
    // console.log(signature)

    //json object send to MoMo endpoint | đối tượng json gửi đến điểm cuối MoMo
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
    https.request(options, res => {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (body) => {
            console.log('Body123: ');
            console.log(body);
            console.log("===========================================================");
            // console.log('qrCodeUrl : ', body.qrCodeUrl);
            // return body.qrCodeUrl;
            const Url = JSON.parse(body).qrCodeUrl;
            _Url = Url;
            console.log("avc:" + Url);
            return _Url;
        });
        res.on('end', () => {
            console.log('No more data in response.'+_Url);
            return _Url;

        });
        console.log(requestBody);
    })
    
    
}

exports.Pay = () => {
    const url = getPayMoMo(5000);
    return url;
}