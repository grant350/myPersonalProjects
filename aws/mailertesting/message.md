# the c7n mailer example:
###### note: this project needs new email,queueUrls,roleArn,Messagefile. 
###### this file may have all of the files mentioned above however you need to replace them.

## step1
** first install pip install c7n-mailer, create queue in aws/sqs, check and verify email's
** visit docs @ https://github.com/cloud-custodian/cloud-custodian/tree/master/tools/c7n_mailer


## step 2
** asuming you read the docs, once you got a sqs message encoded by clicking on queue Actions/view message on AWS/SQS. run " custodian run -c test-policy.yml -s . " copy that message into a file named "message.enc".  run the python extra.py to get the message plain JSON. then your pretty good to go. 
