# Pococare-Medical-Emergency-System

Pococare-Medical-Emergency-System is a web-based application that allows users to book appointments with doctors. It provides a platform where users can easily schedule appointments for medical consultations and treatments. The system aims to streamline the process of accessing medical care by providing a convenient and efficient appointment booking system.

<p align = "center">
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>

**Server:** Node, Express , MongoDB Atlas

**Client:** HTML, CSS ,Javascript

<hr>

## Video Presentation 

**Video Link** - https://drive.google.com/file/d/16gMXtkEBNIM0CssCmgyYAGNU8kUJVUfF/view?usp=sharing 

## Deployment

**Server side:** Render cloud https://poco-backend.onrender.com

**Client side:** Netlify https://lighthearted-cuchufli-565079.netlify.app/

## Features 
-  Role based authentication
-  API Validation
-  Signup/Login
-  Patient can book the appointment with doctors and doctors can create slots based on the availablility only authenticated user can book appointment
-  Doctors can open slots
-  Only available appointment can be booked
-  Video consultation
-  Offline consultation

###  Run Locally Clone this Project

```
https://github.com/deepakChourasiya-aj/Pococare-Medical-Emergency-System.git
```
### Runs the project in the development mode

[http://localhost:8080](http://localhost:8080)


## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZRJJRPM1V6XKXBLn2fnsy5VwmLW1uO9ixCfCYiZRwWeLKe2ukB17uzxRRyhZElgzn_E&usqp=CAU" alt="twilio" width="70" height="50"/>
</p>
   
   
## API Endpoints

  #### User Signup
```javascript
POST  http/localhost:8080/register
```
  #### User Login
```javascript
POST  http/localhost:8080/login
```
  #### Doctors/Patient can check the their appointment
```javascript
GET  http://localhost:8080/api/apt
```
  #### Patient can book appointment
```javascript
POST  http://localhost:8080/api/doctorId/slotId
```
  #### Doctors can open slots 
```javascript
POST  http://localhost:8080/api/slots
```


 ### USERS DATA/ USE EMAIL AND PASSWORD FOR LOGIN AS DOCTOR, BELOW  CHECK

```javascript
{
  "firstName": "Lionel",
  "lastName": "Messi",
  "email": "lionel@gmail.com",
  "mobile": "8899939901",
  "password": "123",
  "role": "doctor"
}
{
  "firstName": "Cristiano",
  "lastName": "Ronaldo",
  "email": "cristiano@gmail.com",
  "mobile": "8889939901",
  "password": "123",
  "role": "doctor"
}

```

 ### USERS DATA/ LOGIN AS PATIENT TO CHECK APPOINTMENT

```javascript
{
  email:deepak@gmail.com
  password:123
}
{
  email:jy@gmail.com
  password:123
}

```
#### PROFILE DATA

```javascript

{
  "doctorName": "Dr. Lionel",
  "qualifications": "MBBS, MD",
  "speciality": "Neurology",
  "experience": "13 years",
  "setfees": 4000,
  "city": "Delhi"
}

```


![image](https://github.com/deepakChourasiya-aj/Pococare-Medical-Emergency-System/assets/109690823/47911493-8b40-4e18-8f37-6f7be742882d)



![image](https://github.com/deepakChourasiya-aj/Pococare-Medical-Emergency-System/assets/109690823/13cb1943-3b18-41d7-9e12-e0628fb9e5f0)


![image](https://github.com/deepakChourasiya-aj/Pococare-Medical-Emergency-System/assets/109690823/526cfd4f-e0f5-4d97-93fe-a1fa0204dc6e)


 
| `Authors` |
| :-------: | 

 
 [@deepakChourasiya-aj](https://github.com/deepakChourasiya-aj) 
 

