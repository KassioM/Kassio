import React from 'react'

const Box = ( props ) => {
    return (
        <div className="box-technologies" >
            <div className="content-box-technologies">

                <div className="content-title-box">
                    <img
                        src={props.img}
                        width={props.width}
                        height={props.height}
                        alt={props.title}
                    />

                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>

                <div className="content-info-nivel">
                    <div className="info-nivel">
                        <p>Nivel: {props.nivel}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Box
