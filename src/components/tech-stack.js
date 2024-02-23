import React from 'react'
import styled from 'styled-components'
import {
  FaReact,
  FaJs,
  FaCss3,
  FaHtml5,
  FaGit,
  FaDatabase,
  FaNodeJs,
  FaPython
} from 'react-icons/fa'
import { TbBrandVscode } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
`

const IconWrapper = styled.div`
  margin-right: 10px;
  position: relative;
`

const Tooltip = styled.span`
  position: absolute;
  transform: translateX(-50%);
  margin: 30px;
  text-align: center;
  padding: 5px 3px;
  width: 90px;
  background-color: rgba(137, 43, 226, 0.5);
  color: white;
  font-size: 14px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease-in-out;
  &:after {
    content: attr(title);
  }
`

const ReactIcon = styled(FaReact)`
  color: #61dafb;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const JavaScriptIcon = styled(FaJs)`
  color: #f7df1e;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const TypeScriptIcon = styled(SiTypescript)`
  color: #3178c6;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const Css3Icon = styled(FaCss3)`
  color: #1572b6;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const Html5Icon = styled(FaHtml5)`
  color: #e34f26;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const VscodeIcon = styled(TbBrandVscode)`
  color: #007acc;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const GitIcon = styled(FaGit)`
  color: #f05032;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const DatabaseIcon = styled(FaDatabase)`
  color: #4479a1;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const NodeJsIcon = styled(FaNodeJs)`
  color: #68a063;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const PythonIcon = styled(FaPython)`
  color: #3776ab;
  font-size: 32px;
  &:hover + ${Tooltip} {
    opacity: 1;
  }
`

const TechStack = () => {
  return (
    <IconsContainer className='tech-icons'>
      <IconWrapper>
        <ReactIcon />
        <Tooltip>React</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <JavaScriptIcon />
        <Tooltip>JavaScript</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <TypeScriptIcon />
        <Tooltip>TypeScript</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <Css3Icon />
        <Tooltip>CSS3</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <Html5Icon />
        <Tooltip>HTML5</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <VscodeIcon />
        <Tooltip>VSCode</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <GitIcon />
        <Tooltip>Git</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <DatabaseIcon />
        <Tooltip>MySQL</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <NodeJsIcon />
        <Tooltip>Node.js</Tooltip>
      </IconWrapper>
      <IconWrapper>
        <PythonIcon />
        <Tooltip>Python</Tooltip>
      </IconWrapper>
    </IconsContainer>
  )
}

export default TechStack
