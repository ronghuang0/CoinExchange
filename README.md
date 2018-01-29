# CoinExchange
This is a bit of a misnomer since I envision this to be a collection of cryptocurrency rates
from different exchanges rather than an actual exchange. 
https://...


#To Run
```  
npm install  
webpack   
npm start  
```
Go to http://localhost:3000/

#Uses
As of now the application is very small and simple so there is no state management library. I am
simply doing the requests in the root component and passing the data through props. As more data
is fetched, I will distribute the fetching throughout different component points. If this evolves
enough, then I will experiment with MobX since I have been very curious to see the differences
from Redux.

#Todo
internationalization
