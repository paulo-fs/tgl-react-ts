import styled from 'styled-components';

export const CartContainer = styled.aside`
flex: 1;
min-width: 19rem;
max-width: 25rem;
max-height: 40rem;
height: fit-content;

display: flex;
flex-direction: column;
justify-content: space-between;

position: sticky;
top: 6.5rem;

background-color: ${props => props.theme.white};
border: 2px solid ${props => props.theme.gray200};
border-radius: 10px;
`;

export const CartContent = styled.div`
padding: 2rem 1.4rem;
overflow-y: auto;

h2{
  font-size: 1.5rem;
  text-transform: uppercase;
}

.cartContent{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
`;

// export const DeleteBtn = styled.div`
// border: none;
// cursor: pointer;

// &:hover{
//   opacity: .7;
// }
// `;

// export const CartItem = styled.div`
// display: flex;
// align-items: center;
// gap: .7rem;

// .cartInfos{
//   display: flex;
//   flex-direction: column;
//   gap: .5rem;

//   padding: .5rem;
//   border-radius: 5px;
//   border-left: 4px solid ${props => props.theme.green2};

//   p{
//     font-size: 0.9rem;
//     font-weight: bold;
//     color: ${props => props.theme.gray500};
//   }

//   h4{
//     font-size: 1rem;
//     color: ${props => props.theme.green2};

//     span{
//       font-style: normal;
//       font-weight: lighter;
//       margin-left: .5rem;
//     }
//   }
// }
// `;

export const CartFooter = styled.div`
p{
  padding: 2.5rem 1.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;

  span{
    font-style: normal;
    font-weight: lighter;
  }
}

div{
  width: 100%;
  padding: 1.5rem;
  border-top: 2px solid ${props => props.theme.gray200};
  background-color: ${props => props.theme.gray100};

  display: grid;
  place-content: center;

  button{
    font-size: 2rem;
    color: ${props => props.theme.green2};
    font-weight: bold;
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    transition: .2s;
    &:hover{
      opacity: .5;
    }
  }
}
`;
