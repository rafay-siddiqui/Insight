import styled from "styled-components";


export const HeaderContainer =styled.div`
background: #0c0c0c;
display: flex;
justify-content: Left;
align-items: Left;
padding: 0 60px;
height: 600px;
position: relative;
z-index: 1;
 `

export const HeaderBg= styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width:100%;
height:100%
overflow: hidden;
`

export const VideoBg = styled.video`
width:100%;
height:100%;
--o--object--fit: cover;
object-fit: Cover;
background: #232a34;
`

export const HeaderContent=styled.div`
z-index: 1;
max-width: 500px;
position: relative;
margin-left:60px;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeaderContentRight=styled.div`
z-index: 1;
max-width: 500px;
padding: 8px 24px;
margin-left: 200px;
flex-direction: row;
position: relative;
align-items: center;
display: flex;
`
export const HeaderH1 = styled.h1`
color: #f6c458;
Font-size: 40px;
text-align: center;
@media screen and(max-width:768px){
    font-size: 40px;
}

@media screen and(max-width:480px){
    font-size: 32px;
}
`
export const HeaderH2 = styled.h2`
color: #fff;
Font-size: 40px;
text-align: center;
@media screen and(max-width:768px){
    font-size: 40px;
}

@media screen and(max-width:480px){
    font-size: 32px;
}
`
export const HeaderP =styled.p`
margin-top: 24px;
color:#fff;
font-size:24px;
text-align: center;
max-width:600px;

&:hover{
    transition: all 0.2s ease-in-out;
  
    color: #f6c458;

@media screen and(max-width:768px){
    font-size: 24px;
}

@media screen and(max-width:480px){
    font-size: 18px;
}
`

export const HeaderBtnWrapper = styled.div`
margin-top:32px;
display: flex;
flex-direction: column;
align-items: center;
`
