import Fact from './Fact'
import React from 'react'
import { generateContainerStyle } from './styles'

const Facts = (props) => {
    let factInfo = [
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Hemingway_House_Key_West_FL1.jpg",
            factType: 'Historical fact',
            content: 'Author Hemingway lived in Key West, and there is an annual Hemingway look-alike contest in his honor',
            color: '#0e0880d5',
            href: 'https://en.wikipedia.org/wiki/Ernest_Hemingway_House',
            imgDir: 'left'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Southernmost_Point_an_der_S%C3%BCdk%C3%BCste_von_Key_West.jpg',
            factType: 'Geographical fact',
            content: 'This is the southernmost point of Key West',
            color: '#0e0660d5',
            href: 'https://en.wikipedia.org/wiki/Southernmost_point_buoy',
            imgDir: 'right'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Southernmosthouse.jpg',
            factType: 'Geographical fact',
            content: 'The Southernmost House is a historic mansion in the U.S. city of Key West',
            color: '#0e0550d5',
            href: 'https://en.wikipedia.org/wiki/Southernmost_House',
            imgDir: 'left'
        }
    ]
    let facts = factInfo.map((fact, index) => 
    <Fact 
      url={factInfo[index].url}
      factType={factInfo[index].factType}
      content={factInfo[index].content}
      color={factInfo[index].color}
      href={factInfo[index].href} 
      imgDir={factInfo[index].imgDir}
      /> 
    )
    return (
        <div>
           {facts}
        </div>
    )
}

export default Facts