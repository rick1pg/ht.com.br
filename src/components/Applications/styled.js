import styled from 'styled-components';
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin: 0 0 0 10px;

`

export const InfoWrapper = styled.div`
  
  margin-top: 32px;

  h2 {
    font-style: italic;
    font-weight: 900;
    font-size: 24px;
    line-height: 42px;

    color: var(--texts);

    ${media.lessThan("large")`
    font-size: 18px;
  `}

  ${media.lessThan("small")`
    margin-top: 42px;
    font-size: 14px;
    line-height: 31px;
  `}
  }

  h3 {
    font-weight: normal;
    font-size: 24px;
    line-height: 42px;
    
    color: var(--texts);

    ${media.lessThan("large")`
    font-size: 18px;
  `}

  ${media.lessThan("small")`
    font-size: 14px;
    line-height: 31px;
  `}
  }

  h4 {
    font-style: italic;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;

    color: var(--texts);

    width: 680px;

    ${media.lessThan("large")`
    font-size: 24px;
  `}

  ${media.lessThan("small")`
    font-size: 16px;
    width: 330px;
    line-height: 31px;
  `}
  }

  button {
    width: 207px;
    height: 34px;
    text-transform: uppercase; 
    text-decoration: none; 
    border: none;
    outline: none;
    box-shadow: 0 0 30px #FEB066; 
    background: linear-gradient(180deg, #FEC467 0%, #FEB066 100%);
    border-radius: 10px;
    cursor: pointer;

    margin: 20px 0 20px 30px;

    color: var(--texts);
    font-style: italic;
    font-weight: 900;
    font-size: 11px;
    text-shadow: 1px 1px 9px rgba(0, 0, 0, 0.4);

    transition: all .3s;
    
    :hover {
      color: var(---black); 
      background: linear-gradient(180deg, #FEC450 0%, #FEB050 100%); 
    }

    ${media.lessThan("small")`
    margin: 20px 0 80px 0;
  `}
  }

  li {
    width: 740px;
    height: auto;
    background: linear-gradient(90deg, rgba(175, 174, 172, 0.18) 0%, rgba(175, 172, 172, 0) 100%);
    margin-bottom: 5px;

    ${media.lessThan("large")`
    width: 470px;
  `}

  ${media.lessThan("small")`
    width: 295px;
  `}
  }

  h5 {
    font-style: italic;
    font-weight: 900;
    font-size: 11px;
    line-height: 22px;
    margin-left: 10px;
    color: var(--texts);
    letter-spacing: 1px;
  }
`
export const IconWrapper = styled.div`
  min-width: 200px;
  height: 200px;
  transform: translate(-90px, 150px);

  ${media.lessThan("large")`
  transform: translate(-260px, 150px);
  min-width: 140px;
  height: 140px;
  `}

  ${media.lessThan("small")`
  transform: translate(-100px, 150px);
  min-width: 120px;
  height: 120px;
  `}
`

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  position: fixed;
  right: 60px;
  top: 30vh;

  ${media.lessThan("small")`
      flex-direction: row;
      right: 60px;
      top: 18vh;
  `}

  button {
    background: transparent;
    outline: none;
    border: none;
    font-style: italic;
    font-weight: 900;
    font-size: 48px;
    line-height: 42px;
    margin-bottom: 30px;
    cursor: pointer;

    ${media.lessThan("large")`
    font-size: 36px;
    line-height: 21px;

    ${media.lessThan("small")`
    font-size: 24px;
    line-height: 11px;
  `}
`}

    :hover {
      transform: translate(-3px); 
    }
  }

  h6 {
    color: var(--texts);
  }

`
