'use strict';

const AWS = require('aws-sdk')
var sqs = new AWS.SQS({region: 'us-east-1'})
const QURL = 'https://sqs.us-west-1.amazonaws.com/560721574155/nodesqs'

var ses = new AWS.SES();

var params = {
source = "soundbreakr1@gmail.com",
template = "superman"
templatedata = JSON.stringify(templatedata)

}



ses.sendTemplateEmail(params, function(err,data){
console.log(JSON.stringify(data))
data = JSON.stringify(data)
})



module.exports.hello =  (event,context,callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },null,2),
  };
callback(null, response)
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
