import React from 'react'
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div style={{
                    marginTop: '50vh',
                    marginLeft:'45vw'
                        }}>
            <ReactLoading type="cylon" color="#000000" height='100vh' widht='100vh'/>
        </div>
    )
}
