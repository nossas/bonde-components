import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import Spinner from '../await/Spinner';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
`;

type Props = {
  siteUrl: string;
  secretKey: string;
  config?: {
    resource?: {
      question?: number;
    };
    params: Record<string, number | string>;
  };
  border: boolean;
  title: boolean;
};

const Question = ({ siteUrl, secretKey, config, border, title }: Props) => {
  const [isLoading, setLoader] = useState(true);

  const payload = {
    ...config,
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };

  const token = jwt.sign(payload, secretKey);

  const iframeUrl =
    siteUrl +
    '/embed/question/' +
    token +
    `#bordered=${border}&titled=${title}`;

  return (
    <>
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      <iframe
        onLoad={() => setLoader(false)}
        src={iframeUrl}
        title="Metabase"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </>
  );
};

Question.defaultProps = {
  siteUrl: process.env.REACT_APP_METABASE_SITE_URL || '',
  secretKey: process.env.REACT_APP_METABASE_SECRET_KEY || '',
  border: false,
  title: false,
};

export default Question;
