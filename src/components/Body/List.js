// import Message components
import Message from './Message.js';

// import style
import '../../style/css/list.css';

export default function List(){
    let data = ["hello","world", "!"]
    return(
        <div className="list">
            {data.map((item)=>(<Message data={item}/> ))}
        </div>
    )
}