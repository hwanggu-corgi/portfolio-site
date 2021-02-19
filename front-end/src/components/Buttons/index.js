import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


export function PrintButton(props) {
  const Button = styled.button`


  `;
  return (
    <Button onClick={props.onClick}>
        <FontAwesomeIcon icon={faFilePdf} />
    </Button>
  );
}
