import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  /* max-width: 1920px;
  max-height: 1960px; */

  #side-menu {
    width: clamp(15rem, 14.5833vw, 17.5rem);
    min-width: 17.5rem;
    min-height: 100vh;
  }
  #main-area {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    /* margin: 1.875rem 2.3125rem 0 2.25rem; */
    margin: 1.25rem 2.3125rem 0 1.625rem;
    min-width: 58rem;
  }
  #header {
    width: 100%;
    padding: 1.875rem 2.25rem, 0 2.3125rem;
    display: flex;
    flex-direction: column;
    gap: 1.5625rem;
    margin-bottom: 1.375rem;
  }
  #content-area {
    position: relative;
    display: flex;
    margin-bottom: 12.0625rem;
  }
  #filter-menu {
    margin-right: 1.8125rem;
    /* width: clamp(19rem, 19.3229vw, 23.1875rem); */
    min-width: 23.1875rem;
    height: 100%;
  }
  #content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 73.125rem;
  }
  #cards-container {
    display: flex;
    flex-direction: column;
    gap: 1.6875rem;
  }
`;
