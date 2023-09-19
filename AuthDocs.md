Sure, here's a markdown guide for the API you provided:

# Auth API Guide

This guide provides information on how to use the Auth API, which allows sellers to register, log in, send verification emails, and manage their profiles.

## Base URL
- The base URL for this API is `http://localhost:8080`.

## Register a Seller
- **Endpoint:** `/seller/register`
- **Method:** POST
- **Description:** Register a new seller.
- **Request Body:**
  ```json
  {
      "seller": {
          "sellerName": "Aakanksha",
          "sellerEmail": "aakankshajaiswar_it20b9_58@dtu.ac.in",
          "sellerPhone": "7878787878",
          "sellerPassword": "StrongPassword123@$"
      }
  }
  ```
- **Example Request:**
  ```markdown
  ```shell
  curl -X POST -H "Content-Type: application/json" -d '{
      "seller": {
          "sellerName": "Aakanksha",
          "sellerEmail": "aakankshajaiswar_it20b9_58@dtu.ac.in",
          "sellerPhone": "7878787878",
          "sellerPassword": "StrongPassword123@$"
      }
  }' http://localhost:8080/seller/register
  ```
- **Response:** No response body is specified.

## Send Verification Email
- **Endpoint:** `/seller/send-verification-email`
- **Method:** POST
- **Description:** Send a verification email to the seller's registered email address.
- **Request Body:**
  ```json
  {
      "seller": {
          "sellerEmail": "aakankshajaiswar_it20b9_58@dtu.ac.in"
      }
  }
  ```
- **Example Request:**
  ```markdown
  ```shell
  curl -X POST -H "Content-Type: application/json" -d '{
      "seller": {
          "sellerEmail": "aakankshajaiswar_it20b9_58@dtu.ac.in"
      }
  }' http://localhost:8080/seller/send-verification-email
  ```
- **Response:** No response body is specified.

## Login as a Seller
- **Endpoint:** `/seller/login`
- **Method:** POST
- **Description:** Log in as a seller.
- **Request Body:**
  ```json
  {
      "seller": {
          "sellerEmail": "geekyadi118@gmail.com",
          "sellerPassword": "StrongPassword123@$"
      }
  }
  ```
- **Example Request:**
  ```markdown
  ```shell
  curl -X POST -H "Content-Type: application/json" -d '{
      "seller": {
          "sellerEmail": "geekyadi118@gmail.com",
          "sellerPassword": "StrongPassword123@$"
      }
  }' http://localhost:8080/seller/login
  ```
- **Response:** No response body is specified.

## Verify Email
- **Endpoint:** `/seller/verify-email`
- **Method:** GET
- **Description:** Verify the email address of the seller.
- **Example Request:**
  ```markdown
  ```shell
  curl -X GET http://localhost:8080/seller/verify-email
  ```
- **Response:** No response body is specified.

## View Seller Profile
- **Endpoint:** `/seller/profile`
- **Method:** GET
- **Description:** Retrieve the seller's profile information.
- **Example Request:**
  ```markdown
  ```shell
  curl -X GET http://localhost:8080/seller/profile
  ```
- **Response:** The response will contain the seller's profile information in JSON format.

## Logout
- **Endpoint:** `/seller/logout`
- **Method:** POST
- **Description:** Log out the currently logged-in seller.
- **Example Request:**
  ```markdown
  ```shell
  curl -X POST http://localhost:8080/seller/logout
  ```
- **Response:** No response body is specified.

Please note that you should replace the example data with your actual data when making API requests. Make sure to handle API responses accordingly in your application.
