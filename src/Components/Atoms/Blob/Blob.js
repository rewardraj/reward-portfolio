import React from 'react';
import styled from 'styled-components';

const BlobShape = styled.div`
  position: relative;
  overflow: hidden;
`;

const BlobImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  clip-path: url(#blob-clip-path);
`;

const BlobSVG = styled.svg`
  display: none;
`;

const Blob = ({ src, alt }) => (
  <BlobShape>
    <BlobImage src={src} alt={alt} />

    <BlobSVG xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <defs>
        <clipPath id="blob-clip-path">
          <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M80.3,69.4c-6.8,6.8-15.5,10.5-25.1,10.5c-9.5,0-18.2-3.7-25-10.5
            c-6.8-6.8-10.5-15.5-10.5-25.1c0-9.5,3.7-18.2,10.5-25c6.8-6.8,15.5-10.5,25.1-10.5c9.5,0,18.2,3.7,25,10.5
            c6.8,6.8,10.5,15.5,10.5,25.1C90.8,53.9,87.1,62.6,80.3,69.4z"/>
        </clipPath>
      </defs>
    </BlobSVG>
  </BlobShape>
);

export default Blob;
