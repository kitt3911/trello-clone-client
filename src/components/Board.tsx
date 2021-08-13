import React, { FC } from 'react';
import styled from 'styled-components';
import { Column, ColumnProps } from './Column';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #9cb0c5;
    display: flex;
    flex-direction: row;

`


const columns: ColumnProps[] = [
    {
        name: 'To do',
    },
    {
        name: 'Develop'
    },
    {
        name: 'Done'
    }
] 

export const Board:FC = () => {
    return(
        <Wrapper>
            {columns.map(item => <Column name={item.name}></Column>)}
        </Wrapper>
    )
}