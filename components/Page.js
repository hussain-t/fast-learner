import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  purple: '#700c9a',
  black: '#393939',
  gray: '#3A3A3A',
  lightGray: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
};

const StyledContainer = styled.div`
  background: #3A3A3A;
  color: ${props => props.theme.black};
`;

const InnerContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2em;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <InnerContainer>
            {this.props.children}
          </InnerContainer>
        </StyledContainer>
      </ThemeProvider>
    )
  }
}

export default Page;
