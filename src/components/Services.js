import React, { useState, useEffect } from 'react';
import Service from './Service';
import AWS from 'aws-sdk';


AWS.config.update({
  region: "us-east-1", 
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const docClient = new AWS.DynamoDB.DocumentClient();
//import { scanTable, updateItem } from '../api/dynamodb';

const Services = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      const params = {
          TableName : "services_forms",
      };

      docClient.scan(params, function(err, data) {
          if (err) {
              console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
          } else {
              setData(data.Items);
              console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
          }
      });
  }, []);

  return (
    <div>
    {data.map(item => (
        <Service key={item.id} item={item} />
    ))}
    </div>
  );
};

export default Services;
