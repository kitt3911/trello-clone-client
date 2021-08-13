import react, { FC } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 2rem;
    min-width: 25rem;
    border-radius: 1rem;
    background-color: white;
`
const Title = styled.h1`
    font-weight: 800;
    font-size: 2rem;
`

export interface ColumnProps {
    name: string;
}


export const Column:FC<ColumnProps> = (props: ColumnProps) => {
    return(
       <Wrapper>
           <Title>{props.name}</Title>
       </Wrapper>
    )
}