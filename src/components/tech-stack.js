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
  FaPython,
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
`

const ReactIcon = styled(FaReact)`
  color: #61dafb;
  font-size: 32px;
`

const JavaScriptIcon = styled(FaJs)`
  color: #f7df1e;
  font-size: 32px;
`

const TypeScriptIcon = styled(SiTypescript)`
  color: #3178c6;
  font-size: 32px;
`

const Css3Icon = styled(FaCss3)`
  color: #1572b6;
  font-size: 32px;
`

const Html5Icon = styled(FaHtml5)`
  color: #e34f26;
  font-size: 32px;
`

const VscodeIcon = styled(TbBrandVscode)`
  color: #007acc;
  font-size: 32px;
`

const GitIcon = styled(FaGit)`
  color: #f05032;
  font-size: 32px;
`


const DatabaseIcon = styled(FaDatabase)`
  color: #4479a1;
  font-size: 32px;
`

const NodeJsIcon = styled(FaNodeJs)`
  color: #68a063;
  font-size: 32px;
`

const PythonIcon = styled(FaPython)`
  color: #3776ab;
  font-size: 32px;
`



const IconComponent = () => {
  return (
    <IconsContainer>
      <IconWrapper>
        <ReactIcon title='React' />
      </IconWrapper>
      <IconWrapper>
        <JavaScriptIcon title='JavaScript' />
      </IconWrapper>
      <IconWrapper>
        <TypeScriptIcon title='TypeScript' />
      </IconWrapper>
      <IconWrapper>
        <Css3Icon title='CSS3' />
      </IconWrapper>
      <IconWrapper>
        <Html5Icon title='HTML5' />
      </IconWrapper>
      <IconWrapper>
        <VscodeIcon title='VSCode' />
      </IconWrapper>
      <IconWrapper>
        <GitIcon title='Git' />
      </IconWrapper>

      <IconWrapper>
        <DatabaseIcon title='MySQL' />
      </IconWrapper>
      <IconWrapper>
        <NodeJsIcon title='Node.js' />
      </IconWrapper>
      <IconWrapper>
        <PythonIcon title='Python' />
      </IconWrapper>
    </IconsContainer>
  )
}

export default IconComponent
