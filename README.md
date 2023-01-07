# nodejsJWTtoken

First clone project into your machine

then install all dependencices by excuting bellow command
```
npm install
```

once you have successfully instaled all dependencies excute bellow command

```
npm run start
```

Open postmen to get jwt token POST
```
try url http://localhost:5000/user/generateToken

![image](https://user-images.githubusercontent.com/4178853/211133537-136ea682-6035-477b-bab5-738366faae3e.png)

```
Verify postmen to GET jwt token
```
try url http://localhost:5000/user/validateToken
you have to send Headers
key: Authorization 
value: token you have got from abouve call
![image](https://user-images.githubusercontent.com/4178853/211133551-b3c1c59a-2faa-40a0-afbd-93ed15db809f.png)
```
