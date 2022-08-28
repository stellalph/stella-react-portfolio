import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


export default function IconLink(props) {

    const Icon = props.icon


  return (
    
    <a href={props.href}>
        {props.fontAwesome && (
            <FontAwesomeIcon icon={Icon}></FontAwesomeIcon>
        )}

        {!props.fontAwesome && <Icon style={{width: '50px'}}/>}
    </a>
    
  )
}
