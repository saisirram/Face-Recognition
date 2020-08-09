import React from 'react'
import styled from 'styled-components';


export default function ImageLinkForm() {
    return (
        <div>
            <p className="f3 white">
                {`Face Recognition will detect faces in your picture, please give it a try`}
            </p>
            <div className="center">
                <div className="center" style={{ width: '70%' }}>
                    <input type="text" className="f4 pa2 w-70 center"/>
                    <button className="w-20 grow f4 link ph3 dib white bg-black b--white"> Detect </button>
                </div>
            </div>
        </div>
    )
}