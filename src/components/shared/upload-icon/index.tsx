import React from 'react'
import styled from 'styled-components'

import { Colors } from '../../../lib/style-guide'
import { classNames } from '../../../lib/classnames'
import { randomClassName } from '../../../lib/rcn'

const rcn = randomClassName()

const UploadIcon: FC = ({ className }) => (
  <svg 
  width="32" 
  height="48" 
  viewBox="0 0 32 48" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
    className={className}
    >
    <path fillRule="evenodd" clipRule="evenodd" d="M28.072 1.87489C29.3858 1.3494 30.8148 2.31692 30.8148 3.73184V46.7037H1.18518V13.9837C1.18518 13.1659 1.68308 12.4305 2.4424 12.1267L28.072 1.87489Z" stroke="#D1E3F8" />
    <rect x="7.11108" y="17.0745" width="7.40741" height="8.88889" fill="#D1E3F8" />
    <rect x="17.4814" y="17.0745" width="7.40741" height="2.96296" fill="#D1E3F8" />
    <rect x="17.4814" y="11.1486" width="7.40741" height="2.96296" fill="#D1E3F8" />
    <path d="M7.11108 29.9264C7.11108 29.3741 7.5588 28.9264 8.11108 28.9264H23.8889C24.4411 28.9264 24.8889 29.3741 24.8889 29.9264V46.7041H7.11108V29.9264Z" fill="#D1E3F8" />
    <rect x="17.4814" y="23.0004" width="7.40741" height="2.96296" fill="#D1E3F8" />
  </svg>
)

const StyledUploadIcon = styled(UploadIcon)`
  align-self: center;
  margin: 0 auto;
`

export { StyledUploadIcon as UploadIcon}
