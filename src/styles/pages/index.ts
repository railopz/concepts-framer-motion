import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .first {
    background: green;
    overflow: hidden;

    .offset {
      height: 100%;
      width: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
        background: #7dbb91;
        width: 100%;
        height: 100%;
      }
      }
    }

    .b {
      display: flex;
      height: 100%;
      width: 100%;

      img {
        flex: 1;
      }

    }

    .c {
      background: #0a7397;
      height: 100%;
      width: 100%;
    }
  }

  .second {
    background: yellow;
  }

  .third {
    background: pink;
  }

  .fourth {
    background: orange;
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
