Lost & Found Portal is a cloud-based web application designed to help students report, search, and recover lost or found items within the campus. The system provides a simple and user-friendly interface where users can submit item details and browse items reported by others.

This project uses a serverless architecture powered by AWS services, ensuring scalability, reliability, and zero maintenance overhead. Authentication is securely managed through Amazon Cognito, while item data is stored and retrieved through AWS API Gateway and AWS Lambda, with data persisted in Amazon DynamoDB. The frontend is fully static and hosted using Amazon S3 + CloudFront for global fast delivery.

Key Features
1. Secure login using AWS Cognito
2. Post Lost or Found items
3. View all reports in a clean, categorized list
4. No backend servers to manage (fully serverless)
5. Fast content delivery through CloudFront CDN
6. Simple, mobile-friendly UI

Tech Stack
1. Component	Technology Used
2. Authentication	Amazon Cognito
3. API Backend	AWS Lambda + API Gateway
4. Database	Amazon DynamoDB
5. Frontend Hosting	Amazon S3 + CloudFront CDN
6. Frontend Language	HTML, CSS, JavaScript
