import styled from 'styled-components';


const ThemeToggle = styled.div`
    cursor: pointer;
    width: fit-content;

    .${p => p.theme}ToggleIcon {
        display: none;
    }
`

export { ThemeToggle }