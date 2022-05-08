import Moment from "react-moment";
import {Button} from "./button";
import React from "react";

export const Table = ({list, onDismiss})=> {
    return(
        <div className="table">

            {list.map(item =>
            {return <div key={item.objectID} className="table-row">
             <span style={{ width: '40%' }}>
                <a href={item.url}>{item.title}</a>
                </span>
                <span style={{ width: '20%' }}>
                {item.author}
                </span>
                <span style={{ width: '20%' }}>
                <Moment fromNow >{item.created_at}</Moment>

            </span>

                <span style={{ width: '10%' }}>
                        <Button
                            onClick={() => onDismiss(item.objectID)}
                            className="button-inline"
                        > Dismiss
                        </Button>
                        </span>
            </div>;
            })}
        </div>
    );
}