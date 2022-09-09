# My AWS Cloud Resume Challenge Frontend Repo
link to backend repo - https://github.com/yocamyo/terraformCloudResume

![architecturediagram](https://user-images.githubusercontent.com/40249730/188537969-c89edcb9-8c11-443a-bcb9-6fb45235abf6.png)

### Checkout the finished product!  https://camdennavis.com
This version uses Terraform as IaC and Cypress E2E tests as challenge modifications.


## The 16 Steps of the Challenge...

## 1. Certification

Your resume needs to have at least the AWS Cloud Practitioner certification on it.
## 2. HTML

Your resume needs to be written in HTML.
## 3. CSS

Your resume needs to be styled with CSS.
## 4. Static Website

Your HTML resume should be deployed online as an Amazon S3 static website.
## 5. HTTPS

The S3 website URL should use HTTPS for security. You will need to use Amazon CloudFront to help with this.
## 6. DNS

Point a custom DNS domain name to the CloudFront distribution, so your resume can be accessed at something like my-c00l-resume-website.com. You can use Amazon Route 53 or any other DNS provider for this.
## 7. Javascript

Your resume webpage should include a visitor counter that displays how many people have accessed the site.
## 8. Database

The visitor counter will need to retrieve and update its count in a database somewhere. I suggest you use Amazon’s DynamoDB for this. (Use on-demand pricing for the database and you’ll pay essentially nothing, unless you store or retrieve much more data than this project requires.)
## 9. API

Do not communicate directly with DynamoDB from your Javascript code. Instead, you will need to create an API that accepts requests from your web app and communicates with the database. I suggest using AWS’s API Gateway and Lambda services for this.
## 10. Python

You will need to write a bit of code in the Lambda function; you could use more Javascript, but it would be better for our purposes to explore Python – a common language used in back-end programs and scripts – and its boto3 library for AWS.
## 11. Tests

You should also include some tests for your Python code. Here are some resources on writing good Python tests.
## 12. Infrastructure as Code

You should not be configuring your API resources – the DynamoDB table, the API Gateway, the Lambda function – manually, by clicking around in the AWS console. Instead, define them in an AWS Serverless Application Model (SAM) template and deploy them using the AWS SAM CLI. This is called “infrastructure as code” or IaC. It saves you time in the long run.
## 13. Source Control

You do not want to be updating either your back-end API or your front-end website by making calls from your laptop, though. You want them to update automatically whenever you make a change to the code. (This is called continuous integration and deployment, or CI/CD.) Create a GitHub repository for your backend code.
## 14. CI/CD (Back end)

Set up GitHub Actions such that when you push an update to your Serverless Application Model template or Python code, your Python tests get run. If the tests pass, the SAM application should get packaged and deployed to AWS.
## 15. CI/CD (Front end)

Create a second GitHub repository for your website code. Create GitHub Actions such that when you push new website code, the S3 bucket automatically gets updated. (You may need to invalidate your CloudFront cache in the code as well.) Important note: DO NOT commit AWS credentials to source control! Bad hats will find them and use them against you!
## 16. Blog post

Finally, in the text of your resume, you should link a short blog post describing some things you learned while working on this project. Dev.to or Hashnode are great places to publish if you don’t have your own blog.

More info and modifications on the challenge can be found at https://cloudresumechallenge.dev/
