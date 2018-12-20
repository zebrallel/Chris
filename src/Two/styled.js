import styled from 'styled-components'

export const BackgroundImg = styled.img`
    display: block;
    width: 100%;
`

export const Container = styled.div`
    position: relative;
`

export const ContentBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`

export const Blank = styled.div`
    flex: 1;
`

export const Content = styled.div`
    flex: 2;
`

export const Title = styled.div`
    text-align: center;
    margin: 60px auto 0;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    color: #fff;
`

export const CardsBox = styled.div`
    display: flex;
    margin: 24px auto 40px;
    justify-content: space-evenly;
`

export const Card = styled.img`
    width: calc(33.333% - 20px);
    border: ${props => props.yes ? '#ffc71e solid 5px' : 'none'};
    border-radius: 5px;
`

export const Button = styled.div`
    width: 80%;
    height: 58px;
    line-height: 48px;
    margin: 0 auto;
    background: url(${props => props.buttonImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    font-size: 23px;
    color: ${props => props.yes ? '#e8441b' :'#9e9a99'};
`
export const TipBox = styled.div`
    width: 80%;
    background: #e44142;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 6px;
    margin: 20px auto;
`

export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
`

export const Antler = styled.img`
    height: 15px;
`

export const Text = styled.div`
    color: #ffc71e;
    font-size: 15px;
    padding: 3px 6px;
    letter-spacing: 2px;
`

export const Tips = styled.div`
    color: #fff;
    font-size: 13px;
    padding: 4px 6px;
    line-height: 1.4;
`