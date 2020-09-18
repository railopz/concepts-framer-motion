import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  width: 100%;
  height: 80px;
  background: red;

  position: fixed;
  top: 0;
  z-index: 99999;
`;
