import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  /* margin-top: 55px; */
  display: flex;
  flex-direction: column;
`

export const Cover = styled.div`
  background: linear-gradient(125deg, #9a1776 34%, #ff4123 100%) !important;
  width: 100%;
  height: 40%;
  max-height: 500px;
  // position: absolute;
  display: flex;
  flex-direction: column;
  line-height: 60px;
  align-items: center;
  justify-content: center;
  color: white;
`
export const SecondContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  line-height: 60px;
  align-items: center;
  justify-content: center;
`
export const ProjectsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  line-height: 70px;
  align-items: center;
  justify-content: center;
`
export const Project = styled.button`
  width: 150px;
  height: 150px;
  background: #2a2a2a;
  color: white;
  display: flex;
  margin: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
`
