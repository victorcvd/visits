import './App.css';
import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import Visit from './Visit';

AWS.config.update({
    region: "us-east-1", 
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const docClient = new AWS.DynamoDB.DocumentClient();

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const params = {
            TableName : "tb_scheduling_detalle",
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
                <Visit key={item.id} item={item} />
            ))}
        </div>
    );
}

export default App;

