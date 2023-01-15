import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  margin: 0;
  outline: none;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #333340;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 25px;
  color: #333340;
  border: 1px solid #333340;
  border-radius: 5px;
`;
