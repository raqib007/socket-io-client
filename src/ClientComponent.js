import React from "react";
import moment from 'moment';
import socketIOclient from "socket.io-client";
const endPoint = 'http://127.0.0.1:4001';

export default function ClientComponent(){
    const [response,setReponse] = React.useState();
    let socket = React.useRef(null);

    React.useEffect(()=>{
        socket.current = socketIOclient(endPoint);

        socket.current.on('fromAPI',(data)=>{
            setReponse(data);
        });

        socket.current.on('product list',(data)=>{
            console.log(data);
        });

        return ()=>{socket.current.disconnect();}
    },[]);

    function getProductList(){
        socket.current.emit('product list');
    }

    return(
        <div>
        <p>It's {moment(response).format('DD-MMM-YY hh:mm:ss a')}</p>
        <button onClick={()=>getProductList()}>Get Product List</button>
        </div>
    );
}
